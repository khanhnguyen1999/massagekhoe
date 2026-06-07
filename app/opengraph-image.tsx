import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #FCFAF7 0%, #F7F1E8 45%, #E7D4B2 100%)",
          color: "#1F1A17",
          padding: "56px",
          fontFamily: "serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(59, 42, 32, 0.12)",
            borderRadius: "32px",
            padding: "48px",
            background: "rgba(255,255,255,0.55)"
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#8A6C43"
            }}
          >
            Luxury Wellness Retreat
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ fontSize: 74, lineHeight: 1.05, fontWeight: 700 }}>
              Massage Khoẻ Việt
            </div>
            <div style={{ fontSize: 32, lineHeight: 1.4, maxWidth: 840 }}>
              Authentic Vietnamese massage, sauna, and herbal therapies in Ho Chi
              Minh City.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 26
            }}
          >
            <span>Bình Thạnh • Phú Nhuận</span>
            <span>massagekhoeviet.vn</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
