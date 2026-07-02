import { UiUxProjectCard } from "./Export";
import CollapsibleSection from "./CollapsibleSection";

const UiUxProjectSection = (props) => {
  const data = props.data;

  return (
    <CollapsibleSection
      title="UI / UX Projects"
      subtitle="Explore my high-fidelity interface designs, user workflows, and interactive prototypes built to solve user problems and optimize usability."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-start">
        {data.map((item) => {
          return (
            <UiUxProjectCard
              key={item.id}
              item={item}
              color={item.color}
            />
          );
        })}
      </div>
    </CollapsibleSection>
  );
};

export default UiUxProjectSection;
