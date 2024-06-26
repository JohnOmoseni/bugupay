import { ReactNode } from "react";
import { Input } from "./ui/input";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

interface InputProps {
  type?: string;
  name: string;
  value: string;
  dir?: "left" | "right";
  placeholder?: string;
  icon?: IconType;
  render?: () => ReactNode;
  onKeyDown?: any;
  onChange?: any;
  className?: string;
}

function InputField({
  type = "text",
  name,
  value,
  dir = "left",
  placeholder = "",
  icon: Icon,
  render,
  onKeyDown,
  onChange,
  className,
}: InputProps) {
  return (
    <div
      className={twMerge(
        "row-flex group relative w-full !justify-start gap-1 overflow-hidden rounded-md border border-input shadow-sm",
        render && "pr-[4.6rem]",
      )}
    >
      {dir === "left" && Icon && (
        <span className="icon -mt-0.5 pl-2 leading-none">
          <Icon size={20} className="" />
        </span>
      )}
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="i-reset flex-1"
      />
      {dir === "right" && Icon && (
        <span className="icon pr-2 leading-none">
          <Icon size={20} className="" />
        </span>
      )}
      {render && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {render()}
        </div>
      )}
    </div>
  );
}

export default InputField;
