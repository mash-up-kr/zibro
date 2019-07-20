import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import BackButton from '../BackButton';
import Map from '../Map';
import SearchList from '../SearchList';

const S = {
  MapWrapper: styled.div`
    position: fixed;
    top: 0;
    bottom: 56px;
    left: 0;
    right: 0;
    z-index: 1100;
    display: flex;
    flex-direction: column;
  `,
  SearchBar: styled.div`
    position: relative;
    padding: 8px 24px 8px 40px;
    background-color: ${({ theme }) => theme.palette.primary.light};
  `,
  SearchBlock: styled.div`
    position: relative;
  `,
  SearchField: styled(TextField)`
    margin: 0;

    .MuiOutlinedInput-notchedOutline {
      min-height: 48px;
      overflow: hidden;
    }
    .MuiOutlinedInput-input {
      padding-right: 36px;
      color: ${({ theme }) => theme.palette.primary.contrastText};
      background-color: #5264cd;
    }
    :focus {
      .MuiOutlinedInput-notchedOutline {
        border: none;
      }
    }
  `,
  BackButton: styled(BackButton)`
    position: absolute;
    top: 8px;
    left: 4px;
  `,
  IconButton: styled(IconButton)`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  `,
  Search: styled(Search)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: 1.5rem;
  `,
  Map: styled(Map)`
    flex-grow: 1;
    height: auto;
  `,
  SearchList: styled(SearchList)`
    position: absolute;
    top: 56px;
    left: 0;
    z-index: 1100;
  `,
};

/* eslint-disable no-unused-vars */
const LocationPicker = ({ className, field, onClose }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleChange = useCallback(event => setValue(event.target.value), []);
  const handleFocus = useCallback(() => setFocused(true), []);
  const handleBlur = useCallback(() => setFocused(false), []);

  return (
    <S.MapWrapper className={className}>
      <S.SearchBar>
        <S.SearchBlock>
          <S.SearchField
            type="text"
            variant="outlined"
            margin="dense"
            fullWidth
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <S.IconButton type="button" size="small">
            <S.Search />
          </S.IconButton>
        </S.SearchBlock>
        <S.BackButton type="button" size="small" onClick={onClose} />
        {focused && <S.SearchList />}
      </S.SearchBar>
      <S.Map />
    </S.MapWrapper>
  );
};

LocationPicker.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
  }),
};

LocationPicker.defaultProps = {
  className: undefined,
  field: {},
};

export default LocationPicker;
