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
import { BarChart, Counter, QrisBadge, PopText } from "../ui/Primitives";

/**
 * BANGGA + TEKNOLOGI (27–42s): #1 ekonomi digital ASEAN (bar chart),
 * $119 miliar, QRIS go-global (JP/CN/SA), lalu "Amerika protes".
 *
 * Fase diselaraskan dengan timecode subtitle (local frame = (t − 27) × 30):
 *  - 0–255    : chart + counter 119 (baris "$119 miliar" di t=33 → local 180)
 *  - 255–405  : QRIS + bendera (baris "applaus QRIS" t=35.5 → local 255)
 *  - 405–450  : Amerika protes (baris t=40.3 → local 400)
 */
export const BanggaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      {/* ---- fase 1: peringkat ASEAN (local 0–255) ---- */}
      <div style={{ position: "absolute", opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }) * interpolate(frame, [250, 268], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        <PopText fontSize={54} color={COLORS.gold} delay={5}>
          Ekonomi Digital ASEAN 2026
        </PopText>
        <div style={{ marginTop: 40 }}>
          <BarChart
            delay={20}
            maxValue={119}
            data={[
              { label: "ID", value: 119, highlight: true },
              { label: "TH", value: 46 },
              { label: "VN", value: 39 },
              { label: "MY", value: 31 },
              { label: "PH", value: 27 },
              { label: "SG", value: 24 },
            ]}
          />
        </div>
        {/* Counter + #1 ASEAN baru muncul saat angkanya mulai naik.
            Sebelumnya blok ini tampil "$0 MILIAR" selama ~3,7 detik —
            kontradiktif dengan bar ID yang sudah penuh. */}
        <div
          style={{
            textAlign: "center",
            marginTop: 24,
            opacity: interpolate(frame, [103, 113], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <Counter value={119} prefix="$" suffix=" MILIAR" fontSize={92} color={COLORS.gold} delay={105} />
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 46, color: COLORS.optimisBright, marginTop: 6 }}>
            #1 ASEAN
          </div>
        </div>
      </div>

      {/* ---- fase 2: QRIS go-global (local 255–405) ---- */}
      <div
        style={{
          position: "absolute",
          opacity: interpolate(frame, [255, 270], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) *
            interpolate(frame, [395, 410], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <QrisBadge size={230} delay={255} />
        <div style={{ display: "flex", gap: 26, marginTop: 44 }}>
          <CountryFlag label="JEPANG" delay={300} />
          <CountryFlag label="CHINA" delay={315} />
          <CountryFlag label="ARAB" delay={330} />
        </div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 34, color: COLORS.muted, marginTop: 34, textAlign: "center", maxWidth: 760 }}>
          QRIS buatan negeri — sekarang dipakai lintas negara
        </div>
      </div>

      {/* ---- fase 3: Amerika protes (local 405–450) ---- */}
      <div
        style={{
          position: "absolute",
          opacity: interpolate(frame, [405, 418], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <UsProtest delay={405} />
        <PopText fontSize={80} color={COLORS.warning} delay={415}>
          Amerika protes.
        </PopText>
      </div>
    </AbsoluteFill>
  );
};

const CountryFlag: React.FC<{ label: string; delay: number }> = ({ label, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 11 } });
  return (
    <div
      style={{
        transform: `scale(${interpolate(s, [0, 1], [0.5, 1])})`,
        opacity: interpolate(s, [0, 1], [0, 1]),
        background: "rgba(255,255,255,0.08)",
        border: `3px solid ${COLORS.gold}`,
        borderRadius: 16,
        padding: "18px 26px",
        fontFamily: FONT_DISPLAY,
        fontSize: 34,
        color: COLORS.text,
        boxShadow: `0 0 24px rgba(212,175,55,0.4)`,
      }}
    >
      {label}
    </div>
  );
};

const UsProtest: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 10 } });
  const wobble = Math.sin(frame * 0.4) * 4;
  return (
    <div style={{ transform: `scale(${interpolate(s, [0, 1], [0.5, 1])}) rotate(${wobble}deg)`, opacity: interpolate(s, [0, 1], [0, 1]), position: "relative" }}>
      {/* bendera AS stilisasi */}
      <div style={{ width: 200, height: 130, borderRadius: 10, overflow: "hidden", border: "4px solid #fff", position: "relative", background: "#fff" }}>
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} style={{ position: "absolute", left: 0, right: 0, top: i * 18.5, height: 9, background: "#B22234" }} />
        ))}
        <div style={{ position: "absolute", top: 0, left: 0, width: 84, height: 70, background: "#3C3B6E" }} />
      </div>
      {/* tanda seru protes */}
      <div style={{ position: "absolute", top: -40, right: -30, fontSize: 90, color: COLORS.warning, fontFamily: FONT_DISPLAY, textShadow: `0 0 20px ${COLORS.warning}` }}>
        !
      </div>
    </div>
  );
};
