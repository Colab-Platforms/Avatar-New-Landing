"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HowToEnroll() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1",
      title: "Choose Your Program",
      desc: "Pick the path that fits your goals — Cyber Security, AI for Students, Professionals, or 45+.",
    },
    {
      number: "2",
      title: "Register & Pay Securely",
      desc: "Sign up online in under 2 minutes. Multiple payment options available.",
    },
    {
      number: "3",
      title: "Start Learning",
      desc: "Get instant access to your dashboard, schedule, and live class links.",
    },
  ];

  return (
    <section
      className="relative parallax py-20 sm:py-28"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80')" }}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-navy-900/85"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
        <span className="tag !bg-white/15 !text-white reveal">Get Started</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-5 mb-4 reveal">Enrolling is Simple.</h2>
        <p className="text-white/80 mb-12 sm:mb-16 reveal">Three steps. That's it.</p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="reveal">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-navy-700 rounded-full flex items-center justify-center font-display text-xl sm:text-2xl mx-auto mb-4 sm:mb-5">
                {step.number}
              </div>
              <h3 className="font-display text-lg sm:text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="#enroll"
          className="inline-block mt-10 sm:mt-14 bg-white text-navy-700 hover:bg-cream font-semibold px-8 py-3.5 rounded-full transition reveal"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
