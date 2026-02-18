"use client";

import { useState } from "react";
import Card from "../../components/Card";
import { Mic } from "lucide-react";
import FloatingAIAvatar from "@/components/FloatingAIAvatar"; // ✅ Added

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <>
      <div className="space-y-6">

        {/* 🟢 PROFESSIONAL HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              NPS Retirement Assistant
            </h1>
            <p className="text-sm text-gray-400">
              AI-powered financial guidance
            </p>
          </div>

          <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
            ● Online
          </span>
        </div>

        <Card>

          {/* 🟢 CHAT MESSAGES SECTION */}
          <div className="h-96 overflow-y-auto space-y-4 mb-4 px-2">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                <div className="text-4xl mb-4">💬</div>
                <p className="text-lg">Start a conversation</p>
                <p className="text-sm">
                  Ask about NPS, retirement corpus, or savings strategy.
                </p>
              </div>
            )}

            {messages.map((msg, index) => (
              <div key={index} className="flex justify-end">
                <div
                  className="
                    max-w-[70%]
                    px-4 py-3
                    rounded-2xl
                    text-sm
                    shadow-sm
                    bg-brand-primary
                    text-white
                  "
                >
                  {msg}
                </div>
              </div>
            ))}
          </div>

          {/* 🟢 INPUT SECTION */}
          <div className="flex items-center gap-3 mt-4">
            <div className="relative flex-1">

              <input
                type="text"
                placeholder="Ask about retirement..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="
                  w-full
                  px-4
                  pr-12
                  py-3
                  rounded-xl
                  bg-slate-700
                  text-white
                  placeholder-gray-400
                  border
                  border-slate-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand-primary
                  transition-all
                "
              />

              {/* 🎤 Microphone Button */}
              <button
                type="button"
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  hover:text-brand-secondary
                  transition
                "
              >
                <Mic size={20} />
              </button>

            </div>

            <button
              onClick={sendMessage}
              className="
                bg-brand-primary
                hover:bg-brand-secondary
                text-white
                px-5
                py-3
                rounded-xl
                transition-all
              "
            >
              Send
            </button>
          </div>

        </Card>

      </div>

      {/* ✅ Floating Snapchat-style AI Avatar */}
      <FloatingAIAvatar />
    </>
  );
}
