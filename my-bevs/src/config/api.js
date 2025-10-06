// API Configuration
const isDevelopment = process.env.NODE_ENV === "development";

// Development URLs (local backend)
const DEV_BASE_URL = "http://localhost:3000";

// Production URLs (dummy/placeholder URLs)
const PROD_BASE_URL = "https://mybevs.herokuapp.com";

// Export the appropriate base URL
export const BASE_URL = isDevelopment ? DEV_BASE_URL : PROD_BASE_URL;

// API Endpoints - Functions to ensure runtime evaluation
export const API_ENDPOINTS = {
  BEER: {
    GET: () => `${BASE_URL}/beer`,
    POST: () => `${BASE_URL}/beer`,
    PUT: (id) => `${BASE_URL}/beer/${id}`,
    DELETE: (id) => `${BASE_URL}/beer/${id}`,
  },
  WINE: {
    GET: () => `${BASE_URL}/wine`,
    POST: () => `${BASE_URL}/wine`,
    PUT: (id) => `${BASE_URL}/wine/${id}`,
    DELETE: (id) => `${BASE_URL}/wine/${id}`,
  },
};

// Helper function to get full URL for any endpoint
export const getApiUrl = (endpoint, id = null) => {
  if (typeof endpoint === "function") {
    return endpoint(id);
  }
  return endpoint;
};

// Log current configuration (only in development)
if (isDevelopment) {
  console.log("🔧 Development Mode - Using local API:", BASE_URL);
} else {
  console.log("🚀 Production Mode - Using production API:", BASE_URL);
}
