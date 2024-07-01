import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const CustomCheckbox = ({ label, ...restProps }: Props) => {
  const [field] = useField({ ...restProps, type: "checkbox" });

  return (
    <>
      <label style={{ userSelect: "none" }}>
        <input type="checkbox" {...field} {...restProps} />
        {label}
      </label>
      <ErrorMessage name={restProps.name} component="span" />

      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
