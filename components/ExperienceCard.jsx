"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "./IconsExport";

const colorMap = {
  blue: {
    border: "border-theme-blue",
    bg: "bg-theme-blue",
    hoverBg: "hover:bg-theme-blue",
    headerBg: "bg-theme-blue/10",
  },
  purple: {
    border: "border-theme-purple",
    bg: "bg-theme-purple",
    hoverBg: "hover:bg-theme-purple",
    headerBg: "bg-theme-purple/10",
  },
  yellow: {
    border: "border-theme-yellow",
    bg: "bg-theme-yellow",
    hoverBg: "hover:bg-theme-yellow",
    headerBg: "bg-theme-yellow/10",
  },
  green: {
    border: "border-theme-green",
    bg: "bg-theme-green",
    hoverBg: "hover:bg-theme-green",
    headerBg: "bg-theme-green/10",
  },
};

const ExperienceCard = ({ item, color = "blue" }) => {
  const {
    companyName,
    companyLogo,
    designation,
    location,
    startDate,
    endDate,
    companyLink,
    description,
    skills,
  } = item;

  const theme = colorMap[color] || colorMap.blue;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex relative items-start experience-row w-full pl-8 md:pl-10">
      {/* Timeline dot */}
      <div
        className={`w-[20px] h-[20px] absolute left-[4px] md:left-[6px] top-[18px] rounded-full border-2 ${theme.bg} ${theme.border} z-10 experience-circle`}
      />

      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative flex-1 rounded-xl border-2 ${theme.border} bg-theme-white ${theme.hoverBg} ease-in-out duration-200 cursor-pointer`}
      >
        {/* Date Badge - Absolute positioned on top border to save space */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-theme-white dark:bg-[#121212] border-2 ${theme.border} absolute top-[-15px] rounded-lg right-4 md:right-8 px-3 py-0.5 z-10`}
        >
          <p className="text-xs md:text-sm font-medium">
            {startDate} - {endDate}
          </p>
        </div>

        {/* Card Header Content */}
        <div className="flex items-start gap-3 p-4 pr-10 relative">
          {/* Logo */}
          <div className="flex items-start shrink-0 pt-1">
            <Image
              src={companyLogo}
              width={52}
              height={52}
              alt="company logo"
              className="w-[48px] h-[48px] bg-theme-white dark:bg-zinc-800 p-1 rounded-full object-contain border border-zinc-200 dark:border-zinc-700/50 shadow-sm"
              unoptimized
            />
          </div>

          {/* Company details */}
          <div className="w-full flex-1 min-w-0 pr-2">
            {companyLink ? (
              <h3 className="text-base md:text-lg font-bold underline whitespace-normal break-words">
                <Link
                  target="_blank"
                  href={companyLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  {companyName}
                </Link>
              </h3>
            ) : (
              <h3 className="text-base md:text-lg font-bold whitespace-normal break-words">
                {companyName}
              </h3>
            )}
            <div className="flex flex-col gap-0.5 mt-1">
              <h4 className="font-semibold text-xs md:text-sm">{designation}</h4>
              <span className="text-xs opacity-75">{location}</span>
            </div>
          </div>

          {/* Chevron icon - absolute positioned at right-4 */}
          <div className="absolute right-4 top-[24px]">
            <FaChevronDown
              className={`text-sm transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>

        {/* Collapsible content */}
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0px",
            opacity: isOpen ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s ease, opacity 0.3s ease",
          }}
        >
          <div className="px-4 pb-4 border-t border-zinc-100 dark:border-zinc-800/30 pt-3">
            {description && description.length > 0 && (
              <ul className="list-disc pl-4 flex flex-col gap-1 mb-3">
                {description.map((point, index) => (
                  <li
                    key={index}
                    className="text-xs md:text-sm tracking-normal leading-relaxed"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {skills && (
              <div className="flex flex-wrap gap-[6px] mt-2">
                {skills.map((skill, idx) => (
                  <Image
                    key={idx}
                    src={skill}
                    width={25}
                    height={25}
                    alt="skill"
                    className="w-[25px] h-[25px] object-contain"
                    unoptimized
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
