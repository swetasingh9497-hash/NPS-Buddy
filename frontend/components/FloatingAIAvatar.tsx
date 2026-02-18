"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function FloatingAIAvatar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🟢 FLOATING AVATAR */}
      <div
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-6
          left-6
          z-50
          cursor-pointer
          group
        "
      >
        <div className="relative">

          {/* Glow Effect */}
          <div className="
            absolute
            inset-0
            rounded-full
            bg-brand-primary
            blur-xl
            opacity-40
            animate-pulse
          "></div>

          {/* Avatar Image */}
          <img
            src="/ai-avatar.png"
            alt="AI Avatar"
            className="
              relative
              w-16
              h-16
              rounded-full
              border-2
              border-white
              shadow-2xl
              hover:scale-110
              transition-all
              duration-300
            "
          />
        </div>
      </div>

      {/* 🟢 AI POPUP PANEL */}
      {open && (
        <div className="
          fixed
          inset-0
          z-50
          flex
          items-end
          justify-center
          bg-black/50
          backdrop-blur-sm
        ">
          <div className="
            w-full
            max-w-md
            bg-slate-900
            rounded-t-3xl
            p-6
            animate-slideUp
            shadow-2xl
          ">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/ai-avatar.png"
                  alt="AI"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-white font-semibold">
                    NPS AI Assistant
                  </h3>
                  <p className="text-sm text-green-400">
                    ● Online
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="text-gray-300 text-sm mb-4">
              Hi 👋 I'm your retirement assistant.
              <br />
              Ask me about NPS, savings, or pension planning.
            </div>

            {/* Action Button */}
            <button
              onClick={() => setOpen(false)}
              className="
                w-full
                bg-brand-primary
                hover:bg-brand-secondary
                text-white
                py-3
                rounded-xl
                transition-all
              "
            >
              Start Chatting
            </button>

          </div>
        </div>
      )}
    </>
  );
}
