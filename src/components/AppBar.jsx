import  Navigation  from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectisLoggedIn } from '../redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return (
  <div>
    <div className={css.header}>
      <Navigation />
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};