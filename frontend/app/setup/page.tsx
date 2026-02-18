"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../../components/Card";

export default function SetupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !age || !annualIncome || !currentSavings) {
      alert("Please fill all fields");
      return;
    }

    const data = {
      name,
      age: Number(age),
      monthlyIncome: Number(annualIncome) / 12, // ✅ IMPORTANT
      currentSavings: Number(currentSavings),
    };

    localStorage.setItem("retirement-data", JSON.stringify(data));

    router.push("/");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-brand-lightbg dark:bg-brand-darkbg transition-colors duration-300">
      <Card>
        <h2 className="text-2xl font-bold mb-6">
          Welcome to NPS Buddy
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-700 dark:text-white"
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-700 dark:text-white"
          />

          <input
            type="number"
            placeholder="Annual Income (₹)"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-700 dark:text-white"
          />

          <input
            type="number"
            placeholder="Current Retirement Savings (₹)"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-700 dark:text-white"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-brand-primary text-white hover:opacity-90 transition"
          >
            Get Started
          </button>

        </form>
      </Card>
    </main>
  );
}
