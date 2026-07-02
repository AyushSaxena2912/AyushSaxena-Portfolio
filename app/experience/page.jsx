import { ExperienceSection, CommunitiesSection, Divider } from "@/components/Export"
import experienceData from "@/public/data/json/experiences";
import communityData from "@/public/data/json/communities"

const Experience = () => {
  const experiences = experienceData.experiences;
  const communities = communityData.communities;
  return (
    <main className='container'>
        <ExperienceSection data={experiences}/>
        <Divider />
        <CommunitiesSection data={communities}/>
    </main>
  )
}

export default Experience