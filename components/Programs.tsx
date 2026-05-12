"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock } from "lucide-react";

const programs = [
  {
    title: "Cyber Security Training",
    description: "Master ethical hacking, phishing defense, password security, and safe browsing through real-world simulations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    badge: "Most Popular",
    badgeColor: "bg-navy-700",
    features: ["Ethical Hacking Basics", "Social Media Security", "Data Protection"],
    duration: "6 Weeks",
    format: "Online + Live",
    href: "/cyberwebinar",
  },
  {
    title: "AI Training for Students",
    description: "Get ahead with AI tools that boost productivity, sharpen your studies, and prepare you for tomorrow's careers.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    badge: "Future-Ready",
    badgeColor: "bg-slate2-500",
    features: ["ChatGPT for Studies", "AI Tools for Research", "Coding with AI"],
    duration: "8 Weeks",
    format: "Online + Live",
    href: "#programs",
  },
  {
    title: "AI for Professionals",
    description: "Domain-specific AI mastery for HR, Admin, Designers, Developers, Editors, and Writers.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
    badge: "Career Boost",
    badgeColor: "bg-navy-700",
    features: ["AI for HR & Recruitment", "AI in Design & Editing", "AI Coding Assistants"],
    duration: "10 Weeks",
    format: "Hybrid",
    href: "#programs",

  },
  {
    title: "AI for 45+ Learners",
    description: "A patient, simple, and confidence-building introduction to AI, smartphones, and the digital world.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
    badge: "Beginner-Friendly",
    badgeColor: "bg-slate2-500",
    features: ["AI for Daily Productivity", "Smartphone & Digital Tools", "AI for Small Businesses"],
    duration: "4 Weeks",
    format: "Online + Recorded",
    href: "#programs",
  },
];

export default function Programs() {
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

  return (
    <section id="programs" className="py-16 sm:py-24 bg-cream" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 reveal">
          <span className="tag">Our Programs</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-800 mt-5 mb-4">
            Programs Built for Every Learner
          </h2>
          <p className="text-navy-600 text-sm sm:text-base">
            Pick the path that fits where you are — and where you want to go.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {programs.map((program, index) => (
            <div key={index} className="program-card bg-white rounded-2xl overflow-hidden border border-navy-100 reveal">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={600}
                  height={192}
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-3 left-3 ${program.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {program.badge}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-navy-800 mb-2">{program.title}</h3>
                <p className="text-sm text-navy-600 mb-4 leading-relaxed">{program.description}</p>
                <ul className="text-sm text-navy-700 space-y-1.5 mb-5">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2">
                      <Check className="w-4 h-4 text-navy-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between text-xs text-navy-500 border-t border-navy-100 pt-4 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {program.duration}
                  </span>
                  <span>{program.format}</span>
                </div>
                <Link
                  href={program.href}
                  className="block w-full text-center bg-navy-700 hover:bg-navy-800 text-white text-sm font-semibold py-2.5 rounded-full transition"
                >
                  Enroll Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
