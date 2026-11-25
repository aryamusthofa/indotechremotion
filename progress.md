# PROGRESS LOG — Armuzzindotech

> Living document. Diperbarui bertahap di setiap phase.

## Status Keseluruhan

| Phase | Nama | Status |
|---|---|---|
| 1 | Discovery & Brainstorming | ✅ Selesai |
| 2 | Scoping & Idea Refinement | ✅ Selesai |
| 3 | Psychological Blueprint | ✅ Selesai (direferensi & divalidasi) |
| 4 | Cinematic Visualization | ✅ Disajikan (menunggu approval via dokumen review) |
| 5 | Code Generation (Execution) | ✅ Kode dibangun, typecheck lolos, render still 7 scene OK |

---

## Log

### 2026-11-21 — Phase 1: Discovery & Brainstorming ✅

- Klien mengangkat tema: ekosistem digital & teknologi masa depan Indonesia, potensi jadi pusat teknologi/superpower.
- **Koreksi penting:** klaim "Google pindah ke Indonesia" **dibuang** — tanpa bukti, berisiko misinformasi.
- Arah digeser ke narasi: potensi Indonesia jadi negara superpower (khususnya teknologi), dengan bukti & gap.
- Riset awal dilakukan (e-Conomy SEA 2026, IMF/Wikipedia, Bain) → data fakta vs proyeksi dipisahkan.
- Core concept **"Jendela Peluang"** disepakati sebagai arah.

### 2026-11-21 — Phase 2: Scoping & Idea Refinement ✅

Keputusan klien:
- **Timeline:** (a) puncak potensi ~2050 sebagai fokus utama; (b) era 1990–2000an disisipkan **tipis** sebagai titik awal.
- **Nada:** lebih **kritis**, dirancang untuk berpeluang **meledakkan views**.
- **Durasi:** **67 detik** (boleh sedikit lebih).
- **Audiens:** Milenial akhir → Gen Alpha, inti Gen Z pertengahan–akhir; milenial lawas opsional. WNI, suka Indonesia (walau kritis pada pemerintah), tertarik teknologi.
- **Goal:** views meledak + memicu debat/perbedaan pendapat; menambah kesadaran & wawasan; mudah diingat; memicu tren perbincangan.
- **Visual:** interaktif, banyak gerak, dinamis; **"0% bahasa, 100% paham"**; anti-monoton/statis; bercerita lewat gambar, bukan sekadar orang bicara.
- **Brand guideline:** belum ada.
- **Referensi visual/narasi:** akan dikirim terpisah.

### 2026-11-22 — Referensi Eksternal & Preferensi (via curl/oEmbed)

- ✅ Instagram Reel (`Df1Bfwyxn33`, via oEmbed): penulis Just A Stick (@cjust_a_stick). Isu Hashim Djojohadikusumo, Prabowo, badak Jawa, Ujung Kulon, Alas Purwo, gold mining, WALHI. Edukasi isu lingkungan + kontroversi publik.
- ✅ Instagram Reel (`DfwXFsDu11Q`, via oEmbed): penulis Dunia Ngonten (@dunia_ngonten). Caption "Mau kaya? Nyawit aja! 😂". Humor/satire kasual, judul provokatif.
- ✅ YouTube Shorts (`2ZbeDcRU8ZU`): Judul "Kenapa Kalimantan Nggak Punya Harimau, Padahal Bali Pernah Punya?", penulis Sejengkal Peta (@sejengkalpeta). Gaya: pertanyaan-hook (curiosity gap), edukasi geografi/trivia.
- ✅ YouTube Shorts (`uh6-_Xx0dVk`): Judul "Turning a shoebox into home mini projector #DIYProjector", penulis NexusVlog Challenge. Gaya: transformasi visual, DIY creative hack, before-after.
- ⚠️ TikTok (`vm.tiktok.com/ZSsd16aDk/`): Video ID `7708310048480496903`, format 325×578. Judul/penulis/deskripsi nggak tersedia via oEmbed tanpa login.

✅ File `preferensi.md` diperbarui — semua referensi Instagram & YouTube berhasil dibaca. Sintesis pola umum berlaku untuk video ini dan video selanjutnya.

### 2026-11-22 — Phase 3 Approved + Phase 4 Disajikan + Dokumen Review .docx

- Klien validasi referensi (semua video FYP, masing-masing 20k+ likes) → **Phase 3 disetujui**.
- Klien beralih ke model Alibaba (Qwen3.8 Max) — persona & aturan state machine tetap berlaku.
- **Keputusan audio baru:** voiceover direkam sendiri oleh klien. AI menyiapkan: skrip teks voiceover, rekomendasi SFX, visual sinkron, dan beat mapping. BGM disesuaikan momentum.
- **Phase 4 (Cinematic Visualization) disajikan:** strategi audio + skrip per detik, detail visual frame-by-frame, kamera, transisi (spring/interpolate), palet warna, lighting, beat mapping.
- Atas permintaan klien, dibuat **dokumen review `.docx`** (`JENDELA_PELUANG_Review.docx`) berisi: ringkasan proyek, progress, konsep + bukti data, referensi & pola, Phase 3, Phase 4, dan checklist revisi. Dibangkitkan via Python stdlib (zipfile+XML), tervalidasi well-formed.

**Outstanding:** review klien atas dokumen .docx → isi checklist revisi → approval eksplisit "GAS BUAT KODE" untuk masuk Phase 5.

### 2026-11-22 — REFINEMENT v2 (gaya klien + tech-focus + riset mendalam)

Klien mengirim `skripstyleversiku.txt` (gaya original: roasting Gen Z, tajam, 0% formal). Instruksi: pahami, condongkan ke **teknologi Indonesia**, pertajam kata, picu debat & views jutaan, durasi **~75 detik** (1 menit + belasan detik), sempurnakan & pendekkan, serap pola referensi, **deep research psikologi FYP**, anti-halusinasi + bukti resmi, matangkan sebelum generate kode.

Tindakan yang dilakukan:
- **Deep research + verifikasi fakta** (DataReportal Digital 2025, Wikipedia/Bank Indonesia QRIS, e-Conomy SEA 2026, IMF/BPS). Websearch mati (402) → pakai webfetch sumber resmi.
- **Koreksi anti-halusinasi:** "287 juta pakai internet"→ itu populasi; dipakai **212 juta online + 72 juta offline**. "19 juta kerja abu-abu"→ tak bersumber; diganti **81% informal**. "IQ 78"→ disediakan alternatif **roasting aman** (hindari moderasi TikTok).
- **Tech-focus diperkaya:** QRIS (cross-border Jepang/China/Arab + **diprotes AS/USTR 2025** → pemicu debat kedaulatan digital), adopsi AI terdangkal, internet 29 Mbps, kesenjangan 72 juta offline.
- File diperbarui/dibuat: `concept.md` (v2), **`skrip_final.md`** (baru — skrip VO ~75s + beat mapping + koreksi fakta + tips), `preferensi.md` (+ bagian **Psikologi FYP & Retensi**), `project.md` (+ Spesifikasi Produksi), `progress.md` (log ini).
- **Dokumen `.docx` di-regenerate** ke v2 (skrip final, tech-focus, psikologi FYP, koreksi fakta, visual diperbarui).

**Outstanding:** review klien atas `.docx` v2 + `skrip_final.md` → approval eksplisit **"GAS BUAT KODE"** → Phase 5.

### 2026-11-22 — KLARIFIKASI KLIEN + REFINEMENT v3 (koreksi arah)

Klien mengklarifikasi (dan menegur) bahwa review sebelumnya **kurang matang**:
1. **Semua jokes/sindiran/roasting** dari `skripstyleversiku.txt` harus **dipertahankan** sebisa mungkin.
2. **287 juta populasi + 212 juta internet** → dua-duanya dipakai (bukan dipilih salah satu).
3. **"19 juta lapangan kerja"** = **sindiran ke janji Wapres**, BUKAN data ngawur → dikembalikan sebagai bumbu satire.
4. Next: jangan ambil kesimpulan mentah.

Tindakan korektif:
- **Riset konteks "19 juta lapangan kerja"** via webfetch berita (Bing News): terkonfirmasi = **janji kampanye Prabowo–Gibran (Pilpres 2024)**; pengamat (CELIOS/Bhima Yudhistira) nilai sulit tercapai di tengah PHK; **Gibran mundur 12 Nov 2026**, janji disindir netizen. Sumber: detik, suara.com, tribunnews, pasardana, newsurban. → **satire politik sah & terdokumentasi.**
- `skrip_final.md` ditulis ulang (**v3**): SEMUA jokes/sindiran/roasting dikembalikan (dark humor "kalau negaranya masih ada", joke "2090-an eh 90-an", sindiran "anomali internet cepet buat apa", sarkasme "katanya"/"applaus", satire "19 juta"/"industrialisasi", roasting "IQ 78"). Populasi 287 jt + internet 212 jt + offline 72 jt dipakai berdampingan. Durasi ~78–80s.
- `concept.md`: bagian "Koreksi" di-**reframe** jadi "Klarifikasi" (19 jt = satire sah; 287/212 = komplementer). "Bahan Pemicu Debat" ditambah satire 19 jt & deindustrialisasi.
- `preferensi.md`: tambah **"Satire politik = bumbu FYP"** + aturan roasting yang menghormati pilihan kreatif klien (catatan risiko "IQ 78" tetap ada, keputusan di klien).
- **`.docx` di-regenerate ke v3** (skrip lengkap dgn semua jokes, konteks satire 19 jt, 287+212, verifikasi & sumber berita).

**Outstanding:** review klien atas `.docx` v3 + `skrip_final.md` v3 → approval eksplisit **"GAS BUAT KODE"** → Phase 5.

### 2026-11-23 — PHASE 5 EXECUTED ✅ (kode Remotion dibangun & tervalidasi render)

Klien bilang "gass buat code" + bertanya soal patokan suara (audio belum direkam).

Keputusan teknis (**jawaban patokan suara**):
- Visual & audio DIPISAHKAN lewat **`src/timing.ts`** (single source of truth): durasi beat + subtitle per baris dengan timecode. Jadi audio belum ada pun kode tetap dibangun; nanti tinggal sesuaikan angka timing.
- Audio `<Audio>` dikendalikan **`src/config.ts`** (USE_VOICEOVER / USE_BGM / USE_CLICK_GUIDE). `Root.tsx` pakai `calculateMetadata` → durasi total OTOMATIS ikut panjang voiceover.mp3 bila tersedia.
- **Click guide** (`public/guide-clicks.wav`) digenerate via Python stdlib: beep di awal tiap beat (0,7,15,27,42,60,70s) = patokan recording. Plus `voiceover_placeholder.wav` cadangan.

Project dibangun di `armuzzindotech/video/` (Remotion 4, React 18, TS strict):
- `src/timing.ts`, `theme.ts`, `config.ts`, `Root.tsx`, `JendelaPeluang.tsx`
- 7 scene: Hook, Flashback90s, Sekarang, Bangga, Roasting, Harapan, CTA (SVG murni, tanpa emoji agar aman render headless)
- UI primitives: Counter, PopText, IndonesiaMap (stilisasi SVG), BarChart, QrisBadge, WindowClose, StatPill, Strikethrough
- Subtitles = teks layar (0% bahasa) sekaligus panduan recording; AudioTrack = voiceover+bgm+click

Verifikasi:
- `npm install` sukses (247 paket); **`tsc --noEmit` lolos (exit 0)**.
- Render still 7 frame (tiap scene) — SUKSES via Chrome headless (library sistem NSS/NSPR diambil dari `/tmp/opencode/libs` via LD_LIBRARY_PATH karena sandbox tak punya sudo).
- Check pixel (pngjs): semua frame punya konten, rata-rata warna cocok desain (flashback sepia, roasting merah, CTA biru) → tidak ada frame blank.
- Catatan: model saat ini **tidak mendukung input gambar** → validasi visual dilakukan via analisis pixel, bukan inspeksi langsung. Klien dipersilakan buka `video/out/*.png` untuk melihat pratinjau.

Kendala eksternal (bukan bug): provider (Alibaba) sempat menolak request dengan HTTP 400 `data_inspection_failed` — filter moderasi input, dipicu kata-kata sensitif di riwayat chat (roasting/politik). File proyek aman. Mitigasi: hindari menempel frasa sensitif verbatim di chat; rujuk nama file; bila berulang, buka sesi baru dengan `HANDOFF.md`.

### 2026-11-23 — QA VISUAL Phase 5 ✅ (inspeksi frame langsung + 5 perbaikan)

Model baru support input gambar → 7 frame preview di-inspeksi LANGSUNG (bukan lagi analisis pixel).

Temuan & perbaikan:
- **Harapan (❌ bug layout):** panel split ter-render di luar layar (matematika posisi `calc(50% ± gap)` salah) → hitam doang. **FIX:** rewrite ke flexbox + gap animasi + divider emas. Sekarang split AS&China vs Indonesia tampil benar.
- **Bangga (⚠️ sync meleset):** subtitle "$119 miliar" muncul saat chart sudah hilang; QRIS kesepian. **FIX:** fase di-reschedule ke local frame 0–255 (chart), 255–405 (QRIS+flags stagger), 405–450 (AS protes) sesuai timecode subtitle.
- **Hook (⚠️ lemah):** peta kecil & gelap, angka 2050 keburu hilang. **FIX:** split ditunda ke frame 60, angka bertahan lebih lama, peta 880px + lit 0.55 + warna dasar lebih terang.
- **CTA (⚠️ tabrakan):** "MULAI DARI LO" nabrak border jendela; teks scene nabrak subtitle. **FIX:** jendela naik (top 470, tinggi 540), punchline ke bottom 700, ikon KOMEN ke bottom 120 (di bawah zona subtitle).
- **Lolos:** Flashback90s, Sekarang, Roasting (coretan "KATANYA 19 JUTA" → pill 81% = paling nendang).

Verifikasi ulang: `tsc --noEmit` exit 0; 6 frame di-render ulang & dicek visual → semua OK.

**Draft MP4** dirender di background (untuk latihan recording bareng beep guide).

**Outstanding:** klien tonton draft MP4 → rekam voiceover (panduan timecode `src/timing.ts`) → sync pass (`USE_VOICEOVER=true` + koreksi angka `t`) → render final.

### 2026-11-23 — UPGRADE GEOGRAFI (4 referensi map + SFX) ✅

Klien kirim 4 referensi khusus gaya geografi (bagian intro/tempat): Geo Bytes "How BIG Is Indonesia?", InfoEkspress "Seberapa Besar Indonesia?", ucpsx1 "38 Provinsi Barat→Timur", faktasemenitofc "Gali Lubang Tembus Bumi". Semua kebaca via oEmbed + frame asli (YT `sd1/sd2/sd3` = snapshot 25/50/75%, IG thumbnail).

**DNA yang diekstrak** (tersimpan di `preferensi.md` §3.6): laut gelap teal+bathymetry, daratan tetangga muted, negara fokus MERAH+rim glow putih, label raksasa miring ngikut busur, khatulistiwa putus-putus, sapuan barat→timur, kamera flyover, kanvas sudut membulat, banner judul merah, chip lokasi bendera.

Tindakan:
- **Komponen baru `src/ui/GeoMap.tsx`** — peta satelit stilisasi murni SVG: 15 daratan Indonesia (Sumatra diagonal, Jawa sliver, Kalimantan utuh + serpihan Malaysia muted, Sulawesi 4-lengan huruf-K, Papua bird's-head, Nusa Tenggara & Maluku), laut gradient + shelf cyan, khatulistiwa, label "INDONESIA" miring, sapuan barat→timur via `clipPath` (prop `reveal`), sudut membulat.
- **Integrasi 3 scene:** Hook (peta flyout + label + khatulistiwa), Sekarang (sapuan barat→timur 0→74.6% = proporsi online, pill 72 JT offline), Harapan (peta di panel kanan split). `IndonesiaMap` lama (blob) ditinggalkan di scene geografi.
- **SFX layer baru** (`AudioTrack.tsx` + `config.ts`): whoosh di tiap transisi beat + pop saat data muncul. File digenerate via Python stdlib (`sfx-whoosh.wav`, `sfx-pop.wav`). Toggle `USE_SFX`.
- **Perbaikan tabrakan Harapan:** punchline in-scene dihapus (sudah diucapin lewat subtitle global) → tidak nabrak zona subtitle.

Verifikasi: `tsc --noEmit` exit 0; frame geo-hook, geo-sekarang-late, geo3-harapan di-render & dicek visual → peta kebaca sebagai peta sungguhan, layout bersih.

**Outstanding:** render ulang draft MP4 dengan GeoMap + SFX → klien review → rekam voiceover → sync pass → render final.

### 2026-11-24 — FULL PREVIEW RENDER + QA FIXES ✅

- **Render kualitas penuh** `video/out/jendela-peluang-FULL.mp4`: 9,8 MB · 80,0 detik · 1080×1920 · 30 fps · h264 + AAC 48 kHz stereo · CRF 18 / JPEG 95.
- **Audio terverifikasi:** beep guide di 7 beat (0/7/15/27/42/60/70s), whoosh di 6 transisi, pop di 7 momen data; peak −13,1 dB (aman, no clipping).
- **Fix 1 — Bangga "$0 MILIAR":** blok counter + "#1 ASEAN" disembunyikan sampai local frame 103–113, counter delay 105. Sebelumnya "$0 MILIAR" tampil ~3,7 detik padahal bar ID sudah penuh.
- **Fix 2 — Harapan peta terpotong:** reveal GeoMap dipercepat (`[30, 95]` → 0,35–1), selesai ~3 detik setelah scene masuk. Di detik 63 Papua sudah terlihat.
- **Kontak sheet final:** `video/out/contact-sheet-FULL.png` (10 momen kunci).
- **Arsip referensi:** `referensi_links.md` — 11 link (10 Instagram/YouTube + 1 TikTok) + author + peran; `preferensi.md` tabel referensi dilengkapi dari 7 → 11.

**Outstanding:** klien tonton preview FULL → rekam voiceover (`public/voiceover.mp3`) → sync pass (`USE_VOICEOVER=true`, `USE_CLICK_GUIDE=false`, koreksi `t` di `timing.ts`) → render final upload.
