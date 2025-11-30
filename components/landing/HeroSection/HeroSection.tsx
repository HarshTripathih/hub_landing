"use client";

import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function HeroSection() {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const cookie = document.cookie.includes("brochure_filled=yes");
      setHasAccess(cookie);
    };

    checkCookie();

    // Listen when modal submits form
    window.addEventListener("brochure-updated", checkCookie);

    return () => {
      window.removeEventListener("brochure-updated", checkCookie);
    };
  }, []);

  const handleDownload = () => {
    if (hasAccess) {
      window.open("/brochure.pdf", "_blank");
    } else {
      document.getElementById("enquiryModal")?.classList.remove("hidden");
    }
  };

  // GSAP Animations
  useGSAP(() => {
    gsap.from(".hero-title", { y: 40, opacity: 0, duration: 1 });
    gsap.from(".hero-desc", { y: 40, opacity: 0, delay: 0.3, duration: 1 });
    gsap.from(".hero-btn", { y: 40, opacity: 0, delay: 0.6, duration: 1 });
  }, []);

  return (
    <section className="pt-32 pb-24 bg-white dark:bg-black text-center">
      <h1 className="hero-title text-5xl font-bold dark:text-white">
        Aliens Hub — We Build SaaS, Websites & Enterprise Systems
      </h1>

      <p className="hero-desc mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        High-performance apps built with Next.js, Node.js, MongoDB, AWS.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handleDownload}
          className="hero-btn px-8 py-3 bg-indigo-600 rounded-lg text-white"
        >
          Download Brochure
        </button>
      </div>
    </section>
  );
}
