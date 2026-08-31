"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, MapPin, DollarSign, Calendar } from "lucide-react";
import gsap from "gsap";
import SectionHeading from "../../../../components/ui/SectionHeading";
import "./style.css";

const FEATURES_DATA = [
  {
    icon: Sparkles,
    color: "#4f46e5",
    bgColor: "#eef2ff",
    title: "AI Travel Engine",
    description:
      "Generates hyper-personalized, day-by-day itineraries tailored to your unique travel style and budget.",
  },
  {
    icon: DollarSign,
    color: "#d97706",
    bgColor: "#fffbeb",
    title: "Budget Optimization",
    description:
      "Smart budget allocation across accommodation, activities, and dining with real-time estimation.",
  },
  {
    icon: MapPin,
    color: "#db2777",
    bgColor: "#fce7f3",
    title: "Smart Route Optimization",
    description:
      "Groups nearby attractions and activities to save travel time and minimize transport expenses.",
  },
  {
    icon: Calendar,
    color: "#059669",
    bgColor: "#ecfdf5",
    title: "Instant Customization",
    description:
      "Swap activities, add hidden gems, and tweak schedules on the fly with real-time AI adjustments.",
  },
];

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="features-section" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          badgeText="Why Choose Tripzo"
          badgeVariant="violet"
          title="Everything You Need For The Perfect Trip"
          subtitle="Designed for travelers who want unforgettable experiences without hours of stressful planning."
        />

        <div className="features-grid">
          {FEATURES_DATA.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div key={index} className="feature-card saas-feature-card">
                <div
                  className="feature-card__icon-box"
                  style={{ backgroundColor: feat.bgColor, color: feat.color }}
                >
                  <IconComponent size={24} />
                </div>
                <h3 className="feature-card__title">{feat.title}</h3>
                <p className="feature-card__desc">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
