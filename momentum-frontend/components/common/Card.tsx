import React from "react";

type CardProps = {
  children: React.ReactNode; // The content inside the card
  onClick?: () => void; // Optional click handler
  className?: string; // Additional classes for styling
};

const Card: React.FC<CardProps> = ({ children, onClick, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`border bg-white rounded-lg shadow-sm overflow-hidden space-y-8 p-6 ${
        onClick
          ? "cursor-pointer transform transition-transform hover:scale-105"
          : ""
      } ${className}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined} // Accessible interaction for clickable cards
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
