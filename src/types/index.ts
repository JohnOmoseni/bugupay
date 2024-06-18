import { ColumnDef } from "@tanstack/react-table";
import { StaticImageData } from "next/image";

// (home)

export type NavLinks = {
  name: string;
  tag: string;
};

export type NavLinkProps = {
  name: string;
  tag: string;
  menu?: boolean;
  handleClick?: () => void;
};

export type FeaturesType = {
  idx: number;
  vector: string | StaticImageData;
  title: string;
  body: string;
  bgColor: string;
};

export type TabsProps = {
  activeTab: string;
  changeTab: (id: string) => void;
  tabIDs: string[];
};

export type TabProps = {
  id: string;
  activeTab: string;
  tab: string;
  changeTab: (id: string) => void;
  className?: string;
};

// Dashboard
export type TableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // fromDate: Date | undefined;
  // toDate: Date | undefined;
  // setFromDate: Dispatch<SetStateAction<Date | undefined>>;
  // setToDate: Dispatch<SetStateAction<Date | undefined>>;
  // renderHeading?: () => void;
};
