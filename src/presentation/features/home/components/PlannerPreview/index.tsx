"use client";

import React, { useState } from "react";
import { Calendar, Clock, ChevronRight, Compass } from "lucide-react";
import SectionHeading from "../../../../components/ui/SectionHeading";
import Button from "../../../../components/ui/Button";
import "./style.css";

const SAMPLE_ITINERARY = [
  {
    day: 1,
    title: "Day 1: Arrival & Paris Icons",
    activities: [
      {
        time: "09:30 AM",
        title: "Check-in at Le Levan Hotel",
        category: "Hotel Stay",
        desc: "Relax & unpack near Montmartre.",
      },
      {
        time: "11:00 AM",
        title: "Louvre Museum Guided Tour",
        category: "Culture",
        desc: "See the Mona Lisa and famous renaissance wings.",
      },
      {
        time: "02:30 PM",
        title: "Lunch at Café de Flore",
        category: "Dining",
        desc: "Classic Parisian croissants & espresso.",
      },
      {
        time: "06:00 PM",
        title: "Eiffel Tower Sunset Cruise",
        category: "Sightseeing",
        desc: "Seine River 1-hour boat tour.",
      },
    ],
  },
  {
    day: 2,
    title: "Day 2: Historic Districts & Hidden Gems",
    activities: [
      {
        time: "10:00 AM",
        title: "Stroll through Le Marais",
        category: "Exploration",
        desc: "Boutique shopping & vintage markets.",
      },
      {
        time: "01:00 PM",
        title: "Sainte-Chapelle Stained Glass",
        category: "Architecture",
        desc: "Gothic 13th-century royal chapel.",
      },
      {
        time: "05:00 PM",
        title: "Sacré-Cœur Basilica Sunset",
        category: "Panoramic",
        desc: "View of entire Paris skyline.",
      },
    ],
  },
];

const USER_APP_URL = process.env.NEXT_PUBLIC_USER_APP_URL || "http://localhost:3002";

export const PlannerPreview: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  const currentItinerary = SAMPLE_ITINERARY.find((item) => item.day === activeDay) || SAMPLE_ITINERARY[0];

  return (
    <section id="planner-preview" className="planner-preview-section">
      <div className="container">
        <SectionHeading
          badgeText="Sample Itinerary Preview"
          badgeVariant="yellow"
          title="See What An AI Itinerary Looks Like"
          subtitle="Real-time timeline breakdown with dining, sightseeing, and transport suggestions."
        />

        <div className="planner-preview-card saas-dashboard-mockup">
          {/* Dashboard Window Header */}
          <div className="dashboard-window-header">
            <div className="window-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="window-address">
              <Compass size={14} className="icon-indigo" />
              <span>tripzo.io/app/planner?destination=Paris</span>
            </div>
          </div>

          {/* Day Selector Tabs */}
          <div className="planner-preview-tabs">
            {SAMPLE_ITINERARY.map((dayItem) => (
              <button
                key={dayItem.day}
                type="button"
                onClick={() => setActiveDay(dayItem.day)}
                className={`planner-preview-tab ${
                  activeDay === dayItem.day ? "planner-preview-tab--active" : ""
                }`}
              >
                <Calendar size={15} />
                <span>{dayItem.title}</span>
              </button>
            ))}
          </div>

          {/* Activities List */}
          <div className="planner-activities-list">
            {currentItinerary.activities.map((act, idx) => (
              <div key={idx} className="planner-activity-item saas-activity-card">
                <div className="planner-activity-time">
                  <Clock size={14} className="icon-indigo" />
                  <span>{act.time}</span>
                </div>
                <div className="planner-activity-info">
                  <div className="planner-activity-header">
                    <h4 className="planner-activity-title">{act.title}</h4>
                    <span className="planner-activity-cat">{act.category}</span>
                  </div>
                  <p className="planner-activity-desc">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="planner-preview-footer">
            <a href={USER_APP_URL}>
              <Button
                variant="primary"
                size="md"
                icon={<ChevronRight size={18} />}
              >
                Create My Custom Itinerary Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlannerPreview;
