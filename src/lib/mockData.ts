export const earningsData = [
  { time: "08:00", expected: 40, actual: 38, gap: 2 },
  { time: "09:00", expected: 55, actual: 42, gap: 13 },
  { time: "10:00", expected: 70, actual: 50, gap: 20 },
  { time: "11:00", expected: 65, actual: 68, gap: -3 }, // Surpassed
  { time: "12:00", expected: 80, actual: 55, gap: 25 }, // Sharp drop (Rain)
  { time: "13:00", expected: 75, actual: 70, gap: 5 },
  { time: "14:00", expected: 60, actual: 58, gap: 2 },
  { time: "15:00", expected: 50, actual: 50, gap: 0 },
  { time: "16:00", expected: 45, actual: 48, gap: -3 },
];

export const weatherData = {
  current: "Rain",
  temp: 18,
  impact: -12, // 12% drop in activity expected
  forecast: [
    { time: "12pm", condition: "Heavy Rain", impact: -25 },
    { time: "2pm", condition: "Drizzle", impact: -8 },
    { time: "4pm", condition: "Clear", impact: 0 },
  ]
};

export const zoneData = [
  { id: 1, name: "Downtown", multiplier: 1.8, demand: "High", color: "#2ac7ff" },
  { id: 2, name: "Business District", multiplier: 1.5, demand: "Normal", color: "#8b5cf6" },
  { id: 3, name: "Airport", multiplier: 2.1, demand: "Critical", color: "#a855f7" },
  { id: 4, name: "Suburbs", multiplier: 1.1, demand: "Low", color: "#666" },
];
