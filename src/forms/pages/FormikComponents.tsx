import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="email">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Select</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="devops">DevOps</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms & Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
