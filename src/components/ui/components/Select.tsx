import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface SelectDropdownProps {
  placeholder?: ReactNode;
  itemStyle?: string;
  items: any[];
  setValue: Dispatch<SetStateAction<any>>;
  renderItem?: (item: any) => ReactNode;
}

export default function SelectDropdown({
  placeholder,
  itemStyle,
  items,
  setValue,
  renderItem,
}: SelectDropdownProps) {
  return (
    <Select onValueChange={setValue}>
      <SelectTrigger className="w-full min-w-[180px]">
        <SelectValue placeholder={placeholder ?? "Select"} />
      </SelectTrigger>
      <SelectContent className="gap-3 bg-background">
        {items.length > 0 ? (
          items?.map((item, idx) => (
            <SelectItem
              value={item}
              key={idx}
              className={twMerge(
                "row-flex select-item !justify-start gap-2",
                itemStyle,
              )}
            >
              {renderItem ? renderItem(item) : item}
            </SelectItem>
          ))
        ) : (
          <SelectItem value="" className="row-flex text-center">
            No item
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
}
