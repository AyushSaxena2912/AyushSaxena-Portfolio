import { ExperienceCard } from "./Export";
import CollapsibleSection from "./CollapsibleSection";

const ExperienceSection = (props) => {
  const data = props.data;
  const freelance = data.filter((item) => item.type === "Freelance");
  const internships = data.filter((item) => item.type === "Internship");

  const freelanceColors = ["purple", "blue"];
  const internshipColors = ["green", "yellow"];

  return (
    <CollapsibleSection
      title="Experience"
      subtitle="Crafted product/software for diverse organizations, merging technology and creativity to enhance user experiences."
    >
      <div className="flex flex-col gap-10">
        {freelance.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold border-b border-zinc-200/50 dark:border-zinc-800/80 pb-2">
              Freelance Work Experience
            </h2>
            <div className="relative flex flex-col gap-10">
              <div className="absolute border-l-2 border-dashed border-gray-400 dark:border-zinc-700 left-0 h-full"></div>
              {freelance.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  color={freelanceColors[index % freelanceColors.length]}
                />
              ))}
            </div>
          </div>
        )}

        {internships.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold border-b border-zinc-200/50 dark:border-zinc-800/80 pb-2">
              Internships
            </h2>
            <div className="relative flex flex-col gap-10">
              <div className="absolute border-l-2 border-dashed border-gray-400 dark:border-zinc-700 left-0 h-full"></div>
              {internships.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  color={internshipColors[index % internshipColors.length]}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </CollapsibleSection>
  );
};

export default ExperienceSection;
