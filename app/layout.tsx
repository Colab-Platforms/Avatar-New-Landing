import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Avatar — AI Training & Workshops | Cyber Security, AI for Students & Professionals",
  description: "Avatar offers premium AI and Cyber Security training for students, working professionals, and learners 45+. Hands-on, expert-led, and certified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
