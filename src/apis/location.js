import http from './http';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_URL } from '../constants';

export const fetchPlaces = ({ query }) => http.get(`${GOOGLE_MAPS_API_URL}/place/autocomplete/json`, {
  params: {
    key: GOOGLE_MAPS_API_KEY,
    input: query,
  },
});
