"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

const ProjectModal = ({
  isOpen,
  onOpenChange,
  name,
  description,
  icon,
  techStack,
  banner,
  repository,
  deployment,
  features,
}) => {
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      scrollBehavior={scrollBehavior}
      classNames={{
        body: "px-4",
        backdrop: "",
        base: "bg-theme-white dark:bg-[#1a1a1a]",
        header: "border-b-[1px] border-gray-300 dark:border-zinc-800",
        footer: "border-t-[1px] border-gray-300 dark:border-zinc-800",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center gap-2">
              <Image src={icon} width={40} height={40} alt="project icon" />
              <h1 className="text-xl font-bold">{name}</h1>
            </ModalHeader>
            <ModalBody>
              {banner ? (
                <Image
                  src={banner}
                  width={400}
                  height={400}
                  alt="project banner"
                  className="w-full rounded-lg mx-auto"
                />
              ) : (
                ""
              )}
              <div className="mb-2">
                <h3 className="font-semibold text-sm">Description</h3>
                <p className="text-xs tracking-normal">{description}</p>
              </div>
              <div className="mb-2">
                <h3 className="font-semibold text-sm">Tech Stack</h3>
                <Image
                  src={techStack}
                  width={150}
                  height={150}
                  alt="project tech stack"
                  className="w-fit"
                />
              </div>
              <div className="mb-2">
                <h3 className="font-semibold text-sm">Features</h3>

                <ul className="list-disc ml-4 text-xs tracking-normal">
                  {features.map((feature, index) => (
                    <li className="mb-1" key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="text-sm flex gap-5 font-medium underline">
                {deployment ? (
                  <Link
                    href={deployment}
                    className="navbar_link"
                    target="_blank"
                  >
                    Deployment
                  </Link>
                ) : (
                  ""
                )}

                <Link href={repository} className="navbar_link" target="_blank">
                  Code
                </Link>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
