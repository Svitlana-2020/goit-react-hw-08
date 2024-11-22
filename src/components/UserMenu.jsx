import { useDispatch, useSelector } from 'react-redux';
import { ApiLogOut } from '../redux/auth/operations';
import css from './UserMenu.module.css';
import { selectUserData } from '../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userData.name}, to your Contact Page </p>
      <button type="button" onClick={() => dispatch(ApiLogOut())}>
        Logout
      </button>
    </div>
  );
};