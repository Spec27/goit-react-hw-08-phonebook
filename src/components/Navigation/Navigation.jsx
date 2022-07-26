import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => (isActive ? s.ActiveLink : s.Link);

const Navigation = () => {
  return (
    <>
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
      {/*  <div className={s.ContactsContainer}>
        <NavLink className={setActive} to="contacts">
          Contacts
        </NavLink>
      </div>
      <Outlet /> */}
    </>
  );
};

export default Navigation;
