import React from "react";

interface GeometricShapeProps {
  type?: "circle" | "square" | "triangle";
  color?: "violet" | "pink" | "yellow" | "mint";
  size?: number;
  rotation?: number;
  className?: string;
}

const COLOR_MAP = {
  violet: "#8B5CF6",
  pink: "#F472B6",
  yellow: "#FBBF24",
  mint: "#34D399",
};

export const GeometricShape: React.FC<GeometricShapeProps> = ({
  type = "circle",
  color = "violet",
  size = 32,
  rotation = 0,
  className = "",
}) => {
  const fillColor = COLOR_MAP[color] || "#8B5CF6";
  const style = { transform: `rotate(${rotation}deg)` };

  return (
    <div
      className={`geometric-shape ${className}`}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      aria-hidden="true"
    >
      {type === "circle" && (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill={fillColor} stroke="#1E293B" strokeWidth="2.5" />
        </svg>
      )}

      {type === "square" && (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="6" fill={fillColor} stroke="#1E293B" strokeWidth="2.5" />
        </svg>
      )}

      {type === "triangle" && (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <path d="M16 3L29 27H3L16 3Z" fill={fillColor} stroke="#1E293B" strokeWidth="2.5" />
        </svg>
      )}
    </div>
  );
};

export default GeometricShape;
