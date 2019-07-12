import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { TextField } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

const S = {
  Wrapper: styled.div`
    position: relative;
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
      .notchedOutline {
        border: 2px solid ${theme.palette.primary.main};
      }
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

const SearchField = ({
  className, value, onClear, ...otherProps
}) => {
  const [focused, setFocused] = useState(false);

  const input = useRef(null);

  const handleFocus = useCallback(() => setFocused(true), []);
  const handleBlur = useCallback(() => setFocused(false), []);

  return (
    <S.Wrapper className={className}>
      <S.TextField
        type="search"
        inputRef={input}
        value={value}
        variant="outlined"
        margin="none"
        fullWidth
        inputProps={{
          onFocus: handleFocus,
          onBlur: handleBlur,
        }}
        focused={focused}
        {...otherProps}
      />
      {value && <S.Clear onClick={onClear} />}
    </S.Wrapper>
  );
};

SearchField.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  InputProps: PropTypes.shape({}),
};

SearchField.defaultProps = {
  className: undefined,
  placeholder: '',
  InputProps: {},
};

export default SearchField;
