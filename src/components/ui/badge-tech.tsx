import { ReactNode } from "react";

export default function BadgeTech({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-primary/90 px-3 py-2">
      <div className="opacity-90">{icon}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
