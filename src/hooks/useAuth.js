import {
  useCallback, useEffect, useReducer,
} from 'react';
import { firebase } from '../utils';

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

const useAuth = () => {
  const [state, dispatch] = useReducer(reducer, { user: null, loading: true, error: null });

  const setUser = useCallback(user => dispatch({ type: 'USER', payload: { user } }), []);
  const setError = useCallback(error => dispatch({ type: 'ERROR', payload: { error } }), []);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(setUser, setError);

    return () => unsubscribe();
  }, [setUser, setError]);

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
  };
};

export default useAuth;
