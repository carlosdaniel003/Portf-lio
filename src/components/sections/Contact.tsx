"use client";

import TurnstileWidget from "@/components/ui/TurnstileWidget";
import TiltCard from "@/components/ui/TiltCard";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  type FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";

const whatsappUrl =
  "https://wa.me/5592982890208?text=Ol%C3%A1%2C%20Carlos%20Daniel.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%2C%20projeto%20ou%20oportunidade%20t%C3%A9cnica.";

const inputClassName =
  "w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3.5 text-sm font-semibold text-[color:var(--text)] outline-none transition placeholder:text-[color:var(--muted)]/65 focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_10%,transparent)]";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken("");
    setSubmitStatus("error");
    setStatusMessage(
      "Não foi possível concluir a verificação de segurança."
    );
  }, []);

  function focusContactForm() {
    formContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    window.setTimeout(() => {
      nameInputRef.current?.focus();
    }, 450);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const privacyAccepted = formData.get("privacy") === "on";

    if (!turnstileToken) {
      setSubmitStatus("error");
      setStatusMessage("Conclua a verificação de segurança.");
      return;
    }

    if (!privacyAccepted) {
      setSubmitStatus("error");
      setStatusMessage(
        "Confirme que está ciente da Política de Privacidade."
      );
      return;
    }

    setSubmitStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          service: formData.get("service"),
          message: formData.get("message"),
          website: formData.get("website"),
          turnstileToken,
          privacyAccepted,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | {
            success?: boolean;
            message?: string;
          }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message || "Não foi possível enviar a mensagem."
        );
      }

      form.reset();
      setSubmitStatus("success");
      setStatusMessage(
        "Mensagem enviada com sucesso. Responderei pelo e-mail informado."
      );
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar a mensagem."
      );
    } finally {
      setTurnstileToken("");
      setTurnstileResetKey((current) => current + 1);
    }
  }

  return (
    <section id="contato" className="relative py-24">
      <div className="portfolio-container">
        <div className="glass-card overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  Próximos passos
                </p>

                <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-[color:var(--text)] sm:text-6xl">
                  Vamos transformar seu problema em uma solução digital?
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                  Envie uma mensagem explicando o processo, dificuldade ou
                  ideia que deseja desenvolver. O primeiro passo é entender o
                  problema e avaliar a solução mais adequada.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <TiltCard
                    as="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    intensity="subtle"
                    className="rounded-full bg-[color:var(--accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#04110d] transition hover:shadow-[0_18px_50px_color-mix(in_srgb,var(--accent)_28%,transparent)]"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <MessageCircle size={18} />
                      Falar no WhatsApp
                    </span>
                  </TiltCard>

                  <TiltCard
                    as="button"
                    type="button"
                    onClick={focusContactForm}
                    ariaLabel="Ir para o formulário de contato"
                    intensity="subtle"
                    className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Mail size={18} />
                      Enviar mensagem
                    </span>
                  </TiltCard>
                </div>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-2">
                <TiltCard
                  as="div"
                  intensity="subtle"
                  className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    WhatsApp
                  </p>

                  <p className="mt-2 font-semibold text-[color:var(--text)]">
                    +55 92 98289-0208
                  </p>
                </TiltCard>

                <TiltCard
                  as="div"
                  intensity="subtle"
                  className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    E-mail
                  </p>

                  <p className="mt-2 break-all font-semibold text-[color:var(--text)]">
                    contato@carlosdaniel.dev.br
                  </p>
                </TiltCard>
              </div>
            </div>

            <div className="grid gap-4">
              <div
                ref={formContainerRef}
                className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 sm:p-8"
              >
                <div className="soft-grid pointer-events-none absolute inset-0 opacity-20" />

                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[color:var(--accent)]/12 blur-3xl" />

                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
                    Contato direto
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[color:var(--text)] sm:text-3xl">
                    Conte como seu processo funciona hoje.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                    Preencha os dados abaixo. A mensagem será enviada sem abrir
                    outro aplicativo ou janela.
                  </p>

                  <form
                    className="mt-7 grid gap-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">
                          Nome
                        </span>

                        <input
                          ref={nameInputRef}
                          type="text"
                          name="name"
                          autoComplete="name"
                          required
                          minLength={2}
                          maxLength={80}
                          placeholder="Seu nome"
                          className={inputClassName}
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-xs font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">
                          E-mail
                        </span>

                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          maxLength={160}
                          placeholder="voce@empresa.com"
                          className={inputClassName}
                        />
                      </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">
                          Empresa ou negócio
                        </span>

                        <input
                          type="text"
                          name="company"
                          autoComplete="organization"
                          maxLength={120}
                          placeholder="Opcional"
                          className={inputClassName}
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-xs font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">
                          Tipo de solução
                        </span>

                        <select
                          name="service"
                          required
                          defaultValue=""
                          className={inputClassName}
                        >
                          <option value="" disabled>
                            Selecione
                          </option>
                          <option value="Sistema de Gestão">
                            Sistema de Gestão
                          </option>
                          <option value="Dashboard e Controle">
                            Dashboard e Controle
                          </option>
                          <option value="Visão Computacional e AOI">
                            Visão Computacional e AOI
                          </option>
                          <option value="Landing Page">
                            Landing Page
                          </option>
                          <option value="Inteligência Artificial">
                            Inteligência Artificial
                          </option>
                          <option value="Outro">Outro</option>
                        </select>
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-xs font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">
                        Mensagem
                      </span>

                      <textarea
                        name="message"
                        required
                        minLength={20}
                        maxLength={3000}
                        rows={6}
                        placeholder="Explique brevemente o processo, problema ou ideia que deseja desenvolver."
                        className={`${inputClassName} min-h-40 resize-y`}
                      />
                    </label>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-[9999px] opacity-0"
                    >
                      <label>
                        Não preencha este campo
                        <input
                          type="text"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>
                    </div>

                    <div className="grid gap-2">
                      <span className="text-xs font-black uppercase tracking-[0.15em] text-[color:var(--muted)]">
                        Verificação de segurança
                      </span>

                      <TurnstileWidget
                        key={turnstileResetKey}
                        onVerify={handleTurnstileVerify}
                        onExpire={handleTurnstileExpire}
                        onError={handleTurnstileError}
                      />
                    </div>

                    <label className="flex items-start gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)] p-4 text-sm leading-6 text-[color:var(--muted)]">
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        className="mt-1 h-4 w-4 shrink-0 accent-[color:var(--accent)]"
                      />

                      <span>
                        Li e estou ciente da{" "}
                        <Link
                          href="/privacidade"
                          className="font-bold text-[color:var(--accent)] underline decoration-[color:var(--accent)]/45 underline-offset-4"
                        >
                          Política de Privacidade
                        </Link>
                        .
                      </span>
                    </label>

                    <p className="text-xs leading-5 text-[color:var(--muted)]">
                      Os dados informados serão utilizados somente para responder
                      ao contato, avaliar a solicitação apresentada e proteger o
                      formulário contra usos automatizados.
                    </p>

                    <button
                      type="submit"
                      disabled={
                        submitStatus === "sending" || !turnstileToken
                      }
                      className="mt-1 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[color:var(--accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#04110d] shadow-[0_18px_50px_color-mix(in_srgb,var(--accent)_18%,transparent)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitStatus === "sending" ? (
                        <>
                          <Loader2
                            size={18}
                            className="animate-spin"
                          />
                          Enviando
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Enviar mensagem
                        </>
                      )}
                    </button>

                    {statusMessage && (
                      <div
                        aria-live="polite"
                        className={
                          submitStatus === "success"
                            ? "flex items-start gap-3 rounded-2xl border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 p-4 text-sm leading-6 text-[color:var(--text)]"
                            : "flex items-start gap-3 rounded-2xl border border-red-400/35 bg-red-400/10 p-4 text-sm leading-6 text-[color:var(--text)]"
                        }
                      >
                        {submitStatus === "success" ? (
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[color:var(--accent)]"
                          />
                        ) : (
                          <AlertCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-red-400"
                          />
                        )}

                        <span>{statusMessage}</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <TiltCard
                  as="a"
                  href="https://www.linkedin.com/in/carlosdaniel003"
                  target="_blank"
                  rel="noreferrer"
                  intensity="subtle"
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4 transition hover:border-[color:var(--accent)]"
                >
                  <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                    <Linkedin size={19} />
                    LinkedIn
                  </span>
                </TiltCard>

                <TiltCard
                  as="a"
                  href="https://github.com/carlosdaniel003"
                  target="_blank"
                  rel="noreferrer"
                  intensity="subtle"
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4 transition hover:border-[color:var(--accent)]"
                >
                  <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                    <Github size={19} />
                    GitHub
                  </span>
                </TiltCard>

                <TiltCard
                  as="a"
                  href="https://www.instagram.com/carlos_daniel.003"
                  target="_blank"
                  rel="noreferrer"
                  intensity="subtle"
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4 transition hover:border-[color:var(--accent)]"
                >
                  <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                    <Instagram size={19} />
                    Instagram
                  </span>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
