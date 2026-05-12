"use client";

import Link from "next/link";
import Logo from "./Logo";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector("input") as HTMLInputElement;
    input.value = "";
    alert("Subscribed!");
  };

  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <Logo className="w-9 h-9" />
            <span className="text-xl font-bold text-white">Avatar</span>
          </div>
          <p className="text-sm leading-relaxed mb-5 max-w-sm">
            Avatar is an AI and Cyber Security training platform helping students, professionals, and lifelong learners thrive in a digital-first world.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> New Delhi, India
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@avatar.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 98XXX XXXXX
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#programs" className="hover:text-white transition">
                Cyber Security
              </Link>
            </li>
            <li>
              <Link href="#programs" className="hover:text-white transition">
                AI for Students
              </Link>
            </li>
            <li>
              <Link href="#programs" className="hover:text-white transition">
                AI for Professionals
              </Link>
            </li>
            <li>
              <Link href="#programs" className="hover:text-white transition">
                AI for 45+ Learners
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Mentors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm mb-4">AI tips, new courses, and exclusive offers — straight to your inbox.</p>
          <form className="flex gap-2 mb-5" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 min-w-0 bg-white/10 border border-white/15 rounded-full px-4 py-2.5 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/40"
            />
            <button className="bg-white text-navy-700 font-semibold text-sm px-5 rounded-full hover:bg-cream transition flex-shrink-0">
              Join
            </button>
          </form>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <p>© 2025 Avatar. All rights reserved. Crafted with care for curious minds.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
