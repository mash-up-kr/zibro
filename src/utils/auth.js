import http from '../apis';

export const getToken = localStorage.getItem('token');

export const setToken = (token, type) => {
  localStorage.setItem('token', token);

  http.defaults.headers.common.Authorization = `${type} ${token}`;
};

export const removeToken = () => {
  localStorage.removeItem('token');

  http.defaults.headers.common.Authorization = null;
};
