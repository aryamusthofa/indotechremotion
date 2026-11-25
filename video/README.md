# 🎬 Jendela Peluang — Remotion Project

Explainer kritis teknologi Indonesia menuju ~2050. Vertikal 9:16, ~80 detik, gaya **roasting Gen Z**. Dibuat dengan **Remotion (React + TypeScript)** — semua visual dari kode, tanpa aset video/gambar eksternal.

> Dokumen konsep lengkap ada di folder induk: `../JENDELA_PELUANG_Review.docx`, `../concept.md`, `../skrip_final.md`, `../preferensi.md`.

---

## 🚀 Menjalankan

```bash
cd video
npm install
npm run dev          # buka Remotion Studio (preview + timeline) di browser
```

Render jadi MP4:
```bash
npm run render       # hasil: out/jendela-peluang.mp4
```

Cek TypeScript:
```bash
npm run typecheck
```

---

## 🎙️ Cara Kerja Audio (PENTING — baca ini)

Video ini **dibangun duluan tanpa audio final**. Visual & audio **dipisahkan** lewat satu file: **`src/timing.ts`** (patokan suara).

### Sekarang (belum recording)
- `USE_VOICEOVER = false` → video jalan pakai durasi estimasi.
- `USE_CLICK_GUIDE = true` → ada bunyi **“tik” di awal tiap beat** (detik 0, 7, 15, 27, 42, 60, 70) sebagai **patokan** kamu saat merekam.
- Subtitle/teks layar sudah tampil mengikuti timecode di `timing.ts` → bisa kamu jadikan **naskah + panduan durasi** saat recording.

### Panduan Recording
1. Buka `src/timing.ts` → bagian `SUBTITLES`. Tiap baris punya `t` (detik mulai).
2. Rekam voiceover-mu mengikuti timecode itu (gaya roasting, pace cepat).
3. Nggak harus presisi banget — yang penting urutan & kira-kira durasinya.
4. Simpan sebagai **`public/voiceover.mp3`**.

### Setelah recording (SYNC PASS)
1. Buka `src/config.ts` → set **`USE_VOICEOVER = true`**.
2. (Opsional) set **`USE_CLICK_GUIDE = false`** biar beep panduan nggak ikut ter-render.
3. Durasi total **otomatis** mengikuti panjang audio (lihat `calculateMetadata` di `Root.tsx`).
4. Kalau ada baris yang meleset, cukup **sesuaikan angka `t` di `SUBTITLES`** dan `start/end` di `BEATS` — **visual tidak perlu diubah sama sekali.**

> Intinya: audio cuma memengaruhi ANGKA di `timing.ts`. Struktur & animasi aman.

### Backsound (opsional)
Taruh `public/bgm.mp3`, lalu di `src/config.ts` set `USE_BGM = true`. Volume default kecil (0.25) biar suara kamu dominan.

---

## 📁 Struktur

```
video/
├── package.json
├── remotion.config.ts
├── tsconfig.json
├── public/
│   ├── guide-clicks.wav          # beep patokan per beat (auto-generated)
│   ├── voiceover_placeholder.wav # hening (cadangan)
│   └── voiceover.mp3             # ← TARUH SUARAMU DI SINI
└── src/
    ├── index.ts                  # registerRoot
    ├── Root.tsx                  # Composition + auto-duration dari audio
    ├── JendelaPeluang.tsx        # komposisi utama (Series of scenes)
    ├── timing.ts                 # ⭐ PATOKAN SUARA (durasi + subtitle + timecode)
    ├── theme.ts                  # warna, font, ukuran kanvas
    ├── config.ts                 # toggle audio (voiceover/bgm/click)
    ├── components/
    │   ├── AudioTrack.tsx        # lapisan audio
    │   └── Subtitles.tsx         # teks layar (0% bahasa 100% paham)
    ├── ui/
    │   └── Primitives.tsx        # Counter, PopText, IndonesiaMap, BarChart,
    │                             #   QrisBadge, Strikethrough, WindowClose, StatPill
    └── scenes/
        ├── Hook.tsx              # 0–7s   : "2050 superpower? atau mimpi?"
        ├── Flashback90s.tsx      # 7–15s  : internet lemot (sepia, CRT)
        ├── Sekarang.tsx          # 15–27s : 287jt populasi / 212jt online / 72jt offline
        ├── Bangga.tsx            # 27–42s : #1 ASEAN, $119M, QRIS go-global, AS protes
        ├── Roasting.tsx          # 42–60s : AI dangkal, 19jt→81% informal, -300rb, 29Mbps, IQ78
        ├── Harapan.tsx           # 60–70s : AS/China vs Indonesia (bahan mentah)
        └── CTA.tsx               # 70–80s : jendela menutup, "mulai dari lo", loop 2050
```

---

## 🎨 Menyesuaikan

- **Warna / font / ukuran** → `src/theme.ts`
- **Durasi & teks per baris** → `src/timing.ts`
- **Isi visual tiap scene** → `src/scenes/*.tsx`
- **Peta Indonesia** → stilisasi SVG di `src/ui/Primitives.tsx` (`IndonesiaMap`). Bukan peta geografis presisi; boleh diganti path yang lebih akurat bila perlu.

## ⚠️ Catatan
- Ikon memakai **SVG murni** (bukan emoji) agar aman dirender di mesin tanpa font emoji.
- Semua angka di layar **terverifikasi** (lihat `../concept.md`). Proyeksi wajib dilabeli, jangan disajikan sebagai fakta.
- Satire politik (mis. “19 juta lapangan kerja”) disandarkan pada fakta terdokumentasi — jaga agar tetap komentar, bukan klaim palsu.
