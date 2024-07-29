import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn("grid mx-auto", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn("", className)}>{children}</div>;
};
