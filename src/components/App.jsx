import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from './Loader';

const RegisterViev = lazy(() => import('./viev/Register'));
const Login = lazy(() => import('./viev/Login'));
const Contacts = lazy(() => import('./viev/Contacts'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <div className={s.Container}>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/register"
                element={
                  <PublicRoute redirectPath={'/contacts'}>
                    <RegisterViev />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectPath={'/contacts'}>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectPath={'/login'}>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/register" />} />
            </Routes>
          </Suspense>
        </div>
        <div className={s.Futer}>
          <div className={s.FuterContainer}></div>
        </div>
      </>
    )
  );
}

export default App;
