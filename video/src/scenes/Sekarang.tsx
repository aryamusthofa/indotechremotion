import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";
import { Counter, StatPill } from "../ui/Primitives";
import { GeoMap } from "../ui/GeoMap";

/**
 * SEKARANG (15–27s): populasi 287 juta -> 212 juta online (peta satelit
 * tersapu BARAT→TIMUR ala "38 provinsi"), 72 juta masih offline (pill merah).
 */
export const SekarangScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // sapuan barat→timur: 0→74.6% (proporsi online)
  const sweep = interpolate(frame, [70, 190], [0, 0.746], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const labelIn = interpolate(frame, [120, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const showOnline = frame > 60;
  const showOffline = frame > 150;

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "absolute", top: 220, textAlign: "center" }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 34, color: COLORS.muted, letterSpacing: 4, textTransform: "uppercase" }}>
          Populasi Indonesia
        </div>
        <Counter value={287} suffix=" JT" fontSize={150} color={COLORS.text} durationInFrames={50} />
        <div style={{ fontFamily: FONT_BODY, fontSize: 30, color: COLORS.muted, marginTop: -6 }}>
          jiwa
        </div>
      </div>

      {/* peta satelit — sapuan barat→timur */}
      <div style={{ position: "absolute", top: 560, opacity: showOnline ? 1 : 0 }}>
        <GeoMap width={980} reveal={sweep} labelOpacity={labelIn} equator />
      </div>

      {/* angka online */}
      <div style={{ position: "absolute", top: 1010, textAlign: "center", opacity: showOnline ? 1 : 0 }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 32, color: COLORS.optimisBright, letterSpacing: 3, textTransform: "uppercase" }}>
          Sudah online
        </div>
        <Counter value={212} suffix=" JT" fontSize={130} color={COLORS.optimisBright} durationInFrames={55} delay={10} />
      </div>

      {/* angka offline (gap) */}
      <div
        style={{
          position: "absolute",
          top: 1290,
          opacity: showOffline ? 1 : 0,
          transform: `scale(${showOffline ? 1 : 0.8})`,
        }}
      >
        <StatPill value="72 JT" label="MASIH OFFLINE" danger delay={150} />
      </div>
    </AbsoluteFill>
  );
};
