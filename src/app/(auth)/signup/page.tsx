"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { emailSchema } from "@/schema";
import Top from "../_ui/Top";
import FormGroup from "../_ui/FormGroup";
import FooterNote from "../_ui/FooterNote";
import AuthSectionWrapper from "../_ui/AuthSectionWrapper";
import { URLS } from "@/constants";

function SignUp() {
  const router = useRouter();

  const onSubmit = async (values: any, actions: any): Promise<any> => {
    const email = values?.email;
    console.log("Submitting", values);
    router.push(URLS.verify);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: emailSchema,
      onSubmit,
    });

  return (
    <AuthSectionWrapper>
      <Top
        title={
          <>
            Create your{" "}
            <span className="tracking-wide text-secondary">Bugupay </span>
            account
          </>
        }
        subtitle="Your convienent payment solution"
      />

      <form className="flex-column mb-4 mt-12 gap-4">
        <FormGroup
          name="email"
          label="First, Enter your email address"
          type="text"
          required
          value={values.email}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <Button title="Next" onClick={handleSubmit} className="auth-btn" />
      </form>

      <FooterNote />
    </AuthSectionWrapper>
  );
}

export default SignUp;
