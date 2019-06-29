import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { busIcon, timeIcon } from '../../assets';

const S = {
  Wrapper: styled.div`
    padding: 56px 16px 0 16px;
  `,
  Button: styled(Button)`
    width: 100%;
    height: 56px;
    margin-bottom: 8px;
  `,
  Icon: styled.img`
    width: 24px;
    hegiht: 24px;
    object-fit: contain;
    position: absolute;
    left: 29px;
  `,
};

const HomeMenu = () => (
  <S.Wrapper>
    <S.Button variant="contained" color="primary">
      <S.Icon src={timeIcon} alt="time icon" />
      <Link to="/reseve">막차알림 예약하기</Link>
    </S.Button>
    <S.Button variant="contained" color="primary">
      <S.Icon src={busIcon} alt="bus icon" />
      <Link to="/current">지금 막차 보기</Link>
    </S.Button>
  </S.Wrapper>
);

export default HomeMenu;
