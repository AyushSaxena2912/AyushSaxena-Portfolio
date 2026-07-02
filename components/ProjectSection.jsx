import { ProjectCard } from "./Export";
import CollapsibleSection from "./CollapsibleSection";

const ProjectSection = (props) => {
  const data = props.data;

  return (
    <CollapsibleSection
      title="Personal Projects"
      subtitle="Explore my diverse projects showcasing various technologies, built to validate my understanding of the technologies I've learned."
    >
      <div>
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
