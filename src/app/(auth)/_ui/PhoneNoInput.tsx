import { Dispatch, SetStateAction, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Label } from "@/components/ui/label";
import "react-phone-input-2/lib/style.css";

interface PhoneNumberProps {
  valid?: boolean;
  phoneNumber?: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  setValid: Dispatch<SetStateAction<boolean>>;
}

const PhoneNoInput = ({
  valid,
  setValid,
  phoneNumber,
  setPhoneNumber,
}: PhoneNumberProps) => {
  const inputRef = useRef(null);

  const handleChange = (value: string) => {
    setPhoneNumber && setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className={`group w-full ${!valid ? "is-error" : ""}`}>
      <Label htmlFor="phoneNumber" className="mb-2.5 inline-flex">
        Phone Number
      </Label>

      <div
        className={`${
          !valid ? "is-invalid" : ""
        } phone-input row-flex group/container relative w-full !justify-start gap-1 overflow-hidden rounded-md shadow-sm`}
      >
        <PhoneInput
          country={"ng"}
          value={phoneNumber}
          onChange={handleChange}
          autoFormat={false}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
        />
      </div>
      {!valid && (
        <p className="mt-2.5 hidden pl-1 text-base font-semibold tracking-wide text-red-600 animate-in transition-sm group-[.is-error]:block">
          Please enter a valid phone number.
        </p>
      )}
    </div>
  );
};

export default PhoneNoInput;
