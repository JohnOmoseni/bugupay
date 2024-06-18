"use client";

import { TabProps, TabsProps } from "@/types";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const Tabs = ({ activeTab, changeTab, tabIDs }: TabsProps) => {
  return (
    <ul
      role="tablist"
      aria-label="Tabs"
      className="scroll-snap row-flex !justify-start gap-8 overflow-x-auto px-4"
    >
      {tabIDs.map((tab, idx) => {
        return (
          <Tab
            key={idx}
            id={tabIDs[idx]}
            activeTab={activeTab}
            tab={tab}
            changeTab={changeTab}
          />
        );
      })}
    </ul>
  );
};

export default Tabs;

const Tab = ({ id, activeTab, tab, changeTab, className }: TabProps) => {
  return (
    <li
      id={id}
      role="tab"
      aria-selected={activeTab === id ? "true" : "false"}
      className={twMerge(
        `${
          activeTab === id ? "transition-sm" : ""
        } flex-column relative cursor-pointer !items-center whitespace-nowrap px-2 text-center font-normal capitalize`,
        className,
      )}
      onClick={() => changeTab(id)}
    >
      <span className=""></span>
      {tab}

      {activeTab === id && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn" }}
          className="absolute bottom-0 left-0 right-0 mx-auto h-[3px] w-[90%] rounded-full bg-orange-500"
        />
      )}
    </li>
  );
};
