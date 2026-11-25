import React from "react";
import { useVideoConfig, useCurrentFrame, interpolate, spring, Easing } from "remotion";
import { COLORS, FONT_DISPLAY, FONT_BODY } from "../theme";

/* =========================================================================
   Counter — angka yang "ngebut" naik dari 0 ke target
   ========================================================================= */
export const Counter: React.FC<{
  value: number;
  durationInFrames?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  fontSize?: number;
  color?: string;
  decimals?: number;
}> = ({
  value,
  durationInFrames = 45,
  delay = 0,
  suffix = "",
  prefix = "",
  fontSize = 120,
  color = COLORS.gold,
  decimals = 0,
}) => {
  const frame = useCurrentFrame();
  const local = Math.max(0, frame - delay);
  const p = interpolate(local, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const shown = (value * p).toFixed(decimals);
  const formatted = Number(shown).toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <div
      style={{
        fontFamily: FONT_DISPLAY,
        fontSize,
        fontWeight: 900,
        color,
        lineHeight: 1,
        textShadow: "0 6px 24px rgba(0,0,0,0.6)",
        whiteSpace: "nowrap",
      }}
    >
      {prefix}
      {formatted}
      {suffix}
    </div>
  );
};

/* =========================================================================
   PopText — teks muncul dengan spring (scale + fade)
   ========================================================================= */
export const PopText: React.FC<{
  children: React.ReactNode;
  delay?: number;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  weight?: number;
  upper?: boolean;
  align?: React.CSSProperties["textAlign"];
  stroke?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  delay = 0,
  fontSize = 64,
  color = COLORS.text,
  fontFamily = FONT_DISPLAY,
  weight = 900,
  upper = true,
  align = "center",
  stroke,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = Math.max(0, frame - delay);
  const s = spring({ frame: local, fps, config: { damping: 12, stiffness: 180, mass: 0.7 } });
  return (
    <div
      style={{
        transform: `scale(${interpolate(s, [0, 1], [0.6, 1])})`,
        opacity: interpolate(local, [0, 5], [0, 1], { extrapolateRight: "clamp" }),
        fontFamily,
        fontSize,
        fontWeight: weight,
        color,
        textAlign: align,
        textTransform: upper ? "uppercase" : "none",
        lineHeight: 1.1,
        WebkitTextStroke: stroke ? `2px ${stroke}` : undefined,
        paintOrder: stroke ? "stroke fill" : undefined,
        textShadow: "0 4px 20px rgba(0,0,0,0.7)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/* =========================================================================
   Strikethrough — garis coret yang memanjang (buat efek "dicoret")
   ========================================================================= */
export const Strikethrough: React.FC<{
  delay?: number;
  durationInFrames?: number;
  color?: string;
  thickness?: number;
  width?: number | string;
}> = ({ delay = 0, durationInFrames = 14, color = COLORS.warning, thickness = 10, width = "100%" }) => {
  const frame = useCurrentFrame();
  const local = Math.max(0, frame - delay);
  const w = interpolate(local, [0, durationInFrames], [0, 100], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        height: thickness,
        width: `calc(${width} * ${w / 100})`,
        background: color,
        borderRadius: thickness,
        transform: "translateY(-50%) rotate(-3deg)",
        boxShadow: `0 0 18px ${color}`,
      }}
    />
  );
};

/* =========================================================================
   IndonesiaMap — siluet Nusantara STILISASI (bukan peta geografis presisi).
   Digambar murni dengan SVG path supaya ringan & tanpa aset eksternal.
   `litRatio` (0..1) menyalakan titik-titik "online" dari barat ke timur.
   ========================================================================= */
const ISLANDS: { d: string; label?: string }[] = [
  // Sumatra
  { d: "M40,120 L120,60 L175,95 L150,175 L95,210 L55,180 Z" },
  // Jawa
  { d: "M150,225 L320,205 L335,235 L175,255 Z" },
  // Kalimantan
  { d: "M250,95 L360,80 L395,150 L340,205 L265,180 L240,140 Z" },
  // Sulawesi
  { d: "M440,95 L470,120 L455,160 L490,150 L505,205 L480,215 L460,175 L440,190 L430,140 Z" },
  // Nusa Tenggara
  { d: "M400,250 L470,240 L520,255 L470,268 L410,265 Z" },
  // Maluku
  { d: "M545,150 L575,140 L590,175 L560,190 Z" },
  // Papua
  { d: "M610,150 L760,120 L770,175 L690,205 L620,190 Z" },
];

export const IndonesiaMap: React.FC<{
  width?: number;
  color?: string;
  litRatio?: number; // 0..1 bagian yang "online"/menyala
  glow?: boolean;
}> = ({ width = 820, color = "#3A3A3A", litRatio = 0, glow = true }) => {
  const vbW = 800;
  const vbH = 300;
  const scale = width / vbW;
  const height = vbH * scale;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${vbW} ${vbH}`}>
      <defs>
        <linearGradient id="litGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.gold} />
          <stop offset="100%" stopColor={COLORS.optimisBright} />
        </linearGradient>
        <clipPath id="litClip">
          <rect x="0" y="0" width={vbW * Math.max(0, Math.min(1, litRatio))} height={vbH} />
        </clipPath>
        {glow ? (
          <filter id="mapGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ) : undefined}
      </defs>
      {/* dasar (gelap) */}
      <g fill={color}>
        {ISLANDS.map((isl, i) => (
          <path key={i} d={isl.d} />
        ))}
      </g>
      {/* bagian menyala (online) */}
      <g fill="url(#litGrad)" clipPath="url(#litClip)" filter={glow ? "url(#mapGlow)" : undefined}>
        {ISLANDS.map((isl, i) => (
          <path key={i} d={isl.d} />
        ))}
      </g>
    </svg>
  );
};

/* =========================================================================
   BarChart — batang naik (mis. peringkat ekonomi digital ASEAN)
   ========================================================================= */
export const BarChart: React.FC<{
  data: { label: string; value: number; highlight?: boolean }[];
  maxValue: number;
  delay?: number;
  height?: number;
  width?: number;
}> = ({ data, maxValue, delay = 0, height = 520, width = 760 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const barW = width / data.length - 28;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 28, height, width }}>
      {data.map((d, i) => {
        const local = Math.max(0, frame - delay - i * 5);
        const s = spring({ frame: local, fps, config: { damping: 14, stiffness: 120 } });
        const h = interpolate(s, [0, 1], [0, (d.value / maxValue) * height]);
        return (
          <div key={d.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", flex: 1 }}>
            <div
              style={{
                width: barW,
                height: h,
                borderRadius: "10px 10px 0 0",
                background: d.highlight
                  ? `linear-gradient(180deg, ${COLORS.gold}, ${COLORS.optimisBright})`
                  : "#3A3A3A",
                boxShadow: d.highlight ? `0 0 30px ${COLORS.gold}` : "none",
              }}
            />
            <div
              style={{
                marginTop: 14,
                fontFamily: FONT_BODY,
                fontSize: 26,
                fontWeight: d.highlight ? 800 : 500,
                color: d.highlight ? COLORS.gold : COLORS.muted,
                textAlign: "center",
              }}
            >
              {d.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* =========================================================================
   QrisBadge — logo QR stilisasi (kotak-kotak) + tulisan QRIS
   ========================================================================= */
export const QrisBadge: React.FC<{ size?: number; delay?: number }> = ({ size = 260, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 11 } });
  const cells = 7;
  const cs = size / cells;
  // pola deterministik sederhana menyerupai QR
  const pattern = [
    "1111111010111111",
    "1000001011000001",
    "1011101001011101",
    "1011101010101001",
    "1011101101011101",
    "1000001010010001",
    "1111111010101010",
  ];
  return (
    <div style={{ transform: `scale(${interpolate(s, [0, 1], [0.5, 1])})`, opacity: interpolate(s, [0, 1], [0, 1]) }}>
      <div
        style={{
          width: size,
          height: size,
          background: "#fff",
          borderRadius: 24,
          padding: 14,
          display: "grid",
          gridTemplateColumns: `repeat(${cells}, 1fr)`,
          gridTemplateRows: `repeat(${cells}, 1fr)`,
          gap: 2,
          boxShadow: `0 0 40px ${COLORS.gold}`,
        }}
      >
        {Array.from({ length: cells * cells }).map((_, i) => {
          const r = Math.floor(i / cells);
          const c = i % cells;
          const on = pattern[r % pattern.length][c % 7] === "1";
          return (
            <div
              key={i}
              style={{
                background: on ? "#0A0A0A" : "transparent",
                borderRadius: 3,
              }}
            />
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: 14, fontFamily: FONT_DISPLAY, fontSize: 40, color: COLORS.gold, letterSpacing: 4 }}>
        QRIS
      </div>
      <div style={{ textAlign: "center", fontFamily: FONT_BODY, fontSize: 22, color: COLORS.muted }}>
        buatan Indonesia
      </div>
    </div>
  );
};

/* =========================================================================
   WindowClose — jendela peluang yang perlahan menutup
   ========================================================================= */
export const WindowClose: React.FC<{
  progress?: number; // 0 (terbuka) .. 1 (tertutup)
  width?: number;
  height?: number;
}> = ({ progress = 0, width = 560, height = 760 }) => {
  const p = Math.max(0, Math.min(1, progress));
  const panelW = (width / 2) * (1 - p);
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: 18,
        overflow: "hidden",
        border: `8px solid ${COLORS.gold}`,
        background: interpolate(p, [0, 1], [1, 0]) > 0.02 ? COLORS.window : COLORS.bg,
        boxShadow: `0 0 60px rgba(59,130,246,${0.6 * (1 - p)})`,
      }}
    >
      {/* cahaya di dalam jendela */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 40%, ${COLORS.window}, #0b1e3a 70%)`,
          opacity: 1 - p,
        }}
      />
      {/* dua panel menutup dari kiri & kanan */}
      <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: panelW, background: COLORS.bgSoft, borderRight: `4px solid ${COLORS.gold}` }} />
      <div style={{ position: "absolute", top: 0, right: 0, height: "100%", width: panelW, background: COLORS.bgSoft, borderLeft: `4px solid ${COLORS.gold}` }} />
    </div>
  );
};

/* =========================================================================
   StatPill — angka + label dalam satu "kartu" kecil
   ========================================================================= */
export const StatPill: React.FC<{
  value: string;
  label: string;
  color?: string;
  delay?: number;
  danger?: boolean;
}> = ({ value, label, color = COLORS.gold, delay = 0, danger = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 12 } });
  return (
    <div
      style={{
        transform: `translateY(${interpolate(s, [0, 1], [50, 0])}px) scale(${interpolate(s, [0, 1], [0.85, 1])})`,
        opacity: interpolate(s, [0, 1], [0, 1]),
        background: danger ? "rgba(239,68,68,0.12)" : "rgba(255,255,255,0.06)",
        border: `3px solid ${danger ? COLORS.warning : color}`,
        borderRadius: 20,
        padding: "22px 30px",
        minWidth: 320,
        textAlign: "center",
        boxShadow: danger ? `0 0 30px rgba(239,68,68,0.4)` : "0 0 24px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ fontFamily: FONT_DISPLAY, fontSize: 68, fontWeight: 900, color: danger ? COLORS.warning : color, lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 26, color: COLORS.text, marginTop: 8, opacity: 0.9 }}>
        {label}
      </div>
    </div>
  );
};
