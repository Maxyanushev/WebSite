# Eporfina - Website

A modern, responsive one-page website for Eporfina, showcasing handmade epoxy resin products including cake stands, trays, and decorative items with embedded flowers.

## 🚀 Features

- **Modern Design**: Clean, elegant design with beautiful animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Focused**: Built with Vite and optimized React
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display, Dancing Script)

## 📱 Sections

1. **Header**: Navigation with logo and mobile menu
2. **Hero**: Main showcase with animated background
3. **Products**: Grid of customizable epoxy products
4. **FAQ**: Expandable questions and answers
5. **Footer**: Social links, payment info, and legal links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eporfina-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js` and can be easily modified:

```javascript
colors: {
  primary: {
    50: '#fdf2f8',  // Light pink
    600: '#db2777', // Main brand color
    900: '#831843', // Dark pink
  },
  accent: {
    gold: '#d4af37', // Gold accents
  }
}
```

### Fonts
Custom fonts are imported in `index.html` and configured in Tailwind:

- **Inter**: Body text and UI elements
- **Playfair Display**: Headings and titles
- **Dancing Script**: Logo and brand elements

### Content
All content is easily editable in the component files:
- Product information in `src/components/Products.tsx`
- FAQ items in `src/components/FAQ.tsx`
- Contact information in `src/components/Footer.tsx`

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Single column layout, collapsible navigation
- **Tablet**: Two-column product grid, expanded navigation
- **Desktop**: Four-column product grid, full navigation

## 🎭 Animations

Smooth animations powered by Framer Motion:

- **Fade In**: Elements appear with opacity transitions
- **Slide Up**: Content slides up from below
- **Float**: Decorative elements gently float
- **Hover Effects**: Interactive elements respond to user interaction

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Products.tsx    # Product showcase
│   ├── FAQ.tsx         # FAQ section
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🌟 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Components load as needed
- **Optimized Images**: Placeholder images with proper aspect ratios
- **Minified CSS**: Tailwind CSS is purged and minified
- **Tree Shaking**: Unused code is automatically removed

## 📊 SEO & Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Alt Text**: Descriptive alt text for images
- **ARIA Labels**: Proper accessibility attributes
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Optimized for screen readers

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Deploy from the `dist` branch
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:
- Email: kontakt@eporfina.pl
- Website: https://eporfina.pl

---

Built with ❤️ using modern web technologies
