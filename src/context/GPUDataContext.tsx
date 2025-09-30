// src/context/GPUDataContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type GPUData = {
  id: string;
  model: string;
  gpuRam: string;
  vcpuRam: string;
  price: number;
};

type GPUDataContextType = {
  gpus: GPUData[];
  setGpus: (gpus: GPUData[]) => void;
};

const GPUDataContext = createContext<GPUDataContextType | undefined>(undefined);

export const GPUDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gpus, setGpus] = useState<GPUData[]>([
    { id: '124852', model: 'H100 PCIe', gpuRam: '80 GB', vcpuRam: '64 GB', price: 0.45 },
    { id: '124853', model: 'A100 SXM', gpuRam: '60 GB', vcpuRam: '48 GB', price: 0.35 },
    { id: '124854', model: 'RTX 4090', gpuRam: '24 GB', vcpuRam: '32 GB', price: 0.25 },
    { id: '124855', model: 'V100 PCIe', gpuRam: '32 GB', vcpuRam: '16 GB', price: 0.20 },
    { id: '124856', model: 'A40', gpuRam: '48 GB', vcpuRam: '24 GB', price: 0.30 },
    { id: '124857', model: 'T4', gpuRam: '16 GB', vcpuRam: '12 GB', price: 0.15 },
  ]);

  return (
    <GPUDataContext.Provider value={{ gpus, setGpus }}>
      {children}
    </GPUDataContext.Provider>
  );
};

export default GPUDataContext;