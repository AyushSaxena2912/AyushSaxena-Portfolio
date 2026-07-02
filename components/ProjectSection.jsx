import { ProjectCard } from "./Export";
import CollapsibleSection from "./CollapsibleSection";

const ProjectSection = (props) => {
  const data = props.data;

  return (
    <CollapsibleSection
      title="Personal Projects"
      subtitle="Explore my diverse projects showcasing various technologies, built to validate my understanding of the technologies I've learned."
    >
      <div className="relative flex flex-col gap-10">
        {/* Timeline vertical line */}
        <div className="absolute border-l-2 border-dashed border-gray-400 dark:border-zinc-700 left-[14px] md:left-[16px] h-full" />
        {data.map((item, index) => {
          const colors = ["yellow", "purple", "blue", "green"];
          return (
            <ProjectCard
              key={item.id}
              item={item}
              color={colors[index % colors.length]}
            />
          );
        })}
      </div>
    </CollapsibleSection>
  );
};

export default ProjectSection;
