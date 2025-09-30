// src/lib/wagmiConfig.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'GPU.Net',
  projectId: '3ec0b8c9f1b7dfa1d89b3c258e5c5712', // Valid WalletConnect project ID
  chains: [mainnet, sepolia], // Add more chains as needed (e.g., for testing)
});