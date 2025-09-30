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
    <div className="bg-[#111111] border border-gray-800 rounded-lg p-4 flex flex-col justify-between hover:border-white transition-all duration-300 w-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-base font-bold text-white mb-0.5">{model}</h3>
          <span className="text-xs text-gray-500">#{id}</span>
        </div>
        <div className="flex items-center justify-center">
          <span className="ml-1.5 text-xs text-white">EPYCTM 9554</span>
        </div>
      </div>

      {/* Specs */}
      <div className="space-y-2 mb-3 pb-3 border-b border-gray-800">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Storage Type</span>
          <span className="text-white font-medium">nvme</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">GPU RAM</span>
          <span className="text-white font-medium">{gpuRam}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">vCPU</span>
          <span className="text-white font-medium">48</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">CPU RAM</span>
          <span className="text-white font-medium">{vcpuRam}</span>
        </div>
      </div>

      {/* Multiplier Buttons */}
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {[1, 2, 4, 8].map((multi) => (
          <button
            key={multi}
            onClick={() => setMultiplier(multi)}
            className={`
              py-1 rounded text-xs font-medium transition-all duration-200
              ${multiplier === multi 
                ? 'bg-white text-black' 
                : 'bg-[#1A1A1A] text-gray-400 hover:bg-gray-800 border border-gray-800'
              }
            `}
          >
            x{multi}
          </button>
        ))}
      </div>

      {/* Price Section */}
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          <span className="text-gray-400 mr-1">$</span>
          <span className="text-base font-bold text-white">{totalPrice}</span>
          <span className="text-xs text-gray-400 ml-1">/ Per Hour</span>
        </div>
      </div>

      {/* Rent Button */}
      <button className="w-full bg-white hover:bg-gray-200 text-black font-medium py-1.5 rounded transition-all duration-200 text-sm">
        Rent Now
      </button>
    </div>
  );
};

export default GPUCard;
