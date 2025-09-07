import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const fontData = await fetch(new URL("../public/fonts/mooxy.ttf", import.meta.url)).then((r) => r.arrayBuffer()).catch(() => undefined);
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0b1523 0%, #0f213d 100%)",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, opacity: 0.9 }}>Agency</div>
        <div style={{ fontSize: 28, opacity: 0.8, marginTop: 10 }}>
          Specialist Software Engineering
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "Mooxy",
              data: fontData,
              style: "normal",
              weight: 400,
            },
          ]
        : [],
    },
  );
}

