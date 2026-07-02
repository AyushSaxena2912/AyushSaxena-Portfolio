"use client";
import Image from "next/image";
import { ProjectModal } from "./Export";
import { useDisclosure } from "@nextui-org/react";

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
};

const ProjectCard = ({ item, color = "blue" }) => {
  const {
    name,
    description,
    duration,
    banner,
    icon,
    features,
    techStack,
    deployment,
    repository,
  } = item;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const theme = colorMap[color] || colorMap.blue;

  return (
    <>
      <ProjectModal
        name={name}
        description={description}
        icon={icon}
        techStack={techStack}
        banner={banner}
        isOpen={isOpen}
        repository={repository}
        deployment={deployment}
        features={features}
        onOpenChange={onOpenChange}
      />
      <div
        onClick={onOpen}
        className={`w-full flex justify-between mb-6 items-start p-4 gap-4 rounded-xl cursor-pointer border-2 ${theme.border} ${theme.hoverBg} hover:scale-[1.01] transition-all duration-300 project-card`}
      >
        <div className="flex items-start shrink-0 pt-1">
          <Image
            src={icon}
            width={60}
            height={60}
            alt="project icon"
            className="w-[60px] h-[60px] bg-theme-white dark:bg-zinc-800 p-1.5 rounded-full object-contain border border-zinc-200 dark:border-zinc-700/50 shadow-sm"
            unoptimized
          />
        </div>
        <div className="w-full flex-1">
          <div className="flex gap-2 items-baseline mb-1">
            <h3 className="text-lg md:text-xl font-bold">{name}</h3>
            <p className="text-xs md:text-sm font-medium">[{duration}]</p>
          </div>
          <p className="text-xs md:text-sm tracking-normal leading-relaxed">{description}</p>
          {features && features.length > 0 ? (
            <ul className="list-disc pl-4 mt-2.5 flex flex-col gap-1">
              {features.map((point, index) => (
                <li
                  key={index}
                  className="text-xs md:text-sm tracking-normal leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          {techStack ? (
            <Image
              src={techStack}
              width={120}
              height={30}
              alt="tech stack"
              className="h-[25px] w-auto object-contain mt-3"
              unoptimized
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
