import { Minus, Plus } from "lucide-react";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

function SocialButtons({ children }: { children: ReactNode }) {
  return <div className="flex gap-4 text-white">{children}</div>;
}

export default SocialButtons;

export function ButtonsSocials({
  children,
  bg,
  onClick,
}: {
  children: ReactNode;
  bg?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-md p-3 text-base font-medium hover:scale-105 duration-100 ${bg}`}
    >
      {children}
    </button>
  );
}

export function MoreandLessButton({ gap }: { gap?: string }) {
  const [counter, setCounter] = useState(1);

  function addCounter() {
    setCounter(counter + 1);
  }
  function reduceCounter() {
    if (counter <= 1) return;
    setCounter(counter - 1);
  }
  return (
    <>
      <div
        className={twMerge(
          "flex items-center gap-4 border border-gray-400 rounded-lg",
          gap
        )}
      >
        <ButtonsSocials onClick={reduceCounter}>
          <Minus className="text-purple-600" />
        </ButtonsSocials>
        <span className="font-bold">{counter}</span>
        <ButtonsSocials onClick={addCounter}>
          <Plus className="text-purple-600" />
        </ButtonsSocials>
      </div>
    </>
  );
}
