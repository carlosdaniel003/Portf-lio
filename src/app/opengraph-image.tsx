import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Carlos Daniel | Software, IA e Automação Industrial";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function FaviconLogo({ size = 150 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 16C18.6 16 12 22.7 12 32C12 41.3 18.6 48 28 48C31.7 48 35 46.9 37.7 44.8"
        stroke="#27F29A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M34 16V48"
        stroke="#46D9FF"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M34 16H40C47.5 16 52 22 52 32C52 42 47.5 48 40 48H34"
        stroke="#46D9FF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CircuitPoint({
  left,
  top,
}: {
  left: number;
  top: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: 10,
        height: 10,
        borderRadius: 999,
        border: "2px solid rgba(39,242,154,0.26)",
        background: "#061014",
      }}
    />
  );
}

function CircuitLine({
  left,
  top,
  width,
  rotate = 0,
  opacity = 0.26,
}: {
  left: number;
  top: number;
  width: number;
  rotate?: number;
  opacity?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height: 2,
        opacity,
        transform: `rotate(${rotate}deg)`,
        background:
          "linear-gradient(90deg, transparent, rgba(39,242,154,0.55), transparent)",
      }}
    />
  );
}

function Tag({ children }: { children: string }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 15px",
        borderRadius: 999,
        border: "1px solid rgba(125,255,201,0.18)",
        background: "rgba(13,34,42,0.72)",
        color: "#edfdf8",
        fontSize: 13,
        fontWeight: 900,
        letterSpacing: "2px",
      }}
    >
      {children}
    </div>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          overflow: "hidden",
          background: "#061014",
          color: "#edfdf8",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Fundo escuro do portfólio */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 86% 88%, rgba(39,242,154,0.16), transparent 32%), radial-gradient(circle at 8% 8%, rgba(70,217,255,0.09), transparent 28%), #061014",
          }}
        />

        {/* Grid técnico discreto */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(125,255,201,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125,255,201,0.12) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
          }}
        />

        {/* Linhas de circuito */}
        <CircuitLine left={90} top={84} width={260} />
        <CircuitLine left={450} top={118} width={230} opacity={0.18} />
        <CircuitLine left={780} top={94} width={270} opacity={0.22} />
        <CircuitLine left={128} top={520} width={330} opacity={0.2} />
        <CircuitLine left={760} top={515} width={300} opacity={0.24} />
        <CircuitLine left={650} top={220} width={180} rotate={90} opacity={0.14} />
        <CircuitLine left={245} top={260} width={160} rotate={90} opacity={0.14} />

        <CircuitPoint left={80} top={92} />
        <CircuitPoint left={420} top={108} />
        <CircuitPoint left={610} top={498} />
        <CircuitPoint left={1010} top={96} />
        <CircuitPoint left={1080} top={500} />

        {/* Moldura externa */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            borderRadius: 34,
            border: "2px solid rgba(125,255,201,0.12)",
          }}
        />

        {/* Conteúdo principal */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "56px 70px",
          }}
        >
          {/* Coluna esquerda */}
          <div
            style={{
              width: 660,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Marca superior */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 44,
              }}
            >
              <div
                style={{
                  width: 74,
                  height: 74,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 22,
                  border: "1px solid rgba(125,255,201,0.22)",
                  background: "rgba(13,34,42,0.78)",
                  boxShadow:
                    "0 0 34px rgba(39,242,154,0.12)",
                }}
              >
                <FaviconLogo size={48} />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 900,
                    letterSpacing: "4px",
                    color: "#edfdf8",
                  }}
                >
                  CARLOS DANIEL
                </div>

                <div
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: 900,
                    letterSpacing: "4px",
                    color: "#8fb0aa",
                  }}
                >
                  SOFTWARE INDUSTRIAL & IA
                </div>
              </div>
            </div>

            {/* Badge */}
            <div
              style={{
                width: 430,
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "13px 22px",
                borderRadius: 999,
                border: "1px solid rgba(125,255,201,0.22)",
                background: "rgba(13,34,42,0.68)",
                marginBottom: 34,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: "#27f29a",
                  boxShadow: "0 0 18px #27f29a",
                }}
              />

              <div
                style={{
                  fontSize: 16,
                  fontWeight: 900,
                  letterSpacing: "4px",
                  color: "#a8c9c2",
                }}
              >
                SOFTWARE PARA PROBLEMAS REAIS
              </div>
            </div>

            {/* Título */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 66,
                lineHeight: 1.03,
                fontWeight: 900,
                letterSpacing: "-3px",
                color: "#edfdf8",
              }}
            >
              <span>Transformo</span>
              <span>problemas de fábrica</span>
              <span>em sistemas</span>
              <span style={{ color: "#27f29a" }}>
                inteligentes.
              </span>
            </div>

            {/* Descrição */}
            <div
              style={{
                marginTop: 30,
                maxWidth: 640,
                display: "flex",
                fontSize: 24,
                lineHeight: 1.45,
                color: "#9bbab4",
              }}
            >
              Desenvolvimento full stack com base técnica em eletrônica,
              IA aplicada, visão computacional, dashboards e automação
              para qualidade, produção e operação.
            </div>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                marginTop: 30,
                gap: 12,
              }}
            >
              <Tag>FULL STACK</Tag>
              <Tag>IA</Tag>
              <Tag>DASHBOARDS</Tag>
              <Tag>AUTOMAÇÃO</Tag>
            </div>
          </div>

          {/* Coluna direita simplificada */}
          <div
            style={{
              width: 380,
              height: 430,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: 34,
              border: "1px solid rgba(125,255,201,0.18)",
              background: "rgba(13,34,42,0.76)",
              boxShadow: "0 24px 90px rgba(0,0,0,0.35)",
              padding: 30,
              overflow: "hidden",
            }}
          >
            {/* Grid interno do card */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.14,
                backgroundImage:
                  "linear-gradient(rgba(125,255,201,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,255,201,0.18) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 900,
                  letterSpacing: "4px",
                  color: "#27f29a",
                }}
              >
                CD CORE
              </div>

              <div
                style={{
                  marginTop: 14,
                  fontSize: 34,
                  lineHeight: 1.16,
                  fontWeight: 900,
                  letterSpacing: "-1.5px",
                  color: "#edfdf8",
                }}
              >
                Software conectado ao processo.
              </div>
            </div>

            {/* Logo central */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 230,
                  height: 230,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 48,
                  border: "3px solid #27f29a",
                  background: "#061014",
                  boxShadow:
                    "0 0 45px rgba(39,242,154,0.24)",
                }}
              >
                <FaviconLogo size={142} />
              </div>
            </div>

            {/* Rodapé técnico */}
            <div
              style={{
                display: "flex",
                gap: 10,
                position: "relative",
              }}
            >
              {[
                ["INPUT", "Problema"],
                ["CORE", "Software"],
                ["OUTPUT", "Resultado"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "12px 10px",
                    borderRadius: 16,
                    border:
                      "1px solid rgba(125,255,201,0.15)",
                    background: "rgba(6,16,20,0.58)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 900,
                      letterSpacing: "1.8px",
                      color: "#27f29a",
                    }}
                  >
                    {label}
                  </span>

                  <span
                    style={{
                      marginTop: 6,
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#9bbab4",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}