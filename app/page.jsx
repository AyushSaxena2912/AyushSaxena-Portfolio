import {
  Hero,
  Divider,
  ProjectSection,
  UiUxProjectSection,
  ConnectSection,
  ExperienceSection,
  EducationSection,
  SectionBtn,
  BadgeSection,
} from "@/components/Export";
import projectData from "@/public/data/json/projects";
import uiuxProjectData from "@/public/data/json/uiux_projects.json";
import experienceData from "@/public/data/json/experiences";
import achievementData from "@/public/data/json/achievements";
import educationData from "@/public/data/json/education.json";

export default function Home() {
  const projects = projectData.projects.filter((project) => project.favorite);
  const uiuxProjects = uiuxProjectData.projects.filter((project) => project.favorite);
  const experiences = experienceData.experiences.filter(
    (experience) => experience.favorite
  );
  const achievements = achievementData.achievement;
  const education = educationData.education;
  return (
    <main className="container">
      <Hero />
      <Divider />
      <EducationSection data={education} />
      <Divider />
      <ExperienceSection data={experiences} />
      <Divider />
      <ProjectSection data={projects} />
      <Divider />
      <UiUxProjectSection data={uiuxProjects} />
      <Divider />
      <BadgeSection data={achievements} />
      <Divider />
      <ConnectSection />
      <SectionBtn text="Contact Me" link="/contact" />
      <Divider />
    </main>
  );
}
