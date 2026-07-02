import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "./IconsExport";

const socialMediaIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  twitter: FaTwitter,
  phone: FaPhone,
};

const flagColors = {
  github: "bg-theme-purple",
  mail: "bg-theme-yellow",
  linkedin: "bg-theme-blue",
  twitter: "bg-theme-green",
  phone: "bg-theme-green",
};

const SocialCard = ({ name, link, username }) => {
  const socialMediaName = Object.keys(socialMediaIcons).find((key) =>
    name.toLowerCase().includes(key)
  );

  const flag = name.toLowerCase();

  const className = `px-6 py-3 rounded-xl hover:scale-105 ease-in-out duration-300 ${
    Object.keys(flagColors).some((key) => flag.includes(key))
      ? Object.keys(flagColors)
          .filter((key) => flag.includes(key))
          .map((key) => flagColors[key])
          .join(" ")
      : ""
  }`;

  const IconComponent = socialMediaName
    ? socialMediaIcons[socialMediaName]
    : false;

  return (
    <Link target="_blank" className={className} href={link}>
      {IconComponent && (
        <div className="flex items-center justify-start gap-4">
          <IconComponent className="text-2xl" />
          <h3 className="font-semibold text-sm">{username}</h3>
        </div>
      )}
    </Link>
  );
};

export default SocialCard;
