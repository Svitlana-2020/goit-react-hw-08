import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { addContact } from '../redux/contacts/operations';
// import { useState } from 'react';

const ContactForm = () => {
    // const [query, setQuery] = useState({username: '', number: ''});
    const dispatch = useDispatch();

  const handleSubmit = (values, {resetForm}) => {

const contact = {
    name: values.username,
    phone: values.number,
};

    dispatch(addContact(contact));
    console.log(contact)
    resetForm()
    // setQuery({username: '', number: ''});
  };


const nameId = crypto.randomUUID();
const numberId = crypto.randomUUID();

const contactFormSchema = Yup.object({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Required")
})

    return (
        <Formik initialValues = {{
            username: "",
            number: "",
                }}   

                onSubmit={handleSubmit}

                validationSchema={contactFormSchema}
                >

        <Form className={css.form}>
           
            <label htmlFor={nameId} className={css.label}>Name</label>
        <Field type="text" name="username" className={css.name} id={nameId}></Field>
        <ErrorMessage name="username" component="span" className={css.error} />
                
            <label htmlFor={numberId} className={css.label}>Number</label>
        <Field type="text" name="number" className={css.name} id={numberId}></Field>
        <ErrorMessage name="number" component="span" className={css.error} />
       
        <button type="submit" className={css.button}>Add contact</button>
        </Form>
        
        </Formik>
            )}



export default ContactForm;

// (values, actions) => {
//     onSubmit(values);
//     actions.resetForm();
// }