import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { COLORS, FONT_DISPLAY } from "../theme";
import { GeoMap } from "../ui/GeoMap";

/**
 * HOOK (0–7s): "2050" besar muncul lalu pecah; peta Indonesia; teks
 * "SUPERPOWER?" dicoret merah jadi "ATAU MIMPI?". Tanpa suara pun sudah nendang.
 */
export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const yearPop = spring({ frame, fps, config: { damping: 11, stiffness: 160 } });
  const yearScale = interpolate(yearPop, [0, 1], [0.5, 1]);

  // "pecah" jadi dua mulai ~frame 60; angka 2050 bertahan lebih lama
  const splitStart = 60;
  const split = interpolate(frame, [splitStart, splitStart + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });
  const yearOpacity = interpolate(frame, [splitStart + 25, splitStart + 45], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const mapIn = interpolate(frame, [splitStart + 12, splitStart + 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const q1 = spring({ frame: Math.max(0, frame - 80), fps, config: { damping: 12 } });
  const q2 = spring({ frame: Math.max(0, frame - 125), fps, config: { damping: 12 } });

  const shake = frame > splitStart && frame < splitStart + 12 ? Math.sin(frame * 3) * 6 : 0;

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      {/* tahun 2050 */}
      <div
        style={{
          position: "absolute",
          transform: `scale(${yearScale}) translateX(${shake}px)`,
          opacity: yearOpacity,
          fontFamily: FONT_DISPLAY,
          fontSize: 300,
          fontWeight: 900,
          color: COLORS.text,
          letterSpacing: "-8px",
          textShadow: `0 0 60px ${COLORS.window}`,
        }}
      >
        2050
      </div>

      {/* peta satelit Indonesia — flyout zoom + sapuan barat→timur + label miring */}
      <div
        style={{
          position: "absolute",
          opacity: mapIn,
          transform: `scale(${interpolate(mapIn, [0, 1], [0.92, 1.12])}) translateY(-30px)`,
        }}
      >
        <GeoMap
          width={960}
          reveal={0.25 + 0.75 * mapIn}
          labelOpacity={interpolate(frame, [105, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
          equator
        />
      </div>

      {/* teks pertanyaan */}
      <div style={{ position: "absolute", bottom: 520, width: "100%", textAlign: "center" }}>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            transform: `scale(${interpolate(q1, [0, 1], [0.7, 1])})`,
            opacity: interpolate(q1, [0, 1], [0, 1]),
            fontFamily: FONT_DISPLAY,
            fontSize: 92,
            fontWeight: 900,
            color: COLORS.text,
            textTransform: "uppercase",
          }}
        >
          Superpower?
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: -10,
              height: 12,
              width: interpolate(frame, [100, 116], [0, 108], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }) + "%",
              background: COLORS.warning,
              borderRadius: 12,
              transform: "translateY(-50%) rotate(-4deg)",
              boxShadow: `0 0 20px ${COLORS.warning}`,
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 400,
          transform: `scale(${interpolate(q2, [0, 1], [0.7, 1])})`,
          opacity: interpolate(q2, [0, 1], [0, 1]),
          fontFamily: FONT_DISPLAY,
          fontSize: 80,
          fontWeight: 900,
          color: COLORS.gold,
          textTransform: "uppercase",
        }}
      >
        Atau cuma mimpi?
      </div>
    </AbsoluteFill>
  );
};
