import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Hide the initial loader after React mounts
const hideLoader = () => {
  const loader = document.getElementById('initial-loader');
  if (loader) {
    loader.classList.add('loader-hidden');
    setTimeout(() => loader.remove(), 300);
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hide loader when content is ready
hideLoader();

//Uploading new Upload 28-Mar-2025
//Uploading new Upload 01-Apr-2025 Performance Improvements
//Uploading new Upload 01-Apr-2025 Main Thread Performance Improvements
//Uploading new Upload 02-Apr-2025 Model Size reduced to 50kbs
