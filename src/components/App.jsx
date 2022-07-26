import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './App.module.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import { authOperations } from 'redux/auth';

const RegisterViev = lazy(() => import('./viev/Register'));
const Login = lazy(() => import('./viev/Login'));
const Contacts = lazy(() => import('./viev/Contacts'));
const NotFoundViev = lazy(() => import('./viev/NotFoundViev'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div className={s.Container}>
        <AppBar />
        <Suspense fallback={<p>...Loader</p>}>
          <Routes>
            <Route path="/" element={<RegisterViev />} />
            <Route path="login" element={<Login />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFoundViev />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
