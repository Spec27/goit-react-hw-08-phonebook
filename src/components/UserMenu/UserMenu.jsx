import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import s from './UserMenu.module.css';

const setActive = ({ isActive }) => (isActive ? s.ActiveLink : s.Link);

function UserMenu() {
  const dispath = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <>
      <div className={s.Container}>
        <div>
          <h2 className={s.Logo}>My Phonebook</h2>
        </div>
        <div className={s.ContactsContainer}>
          <NavLink className={setActive} to="/contacts">
            Contacts
          </NavLink>
        </div>
        <span className={s.Title}>{email} </span>
        <button
          className={s.Btn}
          type="button"
          onClick={() => dispath(authOperations.logOut())}
        >
          Вийти
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default UserMenu;
