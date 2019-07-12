import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hero } from '../../../assets';
import { a11y } from '../../../styles';

const S = {
  Wrapper: styled.div`
    width: 280px;
    height: 0;
    padding-top: 160px;
    background: url(${hero}) center no-repeat;
    background-size: 280px 160px;
  `,
  Title: styled.h1`
    ${a11y}
  `,
  Subtitle: styled.h2`
    ${a11y}
  `,
};

const AppTitle = ({ className }) => (
  <S.Wrapper className={className}>
    <S.Title>
      집으로
    </S.Title>
    <S.Subtitle>
      막차 시간을 넘긴 청춘들을 위한 교통비 최적화 서비스
    </S.Subtitle>
  </S.Wrapper>
);

AppTitle.propTypes = {
  className: PropTypes.string,
};

AppTitle.defaultProps = {
  className: undefined,
};

export default AppTitle;
