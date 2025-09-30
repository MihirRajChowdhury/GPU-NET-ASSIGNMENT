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
    <div className="bg-[#111111] border border-gray-800 rounded-lg p-4 flex flex-col justify-between hover:border-orange-500 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{model}</h3>
          <span className="text-xs text-gray-500">#{id}</span>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="/amd-logo.svg" 
            alt="AMD" 
            className="h-5 w-auto" 
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiA4Ij48cGF0aCBmaWxsPSIjRUQ1MDAwIiBkPSJNMCAwaDMydjhoLTMyeiIvPjx0ZXh0IHg9IjE2IiB5PSI2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFNRDwvdGV4dD48L3N2Zz4=';
            }}
          />
          <span className="ml-2 text-sm text-white">EPYCTM 9554</span>
        </div>
      </div>

      {/* Specs */}
      <div className="space-y-3 mb-4 pb-4 border-b border-gray-800">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Storage Type</span>
          <span className="text-white font-medium">nvme</span>
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
              py-1.5 rounded-lg text-sm font-medium transition-all duration-200
              ${multiplier === multi 
                ? 'bg-orange-500 text-white' 
                : 'bg-[#1A1A1A] text-gray-400 hover:bg-gray-800 border border-gray-800'
              }
            `}
          >
            x{multi}
          </button>
        ))}
      </div>

      {/* Price Section */}
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <span className="text-gray-400 mr-1">$</span>
          <span className="text-lg font-bold text-white">{totalPrice}</span>
          <span className="text-xs text-gray-400 ml-1">/ Per Hour</span>
        </div>
      </div>

      {/* Rent Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-all duration-200">
        Rent Now
      </button>
    </div>
  );
};

export default GPUCard;
