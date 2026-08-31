"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";
import SectionHeading from "../../../../components/ui/SectionHeading";
import Button from "../../../../components/ui/Button";
import "./style.css";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/feedback`, {
        email: email.trim(),
        message: message.trim(),
      });

      if (response.data?.success) {
        setIsSubmitted(true);
        setEmail("");
        setMessage("");
      } else {
        setErrorMsg(response.data?.message || "Failed to submit feedback.");
      }
    } catch (err: any) {
      setErrorMsg(
        err.response?.data?.message || "Could not submit feedback. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionHeading
          badgeText="Get In Touch"
          badgeVariant="yellow"
          title="Have Questions or Feedback?"
          subtitle="We’d love to hear your thoughts on Tripzo as we expand upcoming features."
        />

        <div className="contact-card hard-border hard-shadow-lg">
          <div className="contact-info-col">
            <div className="contact-icon-box">
              <Mail size={28} color="#FFFFFF" />
            </div>
            <h3 className="contact-info-title">Let&apos;s Build Better Travel</h3>
            <p className="contact-info-desc">
              Whether you are a frequent explorer, travel blogger, or tech enthusiast, reach out with feedback or partnership queries.
            </p>
            <div className="contact-email-badge hard-border">
              <Mail size={16} color="#8B5CF6" /> support@tripzo.io
            </div>
          </div>

          <div className="contact-form-col">
            {isSubmitted ? (
              <div className="contact-success-state">
                <CheckCircle2 size={48} color="#34D399" />
                <h4>Message Received!</h4>
                <p>Thank you for reaching out. Our team will review your note and respond shortly.</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {errorMsg && (
                  <div className="contact-alert-error">
                    <AlertCircle size={18} color="#dc2626" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="contact-form-group">
                  <label className="contact-label">Your Email Address</label>
                  <input
                    type="email"
                    required
                    disabled={isLoading}
                    className="contact-input"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">Your Message or Feature Idea</label>
                  <textarea
                    rows={4}
                    required
                    disabled={isLoading}
                    className="contact-textarea"
                    placeholder="Tell us what travel features you'd like to see..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isLoading}
                  icon={isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  fullWidth
                >
                  {isLoading ? "Submitting..." : "Send Feedback"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
