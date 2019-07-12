import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const BackButton = ({ className, type, onClick }) => (
  <IconButton
    className={className}
    type={type}
    size="small"
    onClick={onClick}
  >
    <ArrowBack />
  </IconButton>
);

BackButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

BackButton.defaultProps = {
  className: undefined,
  type: 'button',
  onClick: () => {},
};

export default BackButton;
