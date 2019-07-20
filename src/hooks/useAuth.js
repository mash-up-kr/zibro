import { useContext } from 'react';
import { AuthContext } from '../contexts';

const useAuth = () => useContext(AuthContext);

export default useAuth;
