// src/components/layout/MainGrid.tsx
import React from 'react';

interface MainGridProps {
  children: React.ReactNode;
}

const MainGrid: React.FC<MainGridProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1920px] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default MainGrid;