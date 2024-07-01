import * as Yup from "yup";
import { Formik, Form } from "formik";

import "../styles/styles.css";

import { CustomInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Minimun 2 characters please")
            .max(15, "Name must be 15 characters or less")
            .required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be 6 characters or more")
            .required("Password is required"),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Please repeat your password"),
        })}
      >
        {(formik) => (
          <Form>
            <CustomInput
              label="Name"
              name="name"
              type="text"
              placeholder="John Doe"
            />

            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="example@mail.com"
            />

            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="Your password"
            />

            <CustomInput
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              placeholder="Repeat your password"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
