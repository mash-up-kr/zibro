import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { TextField } from '@material-ui/core';
import { Clear, Search } from '@material-ui/icons';

const S = {
  Wrapper: styled.div`
    position: relative;
  `,
  Search: styled(({ focused, ...otherProps }) => <Search {...otherProps} />)`
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    color: ${({ focused, theme }) => (focused ? theme.palette.primary.main : theme.palette.grey[500])};
  `,
  TextField: styled(({ focused, InputProps, ...otherProps }) => (
    <TextField
      InputProps={{
        classes: {
          root: 'input-root',
          input: 'input',
          notchedOutline: 'notchedOutline',
          focused: 'focused',
        },
        ...InputProps,
      }}
      {...otherProps}
    />
  ))`
    .input {
      height: 40px;
      padding: 0 2rem 0 2.5rem;
      font-size: ${({ theme }) => theme.typography.pxToRem(15)};
    }
    .notchedOutline {
      border: 1px solid ${({ theme }) => theme.palette.grey[300]};
    }
      ${({ focused, theme }) => (focused && css`
        border: 2px solid ${theme.palette.primary.main};
      `)}
  `,
  Clear: styled(Clear)`
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.palette.grey[600]};
    cursor: pointer;
  `,
};

const SearchField = ({ value, onClear, ...otherProps }) => {
  const input = useRef(null);

  const [focused, setFocused] = useState(false);

  const handleClick = useCallback(() => input.current.focus(), [input]);
  const handleFocus = useCallback(() => setFocused(true), []);
  const handleBlur = useCallback(() => setFocused(false), []);

  return (
    <S.Wrapper>
      <S.Search focused={focused} onClick={handleClick} />
      <S.TextField
        inputRef={input}
        value={value}
        variant="outlined"
        margin="none"
        fullWidth
        inputProps={{
          onFocus: handleFocus,
          onBlur: handleBlur,
        }}
        {...otherProps}
      />
      {value && <S.Clear onClick={onClear} />}
    </S.Wrapper>
  );
};

SearchField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  InputProps: PropTypes.shape({}),
};

SearchField.defaultProps = {
  placeholder: '',
  InputProps: {},
};

export default SearchField;
