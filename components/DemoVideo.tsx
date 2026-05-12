"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function DemoVideo() {
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

  const handleVideoClick = () => {
    alert("Demo video would play here. Replace with embedded YouTube/Vimeo iframe in production.");
  };

  return (
    <section id="demo" className="py-16 sm:py-24 bg-navy-50" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="reveal">
          <span className="tag">Sample Lesson</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-800 mt-5 mb-4">
            See a Lesson Before You Enroll
          </h2>
          <p className="text-navy-600 mb-8 sm:mb-10 text-sm sm:text-base">
            Watch a real Avatar session — no scripts, no fluff. Just the way we teach.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl reveal group cursor-pointer"
          onClick={handleVideoClick}
        >
          <Image
            src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=1200&q=80"
            alt="Demo video"
            width={1200}
            height={675}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition flex items-center justify-center">
            <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-navy-700 flex items-center justify-center shadow-xl group-hover:scale-105 transition">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
            </button>
          </div>
        </div>

        <blockquote className="mt-8 sm:mt-10 reveal">
          <p className="font-display text-lg sm:text-xl text-navy-700 italic">
            "We teach the way we'd want our parents, kids, and colleagues to be taught."
          </p>
          <footer className="text-sm text-navy-500 mt-3">— The Avatar Teaching Team</footer>
        </blockquote>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-6 sm:mt-8 reveal">
          <Link
            href="#programs"
            className="bg-navy-700 hover:bg-navy-800 text-white font-semibold px-7 py-3 rounded-full transition text-sm sm:text-base text-center"
          >
            Browse All Programs
          </Link>
          <Link
            href="#enroll"
            className="border border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white font-semibold px-7 py-3 rounded-full transition text-sm sm:text-base text-center"
          >
            Book a Free Trial Class
          </Link>
        </div>
      </div>
    </section>
  );
}
