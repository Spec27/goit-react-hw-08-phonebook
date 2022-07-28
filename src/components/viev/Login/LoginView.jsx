import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

import s from './Login.module.css';

const LoginViev = () => {
  const dispach = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPasswort] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPasswort(value);
      default:
        return;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    dispach(authOperations.logIn({ email, password }));
    setEmail('');
    setPasswort('');
  };

  return (
    <div className={s.HeaderContainer}>
      <form className={s.Form} onSubmit={hendleSubmit}>
        <h2 className={s.Title}>Please log in</h2>
        <label>
          <input
            className={s.Input}
            type="email"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            className={s.Input}
            type="password"
            name="password"
            required
            placeholder="Pasword"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={s.FormBtn} type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginViev;
