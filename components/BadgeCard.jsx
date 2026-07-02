"use client";
import Image from "next/image";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";

const BadgeCard = (props) => {
  const { title, description, image } = props.item;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        className="w-full bg-theme-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-zinc-800/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer flex flex-col group"
      >
        {/* Image Container */}
        <div className="w-full h-[280px] flex items-center justify-center overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/30 border-b border-zinc-100 dark:border-zinc-800/50 relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />
        </div>

        {/* Text Details */}
        <div className="p-4 flex flex-col gap-0.5 flex-1">
          <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-100 line-clamp-1 group-hover:text-theme-blue dark:group-hover:text-theme-purple transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Full-screen Zoom Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="3xl"
        classNames={{
          base: "bg-transparent shadow-none border-none",
          body: "p-0 flex items-center justify-center",
          closeButton: "bg-white/20 hover:bg-white/40 text-white rounded-full p-2 top-4 right-4 z-50",
        }}
      >
        <ModalContent>
          {() => (
            <ModalBody>
              <div className="relative max-h-[85vh] max-w-full flex items-center justify-center p-2 rounded-2xl overflow-hidden bg-zinc-950/80">
                <Image
                  src={image}
                  alt={title}
                  width={1200}
                  height={1200}
                  className="max-h-[80vh] w-auto object-contain rounded-lg"
                  unoptimized
                />
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BadgeCard;
