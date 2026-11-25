import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";
import { PopText, WindowClose } from "../ui/Primitives";

/**
 * CTA / EXIT (70–80s): jendela peluang perlahan menutup, punchline "MULAI DARI
 * LO.", ikon komentar berkedip di zona bawah (tidak nabrak subtitle), lalu
 * frame "2050" samar muncul di akhir (loop-able → mancing rewatch).
 *
 * Zona subtitle (±260–620px dari bawah) dikosongkan dari elemen scene.
 */
export const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const closeP = interpolate(frame, [10, 170], [0, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });

  const blink = Math.sin(frame * 0.35) > 0 ? 1 : 0.25;
  const komenIn = spring({ frame: Math.max(0, frame - 120), fps, config: { damping: 10 } });

  // loop hook: "2050" samar muncul di ~18 frame terakhir
  const loopBack = interpolate(frame, [durationInFrames - 18, durationInFrames - 2], [0, 0.45], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      {/* teks atas */}
      <div style={{ position: "absolute", top: 240, width: "100%", textAlign: "center" }}>
        <PopText fontSize={56} color={COLORS.text} delay={20}>
          Peluang udah kebuka.
        </PopText>
        <PopText fontSize={60} color={COLORS.gold} delay={50}>
          Tapi nggak selamanya.
        </PopText>
      </div>

      {/* jendela di tengah (naik + lebih pendek biar nggak nabrak punchline) */}
      <div style={{ position: "absolute", top: 470 }}>
        <WindowClose progress={closeP} width={470} height={540} />
      </div>

      {/* punchline — di ATAS zona subtitle, dengan jarak aman dari jendela */}
      <div style={{ position: "absolute", bottom: 700, width: "100%", textAlign: "center" }}>
        <PopText fontSize={66} color={COLORS.warning} delay={95}>
          Mulai dari LO.
        </PopText>
      </div>

      {/* ikon komentar berkedip — di BAWAH zona subtitle */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          opacity: blink * interpolate(komenIn, [0, 1], [0, 1]),
          transform: `scale(${interpolate(komenIn, [0, 1], [0.6, 1])})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <svg width={78} height={78} viewBox="0 0 90 90">
          <path
            d="M10 16 h70 a6 6 0 0 1 6 6 v38 a6 6 0 0 1 -6 6 h-40 l-18 16 v-16 h-12 a6 6 0 0 1 -6 -6 v-38 a6 6 0 0 1 6 -6 z"
            fill="none"
            stroke={COLORS.gold}
            strokeWidth="5"
          />
          <circle cx="32" cy="41" r="5" fill={COLORS.gold} />
          <circle cx="48" cy="41" r="5" fill={COLORS.gold} />
          <circle cx="64" cy="41" r="5" fill={COLORS.gold} />
        </svg>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 24, color: COLORS.gold, marginTop: 2 }}>
          KOMEN
        </div>
      </div>

      {/* loop-back samar ke 2050 */}
      <div
        style={{
          position: "absolute",
          fontFamily: FONT_DISPLAY,
          fontSize: 240,
          fontWeight: 900,
          color: COLORS.text,
          opacity: loopBack,
          letterSpacing: "-6px",
        }}
      >
        2050
      </div>
    </AbsoluteFill>
  );
};
