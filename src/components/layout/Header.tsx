// src/components/layout/Header.tsx
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-black font-bold text-lg">G</span>
          </div>
          <span className="text-white font-bold text-xl">GPU.NET</span>
        </div>

        {/* Marquee Section */}
        <div className="flex-1 mx-8 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm text-gray-400">
            <span className="inline-block">
              Join 100ps with Astra Quest Now • nVidia RTX 6087 is now available in dApp • 
              Block Rate has been doubled now • Earn 5000 Credits
            </span>
          </div>
        </div>

        {/* Wallet & Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Wallet Balance */}
          <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-800">
            <div className="flex items-center space-x-1">
              <span className="text-orange-500 text-sm">Ξ</span>
              <span className="text-white font-semibold">39/00</span>
              <span className="text-gray-500 text-sm">.98</span>
            </div>
            <button className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-white text-xs">+</span>
            </button>
          </div>

          {/* Connect Button */}
          <ConnectButton />

          {/* Notifications */}
          <button className="w-9 h-9 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Profile */}
          <button className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all">
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;