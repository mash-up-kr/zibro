import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { BackButton, SearchField } from '../components/location';

const S = {
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

  const handleChange = useCallback(event => setValue(event.target.value), []);
  const handleClear = useCallback(() => setValue(''), []);

  return (
    <div>
      <main>
        <S.FieldGroup>
          <SearchField value={value} onChange={handleChange} onClear={handleClear} />
          <SearchField value={value} onChange={handleChange} onClear={handleClear} />
        </S.FieldGroup>
      </main>
    </div>
  );
};

export default Location;
