// src\app\opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Carlos Daniel | Software, IA e Automação Industrial";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(39, 242, 154, 0.16), transparent 28%), radial-gradient(circle at top right, rgba(70, 217, 255, 0.14), transparent 28%), #061014",
          color: "#edfdf8",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Grid de fundo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(125,255,201,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(125,255,201,0.10) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            opacity: 0.45,
          }}
        />

        {/* Glow central */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 420,
            height: 420,
            transform: "translate(-50%, -50%)",
            borderRadius: 999,
            background: "rgba(39, 242, 154, 0.14)",
            filter: "blur(70px)",
          }}
        />

        {/* Conteúdo principal */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "56px 64px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Lado esquerdo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 640,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 18px",
                border: "1px solid rgba(125,255,201,0.18)",
                borderRadius: 999,
                background: "rgba(10, 25, 32, 0.70)",
                color: "#8fb0aa",
                fontSize: 18,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                width: "fit-content",
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#27f29a",
                  boxShadow: "0 0 18px #27f29a",
                }}
              />
              Software para operação real
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: "-0.05em",
              }}
            >
              <span>Transformo</span>
              <span>problemas reais em</span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #edfdf8 0%, #27f29a 55%, #46d9ff 100%)",
                  color: "transparent",
                }}
              >
                sistemas inteligentes.
              </span>
            </div>

            <div
              style={{
                marginTop: 28,
                fontSize: 28,
                lineHeight: 1.5,
                color: "#8fb0aa",
                maxWidth: 620,
              }}
            >
              Desenvolvimento de sistemas, dashboards, automações,
              inteligência artificial e visão computacional para indústria e operação.
            </div>
          </div>

          {/* Lado direito - marca CD */}
          <div
            style={{
              display: "flex",
              width: 340,
              height: 340,
              borderRadius: 42,
              position: "relative",
              background: "rgba(13, 34, 42, 0.92)",
              border: "1px solid rgba(125,255,201,0.16)",
              boxShadow: "0 24px 90px rgba(0, 0, 0, 0.35)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Moldura interna */}
            <div
              style={{
                position: "absolute",
                inset: 26,
                borderRadius: 30,
                border: "1px solid rgba(39,242,154,0.22)",
              }}
            />

            {/* Linhas de chip */}
            <div
              style={{
                position: "absolute",
                left: -18,
                top: 52,
                width: 18,
                height: 18,
                borderTop: "2px solid rgba(39,242,154,0.28)",
                borderBottom: "2px solid rgba(39,242,154,0.28)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: -18,
                top: 106,
                width: 18,
                height: 18,
                borderTop: "2px solid rgba(39,242,154,0.28)",
                borderBottom: "2px solid rgba(39,242,154,0.28)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: -18,
                top: 160,
                width: 18,
                height: 18,
                borderTop: "2px solid rgba(39,242,154,0.28)",
                borderBottom: "2px solid rgba(39,242,154,0.28)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: -18,
                top: 214,
                width: 18,
                height: 18,
                borderTop: "2px solid rgba(39,242,154,0.28)",
                borderBottom: "2px solid rgba(39,242,154,0.28)",
              }}
            />

            <div
              style={{
                position: "absolute",
                right: -18,
                top: 52,
                width: 18,
                height: 18,
                borderTop: "2px solid rgba(39,242,154,0.28)",
                borderBottom: "2px solid rgba(39,242,154,0.28)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -18,
                top: 106,
                width: 18,
                height: 18,
                borderTop: "2px solid rgba(39,242,154,0.28)",
                borderBottom: "2px solid rgba(39,242,154,0.28)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -18,
                top: 160,
                width: 18,
                height: 18,
                borderTop: "2px solid rgba(39,242,154,0.28)",
                borderBottom: "2px solid rgba(39,242,154,0.28)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -18,
                top: 214,
                width: 18,
                height: 18,
                borderTop: "2px solid rgba(39,242,154,0.28)",
                borderBottom: "2px solid rgba(39,242,154,0.28)",
              }}
            />

            {/* Glow interno */}
            <div
              style={{
                position: "absolute",
                width: 160,
                height: 160,
                borderRadius: 999,
                background: "rgba(39, 242, 154, 0.18)",
                filter: "blur(34px)",
              }}
            />

            {/* CD */}
            <div
              style={{
                display: "flex",
                width: 172,
                height: 172,
                borderRadius: 999,
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #27f29a",
                background: "#061014",
                color: "#27f29a",
                fontSize: 64,
                fontWeight: 900,
                letterSpacing: "0.14em",
                boxShadow: "0 0 32px rgba(39,242,154,0.28)",
              }}
            >
              CD
            </div>

            {/* Ponto decorativo */}
            <div
              style={{
                position: "absolute",
                right: 26,
                top: 26,
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#27f29a",
                boxShadow: "0 0 16px #27f29a",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}