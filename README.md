# Restoran - React Restaurant Template

A modern React implementation of a restaurant website template, built with React, Vite, and Bootstrap.

## Features

- Modern React implementation (React 19)
- Component-based architecture
- Responsive design
- Form validation
- Lazy loading for improved performance
- Error boundaries for graceful error handling
- Environment variable configuration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
├── public/              # Static assets
│   ├── css/             # CSS files
│   ├── img/             # Image files
│   ├── js/              # JavaScript files
│   └── lib/             # Third-party libraries
├── src/                 # Source code
│   ├── assets/          # Optimized assets for import
│   ├── components/      # React components
│   │   └── miniComponents/ # Smaller reusable components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── .env                 # Environment variables
└── index.html          # HTML template
```

## Best Practices Implemented

1. **Component Structure**
   - Layout component for consistent page structure
   - Mini-components for reusable UI elements

2. **Performance Optimization**
   - Lazy loading of route components
   - Code splitting

3. **State Management**
   - Custom hooks for form handling
   - React state for component-level state

4. **Error Handling**
   - Error boundaries for graceful error recovery
   - Form validation

5. **Environment Configuration**
   - Environment variables for different deployment environments
   - Centralized environment variable access

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Environment Variables

Create a `.env` file in the root directory to customize the application:

```
VITE_API_URL=http://your-api-url.com
VITE_ENABLE_BOOKING=true
VITE_ENABLE_TESTIMONIALS=true
VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
