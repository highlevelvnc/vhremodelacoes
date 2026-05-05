import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "VH Remodelações — Construção Civil e Remodelações em Sintra";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #041329 0%, #0a192f 55%, #8a0110 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          padding: 80,
        }}
      >
        {/* Top-left monogram */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 64,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #c81e2c 0%, #8a0110 60%, #5a0008 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 18px 40px rgba(138,1,16,0.45)",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 46,
                fontWeight: 900,
                letterSpacing: -1,
              }}
            >
              VH
            </span>
          </div>
        </div>

        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -160,
            width: 540,
            height: 540,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,158,148,0.18) 0%, rgba(255,158,148,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -160,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(60,120,255,0.18) 0%, rgba(60,120,255,0) 70%)",
            display: "flex",
          }}
        />

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontSize: 18,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#ff9e94",
              marginBottom: 24,
              fontWeight: 700,
            }}
          >
            Excelência em Construção desde 1995
          </span>
          <h1
            style={{
              fontSize: 110,
              fontWeight: 900,
              color: "#ffffff",
              margin: 0,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            VH Remodelações
          </h1>
          <p
            style={{
              fontSize: 40,
              color: "#dde3ee",
              marginTop: 32,
              marginBottom: 0,
              fontWeight: 500,
              maxWidth: 1000,
              lineHeight: 1.25,
            }}
          >
            Construção Civil & Remodelações em Portugal
          </p>
        </div>

        {/* Bottom-right URL */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 64,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#ffffff",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#22c55e",
              display: "flex",
              boxShadow: "0 0 16px rgba(34,197,94,0.7)",
            }}
          />
          vhremodelacoes.pt
        </div>

        {/* Bottom-left tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 64,
            display: "flex",
            color: "rgba(255,255,255,0.55)",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Sintra · Lisboa · Cascais
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
