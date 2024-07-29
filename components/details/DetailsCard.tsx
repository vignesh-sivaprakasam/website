export const DetailsCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className=" rounded-full border-red-500 border-1">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="text-gray-500">{children}</div>
    </div>
  );
};
