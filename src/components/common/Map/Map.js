import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { GOOGLE_MAPS_API_KEY } from '../../../constants';

const S = {
  Wrapper: styled.div`
    width: ${({ size }) => size.width};
    height: ${({ size }) => size.height};
  `,
};

const Map = ({
  className, children, size, center, zoom, onGoogleApiLoaded,
}) => (
  <S.Wrapper className={className} size={size}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
      center={center}
      defaultCenter={{ lat: 37.566791, lng: 126.978024 }}
      defaultZoom={zoom}
      onGoogleApiLoaded={onGoogleApiLoaded}
      yesIWantToUseGoogleMapApiInternals
    >
      {children}
    </GoogleMapReact>
  </S.Wrapper>
);

Map.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }),
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
  onGoogleApiLoaded: PropTypes.func,
};

Map.defaultProps = {
  className: undefined,
  children: undefined,
  size: { width: '100%', height: '100%' },
  center: { lat: 37.566791, lng: 126.978024 },
  zoom: 17,
  onGoogleApiLoaded: () => {},
};

export default Map;
