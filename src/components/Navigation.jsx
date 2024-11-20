import { NavLink } from "react-router-dom"
import css from '../components/Header.module.css'
import { useDispatch, useSelector } from "react-redux"
import { selectisLoggedIn, selectUserData } from "../redux/auth/selectors";
import { ApiLogOut } from "../redux/auth/operations";

const Navigation = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectisLoggedIn);
    const userData = useSelector(selectUserData);
    console.log(userData)

    const onLogOut = () => {
        dispatch(ApiLogOut);
    }

    return (
        <div>
            <NavLink className={css.nav} to="/">
            Home
            </NavLink>
            {isLoggedIn ? (
                <div>
                    <span>
                        Welcome,`${userData}`
                    </span>
                    <button type="button" onClick={onLogOut}>
                        Log Out
                    </button>
                </div>
            ) : 
            <>
            <NavLink className={css.nav} to="/register">
            Register
            </NavLink>
            <NavLink className={css.nav} to="/login">
            Log In
            </NavLink> 
            </> }
        </div>
    )    }

    export default Navigation