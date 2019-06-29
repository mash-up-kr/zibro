import http from './http';

const END_POINT = 'END_POINT';

const config = {};

export const signIn = () => http.post(END_POINT, config);
