import Image from "next/image";
import Link from "next/link";

const colorMap = {
  blue: {
    border: "border-theme-blue",
    bg: "bg-theme-blue",
    hoverBg: "hover:bg-theme-blue",
  },
  purple: {
    border: "border-theme-purple",
    bg: "bg-theme-purple",
    hoverBg: "hover:bg-theme-purple",
  },
  yellow: {
    border: "border-theme-yellow",
    bg: "bg-theme-yellow",
    hoverBg: "hover:bg-theme-yellow",
  },
  green: {
    border: "border-theme-green",
    bg: "bg-theme-green",
    hoverBg: "hover:bg-theme-green",
  },
};

const ExperienceCard = ({ item, color = "blue" }) => {
  const {
    companyName,
    companyLogo,
    designation,
    location,
    startDate,
    endDate,
    companyLink,
    description,
    skills,
  } = item;

  const theme = colorMap[color] || colorMap.blue;

  return (
    <div className="flex relative items-center experience-row">
      <div className={`w-[20px] h-[20px] absolute left-[-9px] rounded-full border-2 ${theme.bg} ${theme.border} experience-circle`}></div>
      <div className={`experience-card border-2 ${theme.border} ${theme.hoverBg}`}>
        <div className={`bg-theme-white dark:bg-[#121212] border-2 ${theme.border} absolute top-[-15px] rounded-lg right-8 px-3 py-1 experience-date`}>
          <p className="text-xs md:text-sm">
            {startDate} - {endDate}
          </p>
        </div>
        <div className="flex items-start shrink-0 pt-1">
          <Image
            src={companyLogo}
            width={60}
            height={60}
            alt="company logo"
            className="w-[60px] h-[60px] bg-theme-white dark:bg-zinc-800 p-1.5 rounded-full object-contain border border-zinc-200 dark:border-zinc-700/50 shadow-sm"
            unoptimized
          />
        </div>
        <div className="w-full flex-1">
          {companyLink ? (
            <h3 className="text-base md:text-lg font-semibold underline">
              <Link target="_blank" href={companyLink}>
                {companyName}
              </Link>
            </h3>
          ) : (
            <h3 className="text-base md:text-lg font-semibold">{companyName}</h3>
          )}
          <div className="mb-2 flex justify-between flex-wrap items-baseline">
            <h4 className="font-medium text-sm">{designation}</h4>
            <h4 className="text-xs">{location}</h4>
          </div>
          {description && description.length > 0 ? (
            <ul className="list-disc pl-4 mt-2 flex flex-col gap-1">
              {description.map((point, index) => (
                <li
                  key={index}
                  className="text-xs md:text-sm tracking-normal leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          {skills ? (
            <div className="flex justify-start items-center gap-[5px] mt-2">
              {skills.map((item, idx) => (
                <Image
                  key={idx}
                  src={item}
                  width={100}
                  height={100}
                  alt="skills"
                  className="w-[25px]"
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
