import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

import FloatNav from "../components/FloatingNavBar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MyDetails } from "@/components/details/MyDetails";

const GENERAL_NAV_ITEMS = [
  { name: "About", link: "/" },
  { name: "Resume", link: "/" },
  { name: "Experience", link: "/" },
  { name: "Contact", link: "/" },
];

const SOCIAL_NAV_ITEMS = [
  {
    name: "",
    link: "https://github.com/vignesh-sivaprakasam",
    icon: <IconBrandGithub stroke={1} className="hover:text-cyan-400" />,
  },
  {
    name: "",
    link: "https://www.linkedin.com/in/vignesh-m94/",
    icon: <IconBrandLinkedin stroke={1} className="hover:text-cyan-400" />,
  },
  {
    name: "",
    link: "https://www.instagram.com/___vicky__m/",
    icon: <IconBrandInstagram stroke={1} className="hover:text-cyan-400" />,
  },
];

const NavBar = () => (
  <header className="absolute top-8 z-10 w-full">
    <div className="flex justify-end mr-32">
      <FloatNav navItems={GENERAL_NAV_ITEMS} />
      <span className="ml-10">
        <FloatNav navItems={SOCIAL_NAV_ITEMS} />
      </span>
    </div>
  </header>
);

export default function Home() {
  return (
    <>
      <main className="relative h-full bg-black flex items-center flex-col mx-auto sm:px-10 px-5 overflow-auto">
        <div className="max-w-7xl h-full w-full relative">
          <NavBar />
          <div className="flex h-[75vh] items-center">
            <Hero />
          </div>
          <MyDetails />
        </div>
      </main>
    </>
  );
}
