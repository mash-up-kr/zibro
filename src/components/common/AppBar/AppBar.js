import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core';
import BackButton from '../BackButton';

const S = {
  AppBar: styled(MuiAppBar)`
<<<<<<< HEAD
    box-shadow:none;
    background-color:#3e50b4;
=======
    box-shadow: none;
  `,
  Toolbar: styled(Toolbar)`
    position: relative;
    display: flex;
    justify-content: center;
  `,
  BackButton: styled(BackButton)`
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
>>>>>>> dc60eb633a66736e4b80d297704f17a5f25fb8b2
  `,
  Title: styled(Typography)`
    text-align: center;
  `,
};

const AppBar = ({ history, children }) => {
  const handleClick = useCallback(() => history.goBack(), [history]);

  return (
    <S.AppBar color="primary">
      <S.Toolbar>
        <S.BackButton onClick={handleClick} />
        <S.Title variant="h2" color="inherit">
          {children}
        </S.Title>
      </S.Toolbar>
    </S.AppBar>
  );
};

AppBar.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(AppBar);
