import * as RuiSelect from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function Select({
  options,
  placeholder,
  variant,
  color,
}: {
  options: string[];
  placeholder: ReactNode;
  variant: string;
  color?: string;
}) {
  return (
    <RuiSelect.Root>
      <RuiSelect.Trigger
        className={twMerge(
          "h-full inline-flex items-center justify-center p-6 text-[13px] leading-none  gap-[5px]  shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none w-inherit",
          variant === "primary" &&
            "bg-transparent rounded-s-lg w-[185px] gap-4",
          variant === "secondary" &&
            "bg-[#f0f0f0] rounded-2xl w-[100px] justify-between",
          variant === "tertiary" && "bg-transparent p-2 w-[150px]"
        )}
        aria-label="Genre"
      >
        <RuiSelect.Value placeholder={placeholder} />
        <RuiSelect.Icon>
          <ChevronDownIcon size={16} color={color} />
        </RuiSelect.Icon>
      </RuiSelect.Trigger>
      <RuiSelect.Portal>
        <RuiSelect.Content
          sideOffset={10}
          position="popper"
          className="relative z-20 w-[--radix-select-trigger-width] bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <RuiSelect.Viewport className="p-[5px] w-full">
            {options.map((option) => (
              <RuiSelect.Item
                key={option}
                value={option}
                className="text-sm leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:bg-slate-300 focus:bg-slate-300"
              >
                <RuiSelect.ItemText> {option}</RuiSelect.ItemText>

                <RuiSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <CheckIcon size={16} />
                </RuiSelect.ItemIndicator>
              </RuiSelect.Item>
            ))}
          </RuiSelect.Viewport>
        </RuiSelect.Content>
      </RuiSelect.Portal>
    </RuiSelect.Root>
  );
}

export default Select;
