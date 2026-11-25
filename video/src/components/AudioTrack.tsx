import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import {
  USE_VOICEOVER,
  VOICEOVER_FILE,
  VOICEOVER_VOLUME,
  USE_BGM,
  BGM_FILE,
  BGM_VOLUME,
  USE_CLICK_GUIDE,
  CLICK_GUIDE_FILE,
  CLICK_GUIDE_VOLUME,
  USE_SFX,
  SFX_WHOOSH_FILE,
  SFX_POP_FILE,
  SFX_WHOOSH_VOLUME,
  SFX_POP_VOLUME,
} from "../config";
import { BEATS, FPS, secToFrame, type BeatId } from "../timing";

/** Detik awal tiap beat → frame (untuk whoosh transisi). */
const BEAT_START_FRAMES = (Object.keys(BEATS) as BeatId[]).map((id) =>
  secToFrame(BEATS[id].start)
);

/** Frame kemunculan data penting (untuk pop) — sinkron dengan subtitle di timing.ts. */
const POP_FRAMES = [
  secToFrame(16), // 287 JT jiwa
  secToFrame(18), // 212 JT online
  secToFrame(23), // 72 JT offline
  secToFrame(33), // $119 miliar
  secToFrame(38), // QRIS lintas negara
  secToFrame(50), // 81% informal
  secToFrame(72), // "lu yakin?"
];

/**
 * Lapisan audio. Semua opsional & dikendalikan dari src/config.ts.
 * - voiceover.mp3 : suara kamu (set USE_VOICEOVER=true setelah file ada)
 * - bgm.mp3       : musik latar (kecil volumenya)
 * - guide-clicks.wav : beep "tik" di awal tiap beat = PATOKAN saat recording
 * - sfx-whoosh/pop   : efek transisi & data muncul
 */
export const AudioTrack: React.FC = () => {
  return (
    <AbsoluteFill>
      {USE_BGM ? (
        <Audio src={staticFile(BGM_FILE)} volume={BGM_VOLUME} />
      ) : null}
      {USE_VOICEOVER ? (
        <Audio src={staticFile(VOICEOVER_FILE)} volume={VOICEOVER_VOLUME} />
      ) : null}
      {USE_CLICK_GUIDE ? (
        <Audio src={staticFile(CLICK_GUIDE_FILE)} volume={CLICK_GUIDE_VOLUME} />
      ) : null}
      {USE_SFX ? (
        <>
          {BEAT_START_FRAMES.map((f) =>
            f === 0 ? null : (
              <Sequence key={`whoosh-${f}`} from={f - 6}>
                <Audio src={staticFile(SFX_WHOOSH_FILE)} volume={SFX_WHOOSH_VOLUME} />
              </Sequence>
            )
          )}
          {POP_FRAMES.map((f) => (
            <Sequence key={`pop-${f}`} from={f}>
              <Audio src={staticFile(SFX_POP_FILE)} volume={SFX_POP_VOLUME} />
            </Sequence>
          ))}
        </>
      ) : null}
    </AbsoluteFill>
  );
};
