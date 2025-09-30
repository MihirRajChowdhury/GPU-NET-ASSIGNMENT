// src/components/DatacenterSection.tsx
import React from 'react';

const DatacenterSection: React.FC = () => {
  const datacenters = [
    { location: 'United States', gpus: 508, flag: '🇺🇸' },
    { location: 'United Kingdom', gpus: 354, flag: '🇬🇧' },
    { location: 'United Arab Emirates', gpus: 154, flag: '🇦🇪' },
    { location: 'Australia', gpus: 104, flag: '🇦🇺' },
    { location: 'Spain', gpus: 21, flag: '🇪🇸' },
  ];

  return (
    <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Our Datacenter In Glance</h2>
          <div className="flex items-center space-x-3 text-sm">
            <span className="text-white font-semibold">4,254</span>
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-500">99% Uptime</span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {datacenters.map((dc, index) => (
          <div 
            key={index} 
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-orange-500 transition-colors"
          >
            <div className="text-3xl mb-2">{dc.flag}</div>
            <h3 className="text-xs text-gray-400 mb-2">{dc.location}</h3>
            <p className="text-xl font-bold text-white">{dc.gpus} <span className="text-sm text-gray-400">GPUs</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DatacenterSection;