import React from 'react';
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
  AppBar:styled(MuiAppBar)`
    box-shadow:none;
    background-color:#3e50b4;
  `,
  Title:styled(Typography)`
    margin-left:40px;
  `
};

const Reservation = ({title}) => {
  return (
      <S.AppBar position="static" color="primary">
        <Toolbar>
          <BackButton/>
          <S.Title variant="h6" color="inherit">
            {title}
          </S.Title>
        </Toolbar>
      </S.AppBar>
  );
};

export default Reservation;
