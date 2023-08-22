import { ReactNode } from "react";

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
