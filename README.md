# GPU-NET-ASSIGNMENT

A frontend implementation of the GPU.Net design challenge — built with React, TypeScript, Tailwind CSS, and RainbowKit to enable a wallet connection.

[Live Demo](https://gpu-net-assignment-jm6p7czmf-mihirrajchowdhurys-projects.vercel.app/)  

---

## 🧾 About

This project was built to meet the assignment requirements: recreate the Figma design **pixel-perfectly**, ensure responsiveness, implement wallet connection, and maintain clean, modular code.  

---

## Features

- Pixel-perfect UI matching the Figma design  
- Fully responsive across desktop and mobile  
- Wallet connection via **RainbowKit**  
- Interactive UI elements (buttons, toggles, etc.)  
- State management using React Context / hooks  
- Optimized components (memoization, lazy loading where suitable)  
- Deployed publicly on Vercel  

---

## 🛠 Tech Stack

- React + Vite  
- TypeScript  
- Tailwind CSS  
- RainbowKit (Wallet connection)  
- HTML / CSS / JavaScript  

---

## 📁 Folder Structure

src/
├── assets/ # Images, icons, static files
├── components/ # Reusable UI components
├── context/ # React Context for global state
├── hooks/ # Custom hooks
├── pages/ # Routable / top-level pages
├── utils/ # Helper / utility functions
├── App.tsx
└── main.tsx


---

## 🚀 Getting Started — Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MihirRajChowdhury/GPU-NET-ASSIGNMENT.git
   cd GPU-NET-ASSIGNMENT
Install dependencies

npm install
# or
yarn install
Run development server


npm run dev
Build for production

npm run build
Preview production build locally

npm run preview

⚙ Implementation Notes & Decisions
The hero section uses a responsive clamp() font sizing combined with Tailwind’s utility classes to prevent overflow.

Grid layout is set up with explicit column percentages to ensure the hero text and the right column never overlap.

Interactive tabs/buttons use conditional Tailwind classes to switch between active and inactive states.

State is managed via React Context (or hooks) to allow global state sharing (e.g., current tab, wallet status).

Components are kept small (≤ ~200 lines), modular, and memoized where needed to avoid unnecessary re-renders.

Lazy loading (React’s lazy + Suspense) is used for non-critical sections where applicable.

📜 License
This project is for demonstration and assignment purposes. Feel free to examine and learn — if you reuse code, please attribute appropriately.