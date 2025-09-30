// src/components/StatsSection.tsx
import React from 'react';
import { FiUsers, FiGlobe, FiDollarSign, FiTrendingUp } from 'react-icons/fi';

const StatsSection: React.FC = () => {
  const stats = [
    { 
      label: 'Active Users', 
      value: '705K', 
      icon: <FiUsers className="w-5 h-5 text-orange-500" />,
      bgColor: 'bg-gradient-to-r from-orange-500/10 to-transparent'
    },
    { 
      label: 'Total Subnets', 
      value: '11K', 
      icon: <FiGlobe className="w-5 h-5 text-orange-500" />,
      bgColor: 'bg-gradient-to-r from-orange-500/10 to-transparent'
    },
    { 
      label: '$GPU Distributed', 
      value: '1.1m', 
      icon: <FiDollarSign className="w-5 h-5 text-orange-500" />,
      bgColor: 'bg-gradient-to-r from-orange-500/10 to-transparent'
    },
    { 
      label: '$GPU Price', 
      value: '$0.43', 
      icon: <FiDollarSign className="w-5 h-5 text-orange-500" />,
      trend: 'up',
      trendIcon: <FiTrendingUp className="w-4 h-4 text-green-500 ml-1" />,
      bgColor: 'bg-gradient-to-r from-orange-500/10 to-transparent',
      chart: (
        <svg className="h-12 w-24 absolute right-2 bottom-2 opacity-50" viewBox="0 0 100 50">
          <path
            d="M0,50 L10,45 L20,48 L30,40 L40,42 L50,35 L60,30 L70,15 L80,20 L90,5 L100,0"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
          />
        </svg>
      )
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={`relative overflow-hidden bg-[#111111] rounded-lg p-4 border border-gray-800 ${stat.bgColor}`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              {stat.icon}
            </div>
            {stat.trend === 'up' && stat.trendIcon}
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </div>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
          {stat.chart}
        </div>
      ))}
    </div>
  );
};

export default StatsSection;