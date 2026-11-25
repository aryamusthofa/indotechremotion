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
import { PopText, StatPill } from "../ui/Primitives";

/**
 * ROASTING REALITA (42–60s): nada berubah drastis. Grafik merah nyungsep,
 * satire "19 juta" -> "81% informal", manufaktur -300rb, internet 29 Mbps,
 * ditutup roasting "IQ 78". Ada efek glitch + shake biar "panas".
 */
export const RoastingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // glitch halus sepanjang scene
  const glitchX = frame % 7 < 2 ? (Math.sin(frame * 12) * 5) : 0;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(circle at 50% 40%, #2a0d0d, ${COLORS.bg} 78%)`,
        transform: `translateX(${glitchX}px)`,
      }}
    >
      {/* ---- fase 1: jangan sombong + AI dangkal (0–120) ---- */}
      <Phase show={frame < 125}>
        <PopText fontSize={70} color={COLORS.warning} delay={2}>
          Tapi jangan sombong dulu.
        </PopText>
        <div style={{ marginTop: 50 }}>
          <CrashChart delay={20} />
        </div>
        <PopText fontSize={58} color={COLORS.text} delay={45}>
          Adopsi AI kita paling dangkal se-ASEAN
        </PopText>
      </Phase>

      {/* ---- fase 2: satire 19 juta -> 81% informal (125–255) ---- */}
      <Phase show={frame >= 120 && frame < 260}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <PopText fontSize={66} color={COLORS.muted} delay={0}>
            “Katanya 19 juta lapangan kerja”
          </PopText>
          <div
            style={{
              position: "absolute",
              top: "46%",
              left: 0,
              height: 10,
              width: interpolate(frame, [150, 175], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) + "%",
              background: COLORS.warning,
              borderRadius: 10,
              transform: "rotate(-3deg)",
              boxShadow: `0 0 18px ${COLORS.warning}`,
            }}
          />
        </div>
        <div style={{ fontFamily: FONT_DISPLAY, fontSize: 60, color: COLORS.text, margin: "24px 0" }}>
          Realitanya:
        </div>
        <StatPill value="81%" label="pekerja INFORMAL (“abu-abu”)" danger delay={175} />
      </Phase>

      {/* ---- fase 3: manufaktur -300rb + sindiran industrialisasi (255–390) ---- */}
      <Phase show={frame >= 255 && frame < 395}>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <FactoryClosing delay={0} />
          <StatPill value="-300.000" label="pekerja manufaktur (sejak 2023)" danger delay={10} />
        </div>
        <PopText fontSize={48} color={COLORS.muted} delay={60}>
          …tapi katanya kita “lagi industrialisasi”.
        </PopText>
      </Phase>

      {/* ---- fase 4: internet lelet 29 Mbps (390–475) ---- */}
      <Phase show={frame >= 390 && frame < 480}>
        <PopText fontSize={54} color={COLORS.text} delay={0}>
          Internet mobile median
        </PopText>
        <div style={{ marginTop: 20 }}>
          <Counter value={29} suffix=" Mbps" fontSize={150} color={COLORS.warning} durationInFrames={40} />
        </div>
        <Snail delay={20} />
        <PopText fontSize={46} color={COLORS.muted} delay={40}>
          lelet buat negara yang “mau maju”
        </PopText>
      </Phase>

      {/* ---- fase 5: roasting IQ 78 (475–540) ---- */}
      <Phase show={frame >= 475}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <BrainIcon delay={480} />
          <PopText fontSize={62} color={COLORS.warning} delay={490}>
            Otak-otak “IQ 78” dibenerin dulu
          </PopText>
          <PopText fontSize={48} color={COLORS.text} delay={505}>
            sebelum kita sok jadi raksasa.
          </PopText>
        </div>
      </Phase>
    </AbsoluteFill>
  );
};

/* ---------------- helper sub-komponen ---------------- */

const Phase: React.FC<{ show: boolean; children: React.ReactNode }> = ({ show, children }) => {
  const frame = useCurrentFrame();
  if (!show) return null;
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 48, textAlign: "center" }}>
      {children}
    </AbsoluteFill>
  );
};

const CrashChart: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const drop = interpolate(frame, [delay, delay + 55], [10, 90], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.quad),
  });
  return (
    <svg width={620} height={300} viewBox="0 0 620 300">
      <polyline
        points={`20,${drop * 0.4} 160,${drop * 0.9} 300,${drop * 1.6} 440,${drop * 2.3} 600,${drop * 2.9}`}
        fill="none"
        stroke={COLORS.warning}
        strokeWidth={12}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={600} cy={Math.min(290, drop * 2.9)} r={16} fill={COLORS.warning} />
    </svg>
  );
};

const FactoryClosing: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 12 } });
  return (
    <div style={{ opacity: interpolate(s, [0, 1], [0, 1]), transform: `scale(${interpolate(s, [0, 1], [0.7, 1])})` }}>
      <svg width={200} height={180} viewBox="0 0 200 180">
        <rect x="20" y="90" width="160" height="80" fill="#4A4A4A" />
        <rect x="40" y="40" width="26" height="60" fill="#5A5A5A" />
        <rect x="86" y="30" width="26" height="70" fill="#5A5A5A" />
        <rect x="132" y="50" width="26" height="50" fill="#5A5A5A" />
        {/* tanda silang tutup */}
        <line x1="20" y1="20" x2="180" y2="170" stroke={COLORS.warning} strokeWidth="12" />
        <line x1="180" y1="20" x2="20" y2="170" stroke={COLORS.warning} strokeWidth="12" />
      </svg>
    </div>
  );
};

const Snail: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [delay, delay + 120], [-40, 40], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ transform: `translateX(${x}px)`, marginTop: 12 }}>
      <svg width={150} height={110} viewBox="0 0 150 110">
        {/* cangkang */}
        <circle cx="62" cy="58" r="34" fill="none" stroke={COLORS.warning} strokeWidth="9" />
        <path d="M62 58 m0 -20 a20 20 0 1 1 -14 6" fill="none" stroke={COLORS.warning} strokeWidth="7" />
        {/* badan */}
        <path d="M20 92 Q60 104 104 92" fill="none" stroke={COLORS.warning} strokeWidth="9" strokeLinecap="round" />
        {/* kepala + antena */}
        <line x1="104" y1="90" x2="120" y2="60" stroke={COLORS.warning} strokeWidth="6" strokeLinecap="round" />
        <line x1="104" y1="90" x2="132" y2="66" stroke={COLORS.warning} strokeWidth="6" strokeLinecap="round" />
        <circle cx="120" cy="58" r="6" fill={COLORS.warning} />
        <circle cx="133" cy="64" r="6" fill={COLORS.warning} />
      </svg>
    </div>
  );
};

const BrainIcon: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 10 } });
  const pulse = 1 + Math.sin(frame * 0.3) * 0.05;
  return (
    <div style={{ opacity: interpolate(s, [0, 1], [0, 1]), transform: `scale(${interpolate(s, [0, 1], [0.6, 1]) * pulse})` }}>
      <svg width={170} height={150} viewBox="0 0 170 150">
        <g fill="none" stroke={COLORS.warning} strokeWidth="8" strokeLinecap="round">
          <path d="M70 20 C45 20 35 45 48 58 C30 62 30 92 50 96 C45 118 70 130 82 118 L82 26 C78 22 74 20 70 20 Z" />
          <path d="M100 20 C125 20 135 45 122 58 C140 62 140 92 120 96 C125 118 100 130 88 118 L88 26 C92 22 96 20 100 20 Z" />
          <path d="M58 55 h16 M104 55 h16 M58 90 h16 M104 90 h16" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
};

// Counter lokal (ringkas) agar scene ini mandiri
const Counter: React.FC<{ value: number; suffix?: string; fontSize?: number; color?: string; durationInFrames?: number }> = ({
  value, suffix = "", fontSize = 120, color = COLORS.gold, durationInFrames = 45,
}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return (
    <div style={{ fontFamily: FONT_DISPLAY, fontSize, fontWeight: 900, color, lineHeight: 1 }}>
      {Math.round(value * p)}{suffix}
    </div>
  );
};
