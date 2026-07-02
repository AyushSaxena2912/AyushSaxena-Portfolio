"use client";
import { NextUIProvider } from "@nextui-org/system";

const NextUI = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUI;
