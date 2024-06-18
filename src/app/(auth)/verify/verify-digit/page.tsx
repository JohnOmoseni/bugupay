"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { otpSchema } from "@/schema";
import Top from "../../_ui/Top";
import FormGroup from "../../_ui/FormGroup";
import AuthSectionWrapper from "../../_ui/AuthSectionWrapper";
import { URLS } from "@/constants";

function OtpVerify() {
  const router = useRouter();

  const onSubmit = async (values: any, actions: any): Promise<any> => {
    const digits = values?.digits;
    console.log("Submitting", values);
    router.push(URLS["create-password"]);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        digits: "",
      },
      validationSchema: otpSchema,
      onSubmit,
    });

  return (
    <AuthSectionWrapper>
      <Top
        title="Enter the 6-digit code"
        subtitle={
          <>
            We sent it to +234-81-6757-9409.
            <a
              href="#"
              className="font-normal transition-sm hover:scale-95 hover:underline"
            >
              {" "}
              Change
            </a>
          </>
        }
      />

      <form className="py-form">
        <FormGroup
          name="digits"
          label="Your 6-digit code"
          type="text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "
          required
          value={values.digits}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <Button title="Next" onClick={handleSubmit} className="auth-btn" />
      </form>

      <Link
        href="#"
        className="group -mt-8 block transition-sm hover:underline"
      >
        <p className="text-center text-base font-medium">
          I didn't receive a code
        </p>
      </Link>
    </AuthSectionWrapper>
  );
}

export default OtpVerify;
