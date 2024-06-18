import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormikErrors, FormikTouched } from "formik";
import { ReactNode, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface FormGroupType {
  type?: string;
  label?: string;
  name: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  icon?: ReactNode;
  onChange: any;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
  onBlur?: any;
  errorStyles?: string;
}

export default function FormGroup({
  type = "text",
  required,
  label,
  name,
  value,
  placeholder = "",
  icon,
  errors,
  touched,
  onBlur,
  onChange,
  errorStyles,
}: FormGroupType) {
  const [showPassword, setShowPassword] = useState("password");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <div
      className={`group w-full ${
        errors?.[name] && touched?.[name] ? "is-error" : ""
      }`}
    >
      {label && (
        <Label htmlFor={name} className="mb-2.5 inline-flex">
          {label}
        </Label>
      )}
      <div
        className={`${
          errors?.[name] && touched?.[name] ? "border-red-500" : "border-input"
        } row-flex group/container relative w-full !justify-start gap-1 overflow-hidden rounded-md border shadow-sm`}
      >
        {type === "password" ? (
          <>
            <Input
              ref={inputRef}
              type={showPassword}
              id={name}
              name={name}
              value={value}
              required={required}
              placeholder={placeholder}
              onBlur={onBlur}
              onChange={onChange}
              className="i-reset"
            />

            <div className="cursor-pointer pr-2.5" onClick={handleShowPassword}>
              {showPassword === "password" ? (
                <FaEyeSlash size={16} fill="#999" />
              ) : (
                <FaEye size={16} fill="#999" />
              )}
            </div>
          </>
        ) : (
          <>
            {icon && <span className="icon">{icon}</span>}
            <Input
              id={name}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              className="i-reset"
            />
          </>
        )}
      </div>

      <p
        className={twMerge(
          "mt-2.5 hidden w-full break-words pl-1 pr-2 text-base font-semibold tracking-wide text-red-600 animate-in transition-sm group-[.is-error]:block",
          !errors?.["password"] && touched?.["password"]
            ? "block text-center text-foreground"
            : "",
          errorStyles,
        )}
      >
        {errors?.[name] as string}
        {!errors?.["password"] && touched?.["password"] && !errorStyles
          ? "Now that’s a secure password."
          : ""}
      </p>
    </div>
  );
}
