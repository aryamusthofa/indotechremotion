import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { BEAT_ORDER, beatFrames } from "./timing";
import { COLORS } from "./theme";
import { Subtitles } from "./components/Subtitles";
import { AudioTrack } from "./components/AudioTrack";

import { HookScene } from "./scenes/Hook";
import { FlashbackScene } from "./scenes/Flashback90s";
import { SekarangScene } from "./scenes/Sekarang";
import { BanggaScene } from "./scenes/Bangga";
import { RoastingScene } from "./scenes/Roasting";
import { HarapanScene } from "./scenes/Harapan";
import { CtaScene } from "./scenes/CTA";

const SCENES: Record<string, React.FC> = {
  hook: HookScene,
  flashback: FlashbackScene,
  sekarang: SekarangScene,
  bangga: BanggaScene,
  roasting: RoastingScene,
  harapan: HarapanScene,
  cta: CtaScene,
};

/**
 * Komposisi utama. Scene diurutkan dengan <Series>; durasi tiap scene diambil
 * dari timing.ts (patokan suara). Subtitle & audio melapisi di atasnya dan
 * memakai waktu GLOBAL sehingga tetap sinkron walau durasi scene berubah.
 */
export const JendelaPeluang: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: "sans-serif" }}>
      <Series>
        {BEAT_ORDER.map((id) => {
          const Scene = SCENES[id];
          return (
            <Series.Sequence key={id} durationInFrames={beatFrames(id)}>
              <Scene />
            </Series.Sequence>
          );
        })}
      </Series>

      {/* lapisan teks layar (0% bahasa, 100% paham) */}
      <Subtitles />

      {/* lapisan audio: voiceover + bgm + click guide */}
      <AudioTrack />

      {/* vignette sinematik */}
      <AbsoluteFill
        style={{
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 50% 45%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
