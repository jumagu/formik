import { type FormEvent } from "react";

import "../styles/styles.css";

import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    repeatPassword,
    isValidEmail,
    reset,
    formData,
    handleInputChanged,
  } = useForm({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Your name"
          onChange={handleInputChanged}
          className={name.trim().length < 1 ? "has-error" : ""}
        />
        {name.trim().length < 1 && <span>This field is required</span>}

        <input
          name="email"
          type="email"
          value={email}
          placeholder="Your email"
          onChange={handleInputChanged}
          className={!isValidEmail(email) ? "has-error" : ""}
        />
        {!isValidEmail(email) && <span>Invalid Email</span>}

        <input
          name="password"
          type="password"
          value={password}
          placeholder="Your password"
          onChange={handleInputChanged}
          className={password.trim().length < 1 ? "has-error" : ""}
        />
        {password.trim().length < 1 && <span>This field is required</span>}
        {password.trim().length > 0 && password.trim().length < 6 && (
          <span>Password must be 6 or more characters</span>
        )}

        <input
          name="repeatPassword"
          type="password"
          value={repeatPassword}
          placeholder="Repeat your password"
          onChange={handleInputChanged}
        />
        {repeatPassword.trim().length < 1 && (
          <span>This field is required</span>
        )}
        {repeatPassword.trim().length > 0 && repeatPassword !== password && (
          <span>Password must be 6 or more characters</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
