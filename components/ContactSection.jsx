"use client";
import { useState } from "react";
import { Heading, SubHeading, ConnectSection, Divider } from "./Export";

import emailjs from "@emailjs/browser";
import { FaLongArrowAltRight } from "./IconsExport";

import { Input, Textarea } from "@nextui-org/react";

import toast from "react-hot-toast";

const ContactSection = ({ serviceId, templateId, publicApiKey }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      to_name: "Ayush Saxena",
      message: message,
    };
    const toastId = toast.loading("Loading...");

    emailjs
      .send(serviceId, templateId, templateParams, publicApiKey)
      .then((response) => {
        toast.dismiss(toastId);
        toast.success("Message Sent!");
        console.log("Sent Successful", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.dismiss(toastId);
        toast.error("Error Occurred!");
        console.error("Error : ", error);
      });
  };
  return (
    <section>
      <Heading text="Contact Me!" />
      <SubHeading text="Reach out for collaboration, freelance work, or with any queries. Let's connect and explore possibilities together!" />
      <form
        onSubmit={sendEmail}
        className="w-full flex items-start flex-col gap-2 md:gap-4"
      >
        <div className="w-full flex flex-col md:flex-row md:gap-4 gap-2">
          <Input
            isRequired
            variant="bordered"
            type="text"
            label="Name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            classNames={{
              label: "font-medium",
              inputWrapper: [
                "shadow-none border-3 group-data-[focus=true]:border-theme-purple",
              ],
            }}
          />
          <Input
            isRequired
            variant="bordered"
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classNames={{
              label: "font-medium",

              inputWrapper: [
                "shadow-none border-3 group-data-[focus=true]:border-theme-green",
              ],
            }}
          />
        </div>
        <Textarea
          isRequired
          variant="bordered"
          label="Description"
          labelPlacement="inside"
          placeholder="Enter your description"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="col-span-12 md:col-span-6 md:mb-0"
          classNames={{
            label: "font-medium",

            inputWrapper: [
              "shadow-none border-3 group-data-[focus=true]:border-theme-blue",
            ],
          }}
        />
        <button type="submit" className="ml-1">
          <div className="flex items-center justify-start gap-1 hover:gap-2 ease-in-out duration-300">
            <p className="font-semibold underline">Send</p>
            <FaLongArrowAltRight className="fill-theme-black" />
          </div>
        </button>
      </form>
      <Divider />
      <ConnectSection />
    </section>
  );
};

export default ContactSection;
