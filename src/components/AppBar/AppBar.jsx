import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.H}>
        <nav className={s.HeaderContainer}>
          <div className={s.H}>
            <h1 className={s.TitlePhone}>&#128241;</h1>
            {isLoggedIn ? <UserMenu /> : <Navigation />}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default AppBar;
