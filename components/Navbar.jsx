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
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (e) => {
    e.stopPropagation();
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

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
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-theme-white dark:bg-zinc-800 hover:scale-110 active:scale-95 transition-all shadow-sm border border-zinc-200 dark:border-zinc-700"
          aria-label="Toggle Theme"
        >
          {!mounted ? (
            <div className="w-[18px] h-[18px]" />
          ) : isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#eab308"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ fill: 'none' }}
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4b5563"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ fill: 'none' }}
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>

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
