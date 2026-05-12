import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './styles.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata = {
  title: 'Ek Galat Click — Cyber Safety Session for Indians',
  description: 'Learn how to protect your money, phone, and family from online scams in just 60 minutes. No tech background needed.',
};

export default function CyberwebinarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} ${inter.className} overflow-x-hidden max-w-full`} style={{backgroundColor: 'var(--paper)', color: 'var(--ink)', fontFeatureSettings: '"ss01", "cv11"', WebkitFontSmoothing: 'antialiased', minHeight: '100vh'}}>
      {children}
    </div>
  );
}
