import React from "react";
import { Compass, Users, Globe, Star, Heart } from "lucide-react";
import SectionHeading from "../../../../components/ui/SectionHeading";
import "./style.css";

const STATS_DATA = [
  {
    icon: Compass,
    value: "10,000+",
    label: "Itineraries Created",
    color: "#8B5CF6",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Covered",
    color: "#DB2777",
  },
  {
    icon: Star,
    value: "4.9 / 5",
    label: "User Rating",
    color: "#D97706",
  },
  {
    icon: Users,
    value: "25,000+",
    label: "Happy Travelers",
    color: "#059669",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionHeading
          badgeText="Our Story & Stats"
          badgeVariant="violet"
          title="Crafted For Modern Travelers"
          subtitle="We believe travel planning should be inspiring, intuitive, and stress-free."
        />

        <div className="about-stats-grid">
          {STATS_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="about-stat-card hard-border hard-shadow">
                <div className="about-stat-icon-wrapper" style={{ color: item.color }}>
                  <IconComponent size={24} />
                </div>
                <span className="about-stat-value">{item.value}</span>
                <span className="about-stat-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
