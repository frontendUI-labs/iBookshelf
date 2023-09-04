import * as Progress from "@radix-ui/react-progress";
import { StarIcon } from "../components/ui/Icons";
import { twMerge } from "tailwind-merge";

function ProgressComponent({
  numberStars,
  value,
}: {
  numberStars: number;
  value: number;
}) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-2 items-center">
        <StarIcon variant={"active"} />
        <span className="font-bold">{numberStars}</span>
      </div>
      <Progress.Root
        value={value}
        max={100}
        className="relative overflow-hidden bg-purple-400 rounded-full w-[300px] h-[9px]"
      >
        <Progress.Indicator
          className={twMerge(
            `bg-purple-600 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]`
          )}
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </Progress.Root>
      <span className="font-bold">{value}%</span>
    </div>
  );
}

export default ProgressComponent;
