import { ImageResponse } from "next/og";

export const alt = "Centervert — The systems your business runs on.";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(at 20% 10%, rgba(192,255,0,0.25), transparent 50%), radial-gradient(at 80% 20%, rgba(36,84,255,0.22), transparent 50%), linear-gradient(180deg, #FFFFFF 0%, #F7F7F2 100%)",
          color: "#0F0F0F",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#013220",
          }}
        >
          Centervert
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              maxWidth: 980,
            }}
          >
            The systems your business runs on.
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: "rgba(15,15,15,0.55)",
              maxWidth: 900,
            }}
          >
            Planned, built, implemented, and supported by one partner.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(15,15,15,0.5)",
          }}
        >
          <div>centervert.com</div>
          <div>Greenville, SC</div>
        </div>
      </div>
    ),
    size
  );
}
