import React from "react";
import Badge from "../Badge";
import "./style.css";

interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: "violet" | "pink" | "yellow" | "mint";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant = "violet",
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {badgeText && (
        <div className="section-heading__badge">
          <Badge variant={badgeVariant}>{badgeText}</Badge>
        </div>
      )}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
