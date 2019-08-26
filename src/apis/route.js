import qs from 'querystring';
import http from './http';
import { GOOGLE_MAPS_API_KEY } from '../constants';

export const fetchTaxiRoute = ({
  startX, startY, endX, endY, trafficInfo = 'N', searchOption = 0,
}) => http.post(
  'https://api2.sktelecom.com/tmap/routes?version=1&callback=json&',
  qs.stringify({
    startX, startY, endX, endY, trafficInfo, searchOption,
  }),
  {
    headers: {
      appKey: '41a4325c-aae6-4cdd-be01-dc387729125c',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': 'ko',
    },
  },
);

export const fetchRoute = ({
  /* eslint-disable camelcase */
  origin, destination, departure_time, mode = 'transit', key = GOOGLE_MAPS_API_KEY,
  /* eslint-enable */
}) => http.get(
  'https://maps.googleapis.com/maps/api/directions/json',
  {
    params: {
      origin,
      destination,
      departure_time,
      mode,
      key,
    },
  },
);
