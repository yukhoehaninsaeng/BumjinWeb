import React from "react";

interface BlueprintSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function BlueprintSection({ children, className = "", id }: BlueprintSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: "#070E1B",
        backgroundImage: [
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "40px 40px",
      }}
    >
      {/* Radial vignette — darkens edges to simulate CAD viewport depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 15%, rgba(7,14,27,0.90) 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
