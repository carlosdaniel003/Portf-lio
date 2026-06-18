import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_ENDPOINT =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const allowedServices = new Set([
  "Sistema de Gestão",
  "Dashboard e Controle",
  "Visão Computacional e AOI",
  "Landing Page",
  "Inteligência Artificial",
  "Outro",
]);

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  turnstileToken?: unknown;
  privacyAccepted?: unknown;
};

type TurnstileVerification = {
  success?: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientIp(request: Request) {
  const cloudflareIp = request.headers.get("cf-connecting-ip");

  if (cloudflareIp) {
    return cloudflareIp;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }

  return undefined;
}

async function verifyTurnstile(
  token: string,
  secret: string,
  remoteIp?: string
) {
  const response = await fetch(TURNSTILE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret,
      response: token,
      remoteip: remoteIp,
      idempotency_key: crypto.randomUUID(),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("A Cloudflare não respondeu à verificação.");
  }

  return (await response.json()) as TurnstileVerification;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY não foi configurada.");

    return NextResponse.json(
      {
        success: false,
        message: "O serviço de envio ainda não está configurado.",
      },
      { status: 500 }
    );
  }

  if (!turnstileSecret) {
    console.error("TURNSTILE_SECRET_KEY não foi configurada.");

    return NextResponse.json(
      {
        success: false,
        message: "A verificação de segurança ainda não está configurada.",
      },
      { status: 500 }
    );
  }

  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Os dados enviados são inválidos.",
      },
      { status: 400 }
    );
  }

  const name = singleLine(getString(body.name));
  const email = singleLine(getString(body.email)).toLowerCase();
  const company = singleLine(getString(body.company));
  const service = singleLine(getString(body.service));
  const message = getString(body.message);
  const website = getString(body.website);
  const turnstileToken = getString(body.turnstileToken);
  const privacyAccepted = body.privacyAccepted === true;

  // Campo invisível preenchido normalmente indica envio automatizado.
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!privacyAccepted) {
    return NextResponse.json(
      {
        success: false,
        message: "Confirme que está ciente da Política de Privacidade.",
      },
      { status: 400 }
    );
  }

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      {
        success: false,
        message: "Informe um nome válido.",
      },
      { status: 400 }
    );
  }

  if (!isValidEmail(email) || email.length > 160) {
    return NextResponse.json(
      {
        success: false,
        message: "Informe um e-mail válido.",
      },
      { status: 400 }
    );
  }

  if (company.length > 120) {
    return NextResponse.json(
      {
        success: false,
        message: "O nome da empresa é muito extenso.",
      },
      { status: 400 }
    );
  }

  if (!allowedServices.has(service)) {
    return NextResponse.json(
      {
        success: false,
        message: "Selecione um tipo de solução válido.",
      },
      { status: 400 }
    );
  }

  if (message.length < 20 || message.length > 3000) {
    return NextResponse.json(
      {
        success: false,
        message: "A mensagem deve possuir entre 20 e 3.000 caracteres.",
      },
      { status: 400 }
    );
  }

  if (!turnstileToken || turnstileToken.length > 2048) {
    return NextResponse.json(
      {
        success: false,
        message: "Conclua a verificação de segurança.",
      },
      { status: 400 }
    );
  }

  try {
    const verification = await verifyTurnstile(
      turnstileToken,
      turnstileSecret,
      getClientIp(request)
    );

    if (
      !verification.success ||
      (verification.action &&
        verification.action !== "portfolio_contact")
    ) {
      console.warn(
        "Turnstile rejeitou a solicitação:",
        verification["error-codes"] ?? []
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "A verificação de segurança expirou ou não foi aprovada. Tente novamente.",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Erro ao validar o Turnstile:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Não foi possível concluir a verificação de segurança. Tente novamente.",
      },
      { status: 502 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Não informado");
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const subject = `[Portfólio] ${service} — ${name}`;

  const text = [
    "Novo contato pelo portfólio",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Empresa: ${company || "Não informado"}`,
    `Solução: ${service}`,
    "",
    "Mensagem:",
    message,
  ].join("\n");

  const html = `
    <!doctype html>
    <html lang="pt-BR">
      <body style="margin:0;padding:0;background:#061014;font-family:Arial,sans-serif;color:#edfdf8;">
        <div style="padding:32px 16px;">
          <div style="max-width:680px;margin:0 auto;border:1px solid rgba(125,255,201,.22);border-radius:24px;overflow:hidden;background:#0b1b22;">
            <div style="padding:28px 30px;border-bottom:1px solid rgba(125,255,201,.16);background:#0d222a;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#27f29a;">
                Novo contato pelo portfólio
              </p>

              <h1 style="margin:0;font-size:26px;line-height:1.25;color:#edfdf8;">
                ${safeService}
              </h1>
            </div>

            <div style="padding:30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;color:#8fb0aa;width:120px;">Nome</td>
                  <td style="padding:10px 0;color:#edfdf8;font-weight:700;">${safeName}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#8fb0aa;">E-mail</td>
                  <td style="padding:10px 0;color:#edfdf8;font-weight:700;">${safeEmail}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#8fb0aa;">Empresa</td>
                  <td style="padding:10px 0;color:#edfdf8;font-weight:700;">${safeCompany}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#8fb0aa;">Solução</td>
                  <td style="padding:10px 0;color:#edfdf8;font-weight:700;">${safeService}</td>
                </tr>
              </table>

              <div style="margin-top:24px;padding:22px;border:1px solid rgba(125,255,201,.16);border-radius:18px;background:#061014;">
                <p style="margin:0 0 12px;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#27f29a;">
                  Mensagem
                </p>

                <p style="margin:0;font-size:15px;line-height:1.8;color:#edfdf8;">
                  ${safeMessage}
                </p>
              </div>

              <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#8fb0aa;">
                Responda este e-mail normalmente. O endereço de resposta foi configurado para ${safeEmail}.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: "Portfólio Carlos Daniel <formulario@mail.carlosdaniel.dev.br>",
        to: ["contato@carlosdaniel.dev.br"],
        reply_to: email,
        subject,
        html,
        text,
        tags: [
          {
            name: "source",
            value: "portfolio",
          },
        ],
      }),
    });

    const resendData = await resendResponse.json().catch(() => null);

    if (!resendResponse.ok) {
      console.error("Erro retornado pelo Resend:", resendData);

      return NextResponse.json(
        {
          success: false,
          message: "Não foi possível enviar a mensagem agora.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao conectar com o Resend:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Não foi possível conectar ao serviço de envio.",
      },
      { status: 500 }
    );
  }
}
