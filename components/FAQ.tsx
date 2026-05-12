"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Do I need any prior experience to join?",
    answer: "Not at all. Our programs are designed for beginners as well as experienced learners. Each track has its own starting point.",
  },
  {
    question: "Are classes live or recorded?",
    answer: "Most programs include both — live interactive sessions and recordings for revisits.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes. Every learner who completes the program receives an Avatar Certified Learner credential.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee if the program doesn't meet your expectations.",
  },
  {
    question: "Do you provide support after the course ends?",
    answer: "Absolutely. You get lifetime access to materials and access to our learner community.",
  },
  {
    question: "Are programs suitable for people above 45?",
    answer: "Yes — we have a dedicated track designed specifically for 45+ learners with patient, beginner-friendly pacing.",
  },
];

export default function FAQ() {
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
    <section id="faqs" className="py-16 sm:py-24 bg-cream" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div className="reveal md:sticky md:top-28 hidden md:block">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80"
              alt="AI tutor"
              width={900}
              height={520}
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>

        <div className="reveal">
          <span className="tag">Frequently Asked</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-800 mt-5 mb-6 sm:mb-8 leading-tight">
            Got Questions? We've Got Answers.
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-navy-100 rounded-xl p-4 sm:p-5 group" open={index === 0}>
                <summary className="flex justify-between items-center font-semibold text-navy-800 text-sm sm:text-base cursor-pointer">
                  {faq.question}
                  <Plus className="faq-icon w-5 h-5 text-navy-500 flex-shrink-0 ml-2" />
                </summary>
                <p className="text-sm text-navy-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          <Link
            href="#enroll"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-navy-700 font-semibold border-b-2 border-navy-700 pb-1 hover:gap-3 transition-all text-sm sm:text-base"
          >
            Still have questions? Talk to us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
