// src/components/GpuGrid.tsx
import React from 'react';
import GPUCard from './GPUCard/GPUCard';
import { FiChevronDown } from 'react-icons/fi';

const GpuGrid: React.FC = () => {
  const gpuCards = [
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
  ];

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Latest added GPUs</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <select className="bg-[#111111] border border-gray-800 text-gray-400 text-sm rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-orange-500 appearance-none">
              <option>Location</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <select className="bg-[#111111] border border-gray-800 text-gray-400 text-sm rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-orange-500 appearance-none">
              <option>GPU Type</option>
              <option>H100</option>
              <option>A100</option>
              <option>RTX 4090</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <select className="bg-[#111111] border border-gray-800 text-gray-400 text-sm rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-orange-500 appearance-none">
              <option>Storage</option>
              <option>SSD</option>
              <option>NVMe</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {gpuCards.map((card, index) => (
          <GPUCard
            key={`${card.id}-${index}`}
            id={card.id}
            model={card.model}
            gpuRam={card.gpuRam}
            vcpuRam={card.vcpuRam}
            price={card.price}
          />
        ))}
      </div>
    </section>
  );
};

export default GpuGrid;