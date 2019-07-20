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
  children, size, center, zoom,
}) => (
  <S.Wrapper size={size}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {children}
    </GoogleMapReact>
  </S.Wrapper>
);

Map.propTypes = {
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
};

Map.defaultProps = {
  children: undefined,
  size: { width: '100%', height: '100%' },
  center: { lat: 37.566791, lng: 126.978024 },
  zoom: 17,
};

export default Map;
