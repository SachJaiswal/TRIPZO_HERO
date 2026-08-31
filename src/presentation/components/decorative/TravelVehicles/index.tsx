import React from "react";

export const FlightMini: React.FC<{ size?: number; className?: string }> = ({
  size = 64,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="4" y="4" width="56" height="56" rx="16" fill="#F3E8FF" stroke="#1E293B" strokeWidth="2.5" />
    <path
      d="M48 20L36 32L34 26L24 30L28 34L22 36L18 34L16 36L22 42L36 40L48 20Z"
      fill="#8B5CF6"
      stroke="#1E293B"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const CarMini: React.FC<{ size?: number; className?: string }> = ({
  size = 64,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="4" y="4" width="56" height="56" rx="16" fill="#FEF3C7" stroke="#1E293B" strokeWidth="2.5" />
    <path
      d="M16 36L20 24H44L48 36M16 36H48M16 36V44H48V36"
      stroke="#1E293B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="22" cy="44" r="4" fill="#F59E0B" stroke="#1E293B" strokeWidth="2" />
    <circle cx="42" cy="44" r="4" fill="#F59E0B" stroke="#1E293B" strokeWidth="2" />
  </svg>
);

export const BoatMini: React.FC<{ size?: number; className?: string }> = ({
  size = 64,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="4" y="4" width="56" height="56" rx="16" fill="#FCE7F3" stroke="#1E293B" strokeWidth="2.5" />
    <path
      d="M14 40L20 48H44L50 40H14Z"
      fill="#F472B6"
      stroke="#1E293B"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M32 16V40M32 20L44 32H32" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
