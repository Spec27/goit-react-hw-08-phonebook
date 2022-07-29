import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => (isActive ? s.ActiveLink : s.Link);

const Navigation = () => {
  return (
    <>
      <div>
        <h1 className={s.Title}>My Phonebook</h1>
      </div>
      <div className={s.RegisterContainer}>
        <NavLink className={setActive} to="/register">
          Register
        </NavLink>
      </div>
      <div className={s.LoginContainer}>
        <NavLink className={setActive} to="/login">
          Login
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
