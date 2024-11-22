import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchContacts } from "../redux/contacts/operations";
import SearchBox from '../components/SearchBox'

// import {ContactForm} from '../components/ContactForm'
// import { NavLink, Outlet } from "react-router-dom";

import css from '../components/UserMenu.module.css'
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
// import { UserMenu } from "../components/UserMenu";

const ContactsPage =() => {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div>
<div className={css.contactWrap}>
<SearchBox/>
<ContactList/>
< ContactForm />
</div>
        </div>
    )
}

export default ContactsPage