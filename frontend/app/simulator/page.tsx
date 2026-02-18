"use client";

import { useState } from "react";
import Card from "../../components/Card";
import GrowthChart from "../../components/charts/GrowthChart";
import CountUp from "react-countup";

export default function SimulatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(20);
  const [roi, setRoi] = useState(10);

  const monthlyRate = roi / 100 / 12;
  const totalMonths = years * 12;

  const estimatedFutureValue =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, totalMonths) - 1) /
      monthlyRate) *
      (1 + monthlyRate));

  return (
    <main className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">
        Retirement Simulator
      </h1>

      {/* SLIDERS */}
      <Card>
        <div className="space-y-6">

          {/* Monthly Investment */}
          <div>
            <label className="block mb-2 font-medium">
              Monthly Investment: ₹{monthlyInvestment}
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={monthlyInvestment}
              onChange={(e) =>
                setMonthlyInvestment(Number(e.target.value))
              }
              className="w-full cursor-pointer"
            />
          </div>

          {/* Years */}
          <div>
            <label className="block mb-2 font-medium">
              Investment Years: {years}
            </label>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={years}
              onChange={(e) =>
                setYears(Number(e.target.value))
              }
              className="w-full cursor-pointer"
            />
          </div>

          {/* ROI */}
          <div>
            <label className="block mb-2 font-medium">
              Expected Return: {roi}%
            </label>
            <input
              type="range"
              min="6"
              max="18"
              step="1"
              value={roi}
              onChange={(e) =>
                setRoi(Number(e.target.value))
              }
              className="w-full cursor-pointer"
            />
          </div>

        </div>
      </Card>

      {/* RESULT + CHART */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">
          Growth Projection
        </h2>

        <div className="text-2xl font-bold text-blue-600 mb-4">
          ₹
          <CountUp
            key={estimatedFutureValue}
            end={Math.round(estimatedFutureValue)}
            duration={1}
            separator=","
          />
        </div>

        {/* ✅ UPDATED PROPS */}
        <GrowthChart
          years={years}
          monthlyInvestment={monthlyInvestment}
          roi={roi}
        />
      </Card>

      {/* CTA */}
      <button
        className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          shadow-md
          hover:bg-blue-700
          transition-all
          duration-300
          hover:scale-105
          active:scale-95
        "
      >
        Adopt This Plan
      </button>
    </main>
  );
}
