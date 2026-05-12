# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd avatar-landing
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## What You'll See

Your landing page includes:

- ✅ Announcement bar with promotional message
- ✅ Sticky navigation with mobile menu
- ✅ Hero slider with typewriter effect
- ✅ Statistics strip
- ✅ Why Choose Us section
- ✅ Programs/courses grid
- ✅ Curriculum highlights
- ✅ Demo video section
- ✅ Benefits and outcomes
- ✅ Certification showcase
- ✅ How to enroll steps
- ✅ Testimonials carousel
- ✅ FAQ accordion
- ✅ Final CTA section
- ✅ Footer with newsletter

## Making Changes

### Update Content

All content is in the `components/` folder. Simply edit the relevant component:

- **Hero text**: `components/HeroSlider.tsx`
- **Programs**: `components/Programs.tsx`
- **Testimonials**: `components/Testimonials.tsx`
- **FAQ**: `components/FAQ.tsx`

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    700: '#1e3a5f', // Change this
  }
}
```

### Replace Images

1. Download your images
2. Place in `public/images/`
3. Update paths in components:

```typescript
// Before
src="https://images.unsplash.com/..."

// After
src="/images/your-image.jpg"
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Done! Your site is live.

## Need Help?

- Check `README.md` for detailed documentation
- Check `STRUCTURE.md` for architecture details
- Contact: hello@avatar.com

---

Happy coding! 🚀
