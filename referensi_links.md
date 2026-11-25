# DAFTAR LENGKAP LINK REFERENSI — Jendela Peluang

> Arsip permanen semua link referensi video yang dikirim klien (Instagram, YouTube, TikTok).
> Diverifikasi ulang via oEmbed pada 24 Nov 2026. **Total: 11 link.**
>
> Catatan: ini **referensi visual/narasi**, bukan sumber data statistik.
> Sumber data (DataReportal, e-Conomy SEA, BI, dll.) ada di `concept.md`.

---

## Batch 1 — Style, pembawaan, & originalitas (3 link)

| # | Platform | Link | Author | Judul / Tema | Peran di project |
|---|----------|------|--------|--------------|------------------|
| 1 | TikTok | https://vm.tiktok.com/ZSsd16aDk/ | — (metadata terbatas) | Video ID `7708310048480496903` | Referensi umum; sulit dibaca tanpa login |
| 2 | YouTube Shorts | https://youtube.com/shorts/F5r4JZIj--U | Raden Riansyah | "bro meniru dunia gta" | Referensi video original yang bisa ditiru style-nya |
| 3 | Instagram Reel | https://www.instagram.com/reel/DfzFzaYAQ4U/ | isseinugroho | "Bro Nge-Roasting Raja Sawit, di Depan Kamera Secara Live" | Referensi bahasa & pembawaan roasting |

## Batch 2 — Motion, frame-by-frame, camera moving, ekspresi (4 link)

| # | Platform | Link | Author | Judul / Tema | Peran di project |
|---|----------|------|--------|--------------|------------------|
| 4 | YouTube Shorts | https://youtube.com/shorts/2ZbeDcRU8ZU | Sejengkal Peta | "Kenapa Kalimantan Nggak Punya Harimau, Padahal Bali Pernah Punya?" | Referensi visual motion + curiosity-gap geografi |
| 5 | Instagram Reel | https://www.instagram.com/reel/Df1Bfwyxn33/ | cjust_a_stick | Isu Hashim Djojohadikusumo, Prabowo, badak Jawa, Ujung Kulon, WALHI | Referensi frame-by-frame + edukasi isu publik |
| 6 | YouTube Shorts | https://youtube.com/shorts/uh6-_Xx0dVk | NexusVlog Challenge | "Turning a shoebox into home mini projector" | Referensi camera moving / transformasi before-after |
| 7 | Instagram Reel | https://www.instagram.com/reel/DfwXFsDu11Q/ | dunia_ngonten | "Mau kaya? Nyawit aja! 😂" | Referensi ekspresi + humor/satire kasual |

## Batch 3 — Geography / peta (4 link)

| # | Platform | Link | Author | Judul / Tema | Peran di project |
|---|----------|------|--------|--------------|------------------|
| 8 | YouTube Shorts | https://youtube.com/shorts/mMXccHrmPfg | Geo Bytes | "How BIG Is Indonesia? 🇮🇩" | Peta satelit 3D, Indonesia glow, label raksasa miring |
| 9 | YouTube Shorts | https://youtube.com/shorts/08gDX8rHvzA | InfoEkspress | "Seberapa Besar Indonesia Sebenarnya? 🇮🇩🌍" | Peta politik pastel, Indonesia merah, garis khatulistiwa, zoom-out compare |
| 10 | Instagram Reel | https://www.instagram.com/reel/DSrxrIuE3S9/ | ucpsx1 | "Menjelajahi 38 Provinsi Indonesia dari Barat ke Timur!" | Sapuan barat→timur progresif, satelit terrain, subtitle bold outlined |
| 11 | Instagram Reel | https://www.instagram.com/reel/Dd_SE9bNSg5/ | faktasemenitofc | "Ini Tembusan Jika Kamu Menggali Lubang Dari Indonesia 🤔" | Peta malam biru, banner judul merah, properti ilustrasi, chip lokasi |

---

## DNA yang sudah diekstrak

- **Batch 1–2** → `preferensi.md` §2–§3.5 (hook, bahasa visual, pacing, emosi, psikologi FYP, aturan roasting).
- **Batch 3** → `preferensi.md` §3.6 + implementasi `video/src/ui/GeoMap.tsx` (peta satelit stilisasi: laut gelap, daratan tetangga muted, Indonesia merah + rim glow, label miring, khatulistiwa, sapuan barat→timur, kanvas membulat).

## Cara baca ulang link

```bash
# YouTube
curl -s "https://www.youtube.com/oembed?format=json&url=https://youtube.com/shorts/VIDEO_ID"

# Instagram (tanpa login)
curl -s "https://www.instagram.com/api/v1/oembed?url=https://www.instagram.com/reel/SHORTCODE/"

# TikTok (metadata terbatas tanpa login)
curl -s "https://www.tiktok.com/oembed?url=https://vm.tiktok.com/SHORTCODE/"
```
