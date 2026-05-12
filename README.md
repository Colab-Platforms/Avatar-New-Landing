# Avatar Landing Page - Next.js

A production-grade landing page for Avatar AI Training & Workshops, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design with optimized layouts for all devices
- **Performance Optimized**: Image optimization, lazy loading, and efficient animations
- **SEO Ready**: Proper meta tags, semantic HTML, and structured data
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Component-Based**: Modular, reusable components for easy maintenance
- **Type-Safe**: Full TypeScript support for better developer experience

## 📁 Project Structure

```
avatar-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page (main entry point)
│   └── globals.css         # Global styles and animations
├── components/
│   ├── AnnouncementBar.tsx # Top announcement banner
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── HeroSlider.tsx      # Hero section with typewriter effect
│   ├── StatsStrip.tsx      # Statistics section
│   ├── WhyChooseUs.tsx     # Why choose Avatar section
│   ├── Programs.tsx        # Programs/courses listing
│   ├── WhatYouLearn.tsx    # Curriculum highlights
│   ├── DemoVideo.tsx       # Demo video section
│   ├── Benefits.tsx        # Benefits and outcomes
│   ├── Certifications.tsx  # Certification showcase
│   ├── HowToEnroll.tsx     # Enrollment steps
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── FinalCTA.tsx        # Final call-to-action
│   ├── Footer.tsx          # Footer with links and newsletter
│   └── Logo.tsx            # Reusable logo component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm

### Steps

1. **Navigate to the project directory**:
   ```bash
   cd avatar-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  navy: {
    50: '#f3f6fa',
    // ... other shades
  },
  // Add your custom colors
}
```

### Fonts

Fonts are configured in `app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ weight: ["600", "700"] });
```

### Content

All content is stored directly in the components. To update:

1. Navigate to the relevant component in `components/`
2. Update the text, images, or data arrays
3. Save and the changes will hot-reload

## 🖼️ Images

Currently using Unsplash images via CDN. For production:

1. Download and optimize images
2. Place them in the `public/` folder
3. Update image paths in components
4. Use Next.js `Image` component for optimization

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm start
```

Deploy the `.next` folder to your hosting provider.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📄 License

This project is created for Avatar AI Training & Workshops.

## 🤝 Support

For questions or support, contact: hello@avatar.com

---

Built with ❤️ using Next.js
