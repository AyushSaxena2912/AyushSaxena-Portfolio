import socialData from "@/public/data/json/socials.json";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "./IconsExport";
import { FaRegCopyright } from "react-icons/fa6";
import Link from "next/link";

const socialMediaIcons = {
  github: FaGithub,
  mail: FaEnvelope,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

const flagColors = {
  github: "bg-theme-purple",
  mail: "bg-theme-yellow",
  linkedin: "bg-theme-blue",
  twitter: "bg-theme-green",
};

const IconComponent = ({ name, link }) => {
  const socialMediaName = Object.keys(socialMediaIcons).find((key) =>
    name.toLowerCase().includes(key)
  );

  const flag = name.toLowerCase();

  const className = `p-2 rounded-lg hover:scale-110 ease-in-out duration-300 fill-theme-black ${
    Object.keys(flagColors).some((key) => flag.includes(key))
      ? Object.keys(flagColors)
          .filter((key) => flag.includes(key))
          .map((key) => flagColors[key])
          .join(" ")
      : ""
  }`;

  const Icon = socialMediaName ? socialMediaIcons[socialMediaName] : false;
  return (
    <Link target="_blank" href={link} className={className}>
      {Icon && <Icon />}
    </Link>
  );
};

const Footer = () => {
  const data = socialData.social;
  const year = new Date();

  return (
    <footer className="footer">
      <div className="flex items-center gap-1 text-sm md:text-base font-semibold tracking-normal leading-none">
        <FaRegCopyright />
        <h2>{year.getFullYear()}🔮Ayush Saxena</h2>
      </div>
      <div className="flex gap-5 text-xl md:text-2xl">
        {data.map((item) => (
          <IconComponent key={item.id} name={item.name} link={item.link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
