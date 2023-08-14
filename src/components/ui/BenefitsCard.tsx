import { ReactNode } from "react";

const Benefits = ({
  benefit,
  description,
  icon,
}: {
  benefit: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="font-heading flex gap-6 px-3 py-6">
      <div className="bg-purple-400 h-[60px] w-[60px] rounded-lg my-2 flex justify-center items-center">
        <div className="icon-container">{icon}</div>
      </div>
      <div className="flex flex-col gap-2 w-[260px]">
        <h3 className="text-xl font-semibold">{benefit}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
export default Benefits;
