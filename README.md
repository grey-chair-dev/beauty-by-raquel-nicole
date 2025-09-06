# Beauty by Raquel Nicole - Website

A modern, SEO-optimized website for Beauty by Raquel Nicole, a boutique hair salon specializing in hair styling and color services in Milford, OH.

## 🎨 Features

- **Modern Design**: Beautiful, responsive design with brand-consistent colors and typography
- **SEO Optimized**: Built with Next.js for excellent search engine performance
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **Accessibility**: WCAG 2.1 AA compliant with proper focus states and screen reader support
- **Booking Integration**: Ready for Square POS integration
- **Content Management**: Easy to update content and services

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with React 18
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion for smooth micro-interactions
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Database**: PostgreSQL with Prisma ORM (ready for backend)
- **Hosting**: Vercel (frontend), AWS/Heroku (backend)

## 🎯 Design System

### Colors
- **Primary**: Blush Pink (#F9E6E6)
- **Secondary**: Warm Beige (#F3D7C6)
- **Accent**: Rose Gold (#C2876C)
- **Text**: Charcoal Gray (#3C3C3C)
- **Background**: Off-White (#FFF8F5)

### Typography
- **Headers**: Playfair Display (serif)
- **Body**: Lato (sans-serif)
- **Buttons**: Montserrat (sans-serif)

## 📁 Project Structure

```
beauty-by-raquel-nicole/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services showcase
│   │   ├── Gallery.tsx     # Before/after gallery
│   │   ├── Testimonials.tsx # Client reviews
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact information
│   │   └── Footer.tsx      # Site footer
│   ├── lib/                # Utilities and helpers
│   └── types/              # TypeScript definitions
├── public/                 # Static assets
├── prisma/                 # Database schema (future)
└── docs/                   # Documentation
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/beauty-by-raquel-nicole.git
   cd beauty-by-raquel-nicole
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```
   NEXT_PUBLIC_SITE_URL=https://beautybyraquelnicole.com
   NEXT_PUBLIC_PHONE_NUMBER=+15135551234
   NEXT_PUBLIC_EMAIL=hello@beautybyraquelnicole.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests
- `npm run e2e` - Run end-to-end tests

## 🎨 Customization

### Updating Services

Edit `src/components/Services.tsx` to modify service offerings, pricing, and descriptions.

### Updating Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Contact Info**: Update contact details in `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Brand Colors

Update colors in `tailwind.config.js` and `src/app/globals.css` to match your brand.

## 📱 SEO Optimization

The site is built with SEO best practices:

- **Meta Tags**: Comprehensive meta descriptions and Open Graph tags
- **Structured Data**: Ready for schema markup implementation
- **Performance**: Optimized for Core Web Vitals
- **Local SEO**: Location-specific keywords and content
- **Mobile-First**: Responsive design for mobile search

## 🔧 Performance Features

- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic code splitting for faster loads
- **Caching**: Optimized caching strategies
- **Bundle Analysis**: Monitor JavaScript bundle sizes
- **Lighthouse**: Target 90+ scores across all metrics

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📊 Analytics & Monitoring

Ready for integration with:
- Google Analytics 4
- Google Search Console
- Vercel Analytics
- Error tracking (Sentry)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions about this website, contact:
- **Email**: hello@beautybyraquelnicole.com
- **Phone**: (513) 555-1234

---

Built with ❤️ for Beauty by Raquel Nicole 