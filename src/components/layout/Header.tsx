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
              5000 Drops with Astra Quest Now • nVidia RTX 6087 is now available in dApp • 
              Block Rate has been doubled now • Earn 5000 Drops
            </span>
          </div>
        </div>

        {/* Wallet & Profile Section */}
        <div className="flex items-center space-x-4">

          {/* Connect Button */}
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          onClick={openConnectModal}
                          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    return (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={openChainModal}
                          className="flex items-center space-x-1 bg-[#111111] border border-gray-800 rounded-lg px-3 py-2"
                        >
                          <span className="text-white">
                            {chain.name}
                          </span>
                        </button>

                        <button
                          onClick={openAccountModal}
                          className="flex items-center space-x-1 bg-[#111111] border border-gray-800 rounded-lg px-3 py-2"
                        >
                          <span className="text-white">
                            {account.displayName}
                          </span>
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>

 

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