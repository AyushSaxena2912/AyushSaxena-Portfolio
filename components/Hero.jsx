"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { SkillSet, SectionBtn } from "./Export";

import { motion } from "framer-motion";

import { Tooltip } from "@nextui-org/react";

import { FaGithub, FaLinkedin, FaPhone } from "./IconsExport";
import { ENUM } from "@/enum/enum";

const Hero = () => {
  const state = useSelector((state) => state.changeAvatar.flag);

  return (
    <section className="flex flex-col gap-4">
      <Tooltip
        showArrow
        placement="right"
        isDisabled={state}
        content={
          <div>
            <h1 className="font-medium">Magic🔮</h1>
            <p className="text-xs">
              Click on <span className="font-medium">Navbar</span> Image/Avatar
            </p>
          </div>
        }
        classNames={{
          content: ["bg-theme-white dark:bg-zinc-800 py-2 px-4 rounded-lg"],
        }}
      >
        <div className="overflow-hidden w-fit flex items-center gap-3">
          <Image
            src={"/data/images/avatar.jpg"}
            width={150}
            height={150}
            alt="avatar image"
            className={state ? "avatar rounded-3xl" : "hidden"}
            unoptimized
            priority
          />
          <Image
            src={"/data/images/avatar_vector_v2.png"}
            width={150}
            height={150}
            alt="avatar image"
            className={state ? "hidden" : "avatar rounded-3xl"}
            unoptimized
            priority
          />
          {state ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.1,
                ease: [0.25, 0.5, 0.75, 1],
              }}
            >
              <p className="py-2 px-4 flex items-center justify-start tracking-normal border border-zinc-200 dark:border-zinc-800 bg-theme-white dark:bg-zinc-800 text-sm font-medium rounded-lg shadow-md">
                Redux Magic&nbsp;
                <Image
                  src="https://skillicons.dev/icons?i=redux"
                  width={20}
                  height={20}
                  alt="redux logo"
                />
              </p>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      </Tooltip>
      <div className="flex flex-wrap items-end text-xl gap-4">
        <h1 className="text-3xl font-bold leading-none">Ayush Saxena</h1>
        <div className="flex items-center gap-2">
          <p className="font-medium">[he/him]</p>
          <Link href="https://github.com/AyushSaxena2912" target="_blank">
            <FaGithub className="hero_social_icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ayushsaxena29"
            target="_blank"
          >
            <FaLinkedin className="hero_social_icon" />
          </Link>
          <Link href="tel:+91-9111869645">
            <FaPhone className="hero_social_icon" />
          </Link>
        </div>
      </div>
      <p className="lg:w-[90%] text-sm md:text-base">
        Backend-focused full-stack developer and UI/UX designer, building
        scalable systems, responsive interfaces, and AI-powered products.
      </p>
      <div className="flex items-baseline justify-start gap-2">
        <p className="font-medium">Hire me.</p>
        <SectionBtn link={ENUM.RESUME} text="Resume" />
      </div>
      <SkillSet />
    </section>
  );
};

export default Hero;
