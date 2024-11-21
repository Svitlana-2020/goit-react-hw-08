// import css from '../components/ContactForm.module.css'

import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation"
import ContactsPage from "./ContactsPage"
import RegistrationPage from "./RegistrationPage"
import { selectisLoggedIn, selectUserData } from "../redux/auth/selectors";
import { ApiLogOut } from "../redux/auth/operations";

const HomePage = () => {

    const dispatch = useDispatch();
    const userData = useSelector(selectUserData);
    console.log(userData)

    // const onLogOut = () => {
    //     dispatch(ApiLogOut);
    // }
const isLoggedIn = useSelector(selectisLoggedIn);
console.log(isLoggedIn)

    return (
    <div>
<Navigation />
{isLoggedIn ? (<>
                <div>
                        <p>Welcome, {userData.name}</p>
                    
                    {<ContactsPage />}
                    <button type="button" onClick={() => dispatch(ApiLogOut())}>
                        Log Out
                    </button>
                </div> 
            </>) : <RegistrationPage/>
            }
    </div>
)}

export default HomePage