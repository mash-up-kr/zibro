import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Reservation } from '../components';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
});


const Reserve = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            막차 알림 예약
          </Typography>
        </Toolbar>
      </AppBar>
      <Reservation />
    </div>
  );
};

export default Reserve;
