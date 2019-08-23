import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { BackButton, Map, SearchField } from '../components/common';

const S = {
  Wrapper: styled.div`
    height: 100%;
  `,
  Main: styled.main`
    height: 100%;
  `,
  FieldGroup: styled.div`
    position: relative;
    padding: 12px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  `,
  BackButton: styled(BackButton)`
    position: absolute;
    top: 12px;
    left: 12px;
  `,
  Button: styled(Button)`
    position: fixed;
    bottom: 56px;
    z-index: 1500;
    width: 100%;
    height: 56px;
    border-radius: 0;
  `,
};

const Location = () => {
  const [values, setValues] = useState({ origin: '언주역', destination: '집' });
  const [position, setPosition] = useState(null);

  const handleChange = useCallback(event => setValues(prevValues => ({
    ...prevValues, [event.target.name]: event.target.value,
  })), []);
  const handleClear = useCallback(event => setValues(prevValues => ({ ...prevValues, [event.target.name]: '' })), []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(currentPosition => setPosition({
      lat: currentPosition.coords.latitude,
      lng: currentPosition.coords.longitude,
    }));
  }, []);

  return (
    <S.Wrapper>
      <S.Main>
        <S.FieldGroup>
          <SearchField target="origin" value={values.origin} onChange={handleChange} onClear={handleClear} />
          <SearchField target="destination" value={values.destination} onChange={handleChange} onClear={handleClear} />
        </S.FieldGroup>
        <Map center={position} />
        <S.Button component={Link} to="/recommended-routes" type="button" color="primary" variant="contained">
          추천 경로 보기
        </S.Button>
      </S.Main>
    </S.Wrapper>
  );
};

export default Location;
