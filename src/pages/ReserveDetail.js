import React, { useCallback } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateField, OriginField, DestinationField, RouteField, DetailRoute } from '../components/reservation-details';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
});

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 20vh 0 12vh;
  `
};

const ReserveDetail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            진행 중 예약
          </Typography>
        </Toolbar>
      </AppBar>
      <DateField />
      <OriginField />
      <DestinationField />
      <RouteField/>
      <DetailRoute />
    </div>
  );
};

export default ReserveDetail;
