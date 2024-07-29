import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

import { DetailsCard } from "./DetailsCard";
import { MySkills } from "./MySkills";
import { AboutMe } from "./AboutMe";

const Experience = () => {
  return (
    <DetailsCard title="Experience">
      <>My experience</>
    </DetailsCard>
  );
};

export const MyDetails = () => {
  const gridClasses = "grid-cols-3 grid-rows-5 gap-8";
  const itemClasses = "col-span-full bg-gray-700/40 p-8";
  return (
    <section id="my-details">
      <BentoGrid className={gridClasses}>
        <BentoGridItem
          key="about"
          id="about"
          className={`md:col-span-2 row-span-3 ${itemClasses}`}
        >
          <AboutMe />
        </BentoGridItem>
        <BentoGridItem
          key="experience"
          id="experience"
          className={`md:col-span-1 row-span-3 ${itemClasses}`}
        >
          <Experience />
        </BentoGridItem>
        <BentoGridItem
          key="skills"
          id="skills"
          className={`md:col-span-3 row-span-2 ${itemClasses}`}
        >
          <MySkills />
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
};
