import { DetailsCard } from "./DetailsCard";

export const AboutMe = () => {
  return (
    <DetailsCard title="About me">
      <p className="mb-4">
        Hey I&apos;m Vignesh, a 30 year old Front end developer. Currently
        working as Software Developer 3 in Twilio
      </p>
      <p className="mb-4">
        I completed my undergrad in Information Technoly from Government College
        of Technology, Coimbatore. I am passionate about learning new
        technology.
      </p>
      <p className="mb-4">
        I started my career in Zoho corporation in 2016, where I worked in Zoho
        Sheet. The complexity in developing Zoho sheet fascinated me to improve
        my skills in Front end development. I worked there for close to 5 years
        later switched to Twilio.
      </p>
      <p className="mb-4">I joined Twilio Inc at the end of 2020. </p>
    </DetailsCard>
  );
};
