import s from './Login.module.css';
const Login = () => {
  return (
    <div className={s.HeaderContainer}>
      <form className={s.Form} /* onSubmit={handleSubmit} */>
        <label>
          <input
            className={s.Input}
            type="email"
            name="email"
            required
            placeholder="Email"
            /*  value={name}
        onChange={handleChange} */
          />
        </label>
        <label>
          <input
            className={s.Input}
            type="pasword"
            name="pasword"
            /* pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" */
            required
            placeholder="Pasword"
            /* value={number}
        onChange={handleChange} */
          />
        </label>
        <button className={s.FormBtn} type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
