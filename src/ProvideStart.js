import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const fakeSetup = {
  isSetup: false,
  signin(cb) {
    fakeSetup.isSetup = true;
    setTimeout(cb, 100);
  },
};

const useProvideSetup = () => {
  const [user, setUser] = useState(null);

  const setup = (cb) => fakeSetup.signin(() => {
    setUser('user');
    cb();
  });

  return {
    user,
    setup,
  };
};

const authContext = createContext();
const ProvideSetup = ({ children }) => {
  const auth = useProvideSetup();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export const useSetup = () => useContext(authContext);

ProvideSetup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProvideSetup;
