"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { changeAvatarState } from "@/redux/AvatarChange";
import { usePathname, useRouter } from "next/navigation";
import { ENUM } from "@/enum/enum";

const NavData = [
  { route: ENUM.HOME, name: "Home" },
  { route: ENUM.EXPERIENCE, name: "Experiences" },
  { route: ENUM.PROJECTS, name: "Projects" },
  { route: ENUM.CONTACT, name: "Contact" },
];

const Navbar = () => {
  const state = useSelector((state) => state.changeAvatar.flag);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    try {
      localStorage.removeItem("theme");
    } catch (e) {}
  }, []);

  const handleHomePageNavigation = () => {
    setIsMenuOpen(false);
    if (pathname !== ENUM.HOME) {
      router.push(ENUM.HOME);
    }
  };

  return (
    <nav className="navbar">
      <div
        className="flex justify-center items-center gap-2"
        onClick={handleHomePageNavigation}
      >
        <Image
          onClick={() => dispatch(changeAvatarState())}
          src={"/data/images/avatar.jpg"}
          width={50}
          height={50}
          alt="avatar"
          className={state ? "avatar rounded-xl cursor-pointer" : "hidden"}
          unoptimized
          priority
        />
        <Image
          onClick={() => dispatch(changeAvatarState())}
          src={"/data/images/avatar_vector_v2.png"}
          width={50}
          height={50}
          alt="avatar"
          className={state ? "hidden" : "avatar rounded-xl cursor-pointer"}
          unoptimized
          priority
        />
        <h1 className="font-semibold text-lg tracking-wide cursor-pointer">
          Ayush
        </h1>
      </div>
      <div className="flex items-center gap-4">

        <div className="sm:hidden flex relative">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer w-[45px] h-[45px] flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <div
              className={`w-[30px] h-[2px] transition-all duration-300 bg-theme-black dark:bg-white ${
                isMenuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            ></div>
            <div
              className={`w-[30px] h-[2px] transition-all duration-300 bg-theme-black dark:bg-white ${
                isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            ></div>
          </button>

          {isMenuOpen && (
            <div className="ease-in-out duration-300 dropdown_menu">
              {NavData?.map((item) => (
                <Link
                  key={item.route}
                  href={item.route}
                  className="dropdown_link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <ul className="hidden sm:flex gap-5 font-medium ">
          {NavData?.map((item) => (
            <Link key={item.route} href={item.route} className="navbar_link">
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
