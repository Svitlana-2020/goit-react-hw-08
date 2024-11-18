import css from './ContactForm.module.css'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch } from 'react-redux';
// import * as Yup from "yup";
import { addContact } from '../redux/contacts/operations';
import { useState } from 'react';

const ContactForm = () => {
    const [query, setQuery] = useState({username: '', number: ''});
    const dispatch = useDispatch();


    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setQuery(prevState => ({ ...prevState, [name]: value }));
    }

  const handleSubmit = (evt) => {
    evt.preventDefault();

const contact = {
    name: query.username,
    phone: query.number,
};

    dispatch(addContact(contact));
    setQuery({username: '', number: ''});
  };


const nameId = crypto.randomUUID();
const numberId = crypto.randomUUID();

// const contactFormSchema = Yup.object({
//     username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
//     number: Yup.string()
//     .matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format")
//     .required("Required")
// })

    return (
        // <Formik initialValues = {{
        //     username: "",
        //     number: "",
        //         }}   

        //         onSubmit={handleSubmit}

        //         validationSchema={contactFormSchema}
        //         >

        <form className={css.form} onSubmit={handleSubmit}>
           
            <label htmlFor={nameId} className={css.label}>Name</label>
        <input type="text" name="username" className={css.name} id={nameId} value={query.username} onChange={handleChange}></input>
     
                
            <label htmlFor={numberId} className={css.label}>Number</label>
        <input type="text" name="number" className={css.name} id={numberId} value={query.number} onChange={handleChange}></input>
        
       
        <button type="submit" className={css.button}>Add contact</button>
        </form>

            )}



export default ContactForm;

// (values, actions) => {
//     onSubmit(values);
//     actions.resetForm();
// }