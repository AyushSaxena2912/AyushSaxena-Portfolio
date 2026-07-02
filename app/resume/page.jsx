import { ResumeSection } from "@/components/Export"
import resumeData from "@/public/data/json/resume";

const Resume = () => {
  const data = resumeData.pages;
  return (
    <main className='container'>
        <ResumeSection data={data} />
    </main>
  )
}

export default Resume