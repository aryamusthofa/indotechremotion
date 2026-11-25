import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { activeLineAt } from "../timing";
import { COLORS, FONT_DISPLAY } from "../theme";

/**
 * Subtitle / teks layar besar. Memakai activeLineAt() dari timing.ts sehingga
 * otomatis sinkron dengan patokan suara. Baris `emphasis` tampil lebih besar.
 */
export const Subtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const line = activeLineAt(frame);

  if (!line) return null;

  // Umur baris ini (frame sejak muncul) untuk animasi masuk
  const lineStart = Math.round(line.t * fps);
  const local = Math.max(0, frame - lineStart);

  const pop = spring({
    frame: local,
    fps,
    config: { damping: 12, stiffness: 200, mass: 0.6 },
  });

  const slide = interpolate(pop, [0, 1], [40, 0]);
  const opacity = interpolate(local, [0, 4], [0, 1], {
    extrapolateRight: "clamp",
  });

  const size = line.emphasis ? 78 : 60;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 260,
        paddingLeft: 48,
        paddingRight: 48,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          transform: `translateY(${slide}px) scale(${interpolate(pop, [0, 1], [0.9, 1])})`,
          opacity,
          fontFamily: FONT_DISPLAY,
          fontSize: size,
          lineHeight: 1.12,
          textAlign: "center",
          color: COLORS.text,
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "-0.5px",
          textShadow:
            "0 4px 0 rgba(0,0,0,0.85), 0 0 28px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,1)",
          // stroke tebal biar kebaca di atas visual apa pun (0% bahasa tetap paham)
          WebkitTextStroke: `2px ${line.emphasis ? COLORS.gold : "rgba(0,0,0,0.9)"}`,
          paintOrder: "stroke fill",
        }}
      >
        {line.text}
      </div>
    </AbsoluteFill>
  );
};
