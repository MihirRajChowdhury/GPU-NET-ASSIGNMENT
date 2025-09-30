// src/lib/wagmiConfig.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'GPU.Net',
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Replace with your WalletConnect Cloud project ID
  chains: [mainnet, sepolia], // Add more chains as needed (e.g., for testing)
});