import React from "react";

interface SquiggleProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Squiggle: React.FC<SquiggleProps> = ({
  color = "#F472B6",
  width = 140,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 12C20 4 35 20 52 12C69 4 84 20 101 12C118 4 133 20 137 12"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Squiggle;
