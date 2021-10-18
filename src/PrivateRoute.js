import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSetup } from './ProvideStart';

const PrivateRoute = ({ children, ...rest }) => {
  const setup = useSetup();
  return (
    <Route
      {...rest}
      render={({ location }) => (setup.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
