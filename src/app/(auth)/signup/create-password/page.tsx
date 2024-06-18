"use client";

import { useFormik } from "formik";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { passwordSchema } from "@/schema";
import FormGroup from "../../_ui/FormGroup";
import Top from "../../_ui/Top";
import AuthSectionWrapper from "../../_ui/AuthSectionWrapper";
import { URLS } from "@/constants";

function CreatePassword() {
  const router = useRouter();

  const onSubmit = async (values: any, actions: any): Promise<any> => {
    const password = values?.password;
    console.log("Submitting", values);
    router.push(URLS["signup-success"]);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
      },
      validationSchema: passwordSchema,
      onSubmit,
    });

  return (
    <AuthSectionWrapper>
      <Top
        title={
          <>
            Create your{" "}
            <span className="tracking-wide text-secondary">password</span>
          </>
        }
      />

      <form className="py-form">
        <FormGroup
          name="password"
          label="Password"
          type="password"
          required
          value={values.password}
          errors={errors}
          touched={touched}
          onBlur={handleBlur}
          onChange={handleChange}
          errorStyles="sm:max-w-[36ch]"
        />

        <Button title="Continue" onClick={handleSubmit} className="auth-btn" />
      </form>
    </AuthSectionWrapper>
  );
}

export default CreatePassword;
