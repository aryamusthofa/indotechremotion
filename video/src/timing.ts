/**
 * ============================================================================
 *  timing.ts  —  PATOKAN SUARA / SINGLE SOURCE OF TRUTH UNTUK DURASI
 * ============================================================================
 *  Semua durasi video dikendalikan dari file ini. Visual & animasi TIDAK perlu
 *  diubah saat sinkronisasi audio — cukup sesuaikan angka di sini.
 *
 *  CARA SYNC SETELAH RECORDING (lihat README → "Sinkronisasi Audio"):
 *   - Buka voiceover-mu di editor audio, catat detik mulai tiap baris.
 *   - Ubah `start`/`end` BEATS dan angka `t` di SUBTITLES agar cocok.
 *   - Selesai. Scene otomatis mengikuti.
 *
 *  Satuan: DETIK. FPS dipakai untuk konversi ke frame.
 * ============================================================================
 */

export const FPS = 30;

/** Durasi total (detik). ~80s = "satu menit lebih belasan detik". */
export const TOTAL_SECONDS = 80;
export const TOTAL_FRAMES = Math.round(TOTAL_SECONDS * FPS);

export type BeatId =
  | "hook"
  | "flashback"
  | "sekarang"
  | "bangga"
  | "roasting"
  | "harapan"
  | "cta";

/**
 * BEATS = patokan kasar per bagian. Ini "kerangka" durasi.
 * Angka di bawah adalah ESTIMASI awal (sebelum voiceover asli masuk).
 */
export const BEATS: Record<BeatId, { start: number; end: number }> = {
  hook: { start: 0, end: 7 },
  flashback: { start: 7, end: 15 },
  sekarang: { start: 15, end: 27 },
  bangga: { start: 27, end: 42 },
  roasting: { start: 42, end: 60 },
  harapan: { start: 60, end: 70 },
  cta: { start: 70, end: 80 },
};

/** Urutan beat untuk <Series> */
export const BEAT_ORDER: BeatId[] = [
  "hook",
  "flashback",
  "sekarang",
  "bangga",
  "roasting",
  "harapan",
  "cta",
];

/** Konversi detik → frame */
export const secToFrame = (sec: number) => Math.round(sec * FPS);

/** Durasi sebuah beat dalam frame */
export const beatFrames = (id: BeatId) =>
  Math.max(1, secToFrame(BEATS[id].end - BEATS[id].start));

/** Frame awal sebuah beat (global) */
export const beatStartFrame = (id: BeatId) => secToFrame(BEATS[id].start);

/**
 * SUBTITLES = teks layar (untuk "0% bahasa, 100% paham") SEKALIGUS
 * PANDUAN RECORDING. Tiap baris punya `t` = detik mulai bicara.
 * Rekam voiceover-mu mengikuti timecode ini, lalu sesuaikan bila perlu.
 *
 * Format timecode (mm:ss) di komentar biar gampang diikuti saat recording.
 */
export interface SubLine {
  t: number; // detik mulai (global)
  beat: BeatId;
  text: string; // teks yang tampil di layar & kamu ucapkan
  emphasis?: boolean; // baris "punch" → tampil lebih besar
}

export const SUBTITLES: SubLine[] = [
  // --- HOOK (0:00–0:07) ---
  { t: 0.0, beat: "hook", text: "2050, Indonesia jadi superpower teknologi?", emphasis: true },
  { t: 2.3, beat: "hook", text: "Bro… lu mimpi apa semalam, wkwk." },
  { t: 4.0, beat: "hook", text: "Tapi emang bisa ya jadi negara maju?" },
  { t: 5.6, beat: "hook", text: "Yah… kalau negaranya masih ada." },

  // --- FLASHBACK 90-AN (0:07–0:15) ---
  { t: 7.0, beat: "flashback", text: "Inget nggak tahun 2090-an — eh, maksud gue 90-an?" },
  { t: 9.3, beat: "flashback", text: "Internet lemotnya pakai banget-banget." },
  { t: 11.3, beat: "flashback", text: "Tapi orang seneng kayak nemu inovasi baru." },

  // --- KONDISI SEKARANG (0:15–0:27) ---
  { t: 15.0, beat: "sekarang", text: "Lah sekarang?" },
  { t: 16.0, beat: "sekarang", text: "Populasi 287 juta jiwa…", emphasis: true },
  { t: 18.0, beat: "sekarang", text: "212 juta udah online — termasuk LU yang nonton ini.", emphasis: true },
  { t: 20.5, beat: "sekarang", text: "Walau masih ada anomali yang nanya…" },
  { t: 22.5, beat: "sekarang", text: "“Internet cepet buat apa?” — buat yang tau aja dah." },

  // --- BANGGA + TEKNOLOGI (0:27–0:42) ---
  { t: 27.0, beat: "bangga", text: "Kabar baik, bro. Tau negara ini?" },
  { t: 29.0, beat: "bangga", text: "Yaps, dugaan lu bener — INDONESIA!", emphasis: true },
  { t: 30.5, beat: "bangga", text: "Ekonomi digital kita #1 se-ASEAN.", emphasis: true },
  { t: 33.0, beat: "bangga", text: "119 miliar dolar. Gokil nggak tuh, katanya." },
  { t: 35.5, beat: "bangga", text: "Applaus buat inovator QRIS — buatan negeri kita." },
  { t: 38.0, beat: "bangga", text: "Sekarang bisa dipakai di Jepang, China, sampai Arab Saudi." },
  { t: 40.3, beat: "bangga", text: "Saking kerennya… Amerika aja sampai protes." },

  // --- ROASTING REALITA (0:42–1:00) ---
  { t: 42.0, beat: "roasting", text: "Tapi jangan sombong dulu.", emphasis: true },
  { t: 43.5, beat: "roasting", text: "Adopsi AI kita? Paling dangkal se-ASEAN." },
  { t: 46.0, beat: "roasting", text: "Mau nyaingin Amerika sama China? Mimpi." },
  { t: 48.0, beat: "roasting", text: "Katanya 19 juta lapangan kerja…", emphasis: true },
  { t: 50.0, beat: "roasting", text: "Realitanya 81% pekerja informal alias “abu-abu”.", emphasis: true },
  { t: 52.5, beat: "roasting", text: "Manufaktur kehilangan 300 ribu pekerja…" },
  { t: 55.0, beat: "roasting", text: "…tapi katanya kita “lagi industrialisasi”." },
  { t: 57.3, beat: "roasting", text: "Otak-otak IQ 78 dibenerin dulu sebelum sok jadi raksasa." },

  // --- HARAPAN / DEMOGRAFI (1:00–1:10) ---
  { t: 60.0, beat: "harapan", text: "Tapi AS & China nggak punya yang KITA punya.", emphasis: true },
  { t: 62.5, beat: "harapan", text: "Demografi muda, SDA melimpah…" },
  { t: 65.0, beat: "harapan", text: "Budaya & ribuan pulau jadi satu — Indonesia." },
  { t: 67.5, beat: "harapan", text: "Mereka udah raksasa; kita punya bahan mentahnya." },

  // --- CTA / EXIT (1:10–1:20) ---
  { t: 70.0, beat: "cta", text: "Peluang udah kebuka lebar-lebar." },
  { t: 72.0, beat: "cta", text: "Tapi lu yakin itu terbuka terus?", emphasis: true },
  { t: 74.0, beat: "cta", text: "Belajar teknologi. Keluar dari zona nyaman." },
  { t: 76.0, beat: "cta", text: "Negeri hebat = yang paling CEPET beradaptasi.", emphasis: true },
  { t: 78.0, beat: "cta", text: "Mulai dari diri lo. Sebelum jendelanya… lewat." },
];

/**
 * Ambil baris subtitle yang aktif pada frame global tertentu.
 */
export function activeLineAt(frame: number): SubLine | null {
  const sec = frame / FPS;
  let current: SubLine | null = null;
  for (const line of SUBTITLES) {
    if (sec >= line.t) current = line;
    else break;
  }
  return current;
}

/** Frame mulai (global) dari sebuah baris subtitle */
export const lineStartFrame = (line: SubLine) => secToFrame(line.t);
