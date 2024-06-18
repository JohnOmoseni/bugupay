"use client";

import { ChangeEvent, useState } from "react";
import InputField from "@/components/InputField";
import SelectDropdown from "@/components/ui/components/Select";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoCopyOutline } from "react-icons/io5";
import ServiceCard from "../../_ui/ServiceCard";
import { network } from "../data";
import { useRouter } from "next/navigation";
import { URLS } from "@/constants";

function BuyAirtime() {
  const [data, setData] = useState({ network: "", phoneNo: "", amount: "" });
  const router = useRouter();

  const onChangeHandler = (name: string, value: any) => {
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onProceedClick = () => {
    router.push(URLS["confirm-transaction"]);
  };

  return (
    <ServiceCard serviceLabel="Buy Airtime" onProceedClick={onProceedClick}>
      <SelectDropdown
        placeholder="Select Network"
        items={network}
        setValue={(value: any) => onChangeHandler("network", value)}
        renderItem={(item) => (
          <>
            <span>{item?.icon}</span>
            <span> {item?.name}</span>
          </>
        )}
      />
      <InputField
        placeholder="Enter Phone Number"
        name="phoneNo"
        value={data.phoneNo}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(e.target.name, e.target.value)
        }
        render={() => (
          <div className="row-flex gap-2">
            <span className="icon">
              <IoCopyOutline size={20} className="" />
            </span>
            <p className="text-[0.8rem] font-medium uppercase text-secondary">
              Paste
            </p>
          </div>
        )}
      />
      <InputField
        placeholder="Enter Amount"
        name="amount"
        value={data.amount}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(e.target.name, e.target.value)
        }
        dir="left"
        icon={TbCurrencyNaira}
      />
    </ServiceCard>
  );
}

export default BuyAirtime;
