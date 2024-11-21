import { NavLink } from "react-router-dom"
import css from '../components/Navigation.module.css'
import ContactsPage from "../pages/ContactsPage"
import { useSelector } from "react-redux"
import { selectisLoggedIn } from "../redux/auth/selectors"


const Navigation = () => {

    const isLoggedIn = useSelector(selectisLoggedIn);

    return (
        <div>
            <NavLink className={css.nav} to="/">
            Home
            </NavLink>
            {isLoggedIn && 
                    <ContactsPage/> }
        </div>
    )    }

    export default Navigation
