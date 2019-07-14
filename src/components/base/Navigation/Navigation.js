import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { AccountCircle, DirectionsBus, InsertInvitation } from '@material-ui/icons';
import { findIndex } from 'lodash/fp';

const pathnames = [
  '/location',
  '/',
  '/profile',
];

// TODO: BottomNavigation으로 교체 요망
const Navigation = ({ location }) => {
  const [value, setValue] = useState(() => findIndex(
    pathname => pathname === location.pathname,
    pathnames,
  ));

  const handleChange = useCallback((event, newValue) => setValue(newValue), []);

  return (
    <Paper square>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          component={Link}
          to="/location"
          icon={<DirectionsBus />}
          label="막차 정보"
        />
        <Tab
          component={Link}
          to="/"
          icon={<InsertInvitation />}
          label="막차 알람"
        />
        <Tab
          component={Link}
          to="/profile"
          icon={<AccountCircle />}
          label="프로필 설정"
        />
      </Tabs>
    </Paper>
  );
};

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Navigation);
