import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../Navigation';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  Main: styled.main`
    flex-grow: 1;
  `,
  Navigation: styled(Navigation)`
    margin-top: auto;
  `,
};

const Layout = ({ children }) => (
  <S.Wrapper>
    <S.Main>
      {children}
    </S.Main>
    <S.Navigation />
  </S.Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
