"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaGithub, FaArrowRight } from "./IconsExport";

const colorMap = {
  blue: {
    border: "border-theme-blue",
    bg: "bg-theme-blue",
    hoverBg: "hover:bg-theme-blue/30",
    headerBg: "bg-theme-blue/10",
  },
  purple: {
    border: "border-theme-purple",
    bg: "bg-theme-purple",
    hoverBg: "hover:bg-theme-purple/30",
    headerBg: "bg-theme-purple/10",
  },
  yellow: {
    border: "border-theme-yellow",
    bg: "bg-theme-yellow",
    hoverBg: "hover:bg-theme-yellow/30",
    headerBg: "bg-theme-yellow/10",
  },
  green: {
    border: "border-theme-green",
    bg: "bg-theme-green",
    hoverBg: "hover:bg-theme-green/30",
    headerBg: "bg-theme-green/10",
  },
};

const ProjectCard = ({ item, color = "blue" }) => {
  const {
    name,
    description,
    duration,
    icon,
    features,
    techStack,
    deployment,
    repository,
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
        {/* Date / Duration Badge */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-theme-white dark:bg-[#121212] border-2 ${theme.border} absolute top-[-15px] rounded-lg right-4 md:right-8 px-3 py-0.5 z-10`}
        >
          <p className="text-xs md:text-sm font-medium">
            {duration}
          </p>
        </div>

        {/* Card Header Content */}
        <div className="flex items-start gap-3 p-4 pr-10 relative">
          {/* Logo */}
          <div className="flex items-start shrink-0 pt-1">
            <Image
              src={icon}
              width={52}
              height={52}
              alt={`${name} icon`}
              className="w-[48px] h-[48px] bg-theme-white dark:bg-zinc-800 p-1.5 rounded-full object-contain border border-zinc-200 dark:border-zinc-700/50 shadow-sm"
              unoptimized
            />
          </div>

          {/* Project Details */}
          <div className="w-full flex-1 min-w-0 pr-2">
            {deployment ? (
              <h3 className="text-base md:text-lg font-bold underline whitespace-normal break-words leading-tight flex items-center gap-1.5">
                <Link
                  target="_blank"
                  href={deployment}
                  onClick={(e) => e.stopPropagation()}
                >
                  {name}
                </Link>
                <FaArrowRight className="text-[10px] -rotate-45 text-zinc-400 inline-block shrink-0" />
              </h3>
            ) : (
              <h3 className="text-base md:text-lg font-bold whitespace-normal break-words leading-tight">
                {name}
              </h3>
            )}
            <p className="text-xs opacity-75 mt-1.5 leading-relaxed text-zinc-700 dark:text-zinc-300">
              {description}
            </p>
          </div>

          {/* Chevron icon */}
          <div className="absolute right-4 top-[24px]">
            <FaChevronDown
              className={`text-sm transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>

        {/* Collapsible Content */}
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0px",
            opacity: isOpen ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s ease, opacity 0.3s ease",
          }}
        >
          <div className="px-4 pb-4 border-t border-zinc-100 dark:border-zinc-800/30 pt-3 flex flex-col gap-3">
            {/* Features list */}
            {features && features.length > 0 && (
              <ul className="list-disc pl-4 flex flex-col gap-1">
                {features.map((point, index) => (
                  <li
                    key={index}
                    className="text-xs md:text-sm tracking-normal leading-relaxed text-zinc-600 dark:text-zinc-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Links and Tech Stack Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1 pt-2 border-t border-zinc-100 dark:border-zinc-800/10">
              {/* Tech stack image */}
              {techStack && (
                <div className="shrink-0">
                  <Image
                    src={techStack}
                    width={120}
                    height={30}
                    alt="tech stack"
                    className="h-[24px] w-auto object-contain"
                    unoptimized
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {repository && (
                  <Link
                    href={repository}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-xs font-semibold hover:opacity-85 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-2.5 py-1.5 rounded-lg shadow-sm"
                  >
                    <FaGithub className="text-sm" />
                    Code
                  </Link>
                )}
                {deployment && (
                  <Link
                    href={deployment}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-xs font-semibold text-white bg-theme-black dark:bg-white dark:text-theme-black hover:opacity-85 px-2.5 py-1.5 rounded-lg shadow-sm"
                  >
                    Live Demo
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
