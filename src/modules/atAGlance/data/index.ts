
export const BAR_MAX = 1400;

export const revenueData = [
  { year: 2025, value: 1147.78, color: "#162f29" },
  { year: 2024, value: 1048.85, color: "#fcb44a" },
];

export const productRevenueData = [
  {
    year: 2025,
    total: 1147.78,
    segments: [
      { key: "flour", value: 612.52, color: "#162f29" },
      { key: "feed", value: 389.19, color: "#fcb44a" },
      { key: "bran", value: 146.16, color: "#e0e2e3" },
    ],
  },
  {
    year: 2024,
    total: 1048.85,
    segments: [
      { key: "flour", value: 599.12, color: "#162f29" },
      { key: "feed", value: 311.9, color: "#fcb44a" },
      { key: "bran", value: 137.83, color: "#e0e2e3" },
    ],
  },
];

export const profitData = [
  {
    key: "grossProfit",
    rows: [
      { year: 2025, value: 476.34, color: "#162f29", textColor: "#ffffff" },
      { year: 2024, value: 457.09, color: "#fcb44a", textColor: "#ffffff" },
      { year: 2023, value: 413.14, color: "#9a9ea0", textColor: "#ffffff" },
    ],
  },
  {
    key: "operatingProfit",
    rows: [
      { year: 2025, value: 338.31, color: "#162f29", textColor: "#ffffff" },
      { year: 2024, value: 318.48, color: "#fcb44a", textColor: "#ffffff" },
      { year: 2023, value: 286.96, color: "#9a9ea0", textColor: "#ffffff" },
    ],
  },
  {
    key: "netProfit",
    rows: [
      { year: 2025, value: 275.48, color: "#162f29", textColor: "#ffffff" },
      { year: 2024, value: 250.90, color: "#fcb44a", textColor: "#ffffff" },
      { year: 2023, value: 220.21, color: "#9a9ea0", textColor: "#ffffff" },
    ],
  },
];

export const geoData = {
  years: [2025, 2024],
  regions: [
    {
      key: "jeddah",
      color: "#162f29",
      textColor: "#ffffff",
      hasFootnote: true,
      values: { 2025: 533.85, 2024: 472.41 },
    },
    {
      key: "qassim",
      color: "#fcb44a",
      textColor: "#ffffff",
      hasFootnote: false,
      values: { 2025: 364.0, 2024: 329.60 },
    },
    {
      key: "tabuk",
      color: "#9a9ea0",
      textColor: "#ffffff",
      hasFootnote: false,
      values: { 2025: 125.72, 2024: 117.85 },
    },
    {
      key: "alAhsa",
      color: "#e0e2e3",
      textColor: "#162f29",
      hasFootnote: false,
      values: { 2025: 124.17, 2024: 128.91 },
    },
  ],
  totals: { 2025: 1147.74, 2024: 1048.77 },
};

export const GEO_BAR_MAX = 580;

export const RADIUS = 45;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;