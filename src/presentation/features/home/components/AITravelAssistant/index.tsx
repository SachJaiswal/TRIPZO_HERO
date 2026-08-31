"use client";

import React, { useEffect, useRef } from "react";
import { Bot, User as UserIcon } from "lucide-react";
import gsap from "gsap";
import SectionHeading from "../../../../components/ui/SectionHeading";
import GeometricShape from "../../../../components/decorative/GeometricShape";
import "./style.css";

export const AITravelAssistant: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        ".chat-msg",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7, stagger: 0.3, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ai-assistant-section" ref={sectionRef}>
      <GeometricShape type="triangle" color="violet" size={30} rotation={-15} className="ai-assistant-shape-left" />

      <div className="container">
        <SectionHeading
          badgeText="24/7 AI Companion"
          badgeVariant="mint"
          title="Meet Your Personal AI Travel Assistant"
          subtitle="Ask questions, discover local food secrets, adjust routes, and get instant recommendations anytime."
        />

        <div className="ai-assistant-card hard-border hard-shadow-lg">
          <div className="ai-chat-header">
            <div className="ai-chat-bot-info">
              <div className="ai-chat-bot-avatar">
                <Bot size={20} color="#FFFFFF" />
              </div>
              <div>
                <h4 className="ai-chat-bot-name">Tripzo AI Guide</h4>
                <span className="ai-chat-status">● Online 24/7</span>
              </div>
            </div>
          </div>

          <div className="ai-chat-messages">
            <div className="chat-msg chat-msg--user">
              <div className="chat-msg__bubble">
                "Can you recommend a romantic dinner spot near the Eiffel Tower with vegan options under €60?"
              </div>
              <div className="chat-msg__avatar">
                <UserIcon size={16} color="#FFFFFF" />
              </div>
            </div>

            <div className="chat-msg chat-msg--bot">
              <div className="chat-msg__avatar chat-msg__avatar--bot">
                <Bot size={16} color="#FFFFFF" />
              </div>
              <div className="chat-msg__bubble chat-msg__bubble--bot">
                ✨ <strong>Le Potager de Charlotte!</strong> It offers 100% plant-based gourmet French dishes with a stunning view of the Eiffel Tower lights. Average spend: €45 per person. I have added it to your Day 1 dinner itinerary!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITravelAssistant;
