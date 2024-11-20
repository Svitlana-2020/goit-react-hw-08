import { ErrorMessage, Field, Formik, Form } from 'formik';
import css from '../components/ContactForm.module.css'
import * as Yup from "yup";
import { ApiCreateUser } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

const nameId = crypto.randomUUID();
const emailId = crypto.randomUUID();
const passwordId = crypto.randomUUID();

const contactFormSchema = Yup.object({
    name: Yup.string().min(3, "Too Short!").max(10, "Too Long!").required("Required"),
    password: Yup.
    string().min(3, "Too Short!").max(8, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
})

const handleSubmit = (values, { resetForm }) => {
    dispatch(ApiCreateUser({
	    name: values.name,
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
    name: "",
    email: "",
    password: "",
        }}   

        onSubmit={handleSubmit}

        validationSchema={contactFormSchema}
        >

<Form className={css.form}>
   
    <label htmlFor={nameId} className={css.label}>Name</label>
<Field type="text" name="name" className={css.name} id={nameId}></Field>
<ErrorMessage name="name" component="span" className={css.error} />

    <label htmlFor={emailId} className={css.label}>Email</label>
<Field type="text" name="email" className={css.name} id={emailId}></Field>
<ErrorMessage name="email" component="span" className={css.error} />
        
    <label htmlFor={passwordId} className={css.label}>Password</label>
<Field type="password" name="password" className={css.name} id={passwordId}></Field>
<ErrorMessage name="password" component="span" className={css.error} />

<button type="submit" className={css.button}>Register</button>
</Form>

</Formik>
    </>
    )
}

export default RegistrationPage

