import { Heading, ProjectCard, SubHeading } from "./Export";

const ProjectSection = (props) => {
  const data = props.data;

  return (
    <section>
      <Heading text="Personal Projects" />
      <SubHeading text="Explore my diverse projects showcasing various technologies, built to validate my understanding of the technologies I've learned." />

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
    </section>
  );
};

export default ProjectSection;
