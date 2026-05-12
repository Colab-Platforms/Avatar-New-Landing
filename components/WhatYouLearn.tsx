"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function WhatYouLearn() {
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

  const skills = [
    {
      emoji: "🛡️",
      title: "Cyber Security Skills",
      desc: "Identify threats, secure passwords, protect personal data, and browse safely.",
      borderColor: "border-navy-700",
    },
    {
      emoji: "🎓",
      title: "Student-Focused AI Skills",
      desc: "Use AI for assignments, research, coding projects, and time management.",
      borderColor: "border-navy-700",
    },
    {
      emoji: "💼",
      title: "Professional AI Skills",
      desc: "Apply AI in HR, design, development, content, video editing, and analytics.",
      borderColor: "border-slate2-500",
    },
    {
      emoji: "👴",
      title: "Beginner Digital Skills",
      desc: "Master smartphones, the internet, AI assistants, and small business tools — without overwhelm.",
      borderColor: "border-slate2-500",
    },
  ];

  const images = [
    { src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80", alt: "AI tools", className: "rounded-2xl h-36 sm:h-48 w-full object-cover shadow-md" },
    { src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80", alt: "Coding", className: "rounded-2xl h-36 sm:h-48 w-full object-cover shadow-md mt-6 sm:mt-8" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80", alt: "Designer", className: "rounded-2xl h-36 sm:h-48 w-full object-cover shadow-md" },
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", alt: "AI mentor", className: "rounded-2xl h-36 sm:h-48 w-full object-cover shadow-md mt-6 sm:mt-8" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="reveal order-2 md:order-1">
          <span className="tag">Curriculum Highlights</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-800 mt-5 mb-5 leading-tight">
            Real Skills. Real Tools. Real Confidence.
          </h2>
          <p className="text-navy-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            Forget jargon-heavy lectures. Our courses are structured around tools and techniques you'll actually use — from prompting ChatGPT effectively to spotting phishing scams to automating boring workflows.
          </p>

          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={index} className={`border-l-4 ${skill.borderColor} pl-4`}>
                <h4 className="font-semibold text-navy-800">
                  {skill.emoji} {skill.title}
                </h4>
                <p className="text-sm text-navy-600 mt-1">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal order-1 md:order-2">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                width={600}
                height={192}
                className={img.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
