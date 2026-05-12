"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { X, Home, BookOpen, Star, MessageCircle, HelpCircle, ArrowRight, Mail, Phone, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWebinarDropdownOpen, setIsWebinarDropdownOpen] = useState(false);
  const [isMobileWebinarOpen, setIsMobileWebinarOpen] = useState(false);

    const pathname = usePathname(); 

  useEffect(() => {
    // Check initial scroll position on mount
    // setIsScrolled(window.scrollY > 30);

    // console.log("window.scrollY: ", window.scrollY)
    // console.log("isScrolled: ", isScrolled)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-5 z-50 w-full">
        <div
          className={`mx-auto px-4 sm:px-6 py-3 flex items-center justify-between bg-white border-b border-navy-100 transition-all duration-350 ${
            isScrolled ? "top-3.5 max-w-7xl bg-white/92 backdrop-blur-sm border border-navy-100/50 rounded-full shadow-lg px-6" : "container"
          }`}
        >
          <Link href="#" className="flex items-center gap-2.5 no-select">
            <img src="/assets/images/Asset 5.svg" alt="Avatar Logo" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-md font-medium text-navy-700">
            <Link href="#home" className="hover:text-navy-900 transition">Home</Link>
            
            {/* Webinars Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsWebinarDropdownOpen(true)}
              onMouseLeave={() => setIsWebinarDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-navy-900 transition py-2">
                Webinars
                <ChevronDown className={`w-4 h-4 transition-transform ${isWebinarDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isWebinarDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-white border border-navy-100 rounded-lg shadow-lg py-2">
                    <Link 
                      href="#programs" 
                      className="block px-4 py-2 hover:bg-navy-50 transition"
                    >
                      All Webinars
                    </Link>
                    <Link 
                      href="/cyberwebinar" 
                      className="block px-4 py-2 hover:bg-navy-50 transition"
                    >
                      Cyber Webinar
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="#why" className="hover:text-navy-900 transition">About</Link>
            <Link href="#testimonials" className="hover:text-navy-900 transition">Blog</Link>
            <Link href="#faqs" className="hover:text-navy-900 transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#enroll" className="hidden md:inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition">
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hamburger md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] z-60 ${isMobileMenuOpen ? "active" : ""}`}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line block w-6 h-[2px] bg-navy-700 rounded-full origin-center"></span>
              <span className="hamburger-line block w-6 h-[2px] bg-navy-700 rounded-full origin-center"></span>
              <span className="hamburger-line block w-6 h-[2px] bg-navy-700 rounded-full origin-center"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-navy-900/50 z-55 md:hidden transition-opacity duration-350 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile menu drawer */}
      <nav
        className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-white z-60 shadow-2xl md:hidden flex flex-col transition-transform duration-350 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-navy-100">
          <div className="flex items-center gap-2">
            <Logo className="w-7 h-7" />
            <span className="text-lg font-bold text-navy-700">Avatar</span>
          </div>
          <button onClick={closeMenu} className="w-10 h-10 flex items-center justify-center text-navy-700 hover:bg-navy-50 rounded-full transition" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-1">
            <Link href="#home" onClick={closeMenu} className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-navy-700 font-medium hover:bg-navy-50 transition">
              <Home className="w-5 h-5 text-navy-500" /> Home
            </Link>
            
            {/* Mobile Webinars Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobileWebinarOpen(!isMobileWebinarOpen)}
                className="mobile-nav-link flex items-center justify-between w-full px-4 py-3 rounded-xl text-navy-700 font-medium hover:bg-navy-50 transition"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-navy-500" /> Webinars
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileWebinarOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileWebinarOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link 
                    href="#programs" 
                    onClick={closeMenu} 
                    className="px-4 py-2 rounded-lg text-navy-600 text-sm hover:bg-navy-50 transition"
                  >
                    All Webinars
                  </Link>
                  <Link 
                    href="/cyberwebinar" 
                    onClick={closeMenu} 
                    className="px-4 py-2 rounded-lg text-navy-600 text-sm hover:bg-navy-50 transition"
                  >
                    Cyber Webinar
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="#why" onClick={closeMenu} className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-navy-700 font-medium hover:bg-navy-50 transition">
              <Star className="w-5 h-5 text-navy-500" /> About
            </Link>
            <Link href="#testimonials" onClick={closeMenu} className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-navy-700 font-medium hover:bg-navy-50 transition">
              <MessageCircle className="w-5 h-5 text-navy-500" /> Blog
            </Link>
            <Link href="#faqs" onClick={closeMenu} className="mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-navy-700 font-medium hover:bg-navy-50 transition">
              <HelpCircle className="w-5 h-5 text-navy-500" /> Contact
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-navy-100">
            <Link href="#enroll" onClick={closeMenu} className="mobile-nav-link flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-3 rounded-full transition w-full">
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-navy-100">
            <p className="text-xs text-navy-500 mb-3">Get in touch</p>
            <a href="mailto:hello@avatar.com" className="flex items-center gap-2 text-sm text-navy-600 mb-2">
              <Mail className="w-4 h-4" /> hello@avatar.com
            </a>
            <a href="tel:+919800000000" className="flex items-center gap-2 text-sm text-navy-600">
              <Phone className="w-4 h-4" /> +91 98XXX XXXXX
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-navy-50 hover:bg-navy-100 flex items-center justify-center transition text-navy-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-navy-50 hover:bg-navy-100 flex items-center justify-center transition text-navy-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-navy-50 hover:bg-navy-100 flex items-center justify-center transition text-navy-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-navy-50 hover:bg-navy-100 flex items-center justify-center transition text-navy-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
