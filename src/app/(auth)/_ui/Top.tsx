import BackArrow from "@/components/BackArrow";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TopProps {
  title: ReactNode;
  textContainer?: string;
  subtitle?: ReactNode;
  onHandleGoBack?: (() => void) | undefined;
}

const Top = ({ title, subtitle, textContainer, onHandleGoBack }: TopProps) => {
  return (
    <>
      <div className="absolute left-3 top-3 sm:left-6">
        <BackArrow onHandleGoBack={onHandleGoBack} />
      </div>
      <div className={twMerge("", textContainer)}>
        <h2 className="text-center">{title}</h2>
        {subtitle && (
          <p className="mx-auto mt-2 max-w-[60ch] px-3 text-center sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </>
  );
};

export default Top;
