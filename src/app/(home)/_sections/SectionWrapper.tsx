import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  id?: string;
};

const SectionWrapper = ({ children, id }: Props) => {
  return (
    <div id={id} className="px-3 py-8 sm:px-[4%] sm:py-[4em]">
      {children}
    </div>
  );
};

export default SectionWrapper;
