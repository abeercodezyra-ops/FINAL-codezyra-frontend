// API Configuration
// Update API_BASE_URL after deploying backend to Vercel

// For Development (Local)
const DEV_API_URL = 'https://codezyraa.vercel.app/';


// For Production (Vercel)
// Update this with your actual backend URL after deployment
//   j jk j jkjkkjjnjnjknjnjjknjnjnnnnnnnnnnnnnnnnn
const PROD_API_URL = 'https://final-codezyra-backend.vercel.app/';

// Automatically select based on environment
export const API_BASE_URL = import.meta.env.MODE === 'production' 
  ? PROD_API_URL 
  : DEV_API_URL;

// API Endpoints
export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/api/health`,
  CONTACT: `${API_BASE_URL}/api/contact`,
};

export default API_BASE_URL
