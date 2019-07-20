import React, { useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../contexts';
import { firebase } from '../../../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER':
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    loading: true,
    error: null,
  });

  const setUser = useCallback(user => dispatch({ type: 'USER', payload: { user } }), []);
  const setError = useCallback(error => dispatch({ type: 'ERROR', payload: { error } }), []);

  useEffect(() => firebase.auth.onAuthStateChanged(setUser, setError), [setUser, setError]);

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
