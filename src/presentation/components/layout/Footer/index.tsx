import React from "react";
import Link from "next/link";
import { Compass, Heart, Github, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import Badge from "../../ui/Badge";
import "./style.css";

const USER_APP_URL = process.env.NEXT_PUBLIC_USER_APP_URL || "http://localhost:3002";

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__card hard-border hard-shadow-lg">
          <div className="site-footer__grid">
            {/* Brand Column */}
            <div className="site-footer__brand">
              <Link href="/" className="site-footer__logo">
                <div className="site-footer__logo-icon hard-border">
                  <Compass size={24} strokeWidth={2.5} color="#FFFFFF" />
                </div>
                <span className="site-footer__logo-text">
                  Trip<span className="site-footer__logo-highlight">zo</span>
                </span>
              </Link>

              <p className="site-footer__tagline">
                Your intelligent AI travel companion for crafting stress-free, personalized day-by-day itineraries in seconds.
              </p>

              <div className="site-footer__socials">
                <a href="#" className="site-footer__social-btn hard-border" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className="site-footer__social-btn hard-border" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="site-footer__social-btn hard-border" aria-label="Github">
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="site-footer__columns">
              {/* Col 1 */}
              <div className="site-footer__col">
                <div className="site-footer__badge-wrap">
                  <Badge variant="violet" size="sm">Product</Badge>
                </div>
                <ul className="site-footer__link-list">
                  <li>
                    <a href={USER_APP_URL}>
                      AI Trip Builder <ArrowUpRight size={14} />
                    </a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#how-it-works">How It Works</a>
                  </li>
                  <li>
                    <a href="#planner-preview">Itinerary Sample</a>
                  </li>
                </ul>
              </div>

              {/* Col 2 */}
              <div className="site-footer__col">
                <div className="site-footer__badge-wrap">
                  <Badge variant="pink" size="sm">Company</Badge>
                </div>
                <ul className="site-footer__link-list">
                  <li>
                    <a href="#about">About Philosophy</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
              </div>

              {/* Col 3 */}
              <div className="site-footer__col">
                <div className="site-footer__badge-wrap">
                  <Badge variant="yellow" size="sm">Account</Badge>
                </div>
                <ul className="site-footer__link-list">
                  <li>
                    <a href={USER_APP_URL}>
                      Sign In <ArrowUpRight size={14} />
                    </a>
                  </li>
                  <li>
                    <a href={USER_APP_URL}>
                      Create Account <ArrowUpRight size={14} />
                    </a>
                  </li>
                  <li>
                    <a href={USER_APP_URL}>Start Free Trip</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="site-footer__divider" />

          <div className="site-footer__bottom">
            <p className="site-footer__copyright">
              © 2026 Tripzo AI Travel Companion. All rights reserved.
            </p>
            <div className="site-footer__pill-made">
              <Heart size={14} fill="#F472B6" color="#F472B6" />
              <span>Crafted for world travelers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
