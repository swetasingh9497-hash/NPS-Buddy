"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  years: number;
  futureSavings: number;
};

export default function GrowthChart({
  years,
  futureSavings,
}: Props) {
  // ✅ Prevent invalid years
  if (!years || years <= 0) {
    return (
      <div className="h-80 flex items-center justify-center text-gray-400">
        No data available
      </div>
    );
  }

  // ✅ Prevent NaN futureSavings
  const safeFutureSavings = isNaN(futureSavings)
    ? 0
    : futureSavings;

  // ✅ Safe data generation
  const data = Array.from({ length: years }, (_, i) => ({
    year: i + 1,
    amount: Math.max(
      0,
      (safeFutureSavings / years) * (i + 1)
    ),
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          
          {/* ✅ Safe Tooltip */}
          <Tooltip
            formatter={(value: any) =>
              `₹${Number(value || 0).toLocaleString()}`
            }
          />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#1E3A8A"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
