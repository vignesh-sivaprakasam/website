import { IconArrowRight } from "@tabler/icons-react";
import { DetailsCard } from "./DetailsCard";

export const MySkills = () => {
  const ListItem = ({
    name,
    isBeginner = false,
  }: {
    name: string;
    isBeginner?: boolean;
  }) => (
    <li className="flex gap-4">
      <IconArrowRight stroke={1} className="text-cyan-500" /> {name}{" "}
      {isBeginner && <>🌱</>}
    </li>
  );
  return (
    <DetailsCard title="My skills">
      <p>
        I constantly learn new and exciting concepts in computer science and web
        development. I try applying these concepts to solve real-world problems.
        A few technologies I enjoy working with:
      </p>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ListItem name="React" />
        <ListItem name="Typescript" />
        <ListItem name="Redux" />
        <ListItem name="Next.js" isBeginner={true} />
        <ListItem name="CSS, Tailwind CSS" />
        <ListItem name="Node.js" />
        <ListItem name="Jest" />
        <ListItem name="Cypress" />
      </ul>
    </DetailsCard>
  );
};
