import * as Yup from "yup";
import { Formik, Form } from "formik";

import formJson from "../data/custom-form.json";

import { CustomInput, CustomSelect } from "../components";

const initialValues: { [key: string]: any } = {};
const validationFields: { [key: string]: any } = {};

for (const field of formJson) {
  initialValues[field.name] = field.value;

  if (!field.validations) continue;
  if (field.validations.length === 0) continue;

  let fieldValidation = Yup.string();

  for (const rule of field.validations) {
    if (rule.type === "required") {
      fieldValidation = fieldValidation.required("This field is required");
    }

    if (rule.type === "minLength") {
      fieldValidation = fieldValidation.min(
        (rule as any).value || 2,
        `Minimun ${(rule as any).value || 2} characters`
      );
    }

    if (rule.type === "email") {
      fieldValidation = fieldValidation.email("Invalid email address");
    }
  }

  validationFields[field.name] = fieldValidation;
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({ ...validationFields })}
      >
        {() => (
          <Form>
            {formJson.map(({ value, ...rest }) => {
              if (
                rest.type === "text" ||
                rest.type === "email" ||
                rest.type === "password"
              ) {
                return <CustomInput key={rest.name} {...rest} />;
              } else if (rest.type === "select") {
                return (
                  <CustomSelect key={rest.name} {...rest}>
                    <option value="">Select</option>
                    {rest.options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </CustomSelect>
                );
              }

              throw new Error(`Unsupported form field type: ${rest.type}`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
