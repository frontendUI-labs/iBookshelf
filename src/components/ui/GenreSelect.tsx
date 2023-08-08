import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

export default function GenreSelect({
  value,
  onChange,
  options,
  label,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <div className="flex flex-col gap-2">
        <p>{label}</p>
        <Select.Trigger
          className="min-w-[160px] inline-flex items-center justify-between rounded px-[15px] text-[13px] leading-none h-[50px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
          aria-label="Genre"
        >
          <Select.Value placeholder="Select genre" />
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon size={16} />
          </Select.Icon>
        </Select.Trigger>
      </div>
      <Select.Portal>
        <Select.Content
          sideOffset={10}
          position="popper"
          className="overflow-hidden bg-white rounded-md w-full shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <Select.Viewport className="p-[5px]">
            {options.map((option) => (
              <Select.Item
                key={option}
                value={option}
                className="text-sm leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:text-blue-500"
              >
                <Select.ItemText>{option}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <CheckIcon size={16} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
