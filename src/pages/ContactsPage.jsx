import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchContacts } from "../redux/contacts/operations";
import SearchBox from '../components/SearchBox'

// import {ContactForm} from '../components/ContactForm'
// import { NavLink, Outlet } from "react-router-dom";
import css from '../components/Navigation.module.css'
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
// import ContactList from "../components/ContactList";

const ContactsPage =() => {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div>
<p>Your contacts</p>
<SearchBox/>
<ContactList/>
< ContactForm />
        </div>
    )
}

export default ContactsPage