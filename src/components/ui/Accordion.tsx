import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function AcordionComponent({
  id,
  title,
  children,
  variant = "secondary",
}: {
  id: string;
  title: string;
  children: ReactNode;
  variant?: string;
}) {
  return (
    <Accordion.Root
      className={twMerge(
        "bg-mauve6 w-full rounded-md shadow-[0_2px_10px] shadow-black/5 relative"
      )}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item value={id}>
        <Accordion.Trigger
          className={twMerge(
            "flex flex-1 justify-start items-center gap-3 w-full p-3",
            variant === "primary" && "justify-between px-4",
            variant === "secondary" && "justify-start"
          )}
        >
          <Plus size={16} className="text-purple-600" />
          <span className="text-purple-600 font-bold">{title}</span>
        </Accordion.Trigger>
        <Accordion.Content
          className={twMerge(variant === "checkbox" && "grid grid-cols-2")}
        >
          {children}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default AcordionComponent;
