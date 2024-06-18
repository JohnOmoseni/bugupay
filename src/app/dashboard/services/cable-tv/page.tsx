"use client";

import { ChangeEvent, useState } from "react";
import InputField from "@/components/InputField";
import SelectDropdown from "@/components/ui/components/Select";
import { IoCopyOutline } from "react-icons/io5";
import ServiceCard from "../../_ui/ServiceCard";
import { billers, products } from "../data";
import { useRouter } from "next/navigation";
import { URLS } from "@/constants";

function CableTV() {
  const [data, setData] = useState({ biller: "", product: "", cardNo: "" });
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
    <ServiceCard serviceLabel="Cable Tv" onProceedClick={onProceedClick}>
      <SelectDropdown
        placeholder="Select Biller"
        items={billers}
        setValue={(value: any) => onChangeHandler("biller", value)}
        renderItem={(item) => (
          <>
            <span>{item?.icon}</span>
            <span> {item?.name}</span>
          </>
        )}
      />

      <SelectDropdown
        placeholder="Select Product"
        items={products}
        setValue={(value: any) => onChangeHandler("product", value)}
        renderItem={(item) => (
          <>
            <span>{item?.icon}</span>
            <span> {item?.name}</span>
          </>
        )}
      />
      <InputField
        placeholder="Enter Smartcard Number"
        name="cardNo"
        value={data.cardNo}
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
    </ServiceCard>
  );
}

export default CableTV;
