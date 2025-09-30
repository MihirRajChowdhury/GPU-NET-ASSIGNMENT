// src/pages/Home.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import RightFeed from '../components/layout/RightFeed';
import StatsSection from '../components/StatsSection';
import DatacenterSection from '../components/DatacenterSection';
import GpuGrid from '../components/GpuGrid';
import { UIProvider } from '../context/UIContext';
import { WalletProvider } from '../components/wallet/WalletProvider';
import { GPUDataProvider } from '../context/GPUDataContext';

const Home: React.FC = () => {
  return (
    <UIProvider>
      <WalletProvider>
        <GPUDataProvider>
          <div className="min-h-screen bg-black text-white">
            <Header />
            <Sidebar />
            
            <main className="pt-16 pl-0 md:pl-56 pr-0 xl:pr-80 transition-all duration-300">
              <div className="p-4 sm:p-6">
                {/* Hero Section */}
                <section className="mb-8">
                  <div className="flex flex-col md:flex-row items-start justify-between">
                    <div className="flex-1">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-orange-500">All in</span>
                        <br />
                        <span className="text-white">One</span>
                        <br />
                        <span className="text-orange-500">GPU</span>
                        <br />
                        <span className="text-white">Ecosystem</span>
                      </h1>
                    </div>
                    <div className="hidden lg:block">
                      <svg className="w-32 h-32 text-orange-500" viewBox="0 0 100 100" fill="none">
                        <path d="M20 50 L50 20 L50 80 Z" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.2"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <p className="text-gray-400 text-lg">
                      Join <span className="text-white font-semibold">11K+ Subnets</span> earning{' '}
                      <span className="text-orange-500 font-semibold">400K $GPUs</span>
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-orange-500/20">
                        Try Astra
                      </button>
                      <span className="text-sm text-gray-400">
                        Generate image & video and chat with industries best trained LLM with{' '}
                        <span className="text-blue-400">ByteDance</span> exclusive partnership
                      </span>
                    </div>
                  </div>
                </section>

                {/* Stats */}
                <StatsSection />

                {/* Datacenter */}
                <DatacenterSection />

                {/* GPU Grid */}
                <GpuGrid />
              </div>
            </main>
            
            <RightFeed />
          </div>
        </GPUDataProvider>
      </WalletProvider>
    </UIProvider>
  );
};

export default Home;