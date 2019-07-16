import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import { Loader } from '../../common';

const PublicRoute = ({ component: Component, ...otherProps }) => {
  const { user, loading } = useAuth();

  return (
    <Route
      {...otherProps}
      render={(props) => {
        if (loading) {
          return <Loader />;
        }

        return (
          !user
            ? <Component {...props} />
            : <Redirect to="/" />
        );
      }}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PublicRoute;
