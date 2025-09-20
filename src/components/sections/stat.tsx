import React from "react";

// 1. Define the props interface
interface StatProps {
  /** The numerical value or string for the statistic (e.g., '10+', '500') */
  number: number | string;
  /** The descriptive label for the statistic (e.g., 'Projects', 'Clients') */
  label: string;
}

// 2. Apply the interface to the functional component
export default function Stat({ number, label }: StatProps) {
  return (
    <div className="text-center">
      {/* Ensure number is converted to string for rendering if it's a number type */}
      <div className="text-xl font-bold">{number}</div>
      <div className="text-xs opacity-70">{label}</div>
    </div>
  );
}
