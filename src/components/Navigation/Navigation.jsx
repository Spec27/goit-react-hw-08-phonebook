import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => (isActive ? s.ActiveLink : s.Link);

const Navigation = () => {
  return (
    <>
      <header>
        <nav className={s.HeaderContainer}>
          <h1 className={s.TitlePhone}>&#128241;</h1>
          <div className={s.RegisterContainer}>
            <NavLink className={setActive} to="/">
              Register
            </NavLink>
          </div>
          <div className={s.LoginContainer}>
            <NavLink className={setActive} to="login">
              Login
            </NavLink>
          </div>
          <div className={s.ContactsContainer}>
            <NavLink className={setActive} to="contacts">
              Contacts
            </NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
