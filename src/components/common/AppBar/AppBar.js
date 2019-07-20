import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core';
import BackButton from '../BackButton';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  `,
  AppBar: styled(MuiAppBar)`
    box-shadow:none;
    background-color:#3e50b4;
  `,
  Title: styled(Typography)`
    margin-left:40px;
  `,
};

const AppBar = ({ history, children }) => {
  const handleClick = useCallback(() => history.goBack(), [history]);

  return (
    <S.AppBar position="static" color="primary">
      <Toolbar>
        <BackButton onClick={handleClick} />
        <S.Title variant="h6" color="inherit">
          {children}
        </S.Title>
      </Toolbar>
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
