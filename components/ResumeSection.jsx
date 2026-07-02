import { Heading, SectionBtn } from "./Export";
import Image from "next/image";

const ResumeSection = (props) => {
  const data = props.data;
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <Heading text="Resume" />
        <SectionBtn
          link="/data/resume/Resume_Atharv_Vani_Feb24.pdf"
          text="download"
          target="_blank"
          download="ayush_saxena_resume.pdf"
        />
      </div>

      {data.map((item) => (
        <Image
          key={item.id}
          src={item.image}
          width={1000}
          height={1000}
          alt="resume image"
          className="w-full mx-auto shadow-md rounded-xl"
        />
      ))}
    </section>
  );
};

export default ResumeSection;
