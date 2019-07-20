import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
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
};

const Location = () => {
  const [value, setValue] = useState('');
  const [position, setPosition] = useState(null);

  const handleChange = useCallback(event => setValue(event.target.value), []);
  const handleClear = useCallback(() => setValue(''), []);

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
          <SearchField value={value} onChange={handleChange} onClear={handleClear} />
          <SearchField value={value} onChange={handleChange} onClear={handleClear} />
        </S.FieldGroup>
        <Map center={position} />
      </S.Main>
    </S.Wrapper>
  );
};

export default Location;
