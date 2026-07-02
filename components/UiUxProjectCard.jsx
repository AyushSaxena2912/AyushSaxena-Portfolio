"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "./IconsExport";

const colorMap = {
  blue: {
    border: "border-theme-blue",
    bg: "bg-theme-blue",
    hoverBg: "hover:bg-theme-blue",
  },
  purple: {
    border: "border-theme-purple",
    bg: "bg-theme-purple",
    hoverBg: "hover:bg-theme-purple",
  },
  yellow: {
    border: "border-theme-yellow",
    bg: "bg-theme-yellow",
    hoverBg: "hover:bg-theme-yellow",
  },
  green: {
    border: "border-theme-green",
    bg: "bg-theme-green",
    hoverBg: "hover:bg-theme-green",
  },
  pink: {
    border: "border-theme-pink",
    bg: "bg-theme-pink",
    hoverBg: "hover:bg-theme-pink",
  },
};

const UiUxProjectCard = ({ item, color = "blue" }) => {
  const { name, description, image, link } = item;
  const theme = colorMap[color] || colorMap.blue;

  return (
    <Link
      href={link || "https://www.figma.com/"}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full bg-theme-white dark:bg-[#1a1a1a] border-2 ${theme.border} ${theme.hoverBg} rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col group project-card`}
    >
      {image ? (
        <div className="w-full relative overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center shrink-0">
          <img
            src={image}
            alt={`${name} mockup`}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}

      {/* Details Footer (Text at bottom) */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-theme-black dark:group-hover:text-theme-black transition-colors">
            {name}
          </h3>
          <p className="text-xs md:text-sm tracking-normal leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4 group-hover:text-theme-black/80 dark:group-hover:text-theme-black/80 transition-colors">
            {description}
          </p>
        </div>

        {/* Redirect Button Link */}
        <div className="flex items-center gap-1.5 font-semibold text-xs md:text-sm underline group-hover:no-underline transition-all">
          <span className="group-hover:text-theme-black dark:group-hover:text-theme-black transition-colors">
            View Design Prototype
          </span>
          <FaLongArrowAltRight className="fill-theme-black dark:fill-theme-white group-hover:fill-theme-black group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
};

export default UiUxProjectCard;
