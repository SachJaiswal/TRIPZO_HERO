import React from "react";
import "./style.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "violet" | "pink" | "yellow" | "mint";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "violet",
  size = "md",
  icon,
}) => {
  return (
    <span className={`tripzo-badge tripzo-badge--${variant} tripzo-badge--${size}`}>
      {icon && <span className="tripzo-badge__icon">{icon}</span>}
      <span className="tripzo-badge__text">{children}</span>
    </span>
  );
};

export default Badge;
