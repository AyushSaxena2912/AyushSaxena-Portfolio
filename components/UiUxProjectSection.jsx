import Heading from "./Heading";
import SubHeading from "./SubHeading";
import UiUxProjectCard from "./UiUxProjectCard";

const UiUxProjectSection = (props) => {
  const data = props.data;

  return (
    <section>
      <Heading text="UI / UX Projects" />
      <SubHeading text="Explore my high-fidelity interface designs, user workflows, and interactive prototypes built to solve user problems and optimize usability." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
    </section>
  );
};

export default UiUxProjectSection;
