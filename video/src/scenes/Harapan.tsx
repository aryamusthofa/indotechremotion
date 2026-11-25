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
import { GeoMap } from "../ui/GeoMap";

/**
 * HARAPAN (60–70s): split screen — AS/China (raksasa, biru) vs Indonesia
 * (bahan mentah berkilau, emas/merah). Layout flexbox dua kolom; divider
 * emas di tengah. (Bug lama: posisi absolute bikin panel ke-render di luar
 * layar — diganti flex + gap animasi.)
 */
export const HarapanScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const split = spring({ frame, fps, config: { damping: 14, stiffness: 90 } });
  const gap = interpolate(split, [0, 1], [0, 46]);
  const fade = interpolate(split, [0, 1], [0, 1]);

  // Peta harus utuh lebih awal: reveal selesai ~3 detik setelah scene masuk,
  // supaya Papua tidak "hilang" saat subtitle demografi/SDA muncul.
  const lit = interpolate(frame, [30, 95], [0.35, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap,
          width: "100%",
          padding: "0 36px",
          opacity: fade,
        }}
      >
        {/* ---- sisi kiri: raksasa (AS/China) ---- */}
        <div style={{ flex: 1, textAlign: "center", maxWidth: 480 }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 46, color: COLORS.blue, fontWeight: 900 }}>
            AS & CHINA
          </div>
          <div style={{ height: 220, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <GiantsIcons delay={20} />
          </div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 30, color: COLORS.muted, marginTop: 14 }}>
            sudah jadi raksasa
          </div>
        </div>

        {/* divider emas */}
        <div
          style={{
            width: 5,
            alignSelf: "stretch",
            minHeight: 560,
            background: `linear-gradient(180deg, transparent, ${COLORS.gold}, transparent)`,
            opacity: 0.55,
          }}
        />

        {/* ---- sisi kanan: Indonesia (bahan mentah) ---- */}
        <div style={{ flex: 1, textAlign: "center", maxWidth: 480 }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 46, color: COLORS.red, fontWeight: 900 }}>
            INDONESIA
          </div>
          <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
            <GeoMap width={440} reveal={lit} labelOpacity={0} shelf={0.7} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22, alignItems: "center" }}>
            <Asset delay={70} text="287 JT JIWA · MUDA" />
            <Asset delay={95} text="SDA MELIMPAH" />
            <Asset delay={120} text="BUDAYA · RIBUAN PULAU" />
          </div>
        </div>
      </div>

      {/* Catatan: punchline "Mereka punya raksasanya…" TIDAK dirender di sini
          karena sudah disampaikan lewat subtitle global (timing.ts t=67.5).
          Menambahkannya di sini justru tabrakan dengan zona subtitle. */}
    </AbsoluteFill>
  );
};

const Asset: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 12 } });
  return (
    <div
      style={{
        transform: `translateX(${interpolate(s, [0, 1], [40, 0])}px)`,
        opacity: interpolate(s, [0, 1], [0, 1]),
        fontFamily: FONT_DISPLAY,
        fontSize: 24,
        color: COLORS.text,
        background: "rgba(220,20,60,0.15)",
        border: `2px solid ${COLORS.red}`,
        borderRadius: 12,
        padding: "10px 16px",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  );
};

const GiantsIcons: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const o = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const towers = [80, 130, 175, 120, 90];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 12, opacity: o }}>
      {towers.map((h, i) => {
        const grow = interpolate(frame, [delay + i * 6, delay + i * 6 + 30], [0, h], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.cubic),
        });
        return (
          <div
            key={i}
            style={{
              width: 42,
              height: grow,
              background: COLORS.blue,
              borderRadius: "6px 6px 0 0",
              opacity: 0.85,
              boxShadow: `0 0 20px rgba(37,99,235,0.35)`,
            }}
          />
        );
      })}
    </div>
  );
};
