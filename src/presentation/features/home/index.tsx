"use client";

import React from "react";
import Header from "../../components/layout/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import PlannerPreview from "./components/PlannerPreview";
import AITravelAssistant from "./components/AITravelAssistant";
import About from "./components/About";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "../../components/layout/Footer";
import "./style.css";

export const HomeFeature: React.FC = () => {
  return (
    <div className="home-feature-wrapper">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PlannerPreview />
        <AITravelAssistant />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomeFeature;
