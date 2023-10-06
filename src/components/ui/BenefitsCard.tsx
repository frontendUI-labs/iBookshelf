import { ShieldCheck, Star, ThumbsUp, Zap } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
    <div className="font-heading flex gap-6">
      <div className="bg-purple-400 h-[60px] w-[60px] rounded-lg my-2 flex justify-center items-center">
        <div className="icon-container">{icon}</div>
      </div>
      <div className="flex flex-col gap-2 w-[260px] ">
        <h3 className="text-xl font-semibold">{benefit}</h3>
        <p className="line-clamp-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

function ContainerBenefits({ bg }: { bg?: string }) {
  const iconClassName = "text-purple-600 fill-purple-600 w-[25px] h-[25px]";
  return (
    <div className={twMerge("py-24", bg)}>
      <div className="container mx-auto px-4 flex flex-col items-center gap-6 sm:gap-10 md:grid grid-cols-2 lg:gap-4 xl:grid-cols-4">
        <Benefits
          benefit="Quick Delivery"
          description="Experience the joy of rapid book delivery with our efficient and quick service."
          icon={<Zap className={iconClassName} />}
        />
        <Benefits
          benefit="Secure Payment"
          description="Your payment is secure with us. Enjoy worry-free book shopping knowing your transactions are safe."
          icon={<ShieldCheck className={iconClassName} />}
        />
        <Benefits
          benefit="Best Quality"
          description="Immerse yourself in a world of captivating stories with our handpicked selection of the finest books."
          icon={<ThumbsUp className={iconClassName} />}
        />
        <Benefits
          benefit="Return Guarantee"
          description="Enjoy your reading journey without worry. Our reliable return guarantee ensures your satisfaction."
          icon={<Star className={iconClassName} />}
        />
      </div>
    </div>
  );
}
export default ContainerBenefits;
