"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Calendar, MapPin, DollarSign, Heart, ArrowRight, Compass } from "lucide-react";
import gsap from "gsap";
import Button from "../../../../components/ui/Button";
import Badge from "../../../../components/ui/Badge";
import "./style.css";

const USER_APP_URL = process.env.NEXT_PUBLIC_USER_APP_URL || "http://localhost:3002";

export const Hero: React.FC = () => {
  const [destination, setDestination] = useState("Paris, France");
  const [dates, setDates] = useState("Sep 12 — Sep 19");
  const [budget, setBudget] = useState("₹2,00,000");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Food",
    "Culture",
    "Nature",
  ]);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Entrance sequence
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-planner-card",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.25, ease: "power2.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* SaaS Ambient Glow Background */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Messaging & CTA */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <Badge variant="violet" icon={<Sparkles size={14} />}>
              AI-Powered Travel OS
            </Badge>
          </div>

          <h1 className="hero-title">
            Plan Less. <br />
            <span className="hero-title-highlight">Travel Smarter.</span>
          </h1>

          <p className="hero-description">
            Turn your destination ideas into verified, day-by-day itineraries with real-world Google Maps places, date-range weather forecasts, and smart budget allocation.
          </p>

          <div className="hero-actions">
            <a href={USER_APP_URL}>
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                hasIconCircle
              >
                Plan My Trip
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </a>
          </div>

          <div className="hero-trust-pills">
            <span className="hero-trust-item">
              <span className="trust-dot" /> Instant day-by-day itineraries
            </span>
            <span className="hero-trust-item">
              <span className="trust-dot" /> Verified Google Places & Ratings
            </span>
            <span className="hero-trust-item">
              <span className="trust-dot" /> Automated Budget Engine
            </span>
          </div>
        </div>

        {/* Right Column: SaaS Interactive Demo Card */}
        <div className="hero-planner-card-wrap">
          <div className="hero-planner-card saas-card">
            <div className="hero-planner-card-header">
              <div className="hero-planner-card-badge">
                <Compass size={18} className="icon-indigo" />
                <span>Smart Trip Builder</span>
              </div>
              <span className="hero-planner-card-status">Interactive Preview</span>
            </div>

            <div className="hero-planner-form">
              {/* Destination Input */}
              <div className="hero-form-group">
                <label className="hero-form-label">
                  <MapPin size={15} className="icon-indigo" /> Destination
                </label>
                <input
                  type="text"
                  className="hero-form-input"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Paris, France"
                />
              </div>

              {/* Dates & Budget Row */}
              <div className="hero-form-row">
                <div className="hero-form-group">
                  <label className="hero-form-label">
                    <Calendar size={15} className="icon-rose" /> Dates
                  </label>
                  <input
                    type="text"
                    className="hero-form-input"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </div>

                <div className="hero-form-group">
                  <label className="hero-form-label">
                    <DollarSign size={15} className="icon-amber" /> Budget
                  </label>
                  <input
                    type="text"
                    className="hero-form-input"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
              </div>

              {/* Interests Chips */}
              <div className="hero-form-group">
                <label className="hero-form-label">
                  <Heart size={15} className="icon-emerald" /> Travel Interests
                </label>
                <div className="hero-interests-chips">
                  {["Food", "Culture", "Nature", "Adventure", "Shopping"].map(
                    (interest) => {
                      const isSelected = selectedInterests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`hero-interest-chip ${
                            isSelected ? "hero-interest-chip--selected" : ""
                          }`}
                        >
                          {interest}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Card CTA */}
              <a href={USER_APP_URL} className="hero-card-cta">
                <Button
                  variant="primary"
                  size="md"
                  icon={<Sparkles size={16} />}
                  fullWidth
                >
                  Generate Itinerary
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
