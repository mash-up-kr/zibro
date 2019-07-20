import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Place } from '@material-ui/icons';
import LocationPicker from '../LocationPicker';

const S = {
  Wrapper: styled.div`
    position: relative;
    padding: 16px 24px;
    width: 100%;
    padding-left: 24px;
    display: flex;
    align-items: start;
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 92%;
      height: 1px;
      opacity: 0.42;
      background-color: #d8d8d8;
    }
  `,
  Place: styled(Place)`
    margin-right: 8px;
    color: ${({ theme }) => theme.palette.primary.light};
    font-size: 1.5rem;
  `,
  Label: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    color: #2f3e9e;
    margin-bottom: 8px;
  `,
  Field: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 16px;
    letter-spacing: 0.7px;
  `,
  Button: styled(Button)`
    position: absolute;
    right: 40px;
    width: 54px;
    padding: 2px 4px;
    opacity: 0.8;
    color: 0.75rem;
    border-radius: 16px;
  `,
};

const DestinationField = ({ className, field }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <S.Wrapper className={className}>
      <S.Place />
      <div className="changeRoute">
        <S.Label>도착지</S.Label>
        <S.Field>집</S.Field>
      </div>
      <S.Button
        type="button"
        color="primary"
        variant="outlined"
        onClick={handleOpen}
      >
        변경
      </S.Button>
      {open && <LocationPicker field={field} onClose={handleClose} />}
    </S.Wrapper>
  );
};

DestinationField.propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
  }),
};

DestinationField.defaultProps = {
  className: undefined,
  field: {},
};

export default DestinationField;
