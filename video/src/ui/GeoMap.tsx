import React from "react";

/**
 * GeoMap — peta satelit STILISASI Indonesia (ala Google Earth / ucpsx / Geo Bytes).
 *
 * DNA yang ditiru dari 4 referensi geografi:
 *  - Laut gelap teal-navy + gradasi bathymetry + shelf glow cyan
 *  - Daratan tetangga MUTED hijau gelap (Asia daratan, Malaysia, Filipina, Australia, PNG)
 *  - Indonesia MERAH dengan rim glow putih + drop shadow merah
 *  - Label raksasa "INDONESIA" miring mengikuti busur barat→timur
 *  - Garis khatulistiwa putus-putus merah
 *  - Sapuan BARAT→TIMUR progresif (prop `reveal`) — ala animasi "38 Provinsi"
 *  - Sudut kanvas membulat (soft edge)
 *
 * Semua murni SVG — tanpa aset eksternal. Proyeksi sederhana:
 *   x = (lon − 90) × 18.18 ,  y = (12 − lat) × 14 ,  viewBox 0 0 1030 420.
 */

const pt = (lon: number, lat: number): [number, number] => [
  Math.round((lon - 90) * 18.18),
  Math.round((12 - lat) * 14),
];

const poly = (coords: [number, number][]): string =>
  coords.map(([lo, la]) => pt(lo, la).join(",")).join(" ");

/* ======================= KEPULAUAN INDONESIA (merah) ======================= */

// Sumatra — pita lebar NW→SE
const SUMATERA: [number, number][] = [
  [95.2, 5.5], [98.0, 4.0], [100.5, 2.5], [102.5, 1.0], [104.0, -0.8],
  [105.2, -2.8], [106.0, -5.2], [105.6, -5.9], [104.2, -5.3], [102.3, -3.6],
  [100.3, -1.1], [98.7, 1.1], [97.0, 2.9], [95.1, 4.6],
];

// Jawa — pulau panjang tipis, jalur utara & selatan beda ~1.5°
const JAWA: [number, number][] = [
  [105.2, -6.0], [106.8, -5.9], [108.8, -6.5], [110.6, -6.8], [112.7, -7.0],
  [114.4, -7.6], [113.8, -8.3], [112.4, -8.3], [110.4, -8.0], [108.4, -7.7],
  [106.4, -7.2], [105.1, -6.7],
];

// Kalimantan — digambar sebagai PULAU UTUH, lalu serpihan Malaysia (muted)
// ditumpuk di atasnya, sehingga yang tersisa merah = Kalimantan Indonesia.
const BORNEO_FULL: [number, number][] = [
  [108.9, 1.4], [111.0, 2.0], [113.5, 3.5], [115.5, 5.3], [117.0, 6.3],
  [118.5, 5.9], [119.0, 5.0], [117.8, 4.2], [118.2, 3.0], [118.0, 1.5],
  [117.4, -0.5], [117.0, -2.5], [116.0, -3.9], [114.6, -4.2], [113.0, -3.6],
  [111.5, -2.9], [110.0, -2.2], [109.0, -1.0], [108.6, 0.2],
];
const BORNEO_MY: [number, number][] = [
  [108.9, 1.4], [111.0, 2.0], [113.5, 3.5], [115.5, 5.3], [117.0, 6.3],
  [118.5, 5.9], [119.0, 5.0], [117.8, 4.2], [116.5, 3.0], [114.5, 1.8],
  [112.0, 1.2], [110.0, 0.8], [109.3, 1.0],
];

// Sulawesi — 4 lengan (huruf K) yang saling bertemu di tengah
const SULAWESI_ARMS: [number, number][][] = [
  // lengan utara (Minahasa)
  [[121.3, 0.3], [125.0, 1.0], [125.4, 1.7], [121.6, 1.0]],
  // lengan timur
  [[122.6, -1.0], [125.0, -1.9], [125.2, -2.7], [122.8, -1.8]],
  // lengan tenggara
  [[122.0, -0.8], [123.0, -0.8], [123.4, -4.4], [122.4, -4.8], [121.8, -4.0]],
  // lengan barat-daya
  [[121.4, -0.8], [120.6, -1.4], [119.2, -3.2], [119.8, -3.8], [121.6, -1.6]],
  // pusat
  [[121.5, -0.5], [123.0, -0.5], [123.0, -1.5], [121.5, -1.5]],
];

// Papua (Nugini Indonesia) — Bird's head + badan sampai batas 141°BT
const PAPUA: [number, number][] = [
  [130.5, -0.6], [132.5, -0.9], [134.2, -1.1], [135.8, -2.3], [137.5, -2.1],
  [139.0, -2.3], [140.9, -2.5], [141.0, -9.0], [139.3, -8.2], [137.8, -8.4],
  [136.3, -5.8], [134.8, -4.3], [133.3, -3.5], [132.0, -2.9], [131.0, -2.5],
  [130.2, -1.5],
];

// Nusa Tenggara & Maluku — pulau kecil (polygon sederhana, proporsional)
const BALI: [number, number][] = [[115.0, -8.1], [115.6, -8.15], [115.7, -8.65], [115.0, -8.6]];
const LOMBOK: [number, number][] = [[116.0, -8.25], [116.6, -8.3], [116.7, -8.75], [116.1, -8.7]];
const SUMBAWA: [number, number][] = [[117.0, -8.35], [118.2, -8.4], [118.3, -9.0], [117.1, -8.95]];
const FLORES: [number, number][] = [[120.9, -8.4], [121.9, -8.25], [122.6, -8.45], [121.8, -8.85], [120.9, -8.8]];
const TIMOR_ID: [number, number][] = [[123.2, -9.2], [124.5, -9.3], [125.0, -9.6], [123.6, -9.95], [123.0, -9.6]];
const SUMBA: [number, number][] = [[119.5, -9.5], [120.4, -9.45], [120.5, -10.0], [119.6, -10.0]];
const HALMAHERA: [number, number][] = [[127.7, 0.8], [128.4, 1.1], [128.7, 0.4], [128.2, -0.6], [127.7, -0.2]];
const AMBON: [number, number][] = [[127.9, -3.05], [128.6, -3.35], [128.4, -3.85], [127.8, -3.6]];
const SERAM: [number, number][] = [[128.9, -2.75], [130.0, -2.85], [129.9, -3.35], [128.9, -3.25]];
const BURU: [number, number][] = [[126.6, -2.95], [127.4, -3.05], [127.3, -3.7], [126.6, -3.6]];

const INDONESIA_ISLANDS: [number, number][][] = [
  SUMATERA, JAWA, BORNEO_FULL, PAPUA,
  BALI, LOMBOK, SUMBAWA, FLORES, TIMOR_ID, SUMBA,
  HALMAHERA, AMBON, SERAM, BURU,
  ...SULAWESI_ARMS,
];

/* ================== DARATAN TETANGGA (muted, konteks) ================== */
const ASIA_DARATAN: [number, number][] = [
  [90, 12.2], [94.5, 9.0], [95.2, 5.5], [98.0, 4.0], [100.5, 2.5],
  [103.0, 1.4], [104.5, 3.0], [105.5, 6.0], [106.5, 10.0], [107.5, 12.2],
];
const MINDANAO: [number, number][] = [
  [124, 7], [126.5, 7.5], [126.6, 6], [125, 5.6], [124, 6.3],
];
const PALAWAN: [number, number][] = [
  [117.5, 9.5], [118.5, 10.9], [119.5, 11], [118.6, 9.4], [117.8, 8.9],
];
const PNG: [number, number][] = [
  [141.0, -2.5], [144, -4], [147, -6.5], [147, -9.5], [144, -7.8], [141.0, -9.1],
];
const AUSTRALIA: [number, number][] = [
  [113.5, -11.5], [121, -13.5], [125, -14.5], [130, -12], [132, -11.5],
  [136, -12], [142, -10.8], [145, -14.5], [146.8, -18], [113.5, -18],
];

/* ============================== KOMPONEN ============================== */
export const GeoMap: React.FC<{
  width: number;
  /** 0..1 sapuan barat→timur untuk daratan Indonesia (1 = utuh) */
  reveal?: number;
  /** fade label raksasa "INDONESIA" (0..1) */
  labelOpacity?: number;
  /** garis khatulistiwa putus-putus */
  equator?: boolean;
  /** warna dasar fill Indonesia (gradient merah) */
  fillColor?: string;
  /** warna rim */
  glowColor?: string;
  /** intensitas shelf glow cyan (0..1) */
  shelf?: number;
}> = ({
  width,
  reveal = 1,
  labelOpacity = 0,
  equator = false,
  fillColor = "#C41E3A",
  glowColor = "#FFFFFF",
  shelf = 1,
}) => {
  const VB_W = 1030;
  const VB_H = 420;
  const height = (VB_H / VB_W) * width;
  const r = Math.max(0, Math.min(1, reveal));

  return (
    <svg width={width} height={height} viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id="geoOcean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E2A3F" />
          <stop offset="55%" stopColor="#0A2133" />
          <stop offset="100%" stopColor="#061626" />
        </linearGradient>
        <radialGradient id="geoShelf" cx="50%" cy="48%" r="60%">
          <stop offset="0%" stopColor="#1B4A5E" stopOpacity={0.5 * shelf} />
          <stop offset="60%" stopColor="#123647" stopOpacity={0.25 * shelf} />
          <stop offset="100%" stopColor="#0A2133" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="geoRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E23A50" />
          <stop offset="100%" stopColor={fillColor} />
        </linearGradient>
        <filter id="geoGlow" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#FF6B7A" floodOpacity="0.6" />
        </filter>
        <filter id="geoLabelGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#FFFFFF" floodOpacity="0.85" />
        </filter>
        <clipPath id="geoReveal">
          <rect x="0" y="0" width={VB_W * r} height={VB_H} />
        </clipPath>
        <clipPath id="geoRound">
          <rect x="0" y="0" width={VB_W} height={VB_H} rx="26" />
        </clipPath>
      </defs>

      <g clipPath="url(#geoRound)">
        {/* laut */}
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#geoOcean)" />
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#geoShelf)" />

        {/* shelf glow cyan (bathymetry semu) */}
        <g stroke="#35E0D0" fill="none" opacity={0.1 * shelf}>
          {INDONESIA_ISLANDS.map((c, i) => (
            <polygon key={i} points={poly(c)} strokeWidth={26} />
          ))}
        </g>
        <g stroke="#35E0D0" fill="none" opacity={0.14 * shelf}>
          {INDONESIA_ISLANDS.map((c, i) => (
            <polygon key={i} points={poly(c)} strokeWidth={12} />
          ))}
        </g>

        {/* daratan tetangga (muted) */}
        <g fill="#2A4238" stroke="#3A5A4B" strokeWidth="1.5">
          <polygon points={poly(ASIA_DARATAN)} />
          <polygon points={poly(MINDANAO)} />
          <polygon points={poly(PALAWAN)} />
          <polygon points={poly(PNG)} />
          <polygon points={poly(AUSTRALIA)} />
        </g>

        {/* khatulistiwa */}
        {equator ? (
          <line
            x1={0}
            y1={pt(0, 0)[1]}
            x2={VB_W}
            y2={pt(0, 0)[1]}
            stroke="#FF5A5A"
            strokeWidth="2.5"
            strokeDasharray="14 10"
            opacity="0.55"
          />
        ) : null}

        {/* INDONESIA merah — tersapukan barat→timur */}
        <g clipPath="url(#geoReveal)">
          <g fill="url(#geoRed)" stroke={glowColor} strokeWidth="2.2" filter="url(#geoGlow)">
            {INDONESIA_ISLANDS.map((c, i) => (
              <polygon key={i} points={poly(c)} />
            ))}
          </g>
          {/* serpihan Malaysia ditumpuk muted di atas Kalimantan utuh */}
          <polygon points={poly(BORNEO_MY)} fill="#2A4238" stroke="#3A5A4B" strokeWidth="1.5" filter="none" />
        </g>

        {/* label raksasa miring mengikuti busur Sumatra→Jawa→Kalimantan */}
        {labelOpacity > 0.01 ? (
          <text
            x="165"
            y="228"
            transform="rotate(11.5 165 228)"
            fill="#FFFFFF"
            opacity={labelOpacity}
            filter="url(#geoLabelGlow)"
            fontFamily="'Arial Black', 'Inter', system-ui, sans-serif"
            fontWeight="900"
            fontSize="52"
            letterSpacing="2"
          >
            INDONESIA
          </text>
        ) : null}
      </g>
    </svg>
  );
};
