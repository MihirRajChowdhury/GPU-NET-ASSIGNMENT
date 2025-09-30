// src/components/Wallet/WalletProvider.tsx
import React, { createContext,  ReactNode } from 'react';
import { useAccount, useBalance } from 'wagmi'; // Assuming wagmi is set up

type WalletContextType = {
  address: string | undefined;
  balance: number;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { address } = useAccount(); // From wagmi
  const { data: balanceData } = useBalance({ address }); // Fetch real balance
  const balance = parseFloat(balanceData?.formatted || '0') || 39000.98; // Mock fallback

  return (
    <WalletContext.Provider value={{ address, balance }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContext;