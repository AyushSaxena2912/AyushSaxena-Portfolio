"use client";
import { useState } from "react";
import { FaChevronDown } from "./IconsExport";

const CollapsibleSection = ({ title, subtitle, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="mb-2">
      {/* Section Header with toggle */}
      <div className="flex items-start justify-between gap-3 group">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && (
            <p className="text-sm mt-1 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="mt-1 p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200 shrink-0"
          aria-label={isOpen ? "Collapse section" : "Expand section"}
          title={isOpen ? "Section band karo" : "Section kholo"}
        >
          <FaChevronDown
            className={`text-base transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Collapsible content */}
      <div
        style={{
          maxHeight: isOpen ? "9999px" : "0px",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.3s ease",
        }}
      >
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
};

export default CollapsibleSection;
