# My Bevs 🍺🍷

A modern React application for tracking and managing your beer and wine collection. Built with React 18, featuring a responsive design and intuitive user interface.

## ✨ Features

- **Beverage Management**: Add, edit, and delete beer and wine entries
- **Dual Collection Support**: Separate tracking for beers and wines
- **Rating System**: Rate your beverages with a 5-star system
- **Detailed Information**: Track brewery/winery, style, ABV, region, and personal notes
- **Visual Analytics**: Pie chart visualization of your collection
- **Modal Interface**: Clean modal dialogs for editing and confirmation
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Hamburger Navigation**: Slide-out menu with active state highlighting
- **Loading States**: Proper loading indicators throughout the app

## 🚀 Tech Stack

- **Frontend**: React 18.2.0 with Hooks
- **Routing**: React Router v6
- **Styling**: CSS3 with Flexbox/Grid
- **UI Components**: React Bootstrap v2
- **Charts**: React Minimal Pie Chart
- **Menu**: React Burger Menu
- **Build Tool**: Create React App

## 🔄 Recent Updates

This application has been recently modernized with:

- **React 18 Migration**: Upgraded from React 16 to React 18 with modern hooks
- **Component Consolidation**: Merged duplicate components (BeerCard/WineCard → BeverageCard)
- **UI/UX Improvements**: Enhanced hamburger menu, modal interfaces, and responsive design
- **Code Quality**: Converted all class components to functional components with hooks
- **Modern Dependencies**: Updated React Router to v6 and React Bootstrap to v2

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-bevs
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure API endpoint**
   Edit `src/config/api.js` to set your backend URL:

   ```javascript
   const DEV_BASE_URL = "http://localhost:3000"; // Development
   const PROD_BASE_URL = "https://your-api.herokuapp.com"; // Production
   ```

4. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── App.js                      # Main application component
│   ├── Header.js                   # Header with navigation
│   ├── CustomNavBar.js             # Hamburger menu navigation
│   ├── BeverageCard.js             # Dynamic card for beers/wines
│   ├── BeerList.js                 # Beer collection display
│   ├── WineList.js                 # Wine collection display
│   ├── AddBeverage.js              # Add new beverage form
│   ├── EditBeverage.js             # Edit existing beverage
│   ├── EditModal.js                # Modal for editing beverages
│   ├── DeleteConfirmationModal.js  # Confirmation modal for deletions
│   ├── Add.js                      # Add beverage selection page
│   ├── Home.js                     # Dashboard with analytics
│   ├── PieChartHome.js             # Chart visualization
│   ├── About.js                    # About page
│   └── Footer.js                   # Footer component
├── styles/
│   ├── App.css                     # Global styles
│   ├── header.css                  # Header styling
│   ├── hamburger.css               # Navigation menu styling
│   ├── beerCard.css                # Card component styling
│   ├── card-container.css          # Card container styling
│   ├── home.css                    # Home page styling
│   ├── about.css                   # About page styling
│   ├── add.css                     # Add page styling
│   ├── footer.css                  # Footer styling
│   ├── modal.css                   # Modal component styling
│   ├── pie-chart-home.css          # Chart styling
│   ├── index.css                   # Base styles
│   └── images/                     # Background images
├── config/
│   └── api.js                      # API configuration
└── index.js                        # Application entry point
```

## 🎯 Usage

### Adding Beverages

1. Click the hamburger menu (☰) in the top-right
2. Select "Add-Bevs"
3. Choose "Beer" or "Wine"
4. Fill in the required information:
   - **Beer**: Brewery, Name, Style, ABV, Rating, Notes
   - **Wine**: Winery, Region, Style, ABV, Rating, Notes
5. Click "Add Beverage"

### Viewing Your Collection

- **Home**: Dashboard with collection overview and analytics
- **BeerList**: View all your beers
- **WineList**: View all your wines

### Editing/Deleting

- Click "Edit" on any beverage card to modify details
- Click "Delete" to remove a beverage from your collection

## 🔧 Configuration

### API Configuration

Update `src/config/api.js` to point to your backend:

```javascript
// Development
const DEV_BASE_URL = "http://localhost:3000";

// Production
const PROD_BASE_URL = "https://your-api.herokuapp.com";
```

### Environment Variables

Create a `.env` file for environment-specific settings:

```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_ENV=development
```

## 🎨 Customization

### Styling

- Modify CSS files in `src/styles/` to customize appearance
- Update color schemes in `hamburger.css` and `header.css`
- Adjust responsive breakpoints as needed

### Navigation

- Add new routes in `App.js`
- Update `CustomNavBar.js` for new menu items
- Modify active state styling in `hamburger.css`

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Heroku

1. Install Heroku CLI
2. Create Heroku app
3. Deploy:
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Deploy to Netlify

1. Build the project
2. Drag and drop the `build` folder to Netlify
3. Configure environment variables if needed

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run Cypress tests:

```bash
npx cypress open
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- React Bootstrap for UI components
- React Router for navigation
- All contributors and testers

## 📞 Support

For support, email support@mybevs.com or create an issue in the repository.

---

**Happy Beverage Tracking!** 🍻
