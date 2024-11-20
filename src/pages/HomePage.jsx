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

    const onLogOut = () => {
        dispatch(ApiLogOut);
    }
// const nameId = crypto.randomUUID();
// const numberId = crypto.randomUUID();
const isLoggedIn = useSelector(selectisLoggedIn);

    return (
    <div>
<Navigation />
{isLoggedIn ? (<>
                <div>
                        <p>Welcome, `${userData}`</p>
                    
                    {<ContactsPage />}
                    <button type="button" onClick={onLogOut}>
                        Log Out
                    </button>
                </div> 
            </>) : <RegistrationPage/>
            }
    </div>
)}

export default HomePage