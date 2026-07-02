import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <section className="container flex items-center justify-center md:h-[65vh] h-[75vh]">
      <Spinner
        classNames={{
          base: "w-[50px] h-[50px]",
          wrapper: "w-[50px] h-[50px]",
          circle1: "border-b-theme-black",
          circle2: "border-b-theme-black",
        }}
      />
    </section>
  );
}
