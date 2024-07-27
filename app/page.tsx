import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import FloatNav from "../components/FloatingNavBar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

const GENERAL_NAV_ITEMS = [
  { name: "About Me", link: "/" },
  { name: "Resume", link: "/" },
  { name: "Experience", link: "/" },
  { name: "Contact", link: "/" },
];

const SOCIAL_NAV_ITEMS = [
  {
    name: "",
    link: "/",
    icon: <IconBrandGithub stroke={1} className="hover:text-cyan-400" />,
  },
  {
    name: "",
    link: "/",
    icon: <IconBrandLinkedin stroke={1} className="hover:text-cyan-400" />,
  },
  {
    name: "",
    link: "/",
    icon: <IconBrandInstagram stroke={1} className="hover:text-cyan-400" />,
  },
];

export default function Home() {
  return (
    <>
      <header className="absolute top-8 z-10 w-full">
        <div className="flex justify-end mr-32">
          <FloatNav navItems={GENERAL_NAV_ITEMS} />
          <span className="ml-10">
            <FloatNav navItems={SOCIAL_NAV_ITEMS} />
          </span>
        </div>
      </header>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          {/* <FloatingNav
            navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
          /> */}
          <Hero />
        </div>
      </main>
    </>
  );
}
