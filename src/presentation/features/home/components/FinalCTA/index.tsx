"use client";

import React from "react";
import { ArrowRight, Compass } from "lucide-react";
import Button from "../../../../components/ui/Button";
import Badge from "../../../../components/ui/Badge";
import "./style.css";

const USER_APP_URL = process.env.NEXT_PUBLIC_USER_APP_URL || "http://localhost:3002";

export const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-card saas-cta-banner">
          <div className="cta-ambient-glow" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="final-cta-badge-wrap">
              <Badge variant="yellow" icon={<Compass size={14} />}>
                Ready For Takeoff?
              </Badge>
            </div>

            <h2 className="final-cta-title">
              Your Next Adventure <br />
              <span className="final-cta-title-highlight">Starts Right Here.</span>
            </h2>

            <p className="final-cta-desc">
              Specify your destination and preferences. Let Tripzo handle the rest with verified Google Places, date-range weather forecasts, and automated budget allocation.
            </p>

            <div className="final-cta-actions">
              <a href={USER_APP_URL}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  hasIconCircle
                >
                  Plan My Trip Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
