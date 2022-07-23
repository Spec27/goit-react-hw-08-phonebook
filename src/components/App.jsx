import s from './App.module.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';

const Register = lazy(() => import('./viev/Register'));
const Login = lazy(() => import('./viev/Login'));
const Contacts = lazy(() => import('./viev/Contacts'));

function App() {
  return (
    <>
      <div className={s.Container}>
        <Suspense fallback={<p>...Loader</p>}>
          <AppBar />
          <Routes>
            <Route path="/" element={<Register />} />
          </Routes>
          <Routes>
            <Route path="login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
