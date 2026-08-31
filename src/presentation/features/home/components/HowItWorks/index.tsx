"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "../../../../components/ui/SectionHeading";
import "./style.css";

const STEPS_DATA = [
  {
    step: "01",
    title: "Set Destination & Vibe",
    desc: "Specify your destination, dates, budget ceiling, and travel interests in seconds.",
    color: "#4f46e5",
    bgColor: "#eef2ff",
  },
  {
    step: "02",
    title: "AI Crafts Day-by-Day Route",
    desc: "OpenAI ranks places verified by Google Maps and structures an optimized daily schedule.",
    color: "#db2777",
    bgColor: "#fce7f3",
  },
  {
    step: "03",
    title: "Customize & Export Report",
    desc: "Tweak activities with natural language prompts and export printable PDF travel reports.",
    color: "#059669",
    bgColor: "#ecfdf5",
  },
];

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        ".step-card",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" className="how-it-works-section" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          badgeText="How It Works"
          badgeVariant="pink"
          title="3 Simple Steps To Your Dream Trip"
          subtitle="From inspiration to exploration in under 60 seconds."
        />

        <div className="steps-grid">
          {STEPS_DATA.map((item, index) => (
            <div key={index} className="step-card saas-step-card">
              <div className="step-card__header">
                <span
                  className="step-card__number"
                  style={{ backgroundColor: item.bgColor, color: item.color }}
                >
                  Step {item.step}
                </span>
              </div>
              <h3 className="step-card__title">{item.title}</h3>
              <p className="step-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
