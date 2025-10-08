# API Configuration

This app now uses environment-based API configuration for development and production.

## Configuration

The API configuration is managed in `src/config/api.js`:

### Development Mode

- **Base URL**: `http://localhost:3000`
- **Beer API**: `http://localhost:3000/beer`
- **Wine API**: `http://localhost:3000/wine`

### Production Mode

- **Base URL**: `https://mybevs.herokuapp.com`
- **Beer API**: `https://mybevs.herokuapp.com/beer`
- **Wine API**: `https://mybevs.herokuapp.com/wine`

## How It Works

The configuration automatically detects the environment:

- **Development**: When `NODE_ENV === 'development'` (default for `npm start`)
- **Production**: When `NODE_ENV === 'production'` (default for `npm run build`)

## Available Endpoints

### Beer Endpoints

- `API_ENDPOINTS.BEER.GET` - Get all beers
- `API_ENDPOINTS.BEER.POST` - Create new beer
- `API_ENDPOINTS.BEER.PUT(id)` - Update beer by ID
- `API_ENDPOINTS.BEER.DELETE(id)` - Delete beer by ID

### Wine Endpoints

- `API_ENDPOINTS.WINE.GET` - Get all wines
- `API_ENDPOINTS.WINE.POST` - Create new wine
- `API_ENDPOINTS.WINE.PUT(id)` - Update wine by ID
- `API_ENDPOINTS.WINE.DELETE(id)` - Delete wine by ID

## Usage

```javascript
import { API_ENDPOINTS } from '../config/api';

// Get all beers
fetch(API_ENDPOINTS.BEER.GET)

// Create new wine
fetch(API_ENDPOINTS.WINE.POST, { method: 'POST', ... })

// Update beer with ID 123
fetch(API_ENDPOINTS.BEER.PUT(123), { method: 'PUT', ... })
```

## Switching Environments

### For Development

```bash
npm start
# Uses localhost:3000
```

### For Production

```bash
npm run build
# Uses mybevs.herokuapp.com
```

## Console Logs

The configuration logs which environment it's using:

- Development: `🔧 Development Mode - Using local API: http://localhost:3000`
- Production: `🚀 Production Mode - Using production API: https://mybevs.herokuapp.com`
