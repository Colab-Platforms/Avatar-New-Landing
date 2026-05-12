"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, GraduationCap, Award } from "lucide-react";

export default function FinalCTA() {
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
    <section id="enroll" className="relative py-16 sm:py-24 bg-navy-700 text-white overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="reveal">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
            alt="Learner"
            width={900}
            height={440}
            className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[380px] md:h-[440px] object-cover"
          />
        </div>

        <div className="reveal">
          <span className="tag !bg-white/15 !text-white">Start Today</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-5 mb-5 leading-tight">
            Your Future With AI Starts Here.
          </h2>
          <p className="text-white/85 leading-relaxed mb-6 sm:mb-8 max-w-lg text-sm sm:text-base">
            Whether you're 15 or 55, a student or a CEO — Avatar has a program shaped just for you. Take the first step today.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6 sm:mb-8">
            <Link
              href="#programs"
              className="bg-white text-navy-700 hover:bg-cream font-semibold px-7 py-3.5 rounded-full transition inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#demo"
              className="border border-white/40 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition text-center text-sm sm:text-base"
            >
              Book a Free Counseling Call
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-white/80 border-t border-white/15 pt-5 sm:pt-6">
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" /> 4.9/5 Average Rating
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> 5,000+ Learners
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" /> 12+ Mentors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
