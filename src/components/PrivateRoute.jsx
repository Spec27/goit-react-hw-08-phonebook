import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';

export default function PrivateRoute({ redirectPath = '/', children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectPath} replace />;
}

PrivateRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
