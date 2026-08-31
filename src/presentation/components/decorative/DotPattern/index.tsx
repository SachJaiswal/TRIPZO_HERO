import React from "react";
import "./style.css";

interface DotPatternProps {
  width?: number;
  height?: number;
  className?: string;
}

export const DotPattern: React.FC<DotPatternProps> = ({
  width = 180,
  height = 180,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`dot-pattern-svg ${className}`}
      aria-hidden="true"
    >
      <pattern
        id="dot-grid-pattern"
        x="0"
        y="0"
        width="16"
        height="16"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="2" fill="#CBD5E1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#dot-grid-pattern)" />
    </svg>
  );
};

export default DotPattern;
