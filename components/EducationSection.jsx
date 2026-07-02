"use client";
import ExperienceCard from "./ExperienceCard";
import CollapsibleSection from "./CollapsibleSection";

const EducationSection = ({ data }) => {
  return (
    <CollapsibleSection
      title="Education"
      subtitle="My academic background and qualifications."
    >
      <div className="relative flex flex-col gap-10">
        {/* Timeline vertical line */}
        <div className="absolute border-l-2 border-dashed border-gray-400 dark:border-zinc-700 left-[14px] md:left-[16px] h-full" />
        {data.map((item) => (
          <ExperienceCard key={item.id} item={item} color="purple" />
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default EducationSection;
