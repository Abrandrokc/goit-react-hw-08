import css from "./RegistrationForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
 
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: ""
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(3, "Too small").required("Required").max(50),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6, "Too small").required("Required").max(50)
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        dispatch(register(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.name}>
          <label htmlFor="name">name</label>
          <Field className={css.nameInput} type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
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
        <button className={css.red} type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
