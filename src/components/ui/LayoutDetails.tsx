import { ReactNode } from "react";

function LayoutDetails({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto mt-[150px] p-4 flex flex-col gap-8">
      {children}
    </div>
  );
}

export default LayoutDetails;
