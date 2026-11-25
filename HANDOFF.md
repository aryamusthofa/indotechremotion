# HANDOFF — Lanjutkan di Sesi Baru

> File ini untuk melanjutkan proyek di sesi baru (konteks di-reset agar tidak kena rate limit / free-tier cap provider). Baca file ini + `project.md` + `concept.md` + `progress.md`, lalu lanjut.

## Konteks Singkat

Kita sedang memproduksi video animasi berbasis kode (Remotion React + TypeScript), format TikTok vertikal 9:16, berjudul kerja **"Jendela Peluang"** — explainer **kritis** tentang potensi Indonesia menuju pertengahan abad ke-21 (~2050) sebagai kekuatan teknologi/superpower.

Lokasi kerja: `/home/master/armuzzindotech`

## Persona & Aturan (WAJIB dipertahankan)

- Persona: **Elite Motion Director + Cognitive Psychologist + Senior Remotion Developer**.
- Bahasa: **Indonesia yang asik, profesional, terstruktur, natural**.
- **Tidak ada kode** sampai Phase 5 + konfirmasi eksplisit klien ("GAS BUAT KODE").
- **STOP & tunggu** di akhir setiap phase; jangan lompat/auto-complete phase.
- **Setiap phase** minta referensi eksternal (link/pola visual) untuk mengurangi halusinasi.

## Status Phase

- ✅ Phase 1 — Discovery & Brainstorming (selesai, arah "Jendela Peluang" disepakati)
- ✅ Phase 2 — Scoping & Idea Refinement (selesai)
- ⏳ **Phase 3 — Psychological Blueprint** ← LANJUT DI SINI
- ⏳ Phase 4 — Cinematic Visualization (belum)
- 🔒 Phase 5 — Code Generation (terkunci)

## Keputusan Terkunci (Phase 2)

- **Timeline:** fokus utama puncak potensi ~2050; era 1990–2000an disisipkan **tipis** sebagai titik awal.
- **Nada:** lebih **kritis**, dirancang memicu **views meledak + debat**.
- **Durasi:** **67 detik** (boleh sedikit lebih).
- **Audiens:** Milenial akhir → Gen Alpha, inti Gen Z pertengahan–akhir; milenial lawas opsional. WNI, cinta Indonesia (walau kritis pada pemerintah), tertarik teknologi.
- **Goal:** views meledak + memicu perbedaan pendapat/debat; menambah kesadaran & wawasan; mudah diingat; memicu tren perbincangan.
- **Visual:** interaktif, banyak gerak, dinamis; **"0% bahasa, 100% paham"**; anti-monoton/statis; bercerita lewat gambar.
- **Brand guideline:** belum ada.
- **Referensi visual/narasi:** akan dikirim klien secara terpisah.

## Data Riset Siap Pakai (fakta vs proyeksi)

- Populasi ~287 juta (2026) — Fakta (IMF/Wikipedia)
- Ekonomi terbesar SEA; GDP ~US$1,58 T nominal / ~US$5,48 T PPP; #17 nominal · #7 PPP — Fakta (IMF)
- Pertumbuhan ~5,1% (2025) — Fakta (BPS/World Bank)
- Ekonomi digital Indonesia GMV ~US$119 M (2026) — Fakta (e-Conomy SEA 2026, Google/Temasek/Bain)
- Proyeksi ekonomi digital 2030 ~US$180–200 M — Proyeksi
- SEA digital economy tumbuh 17% (2026), menuju US$1 T (2035) — Fakta+Proyeksi
- Pengguna GenAI SEA 243 juta (58% populasi kerja) — Fakta
- ~80% modal privat ke perusahaan AI (H1 2025→H1 2026) — Fakta (Bain)
- Indonesia #4 ekonomi dunia ~2050 — Proyeksi (PwC/Goldman, **perlu verifikasi** sebelum masuk layar)

## Gap / Sisi Kontra (untuk tensi naratif)

- Adopsi AI Indonesia paling dangkal di antara 6 negara SEA
- Pendanaan privat langka; manufaktur -~300rb job sejak 2023
- 81% pekerjaan informal
- Produktivitas & CPI ranking ~99 jadi penghambat

## Langkah Berikutnya

1. Jalankan **Phase 3 — Psychological Blueprint**: creative brief, job desk, script, plot/flow, Hook 3 detik, value proposition, pros/cons.
2. Minta konfirmasi klien + referensi UI/asset.
3. Setelah approve → Phase 4 (Cinematic Visualization) → Phase 5 (kode).

## Catatan Teknis

- Error terakhir: `AI.Error.RateLimit: Provider returned error` (provider-side, free-tier cap). Bukan bug proyek.
- Mitigasi: sesi baru + jaga pesan tidak terlalu panjang.
