"use client";

import { useEffect, useRef } from "react";
import { BadgeCheck, Link2, ShieldCheck, Target } from "lucide-react";
import Logo from "./Logo";

export default function Certifications() {
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

  const features = [
    { icon: BadgeCheck, title: "Industry-Backed", desc: "Endorsed by professionals from leading tech companies." },
    { icon: Link2, title: "Shareable Online", desc: "One click to LinkedIn, email signatures, or portfolios." },
    { icon: ShieldCheck, title: "Verifiable", desc: "Every certificate has a unique ID for authenticity." },
    { icon: Target, title: "Skill-Specific", desc: "Certifies exactly what you've mastered." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="reveal order-2 md:order-1">
          <span className="tag">Certification</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-800 mt-5 mb-5 leading-tight">
            Earn a Certificate That Speaks for You.
          </h2>
          <p className="text-navy-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            On completion, you'll receive an <strong>Avatar Certified Learner</strong> credential — recognized by industry professionals and easy to share on LinkedIn, your résumé, or your college portfolio.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 rounded-xl border border-navy-100">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-navy-700 mb-2 sm:mb-3" />
                <h4 className="font-semibold text-navy-800 mb-1 text-sm sm:text-base">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-navy-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 bg-navy-700/10 rounded-3xl rotate-2"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/assets/images/Certificate for Avatar.png" 
                alt="Avatar Academy Certificate of Completion" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
