"use client";

import { useState } from "react";
import Card from "../../components/Card";

export default function ProfilePage() {
    const [name, setName] = useState("Vaibhav");
    const [email, setEmail] = useState("vaibhav@email.com");
    const [goalAge, setGoalAge] = useState(60);

    return (
        <div className="space-y-6">

            <h1 className="text-2xl font-bold">
                User Profile
            </h1>

            <Card>
                <div className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Retirement Goal Age
                        </label>
                        <input
                            type="number"
                            value={goalAge}
                            onChange={(e) => setGoalAge(Number(e.target.value))}
                            className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
                        />
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-all duration-200">
                        Save Profile
                    </button>

                </div>
            </Card>

        </div>
    );
}
