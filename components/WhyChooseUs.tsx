"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Target, Users, Wrench, Award, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
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
    { icon: Target, title: "Tailored Curriculum", desc: "Programs designed for every age and stage." },
    { icon: Users, title: "Expert Mentors", desc: "Learn from practitioners, not just theorists." },
    { icon: Wrench, title: "Hands-On Projects", desc: "Apply every concept in real scenarios." },
    { icon: Award, title: "Industry-Recognized Certificates", desc: "Add weight to your résumé and LinkedIn." },
  ];

  return (
    <section id="why" className="py-16 sm:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="reveal">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
              alt="AI tutor"
              width={900}
              height={520}
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>

        <div className="reveal">
          <span className="tag">Why Avatar</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-800 mt-5 mb-5 leading-tight">
            Learning that adapts to <em className="text-navy-700">you</em> — not the other way around.
          </h2>
          <p className="text-navy-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            At Avatar, we believe great learning isn't about flashy tech — it's about clarity, real outcomes, and human guidance. Whether you're a curious student, a busy professional, or someone exploring AI for the first time after 45, our programs are built around how you learn best.
          </p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-navy-100 text-navy-700 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800">{feature.title}</h4>
                  <p className="text-sm text-navy-600">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="#programs"
            className="mt-7 sm:mt-9 inline-flex items-center gap-2 text-navy-700 font-semibold border-b-2 border-navy-700 pb-1 hover:gap-3 transition-all text-sm sm:text-base"
          >
            Discover Our Approach <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
