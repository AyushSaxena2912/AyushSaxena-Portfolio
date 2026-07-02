import Link from "next/link";
import { FaLongArrowAltRight } from "./IconsExport";

const SectionBtn = (props) => {
  return (
    <Link
      href={props.link}
      target={props.target ? props.target : null}
      download={props.download ? props.download : null}
    >
      <div className="flex items-center justify-start gap-1 hover:gap-2 ease-in-out duration-300">
        <p className="font-semibold underline">{props.text}</p>
        <FaLongArrowAltRight className="fill-theme-black" />
      </div>
    </Link>
  );
};

export default SectionBtn;
