const config = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  
  // External APIs
  GOOGLE_MAPS_API_KEY: import.meta.env.VITE_APP_GOOGLE_MAPS_KEY,
  GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY,
  OPENCAGE_API_KEY: import.meta.env.VITE_OPENCAGE_API_KEY,
  
  // Gemini API URL
  GEMINI_API_URL: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`
};

export default config;