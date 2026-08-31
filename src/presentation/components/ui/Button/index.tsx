import React from "react";
import "./style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  hasIconCircle?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  hasIconCircle = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const classes = [
    "tripzo-btn",
    `tripzo-btn--${variant}`,
    `tripzo-btn--${size}`,
    fullWidth ? "tripzo-btn--full" : "",
    disabled ? "tripzo-btn--disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      {icon && iconPosition === "left" && (
        <span className={hasIconCircle ? "tripzo-btn__icon-circle" : "tripzo-btn__icon"}>
          {icon}
        </span>
      )}
      <span className="tripzo-btn__text">{children}</span>
      {icon && iconPosition === "right" && (
        <span className={hasIconCircle ? "tripzo-btn__icon-circle" : "tripzo-btn__icon"}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
