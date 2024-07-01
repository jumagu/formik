import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  [x: string]: any;
}

export const CustomInput = ({ label, ...restProps }: Props) => {
  const [field, meta] = useField(restProps);

  return (
    <>
      <label htmlFor={restProps.id || restProps.name}>{label}</label>
      <input className="" {...field} {...restProps} />
      <ErrorMessage name={restProps.name} component="span" />

      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
