"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Compass, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Button from "../../ui/Button";
import "./style.css";

const USER_APP_URL = process.env.NEXT_PUBLIC_USER_APP_URL || "http://localhost:3002";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMobileMenu();
  };

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        {/* Brand Logo */}
        <Link href="/" className="site-header__logo" onClick={scrollToTop}>
          <div className="site-header__logo-icon hard-border">
            <Compass size={24} strokeWidth={2.5} color="#FFFFFF" />
          </div>
          <span className="site-header__logo-text">
            Trip<span className="site-header__logo-highlight">zo</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="site-header__nav" aria-label="Main Navigation">
          <a href="#hero" onClick={scrollToTop} className="site-header__nav-link">
            Home
          </a>
          <a href="#features" className="site-header__nav-link">
            Features
          </a>
          <a href="#how-it-works" className="site-header__nav-link">
            How It Works
          </a>
          <a href="#about" className="site-header__nav-link">
            About
          </a>
          <a href="#contact" className="site-header__nav-link">
            Contact
          </a>
        </nav>

        {/* Header Actions */}
        <div className="site-header__actions">
          <a href={USER_APP_URL}>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </a>
          <a href={USER_APP_URL}>
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowRight size={16} strokeWidth={2.5} />}
              hasIconCircle
            >
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="site-header__mobile-toggle hard-border"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="site-header__mobile-drawer" onClick={closeMobileMenu}>
          <div
            className="site-header__mobile-content hard-border hard-shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="site-header__mobile-nav">
              <a href="#hero" className="site-header__mobile-link" onClick={scrollToTop}>
                Home
              </a>
              <a href="#features" className="site-header__mobile-link" onClick={closeMobileMenu}>
                Features
              </a>
              <a href="#how-it-works" className="site-header__mobile-link" onClick={closeMobileMenu}>
                How It Works
              </a>
              <a href="#about" className="site-header__mobile-link" onClick={closeMobileMenu}>
                About
              </a>
              <a href="#contact" className="site-header__mobile-link" onClick={closeMobileMenu}>
                Contact
              </a>
            </nav>

            <div className="site-header__mobile-actions">
              <a href={USER_APP_URL} onClick={closeMobileMenu} className="w-full">
                <Button variant="outline" size="md" className="w-full">
                  Sign In
                </Button>
              </a>
              <a href={USER_APP_URL} onClick={closeMobileMenu} className="w-full">
                <Button
                  variant="primary"
                  size="md"
                  icon={<Sparkles size={18} />}
                  className="w-full"
                >
                  Plan My Trip
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
