/**
 * Konfigurasi audio.
 *
 * PENTING — cara pakai setelah kamu selesai recording:
 *  1. Taruh file voiceover di folder `public/` dengan nama `voiceover.mp3`
 *     (atau ubah VOICEOVER_FILE di bawah sesuai nama file-mu).
 *  2. Set USE_VOICEOVER = true.
 *  3. (Opsional) Set USE_CLICK_GUIDE = false supaya beep panduan tidak ikut ter-render.
 *  4. Jalankan `npm run dev` untuk preview, atau sesuaikan angka di src/timing.ts
 *     agar pas dengan durasi tiap baris voiceover-mu (lihat PANDUAN RECORDING di README).
 */

// Voiceover utama (suara kamu)
export const USE_VOICEOVER = false; // ubah ke true setelah public/voiceover.mp3 ada
export const VOICEOVER_FILE = "voiceover.mp3";
export const VOICEOVER_VOLUME = 1.0;

// Backsound musik (opsional) — taruh public/bgm.mp3
export const USE_BGM = false;
export const BGM_FILE = "bgm.mp3";
export const BGM_VOLUME = 0.25; // kecil, biar suara kamu tetap dominan

// Click/beep guide: bunyi "tik" di awal tiap beat sebagai PATOKAN timing saat recording.
export const USE_CLICK_GUIDE = true;
export const CLICK_GUIDE_FILE = "guide-clicks.wav";
export const CLICK_GUIDE_VOLUME = 0.35;

// SFX: whoosh di transisi tiap beat + pop saat angka/data muncul.
// (Bisa dimatikan kalau voiceover-mu sudah termasuk efek sendiri.)
export const USE_SFX = true;
export const SFX_WHOOSH_FILE = "sfx-whoosh.wav";
export const SFX_POP_FILE = "sfx-pop.wav";
export const SFX_WHOOSH_VOLUME = 0.3;
export const SFX_POP_VOLUME = 0.35;
