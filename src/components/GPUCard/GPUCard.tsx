// src/components/GPUCard/GPUCard.tsx
import React, { useState } from 'react';

interface GPUCardProps {
  id: string;
  model: string;
  gpuRam: string;
  vcpuRam: string;
  price: number;
}

const GPUCard: React.FC<GPUCardProps> = ({ id, model, gpuRam, vcpuRam, price }) => {
  const [multiplier, setMultiplier] = useState(1);

  const totalPrice = (price * multiplier).toFixed(2);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 w-[260px] min-h-[360px] flex flex-col justify-between hover:border-orange-500 hover:scale-[1.02] transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{model}</h3>
          <span className="text-xs text-gray-500">#{id}</span>
        </div>
        <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Specs */}
      <div className="space-y-3 mb-4 pb-4 border-b border-gray-800">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Storage Type</span>
          <span className="text-white font-medium">AMD EPYC™ 9554</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">GPU RAM</span>
          <span className="text-white font-medium">{gpuRam}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">vCPU</span>
          <span className="text-white font-medium">48</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">CPU RAM</span>
          <span className="text-white font-medium">{vcpuRam}</span>
        </div>
      </div>

      {/* Multiplier Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[1, 2, 4, 8].map((multi) => (
          <button
            key={multi}
            onClick={() => setMultiplier(multi)}
            className={`
              py-2.5 rounded-lg text-base font-medium transition-all duration-200
              ${multiplier === multi 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
              }
            `}
          >
            x{multi}
          </button>
        ))}
      </div>

      {/* Price Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-2xl font-bold text-white">${totalPrice}</span>
          <span className="text-sm text-gray-400">/Per Hour</span>
        </div>
      </div>

      {/* Rent Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40">
        Rent Now
      </button>
    </div>
  );
};

export default GPUCard;
