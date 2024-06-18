"use client";

import { useFormik } from "formik";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { signinSchema } from "@/schema";
import Top from "../_ui/Top";
import FormGroup from "../_ui/FormGroup";
import FooterNote from "../_ui/FooterNote";
import AuthSectionWrapper from "../_ui/AuthSectionWrapper";

function SignIn() {
  const router = useRouter();

  const onSubmit = async (values: any, actions: any): Promise<any> => {
    const data = {
      email: values?.email,
      password: values?.password,
    };
    console.log("Submitting", values);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signinSchema,
      onSubmit,
    });

  return (
    <AuthSectionWrapper>
      <Top
        title={
          <>
            Welcome <span className="tracking-wide text-secondary">back!</span>
          </>
        }
      />

      <form className="flex-column mb-4 mt-12 gap-4" onSubmit={handleSubmit}>
        <FormGroup
          name="email"
          label="Your Email"
          type="text"
          required
          value={values.email}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          errorStyles="text-left pl-1 mt-2 mb-2"
        />

        <FormGroup
          name="password"
          label="Your Password"
          type="password"
          required
          value={values.password}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          errorStyles="text-left pl-1 mt-2 mb-2"
        />

        <Button title="Login" className="auth-btn" />
      </form>
      <FooterNote />
    </AuthSectionWrapper>
  );
}

export default SignIn;
