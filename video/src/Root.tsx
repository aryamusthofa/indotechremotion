import React from "react";
import {
  Composition,
  CalculateMetadataFunction,
  staticFile,
} from "remotion";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { JendelaPeluang } from "./JendelaPeluang";
import { FPS, TOTAL_FRAMES } from "./timing";
import { USE_VOICEOVER, VOICEOVER_FILE } from "./config";
import { WIDTH, HEIGHT } from "./theme";

/**
 * Jika USE_VOICEOVER = true dan file-nya ada, durasi total video otomatis
 * mengikuti panjang audio asli kamu. Kalau belum, pakai estimasi dari timing.ts.
 */
type VideoProps = Record<string, unknown>;

const calculateMetadata: CalculateMetadataFunction<VideoProps> = async () => {
  if (USE_VOICEOVER) {
    try {
      const dur = await getAudioDurationInSeconds(staticFile(VOICEOVER_FILE));
      if (Number.isFinite(dur) && dur > 0) {
        return { durationInFrames: Math.max(1, Math.ceil(dur * FPS)) };
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(
        "[JendelaPeluang] voiceover belum ditemukan, pakai durasi estimasi timing.ts",
        err
      );
    }
  }
  return { durationInFrames: TOTAL_FRAMES };
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="JendelaPeluang"
      component={JendelaPeluang}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      calculateMetadata={calculateMetadata}
    />
  );
};
