import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconButton as MuiIconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const S = {
  IconButton: styled(MuiIconButton)`
    color:#d7d9ec;
  `,
};
const BackButton = ({
  className, size, type, onClick,
}) => (
  <S.IconButton
    className={className}
    type={type}
    size={size}
    onClick={onClick}
  >
    <ArrowBack />
  </S.IconButton>
);

BackButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

BackButton.defaultProps = {
  className: undefined,
  size: 'medium',
  type: 'button',
  onClick: () => {},
};

export default BackButton;
