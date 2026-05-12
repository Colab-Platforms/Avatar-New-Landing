"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

const heroSlides = [
  {
    headline: "Stay Safe in a Connected World.",
    sub: "Master ethical hacking, online safety, and digital protection — taught by industry experts.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1920&q=80",
    buttons: [
      { text: "Cyber Security Programs", href: "/cyberwebinar", icon: ArrowRight, primary: true },
      { text: "Watch Demo", href: "#demo", icon: Play, primary: false },
    ],
  },
  {
    headline: "Learn AI. Lead Tomorrow.",
    sub: "Build smarter study habits, code with AI, and gear up for the careers of the future.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80",
    buttons: [
      { text: "AI Programs for Students", href: "#programs", icon: ArrowRight, primary: true },
      { text: "See Success Stories", href: "#testimonials", icon: Play, primary: false },
    ],
  },
  {
    headline: "Work Smarter With AI.",
    sub: "Domain-specific AI training for HR, Design, Development, Content, and more.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80",
    buttons: [
      { text: "Professional AI Training", href: "#programs", icon: ArrowRight, primary: true },
      { text: "View Curriculum", href: "#what-you-learn", icon: Play, primary: false },
    ],
  },
  {
    headline: "It's Never Too Late to Master AI.",
    sub: "Beginner-friendly programs designed for experienced minds — at your pace, your way.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80",
    buttons: [
      { text: "Senior-Friendly Programs", href: "#programs", icon: ArrowRight, primary: true },
      { text: "How to Enroll", href: "#enroll", icon: Play, primary: false },
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setTypedText("");
      setIsTyping(true);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTyping) {
      const text = heroSlides[currentSlide].headline;
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= text.length) {
          setTypedText(text.slice(0, i));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 45);

      return () => clearInterval(typingInterval);
    }
  }, [currentSlide, isTyping]);

  return (
    <section id="home" className="relative h-[85vh] sm:h-[88vh] min-h-[500px] sm:min-h-[600px] w-full overflow-hidden bg-navy-900">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl text-white">
            <span className="tag !bg-white/15 !text-white mb-4 sm:mb-6 text-[10px] sm:text-[15px]">
              Premium AI &amp; Cyber Training
            </span>
            <h1 className="font-display text-3xl font-light sm:text-4xl md:text-7xl md:font-black leading-tight mb-4 sm:mb-6">
              {typedText}
              {/* <span className="cursor"></span> */}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/85 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              {heroSlides[currentSlide].sub}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {heroSlides[currentSlide].buttons.map((button, btnIndex) => {
                const Icon = button.icon;
                return (
                  <Link
                    key={btnIndex}
                    href={button.href}
                    className={`font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition inline-flex items-center justify-center gap-2 text-sm sm:text-base ${
                      button.primary
                        ? "bg-white text-navy-700 hover:bg-cream"
                        : "border border-white/30 hover:bg-white/10 text-white"
                    }`}
                  >
                    {button.primary ? (
                      <>
                        {button.text} <Icon className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <Icon className="w-4 h-4" /> {button.text}
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setTypedText("");
              setIsTyping(true);
            }}
            className={`w-8 h-1 rounded-full transition ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
