"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ScoreCircle from "../components/ScoreCircle";
import PensionGapCard from "../components/PensionGapCard";
import AIRecommendationCard from "../components/AIRecommendationCard";
import RetirementSimulator from "../components/RetirementSimulator";
import { calculateRetirement } from "../utils/retirementCalculator";
import Card from "../components/Card";
import FloatingChatButton from "../components/FloatingChatButton";
import GrowthChart from "../components/charts/GrowthChart";
import PensionGapChart from "../components/charts/PensionGapChart";
import AnimatedWrapper from "../components/AnimatedWrapper";
import ThemeToggle from "../components/ThemeToggle";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  const router = useRouter();

  // ✅ CLEAN INITIAL STATE (No hardcoded values)
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    monthlyIncome: 0,
    currentSavings: 0,
  });

  const [showToast, setShowToast] = useState(false);

  // ✅ Load saved data OR redirect to setup
  useEffect(() => {
    const saved = localStorage.getItem("retirement-data");

    if (!saved) {
      router.push("/setup");
    } else {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem("retirement-data");

    setFormData({
      name: "",
      age: 0,
      monthlyIncome: 0,
      currentSavings: 0,
    });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);

    router.push("/setup");
  };

  const {
    futureSavings,
    pensionGap,
    requiredCorpus,
    score,
    risk,
    yearsLeft,
  } = calculateRetirement({
    age: formData.age,
    monthlyIncome: formData.monthlyIncome,
    currentSavings: formData.currentSavings,
  });

  return (
    <PageWrapper>
      <main className="relative min-h-screen transition-colors duration-300">

        <ThemeToggle />

        <div className="max-w-[1200px] mx-auto space-y-8 py-8 px-4 md:px-8">

          {/* ✅ PERSONALIZED HEADER */}
          <h2 className="text-2xl font-semibold mb-4">
            Welcome {formData.name} 👋
          </h2>

          {/* YOUR DETAILS */}
          <Card>
            <h2 className="text-lg font-semibold mb-4">
              Your Details
            </h2>

            <div className="space-y-4">

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-600 mb-1">
                  Current Age
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      age: Number(e.target.value),
                    })
                  }
                  className="w-full h-10 px-3 border rounded-lg bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-600 mb-1">
                  Annual Income (₹)
                </label>
                <input
                  type="number"
                  value={formData.monthlyIncome * 12}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      monthlyIncome: Number(e.target.value) / 12,
                    })
                  }
                  className="w-full h-10 px-3 border rounded-lg bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-600 mb-1">
                  Current Retirement Savings (₹)
                </label>
                <input
                  type="number"
                  value={formData.currentSavings}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentSavings: Number(e.target.value),
                    })
                  }
                  className="w-full h-10 px-3 border rounded-lg bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="w-full h-10 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
                >
                  RESET DATA
                </button>
              </div>

            </div>
          </Card>

          {/* DASHBOARD */}
          <div className="space-y-6">

            <AnimatedWrapper>
              <ScoreCircle score={score} risk={risk} />
            </AnimatedWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <AnimatedWrapper>
                <Card>
                  <PensionGapCard
                    required="₹3.2 Cr"
                    projected={`₹${(futureSavings / 100000).toFixed(2)} Cr`}
                    gap={`₹${(pensionGap / 100000).toFixed(2)} Cr`}
                  />
                </Card>
              </AnimatedWrapper>

              <AnimatedWrapper>
                <Card>
                  <AIRecommendationCard
                    recommendation={`Increase savings by ₹${Math.ceil(
                      pensionGap / (yearsLeft * 12)
                    )} per month to close your retirement gap.`}
                  />
                </Card>
              </AnimatedWrapper>

            </div>

            <AnimatedWrapper>
              <RetirementSimulator
                withoutInvestment="₹18,000 / month"
                withInvestment="₹75,000 / month"
              />
            </AnimatedWrapper>

            <AnimatedWrapper>
              <Card>
                <h2 className="text-lg font-semibold mb-4">
                  Growth Projection
                </h2>
                <GrowthChart
                  years={yearsLeft}
                  futureSavings={futureSavings}
                />
              </Card>
            </AnimatedWrapper>

            <AnimatedWrapper>
              <Card>
                <h2 className="text-lg font-semibold mb-4">
                  Pension Gap Analysis
                </h2>
                <PensionGapChart
                  required={requiredCorpus}
                  projected={futureSavings}
                />
              </Card>
            </AnimatedWrapper>

          </div>
        </div>

        {showToast && (
          <div className="
            fixed 
            bottom-6 
            left-1/2 
            -translate-x-1/2 
            bg-green-500 
            text-white 
            px-6 
            py-3 
            rounded-xl 
            shadow-lg
          ">
            Data Reset Successfully
          </div>
        )}

        <FloatingChatButton />
      </main>
    </PageWrapper>
  );
}
