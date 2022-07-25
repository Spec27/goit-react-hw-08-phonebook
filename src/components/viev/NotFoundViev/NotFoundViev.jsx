import { Link } from 'react-router-dom';
import s from './NotFoundViev.module.css';
function NotFoundViev() {
  return (
    <h1 className={s.Text}>
      {' '}
      404 Сторінка не знайдена <Link to="/">Register</Link>{' '}
    </h1>
  );
}

export default NotFoundViev;
