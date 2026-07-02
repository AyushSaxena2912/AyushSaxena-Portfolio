import { ProjectSection } from "@/components/Export"
import projectData from "@/public/data/json/projects.json"

const Projects = () => {
    const data = projectData.projects;
  return (
    <main className="container">
        <ProjectSection data={data}/>
    </main>
  )
}

export default Projects