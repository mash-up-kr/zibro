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
  Content: styled.div`
    flex-grow: 1;
    overflow: auto;
    height:100%;
  `,
  Navigation: styled(Navigation)`
    margin-top: auto;
  `,
};

const Layout = ({ children }) => (
  <S.Wrapper>
    <S.Content>
      {children}
    </S.Content>
    <S.Navigation />
  </S.Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
