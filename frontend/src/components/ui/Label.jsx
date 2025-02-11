import React from "react";

export function Label({ children, className = "" }) {
  return (
    <label className={`font-semibold text-gray-700 ${className}`}>
      {children}
    </label>
  );
}
