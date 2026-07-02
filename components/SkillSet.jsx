"use client";

import Image from "next/image";
import skillsData from "@/public/data/json/skills.json";
import { Tooltip } from "@nextui-org/react";

const SkillSet = () => {
  const categories = skillsData.categories;

  return (
    <div className="flex flex-col gap-1 w-full lg:w-[95%] mt-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 py-4 border-b border-zinc-200/50 last:border-0"
        >
          {/* Category Title on Left */}
          <div className="sm:w-1/4 lg:w-1/5 min-w-[150px]">
            <h3 className="text-sm font-bold text-zinc-700 tracking-wide">
              {category.title}
            </h3>
          </div>

          {/* Icons on Right */}
          <div className="flex-1 flex gap-3 flex-wrap items-center">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="cursor-pointer">
                <Tooltip content={skill.name}>
                  <div className="flex gap-1.5 hover:scale-110 transition-transform duration-200">
                    {skill.icons.map((icon, iconIndex) => (
                      <Image
                        key={iconIndex}
                        src={icon}
                        width={40}
                        height={40}
                        alt={skill.name}
                        className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] rounded-lg object-contain"
                        unoptimized
                      />
                    ))}
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSet;
