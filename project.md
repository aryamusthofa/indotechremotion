# PROJECT — Armuzzindotech

> Dokumen ini menjelaskan **maksud keseluruhan** proyek. Untuk detail konsep lihat `concept.md`, untuk riwayat progres lihat `progress.md`.

## Ringkasan

Proyek produksi **video animasi berbasis kode (code-based animation)** untuk TikTok, format vertikal 9:16, berjudul kerja **"Jendela Peluang"**.

Video dibuat dengan **Remotion (React + TypeScript)**, di mana setiap frame didefinisikan lewat kode — bukan hasil rekaman kamera. Tujuannya: explainer kritis tentang posisi Indonesia menuju pertengahan abad ke-21 sebagai calon kekuatan teknologi dunia.

## Spesifikasi Produksi

| Item | Ketetapan |
|------|-----------|
| **Format** | Vertikal 9:16 (TikTok/Reels/Shorts) |
| **Durasi** | ~75–78 detik (satu menit lebih belasan detik) |
| **Gaya bahasa** | Roasting Gen Z, tajam, nasionalis-kritis, **0% formal kaku** (acu: `skripstyleversiku.txt`) |
| **Fokus** | **Teknologi Indonesia** (QRIS, ekonomi digital, adopsi AI, kesenjangan digital, infrastruktur) |
| **Audio / Voiceover** | **Direkam sendiri oleh klien.** AI menyiapkan: skrip teks, rekomendasi SFX, visual sinkron, beat mapping, BGM sesuai momentum. |
| **Tool** | Remotion (React + TypeScript), aset minimal |
| **Prinsip data** | Hanya angka **terverifikasi** di layar; proyeksi wajib dilabeli "proyeksi". Anti-halusinasi. |

> Detail konsep: `concept.md` · Skrip final: `skrip_final.md` · Pola referensi + psikologi FYP: `preferensi.md`

## Maksud & Tujuan

- Menyajikan narasi **kritis & berbasis bukti** tentang potensi Indonesia di bidang teknologi — bukan euforia tanpa dasar.
- Menghindari misinformasi: klaim spekulatif (mis. "Google pindah ke Indonesia") **dibuang**; hanya fakta terbit & proyeksi berlabel yang dipakai.
- Memicu **debat & perbincangan publik** yang sehat, menambah wawasan, dan membekas lama di ingatan penonton.

## Audiens

- **Inti:** Gen Z pertengahan–akhir.
- **Cakupan:** Milenial akhir sampai Gen Alpha.
- **Opsional:** Milenial lawas ke atas.
- Karakter audiens: warga negara Indonesia, suka Indonesia (walau tidak selalu setuju dengan pemerintah saat ini), tertarik pada teknologi.

## Metrik Sukses

1. **Views meledak** (reach maksimal).
2. **Memicu perdebatan** / perbedaan pendapat di kolom komentar.
3. **Meningkatkan kesadaran & wawasan** tentang topik.
4. **Diingat lama** — menjadi pemicu tren perbincangan.

## Batasan & Prinsip

- **Tidak ada kode** sampai Phase 5 dan setelah konfirmasi eksplisit (READY/PROCEED).
- Setiap phase **berhenti & menunggu** input klien; tidak boleh lompat phase.
- **Setiap phase** wajib meminta referensi eksternal (link/pola visual) untuk mengurangi halusinasi.
- Prinsip visual: **"0% bahasa, 100% paham"** — penonton yang mengerti visual tapi tidak paham bahasa percakapan harus tetap menangkap maksudnya.
- Visual **interaktif, dinamis, banyak gerak**; anti-monoton, anti-statis, tidak sekadar "orang bicara".
- Sebisa mungkin **React/Remotion murni**, tanpa aset eksternal berat.

## Alur Kerja (State Machine)

| Phase | Nama | Status |
|---|---|---|
| 1 | Discovery & Brainstorming | ✅ Selesai |
| 2 | Scoping & Idea Refinement | ✅ Selesai |
| 3 | Psychological Blueprint | ⏳ Menunggu approval |
| 4 | Cinematic Visualization | ⏳ Belum |
| 5 | Code Generation (Execution) | 🔒 Terkunci sampai Phase 5 |

## Struktur Folder

```
armuzzindotech/
├── project.md      # maksud keseluruhan (file ini)
├── concept.md      # detail konsep "Jendela Peluang"
├── progress.md     # log progres per phase (living document)
└── (menyusul)      # scaffold Remotion dibuat di Phase 5
```

## Status Saat Ini

Phase 1 & 2 selesai. Konsep & scoping terkunci. **Menunggu:** (a) referensi visual/narasi dari klien, (b) approval untuk masuk Phase 3.
