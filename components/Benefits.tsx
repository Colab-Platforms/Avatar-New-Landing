"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Benefits() {
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

  const benefits = [
    { title: "Job-Ready Skills", desc: "Directly applicable in workplaces and academics." },
    { title: "Real Projects", desc: "Build a portfolio that employers and clients respect." },
    { title: "Confidence with Technology", desc: "No more fear of new tools." },
    { title: "Productivity Gains", desc: "Save hours every week with AI workflows." },
    { title: "Recognized Certification", desc: "Add it to LinkedIn, résumé, or college applications." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="reveal">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80"
              alt="Confident learner"
              width={900}
              height={520}
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>

        <div className="reveal">
          <span className="tag">Outcomes That Matter</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-800 mt-5 mb-5 leading-tight">
            Skills you can show, results you can feel.
          </h2>
          <p className="text-navy-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            Every Avatar program is designed with measurable outcomes. By the end of your course, you'll walk away with a portfolio, a project, and a noticeable shift in how you work, learn, or stay safe online.
          </p>

          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-navy-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-navy-800">{benefit.title}</h4>
                  <p className="text-sm text-navy-600">{benefit.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="#testimonials"
            className="mt-7 sm:mt-9 inline-flex items-center gap-2 text-navy-700 font-semibold border-b-2 border-navy-700 pb-1 hover:gap-3 transition-all text-sm sm:text-base"
          >
            See Student Success Stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
