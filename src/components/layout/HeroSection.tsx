import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden py-16 px-6 font-[Inter]">
      <div className="relative max-w-7xl mx-auto grid grid-cols-[1fr,1.2fr] gap-12 items-start">
        
        {/* Left Side */}
        <div className="relative">
          {/* Arrow */}
          <div className="absolute -top-2 -left-10">
            <BsArrowRight className="text-[#ff6600] text-4xl" />
          </div>

          <h1 className="font-extrabold tracking-tight leading-[0.9]">
            <span className="block text-[#ff6600] text-[88px]">All in</span>
            <span className="block text-[#ff6600] text-[88px]">One</span>
            <span className="block text-white text-[88px]">GPU</span>
            <span className="block text-[#ff6600] text-[88px]">Ecosystem</span>
          </h1>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Active Users", value: "705K" },
              { label: "Total Subnets", value: "11K" },
              { label: "$GPU Distributed", value: "1.1m" },
              { label: "$GPU Price", value: "$0.43" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111] border border-[#333] rounded-xl px-4 py-3 text-center"
              >
                <p className="text-[10px] uppercase text-gray-400 font-semibold">
                  {item.label}
                </p>
                <p className="text-xl font-bold mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Join Banner */}
          <div className="bg-[#111] border border-[#333] rounded-xl px-5 py-4 flex items-center gap-4">
            {/* Avatars */}
            <div className="flex -space-x-2">
              {["#3b82f6", "#8b5cf6", "#ec4899"].map((color, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full border-2 border-black`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            <p className="text-sm">
              Join <span className="text-[#ff6600] font-bold">11K+</span>{" "}
              Subnets earning{" "}
              <span className="text-[#ff6600] font-bold">400K $GPUs</span>
            </p>
          </div>

          {/* Astra Banner */}
          <div className="bg-[#111] border border-[#333] rounded-xl px-5 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-500 to-pink-600 text-white font-bold text-lg">
                A
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  <span className="text-white">Try </span>
                  <span className="text-[#ff6600]">Astra</span>
                </h3>
                <p className="text-xs text-gray-400 max-w-xs">
                  Generate image & video and chat with industry’s best trained
                  LLM in exclusive partnership with{" "}
                  <span className="text-blue-400">ByteDance</span>
                </p>
              </div>
            </div>

            <button className="bg-[#ff6600] hover:bg-[#e65c00] text-white text-sm font-semibold px-6 py-2.5 rounded-md shadow-md">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
