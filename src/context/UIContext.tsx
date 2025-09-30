import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

type Filters = {
  location: string;
  gpuType: string;
};

type UIContextType = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({ location: 'all', gpuType: 'all' });

  return (
    <UIContext.Provider value={{ sidebarOpen, setSidebarOpen, filters, setFilters }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;