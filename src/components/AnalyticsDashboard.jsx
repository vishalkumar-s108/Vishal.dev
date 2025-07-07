// src/components/AnalyticsDashboard.jsx
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { analyticsStats } from "../data/analyticsData";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function AnalyticsDashboard() {
  const { visits, avgTime, topPages, deviceSplit, countryStats } = analyticsStats;

  const deviceData = {
    labels: Object.keys(deviceSplit),
    datasets: [
      {
        label: "Device Usage (%)",
        data: Object.values(deviceSplit),
        backgroundColor: ["#60a5fa", "#818cf8"],
      },
    ],
  };

  const topPagesData = {
    labels: topPages.map((p) => p.name),
    datasets: [
      {
        label: "Page Views",
        data: topPages.map((p) => p.views),
        backgroundColor: "#4ade80",
      },
    ],
  };

  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">📈 Analytics</h2>
        <div className="text-center mb-4 space-y-1">
          <p>Total Visits: <strong>{visits}</strong></p>
          <p>Avg Time on Site: <strong>{avgTime}</strong></p>
        </div>

        {/* Top Pages Chart */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center">Top Pages</h3>
          <div style={{ height: "220px" }}>
            <Bar data={topPagesData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Device Usage Pie */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-center">Device Usage</h3>
          <div style={{ height: "220px" }}>
            <Pie data={deviceData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
}
