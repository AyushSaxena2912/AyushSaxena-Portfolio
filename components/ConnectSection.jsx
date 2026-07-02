import { Heading, SubHeading, SocialCard } from "./Export";
import socialData from "@/public/data/json/socials.json";
const ConnectSection = () => {
  const data = socialData.social;
  return (
    <section className="mb-4">
      <Heading text="Connect" />
      <SubHeading text="Let's build networks! Connect with me on social platforms for collaborations, discussions, and updates." />
      <div className="flex flex-col gap-y-4 md:grid grid-rows-2 grid-cols-2 md:gap-x-6 md:gap-y-4">
        {data.map((item) => (
          <SocialCard
            key={item.id}
            name={item.name}
            link={item.link}
            username={item.username}
            bgcolor={item.bgcolor}
          />
        ))}
      </div>
    </section>
  );
};

export default ConnectSection;
