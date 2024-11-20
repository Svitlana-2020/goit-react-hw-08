import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from '../components/ContactForm.module.css';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { ApiLogIn } from '../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

const dispatch = useDispatch();
const navigate = useNavigate();

const passwordId = crypto.randomUUID();
const emailId = crypto.randomUUID();


const contactLoginSchema = Yup.object({
    password: Yup.
    string().min(3, "Too Short!").max(8, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
})

const handleSubmit = (values, { resetForm }) => {
    dispatch(ApiLogIn({
	    email: values.email,
        password: values.password,
	  }));
      resetForm()
  };

const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1); 
    } else {
      navigate("/"); 
    }
  };

    return (
        <>
        <button type="button" className={css.button} onClick={handleGoBack}>
      Go back</button>
<Formik initialValues = {{
    email: "",
    password: "",
        }}   

        onSubmit={handleSubmit}

        validationSchema={contactLoginSchema}
        >

<Form className={css.form}>

    <label htmlFor={emailId} className={css.label}>Email</label>
<Field type="text" name="email" className={css.name} id={emailId}></Field>
<ErrorMessage name="email" component="span" className={css.error} />
        
    <label htmlFor={passwordId} className={css.label}>Password</label>
<Field type="password" name="password" className={css.name} id={passwordId}></Field>
<ErrorMessage name="password" component="span" className={css.error} />

<button type="submit" className={css.button}>Log In</button>
</Form>

</Formik>
    </>)}

export default LoginPage