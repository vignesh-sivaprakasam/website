import Image from "next/image";
import { DetailsCard } from "./DetailsCard";

const experiences: ExperienceItemProps[] = [
  {
    imgSrc: "https://avatars.githubusercontent.com/twilio",
    altText: "logo",
    name: "Twilio Inc",
    title: "Software Developer 3",
    duration: "Nov 2022 - Present",
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/twilio",
    altText: "logo",
    name: "Twilio Inc",
    title: "Software Developer 2",
    duration: "Dec 2020 - Oct 2022",
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/zoho",
    altText: "logo",
    name: "Zoho Corp",
    title: "Software Developer 2",
    duration: "Mar 2019 - Nov 2020",
  },
  {
    imgSrc: "https://avatars.githubusercontent.com/zoho",
    altText: "logo",
    name: "Zoho Corp",
    title: "Software Developer 1",
    duration: "May 2016 - Feb 2019",
  },
  {
    imgSrc: "/assets/exterro-logo-vector-removebg-preview.jpg",
    altText: "logo",
    name: "Exterro",
    title: "Software Developer Intern",
    duration: "Jan 2016 - Mar 2016",
  },
];

const CompanyIcon = ({
  imgSrc,
  altText,
}: Pick<ExperienceItemProps, "imgSrc" | "altText">) => (
  <Image
    src={imgSrc}
    alt={altText}
    width={50}
    height={50}
    className="rounded-full"
  />
);

const CompanyDetails = ({
  name,
  title,
  duration,
}: Pick<ExperienceItemProps, "name" | "title" | "duration">) => (
  <div className="flex-1">
    <div className="flex justify-between items-center">
      <div className="text-sm text-white">{name}</div>
      <div className="text-xs">{duration}</div>
    </div>
    <div className="text-xs mt-0.5">{title}</div>
  </div>
);

interface ExperienceItemProps {
  imgSrc: string;
  altText: string;
  name: string;
  title: string;
  duration: string;
}
const ExperienceItemProps: React.FC<ExperienceItemProps> = ({
  imgSrc,
  altText,
  name,
  title,
  duration,
}) => (
  <li className="flex gap-5 items-center">
    <CompanyIcon imgSrc={imgSrc} altText={altText} />
    <CompanyDetails name={name} title={title} duration={duration} />
  </li>
);

export const Experience = () => {
  return (
    <DetailsCard title="Experience">
      <ul className="flex flex-col gap-6">
        {experiences.map((item) => (
          <ExperienceItemProps key={item.name} {...item} />
        ))}
      </ul>
    </DetailsCard>
  );
};
