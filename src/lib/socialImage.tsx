import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function createSocialImage() {
  const profileImage = await readFile(
    join(
      process.cwd(),
      "public",
      "images",
      "carlos-daniel-profile.jpg"
    ),
    "base64"
  );

  const profileImageSrc =
    `data:image/jpeg;base64,${profileImage}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "58px 68px",
          background:
            "linear-gradient(135deg, #061014 0%, #0b1b22 55%, #0d222a 100%)",
          color: "#edfdf8",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            left: "-190px",
            top: "-250px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(39,242,154,0.25), rgba(39,242,154,0))",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "560px",
            height: "560px",
            right: "-220px",
            bottom: "-300px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(70,217,255,0.22), rgba(70,217,255,0))",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "28px",
            display: "flex",
            border: "2px solid rgba(125,255,201,0.16)",
            borderRadius: "34px",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "690px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "5px",
              color: "#27f29a",
              textTransform: "uppercase",
            }}
          >
            Carlos Daniel
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "24px",
              fontSize: "68px",
              lineHeight: 1.02,
              letterSpacing: "-3px",
              fontWeight: 900,
            }}
          >
            <span>Software que entende</span>
            <span>a indústria.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "28px",
              maxWidth: "650px",
              fontSize: "25px",
              lineHeight: 1.45,
              color: "#a7c5bf",
            }}
          >
            Sistemas inteligentes, IA aplicada, visão computacional e automação
            para resolver problemas reais.
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "34px",
            }}
          >
            {[
              "FULL STACK",
              "IA APLICADA",
              "AUTOMAÇÃO",
              "VISÃO COMPUTACIONAL",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  marginRight: "10px",
                  marginBottom: "10px",
                  padding: "10px 16px",
                  border:
                    "1px solid rgba(125,255,201,0.22)",
                  borderRadius: "999px",
                  background:
                    "rgba(13,34,42,0.88)",
                  color: "#edfdf8",
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "26px",
              fontSize: "21px",
              fontWeight: 700,
              color: "#27f29a",
            }}
          >
            carlosdaniel.dev.br
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "330px",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            border:
              "2px solid rgba(125,255,201,0.28)",
            borderRadius: "34px",
            background: "#0d222a",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          <img
            src={profileImageSrc}
            alt=""
            width="330"
            height="500"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 32%",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(to top, rgba(6,16,20,0.42), transparent 48%)",
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}