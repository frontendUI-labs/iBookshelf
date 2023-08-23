import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function AcordionComponent({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Accordion.Root
      defaultChecked
      className={twMerge(
        "bg-mauve6 w-full rounded-md shadow-[0_2px_10px] shadow-black/5 relative"
      )}
      type="single"
      defaultValue={id}
      collapsible
    >
      <Accordion.Item value={id}>
        <Accordion.Trigger className="flex flex-1 justify-start items-center gap-4 w-full p-3 outline-purple-600 parent  duration-1000">
          <ChevronDown
            size={16}
            className="text-purple-600 child data-[state=open]:rotate-180"
          />
          <span className="text-purple-600 font-bold">{title}</span>
        </Accordion.Trigger>
        <Accordion.Content className="flex flex-col gap-4 p-4">
          {children}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default AcordionComponent;
