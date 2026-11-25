# Jendela Peluang 🇮🇩

> **Explainer kritis teknologi Indonesia ~2050** — video animasi berbasis kode untuk TikTok/Reels/Shorts, dibuat 100% dengan [Remotion](https://www.remotion.dev/) (React + TypeScript).

Setiap frame video ini didefinisikan lewat **kode**, bukan rekaman kamera. Gaya bahasanya: *roasting* Gen Z, tajam, nasionalis-kritis — 0% formal kaku.

## 📐 Spesifikasi Produksi

| Item | Ketetapan |
|------|-----------|
| **Format** | Vertikal 9:16 (TikTok / Reels / Shorts) |
| **Durasi** | ~75–78 detik |
| **Fokus** | Teknologi Indonesia: QRIS, ekonomi digital, adopsi AI, kesenjangan digital, infrastruktur |
| **Voiceover** | Direkam sendiri (human voice) — proyek menyiapkan skrip, beat mapping, SFX, dan visual sinkron |
| **Prinsip data** | Hanya angka **terverifikasi** yang tampil di layar; proyeksi wajib dilabeli *"proyeksi"* — anti-halusinasi |

## 🎬 Struktur Scene

Video tersusun dari 7 scene berurutan (`video/src/scenes/`):

```
Hook → Flashback90s → Sekarang → Roasting → Bangga → Harapan → CTA
```

1. **Hook** — pembuka penyadaran ("Bro lu mimpi apa woi...")
2. **Flashback90s** — internet lemot era 90-an sebagai titik nol
3. **Sekarang** — kondisi hari ini: 287 juta pengguna internet, ekonomi digital #1 ASEAN
4. **Roasting** — bagian tajam: adopsi AI dangkal, pekerjaan informal 81%, pendanaan langka
5. **Bangga** — QRIS & inovator lokal yang patut diaplaus
6. **Harapan** — demografi, budaya, SDA: aset yang tidak dimiliki negara lain
7. **CTA** — ajakan keluar dari zona nyaman, mulai dari diri sendiri

## 🚀 Cara Menjalankan

```bash
cd video
npm install

# Preview interaktif di browser (Remotion Studio)
npm run studio

# Render video final → out/jendela-peluang.mp4
npm run render

# Render 1 frame preview → out/preview.png
npm run render:still

# Cek tipe TypeScript
npm run typecheck
```

> Butuh Chrome/Chromium terpasang (Remotion merender lewat headless browser).

## 🎙️ Alur Recording Voiceover

Konfigurasi ada di `video/src/config.ts`:

1. Rekam voiceover sesuai `skrip_final.md`, taruh sebagai `public/voiceover.mp3`
2. Set `USE_VOICEOVER = true` di `config.ts`
3. Selama recording, biarkan `USE_CLICK_GUIDE = true` — bunyi "tik" di tiap beat adalah **panduan timing**
4. Setelah recording selesai, matikan `USE_CLICK_GUIDE` supaya beep tidak ikut ter-render
5. Sesuaikan angka di `src/timing.ts` agar pas dengan durasi tiap baris voiceover
6. (Opsional) Tambahkan `public/bgm.mp3` dan set `USE_BGM = true`

## 📁 Struktur Repo

```
├── video/                  # Proyek Remotion
│   ├── src/
│   │   ├── scenes/         # 7 scene video (Hook ... CTA)
│   │   ├── components/     # Komponen visual reusable
│   │   ├── config.ts       # Konfigurasi audio/voiceover/SFX
│   │   ├── timing.ts       # Beat mapping & durasi per baris
│   │   └── theme.ts        # Warna, font, style global
│   └── public/             # Aset media (gambar, audio)
├── concept.md              # Detail konsep video (v2)
├── project.md              # Maksud & tujuan keseluruhan proyek
├── skrip_final.md          # Skrip voiceover final (v3)
├── skripstyleversiku.txt   # Gaya bahasa acuan (raw)
├── preferensi.md           # Pola visual & narasi dari referensi
├── referensi_links.md      # Arsip link referensi (11 link terverifikasi)
├── progress.md             # Log progres proyek
└── HANDOFF.md              # Panduan lanjut di sesi baru
```

## 📄 Dokumentasi

Mau memahami proyek ini lebih dalam? Baca berurutan:

1. [`project.md`](project.md) — maksud keseluruhan
2. [`concept.md`](concept.md) — konsep visual & narasi
3. [`skrip_final.md`](skrip_final.md) — skrip final
4. [`progress.md`](progress.md) — sudah sampai mana

---

*Dibuat dengan Remotion · React · TypeScript · oleh [@aryamusthofa](https://github.com/aryamusthofa)*
