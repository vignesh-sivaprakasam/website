import React from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavBarProps {
  navItems: NavItem[];
}

const FloatingNavBar: React.FC<FloatingNavBarProps> = ({ navItems }) => {
  return (
    <nav className="inline-flex px-3 py-2 rounded-full relative bg-gray-800/80">
      {navItems.map((navItem: NavItem, index: number) => (
        <Link
          key={`idx-${index}`}
          href={navItem.link}
          className="flex justify-center items-center w-fit text-center px-2"
        >
          <span className="inline-block">{navItem.icon}</span>
          <span className="inline-block">{navItem.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default FloatingNavBar;
