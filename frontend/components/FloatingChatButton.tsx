"use client";

import { useState } from "react";
import AIPensionChat from "./AIPensionChat";

export default function FloatingChatButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#1E3A8A] text-white shadow-xl flex items-center justify-center text-xl hover:bg-blue-900 transition z-50"
            >
                💬
            </button>

            {/* Slide Panel */}
            {open && (
                <div className="fixed bottom-6 right-6 w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col animate-slideUp">

                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="font-semibold text-[#1E3A8A]">
                            AI Pension Copilot
                        </h3>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Chat Content */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <AIPensionChat />
                    </div>
                </div>
            )}
        </>
    );
}
