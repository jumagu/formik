import * as Yup from "yup";
import { Formik, Form } from "formik";

import "../styles/styles.css";

import { CustomInput, CustomSelect, CustomCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          email: "",
          jobType: "",
          lastName: "",
          firstName: "",
          terms: false,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "First name must be 15 characters or less")
            .required("First name is required"),
          lastName: Yup.string()
            .max(15, "Last name must be 15 characters or less")
            .required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          jobType: Yup.string()
            .notOneOf(["designer"], "This option is not available")
            .required("Please select job type"),
          terms: Yup.boolean().isTrue(
            "You must accept terms and conditions to continue"
          ),
        })}
      >
        {(formik) => (
          <Form>
            <CustomInput
              label="First Name"
              name="firstName"
              placeholder="Your first name"
            />

            <CustomInput
              label="Last Name"
              name="lastName"
              placeholder="Your last name"
            />

            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Your email address"
            />

            <CustomSelect label="Job Type" name="jobType">
              <option value="">Select</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="devops">DevOps</option>
            </CustomSelect>

            <CustomCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
