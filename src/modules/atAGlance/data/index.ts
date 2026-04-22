
export const BAR_MAX = 1400;

export const revenueData = [
  { year: 2025, value: 1146.4, color: "#162f29" },
  { year: 2024, value: 1048.9, color: "#fcb44a" },
];

export const productRevenueData = [
  {
    year: 2025,
    total: 1146.4,
    segments: [
      { key: "flour", value: 651.8, color: "#162f29" },
      { key: "feed", value: 351.7, color: "#fcb44a" },
      { key: "bran", value: 142.9, color: "#e0e2e3" },
    ],
  },
  {
    year: 2024,
    total: 1048.9,
    segments: [
      { key: "flour", value: 311.9, color: "#162f29" },
      { key: "feed", value: 599.1, color: "#fcb44a" },
      { key: "bran", value: 137.8, color: "#e0e2e3" },
    ],
  },
];

export const profitData = [
  {
    key: "grossProfit",
    rows: [
      { year: 2025, value: 482.2, color: "#162f29", textColor: "#ffffff" },
      { year: 2024, value: 457.1, color: "#fcb44a", textColor: "#ffffff" },
      { year: 2023, value: 413.1, color: "#9a9ea0", textColor: "#ffffff" },
    ],
  },
  {
    key: "operatingProfit",
    rows: [
      { year: 2025, value: 339.7, color: "#162f29", textColor: "#ffffff" },
      { year: 2024, value: 318.5, color: "#fcb44a", textColor: "#ffffff" },
      { year: 2023, value: 287.0, color: "#9a9ea0", textColor: "#ffffff" },
    ],
  },
  {
    key: "netProfit",
    rows: [
      { year: 2025, value: 277.4, color: "#162f29", textColor: "#ffffff" },
      { year: 2024, value: 250.9, color: "#fcb44a", textColor: "#ffffff" },
      { year: 2023, value: 220.2, color: "#9a9ea0", textColor: "#ffffff" },
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
      values: { 2025: 532.41, 2024: 472.4 },
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
      color: "#6c7175",
      textColor: "#ffffff",
      hasFootnote: false,
      values: { 2025: 125.7, 2024: 117.9 },
    },
    {
      key: "alAhsa",
      color: "#9a9ea0",
      textColor: "#162f29",
      hasFootnote: false,
      values: { 2025: 124.2, 2024: 128.9 },
    },
  ],
  totals: { 2025: 1146.4, 2024: 1048.9 },
};

export const GEO_BAR_MAX = 580;

export const RADIUS = 45;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;