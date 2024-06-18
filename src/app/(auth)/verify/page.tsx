"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { phoneNumberSchema } from "@/schema";
import Top from "../_ui/Top";
import AuthSectionWrapper from "../_ui/AuthSectionWrapper";
import PhoneNoInput from "../_ui/PhoneNoInput";
import { useState } from "react";
import { URLS } from "@/constants";

function Verify() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const onSubmit = async () => {
    router.push(URLS["verify-digit"]);
  };

  return (
    <AuthSectionWrapper>
      <Top
        title={
          <>
            Verify your
            <span className="tracking-wide text-secondary"> phone number </span>
            <br />
            with a code
          </>
        }
        subtitle={
          <>
            It helps us keep your account secure.
            <a
              href="#"
              className="font-normal transition-sm hover:scale-95 hover:underline"
            >
              {" "}
              Learn more
            </a>
          </>
        }
      />

      <div className="w-full pb-6">
        <div className="py-form">
          <PhoneNoInput
            valid={valid}
            setValid={setValid}
            setPhoneNumber={setPhoneNumber}
          />
        </div>
        <Button
          title="Send Verification code"
          className="auth-btn"
          onClick={onSubmit}
        />
      </div>
    </AuthSectionWrapper>
  );
}

export default Verify;
