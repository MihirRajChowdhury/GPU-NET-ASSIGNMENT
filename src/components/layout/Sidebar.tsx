import React, { useContext, useState } from 'react';
import UIContext from '../../context/UIContext';
import {
  FiCpu, FiMessageCircle, FiGlobe,
  FiTarget, FiLayers, 
} from "react-icons/fi";
import { FaTelegramPlane, FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(UIContext) || { 
    sidebarOpen: false, 
    setSidebarOpen: () => {} 
  };

  const [activeItem, setActiveItem] = useState('dApp');
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (item: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const menuItems = [
    { name: 'dApp', icon: <FiCpu />, children: ['Provide Gpu', 'Profile'] },
    { name: 'Astra Chat', icon: <FiMessageCircle />, children: ['Channels', 'Messages'] },
    { name: 'Subnet', icon: <FiGlobe />, children: ['Explorer', 'Stats'] },
    { name: 'Quest', icon: <FiTarget />, children: ['Challenges', 'Rewards'] },
    { name: 'GANscan', icon: <FiLayers />, children: ['Scans', 'Reports'] },
    { name: 'GVEX', icon: <FiLayers />, children: ['Trades', 'History'] },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-screen bg-black border-r border-gray-800 z-50
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-64 md:w-56 flex flex-col
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-xs text-white font-bold">G</span>
            </div>
            <h1 className="text-xl font-bold text-white">GPU.NET</h1>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="px-4 py-6 border-b border-gray-800 flex items-center justify-between">
          <div>
            <div className="text-gray-400 text-sm">Wallet Balance</div>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-gray-300 text-lg">Ξ</span>
              <span className="text-white text-2xl font-bold">3900</span>
              <span className="text-gray-400 text-sm">.98</span>
            </div>
          </div>
          {/* Plus Button */}
          <button 
            className="
              w-5 h-5 rounded-full flex items-center justify-center 
              bg-white text-black 
              hover:bg-gray-100 hover:cursor-pointer
            "
          >
            <span className="text-xs font-bold">+</span>
          </button>

        </div>

        {/* Navigation */}
        <nav className="px-0 mt-4 flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = activeItem === item.name;
            const isExpanded = expandedMenus[item.name];

            return (
              <div key={item.name}>
                <button
                  onClick={() => {
                    setActiveItem(item.name);
                    toggleExpand(item.name);
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 mb-1 relative
                    text-sm font-medium transition-colors duration-200 cursor-pointer
                    ${isActive 
                      ? 'text-white bg-gray-900' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                    }
                  `}
                >
                  {/* Left Line Indicator */}
                  <span
                    className={`
                      absolute left-0 top-0 bottom-0 w-1
                      ${isActive ? 'bg-orange-500' : 'bg-black'}
                    `}
                  />
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </button>

                {/* Children Items */}
                {isExpanded && item.children && (
                  <div className="ml-8">
                    {item.children.map((child) => (
                      <button
                        key={child}
                        onClick={() => setActiveItem(child)}
                        className={`
                          w-full flex items-center px-3 py-2 mb-1 relative
                          text-sm transition-colors duration-200 cursor-pointer
                          ${activeItem === child
                            ? 'text-white bg-gray-800'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                          }
                        `}
                      >
                        {/* Left Line Indicator */}
                        <span
                          className={`
                            absolute left-0 top-0 bottom-0 w-1
                            ${activeItem === child ? 'bg-orange-500' : 'bg-black'}
                          `}
                        />
                        {child}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center mb-3">
          <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
            <FaTelegramPlane size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
            <FaDiscord size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
            <FaInstagram size={18} />
          </a>
        </div>

          <div className="px-4 pb-2 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>All System Operational</span>
          </div>
          </div>

        {/* Footer */}
        <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-800">
          © 2025 All rights reserved GPU.NET
        </div>

        {/* Mobile Close Button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-30 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 cursor-pointer"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
