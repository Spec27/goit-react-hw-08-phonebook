/* import { Link } from 'react-router-dom'; */
import s from './Register.module.css';

const Register = () => {
  return (
    <div className={s.HeaderContainer}>
      <form className={s.Form} /* onSubmit={handleSubmit} */>
        <label>
          <input
            className={s.Input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            /*  value={name}
      onChange={handleChange} */
          />
        </label>
        <label>
          <input
            className={s.Input}
            type="email"
            name="email"
            required
            placeholder="Email"
            /* value={number}
      onChange={handleChange} */
          />
        </label>
        <label>
          <input
            className={s.Input}
            type="pasword"
            name="pasword"
            required
            placeholder="Pasword"
            /* value={number}
      onChange={handleChange} */
          />
        </label>
        <button className={s.FormBtn} type="submit">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Register;
