/* import { Link } from 'react-router-dom'; */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './Register.module.css';

const RegisterViev = () => {
  const dispach = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswort] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispach(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPasswort('');
  };

  return (
    <div className={s.HeaderContainer}>
      <form className={s.Form} onSubmit={hendleSubmit}>
        <h2 className={s.Title}>Please Register</h2>
        <label>
          <input
            className={s.Input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>
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
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={s.FormBtn} type="submit">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default RegisterViev;
