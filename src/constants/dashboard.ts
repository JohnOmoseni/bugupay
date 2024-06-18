import { BsGlobe2 } from "react-icons/bs";
import { IoMdTv } from "react-icons/io";
import { LuCable } from "react-icons/lu";
import { TiFlashOutline } from "react-icons/ti";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CiPhone } from "react-icons/ci";
import { URLS } from ".";

export const dashboardServices = [
  {
    icon: CiPhone,
    service: "Airtime",
    href: URLS.airtime,
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    service: "Data",
    href: URLS.data,
  },
  {
    icon: TiFlashOutline,
    service: "Electricity",
    href: URLS.cable,
  },
  {
    icon: LuCable,
    service: "Cable",
    href: URLS.cable,
  },
  {
    icon: IoMdTv,
    service: "TV",
    href: URLS.cable,
  },
  {
    icon: BsGlobe2,
    service: "Internet",
    href: URLS.data,
  },
];
