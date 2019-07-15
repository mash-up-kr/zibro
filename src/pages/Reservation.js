import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Reserve } from '../components';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
});


const Reservation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            예약하기
          </Typography>
        </Toolbar>
      </AppBar>
      <Reserve />
    </div>
  );
};

export default Reservation;
