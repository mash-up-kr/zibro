import axios from 'axios';

const http = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: '',
});

export default http;
