// src/pages/Home.tsx
import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import RightFeed from '../components/layout/RightFeed';
import DatacenterSection from '../components/DatacenterSection';
import GpuGrid from '../components/GpuGrid';
import { UIProvider } from '../context/UIContext';
import { WalletProvider } from '../components/wallet/WalletProvider';
import { GPUDataProvider } from '../context/GPUDataContext';
import HeroSection from '../components/layout/HeroSection';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <UIProvider>
      <WalletProvider>
        <GPUDataProvider>
          <div className="min-h-screen bg-black text-white">
            <Sidebar />
            <Header/>
            
            <main className="pt-0 pl-0 md:pl-56 pr-0 xl:pr-80 transition-all duration-300">
              {/* Hero Section - Full width with its own padding */}
              <div className=" pt-6 pb-4">
                <HeroSection />
              </div>

              {/* Datacenter Section - Full width with its own padding */}
              <div className="pb-4">
                <DatacenterSection />
              </div>

              {/* GPU Grid - Full width with consistent padding */}
              <div className="pb-6">
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