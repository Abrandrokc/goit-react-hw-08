import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required")
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        dispatch(login(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.name}>
          <label htmlFor="email">Email</label>
          <Field className={css.nameInput} type="email" name="email" />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css.number}>
          <label htmlFor="password">Password</label>
          <Field className={css.numberInput} type="password" name="password" />
          <ErrorMessage name="password" component="span" className={css.error} />
        </div>
        <button className={css.submit} type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
