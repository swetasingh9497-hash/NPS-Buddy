"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  required: number;
  projected: number;
};

export default function PensionGapChart({
  required,
  projected,
}: Props) {
  const safeRequired = isNaN(required) ? 0 : required;
  const safeProjected = isNaN(projected) ? 0 : projected;

  const data = [
    { name: "Required", value: safeRequired },
    { name: "Projected", value: safeProjected },
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 10 }}
        >
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />

          {/* X Axis */}
          <XAxis
            dataKey="name"
            stroke="#CBD5E1"
            tick={{ fill: "#CBD5E1", fontSize: 13 }}
          />

          {/* Y Axis */}
          <YAxis
            stroke="#CBD5E1"
            tick={{ fill: "#CBD5E1", fontSize: 13 }}
            tickFormatter={(value) =>
              `₹${Number(value).toLocaleString()}`
            }
          />

          {/* Tooltip */}
          <Tooltip
            formatter={(value: any) =>
              `₹${Number(value || 0).toLocaleString()}`
            }
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "10px",
            }}
            labelStyle={{ color: "#94A3B8" }}
          />

          {/* Bars */}
          <Bar
            dataKey="value"
            radius={[10, 10, 0, 0]}
            fill="#0B3C5D"   // brand-primary
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
