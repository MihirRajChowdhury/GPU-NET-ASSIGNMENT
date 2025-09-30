
import { BsArrowUpRight } from 'react-icons/bs';

const DatacenterSection: React.FC = () => {
  const datacenters = [
    { location: 'United States', gpus: 508 },
    { location: 'United Kingdom', gpus: 354 },
    { location: 'United Arab Emirates', gpus: 154 },
    { location: 'Australia', gpus: 104 },
    { location: 'Spain', gpus: 21 },
  ];

  return (
    <section className="bg-black border border-gray-800 rounded-xl p-6 w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h2 className="text-white text-base font-normal">
            Our Datacenter in Glance
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-white text-2xl font-bold">4,254</span>
            <div className="flex items-center gap-1.5">
              <span className="text-orange-500 text-sm font-medium">98.9% Uptime</span>
              <BsArrowUpRight className="w-3.5 h-3.5 text-orange-500" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Datacenter Grid */}
      <div className="grid grid-cols-5 gap-3">
        {datacenters.map((dc, index) => (
          <div 
            key={index} 
            className="bg-[#0A0A0A] border border-gray-800 rounded-lg p-4 hover:border-orange-500/50 transition-all duration-200 cursor-pointer group"
          >
            <div className="text-gray-500 text-xs font-medium mb-1.5 group-hover:text-gray-400 transition-colors">
              {dc.location}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white text-xl font-bold">{dc.gpus}</span>
              <span className="text-gray-500 text-sm font-normal">GPUs</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DatacenterSection;