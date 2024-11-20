import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchContacts } from "../redux/contacts/operations";
import { NavLink, Outlet } from "react-router-dom";
import css from './components/Header.module.css'
// import ContactList from "../components/ContactList";

const ContactsPage =() => {
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchContacts)
    }, [dispatch])

    return (
        <div>
            <Suspense fallback={<div>Loading page...</div>}>
        <nav className={css.list}>
          <li className={css.item}>
          <NavLink to="list" className={css.nav}>
            Contact List
            </NavLink>
          </li>
          <li className={css.item}>
          <NavLink to="newcontact" className={css.nav}>
           Add a contact
            </NavLink>
          </li>
          <li className={css.item}>
          <NavLink to="search" className={css.nav}>
           Find a contact
            </NavLink>
          </li>
        </nav>
        <Outlet />
        </Suspense>
        </div>
    )
}

export default ContactsPage