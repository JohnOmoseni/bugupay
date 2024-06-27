import React, { ReactNode } from "react";

function AuthSectionWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative grid h-full min-h-[560px] place-items-center">
      <div className="mx-auto max-w-[600px] px-6 pb-6 pt-14 sm:pt-[5%]">
        {children}
      </div>
    </div>
  );
}

export default AuthSectionWrapper;
