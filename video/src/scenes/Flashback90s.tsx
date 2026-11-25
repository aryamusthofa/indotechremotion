import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";

/**
 * FLASHBACK 90-AN (7–15s): nuansa sepia. Modem/CRT/Nokia, loading bar super
 * lemot, plus joke "2090-an?" yang dicoret jadi "90-an".
 */
export const FlashbackScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scan = (frame * 6) % 100; // garis scanline CRT bergerak
  const loading = interpolate(frame, [20, 220], [0, 42], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  }); // sengaja lemot, nggak sampai penuh

  const flicker = 0.85 + Math.sin(frame * 1.7) * 0.06;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(circle at 50% 40%, #2a2118, ${COLORS.bg} 75%)`,
      }}
    >
      {/* label tahun: joke 2090-an dicoret -> 90-an */}
      <div style={{ position: "absolute", top: 300, textAlign: "center" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: 110, color: COLORS.sepia, fontWeight: 900 }}>
            2090-an
          </span>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: -8,
              height: 10,
              width: interpolate(frame, [25, 40], [0, 105], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }) + "%",
              background: COLORS.warning,
              transform: "translateY(-50%) rotate(-3deg)",
              borderRadius: 10,
            }}
          />
        </div>
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 130,
            color: COLORS.glow,
            fontWeight: 900,
            marginTop: 6,
            opacity: interpolate(frame, [45, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }}
        >
          90-AN
        </div>
      </div>

      {/* monitor CRT */}
      <div
        style={{
          width: 620,
          height: 440,
          borderRadius: 34,
          background: "#1b1712",
          border: `14px solid #3a3128`,
          boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
          position: "relative",
          overflow: "hidden",
          opacity: flicker,
        }}
      >
        <div style={{ position: "absolute", inset: 26, background: "#0d1a12", borderRadius: 16, padding: 28 }}>
          <div style={{ fontFamily: "monospace", fontSize: 30, color: "#7CFC9A", lineHeight: 1.5 }}>
            C:\&gt; CONNECTING...
            <br />
            <span style={{ opacity: 0.7 }}>Dialing 555-0199</span>
          </div>
          {/* loading bar lemot */}
          <div style={{ marginTop: 40, width: "100%", height: 34, background: "#123", borderRadius: 8, overflow: "hidden", border: "2px solid #2a4" }}>
            <div style={{ width: `${loading}%`, height: "100%", background: "linear-gradient(90deg,#22C55E,#7CFC9A)" }} />
          </div>
          <div style={{ marginTop: 14, fontFamily: "monospace", fontSize: 26, color: "#7CFC9A" }}>
            {loading.toFixed(0)}% — mohon tunggu (lemot)
          </div>
        </div>
        {/* scanline */}
        <div style={{ position: "absolute", left: 0, right: 0, top: `${scan}%`, height: 6, background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* deretan gadget jadul */}
      <div style={{ display: "flex", gap: 40, marginTop: 60, alignItems: "center" }}>
        <RetroPhone delay={60} />
        <div style={{ fontFamily: FONT_BODY, fontSize: 34, color: COLORS.sepia, maxWidth: 420, textAlign: "center" }}>
          Internet lemot, tapi rasanya kayak nemu harta karun.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const RetroPhone: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ opacity: o, width: 110, height: 210, borderRadius: 18, background: "#2b2b2b", border: "4px solid #444", position: "relative" }}>
      <div style={{ position: "absolute", top: 18, left: 18, right: 18, height: 70, background: "#7a8a6a", borderRadius: 6 }} />
      <div style={{ position: "absolute", bottom: 22, left: 22, right: 22, height: 80, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} style={{ background: "#555", borderRadius: 4 }} />
        ))}
      </div>
    </div>
  );
};
