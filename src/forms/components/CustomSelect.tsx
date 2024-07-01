import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomSelect = ({ label, ...restProps }: Props) => {
  const [field] = useField(restProps);

  return (
    <>
      <label htmlFor={restProps.id || restProps.name}>{label}</label>
      <select {...field} {...restProps} />
      <ErrorMessage name={restProps.name} component="span" />
      
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
