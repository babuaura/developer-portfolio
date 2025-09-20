import React from "react";

interface StatProps {
  number: string | number;
  label: string;
}

export default function Stat({ number, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-xl font-bold">{number}</div>
      <div className="text-xs opacity-70">{label}</div>
    </div>
  );
}
