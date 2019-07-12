import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { placeIcon } from '../../../assets';


const S = {
  Wrapper: styled.div`
    width: 100%;
    padding: 0 36px;
  `,
  Icon: styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`,
  ChangeBox: styled.div`
    height: 30px;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius: 17.5px;
    background-color: rgba(47,62,158,0.1);
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin: ${({ margin }) => margin};
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  ContentBox: styled.div`
    width: 100%;
    box-shadow: 0 2px 4px 3px rgba(166, 166, 166, 0.66);
    background-color: #ffffff;
    text-align: center;
    padding: 50px 16px 16px 16px;
  `,
  ContentText: styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: ${({ margin }) => margin};
  color: ${({ theme }) => theme.palette.primary.main};
`,
  Button: styled(Button)`
  width: 100%;
  height: 56px;
`,
};

const Reservation = () => (
  <S.Wrapper>
    <S.ChangeBox margin="36px 0">
      <S.Icon src={placeIcon} alt="time icon" />
        출발지: 현재위치
    </S.ChangeBox>
    <S.ContentBox>
      <S.ContentText>
        (2019.06.22)에
      </S.ContentText>
      <S.ChangeBox margin="5px 0 36px 0">&#62; 예약 날짜 변경</S.ChangeBox>
      <S.ContentText>
        집으로 가는
      </S.ContentText>
      <S.ChangeBox margin="5px 0 36px 0">&#62; 도착지 변경</S.ChangeBox>
      <S.ContentText margin="0 0 36px 0">
        막차 알림 예약
      </S.ContentText>
      <S.Button variant="contained" color="primary">
        <Link to="/reserve-setting">예약 확인</Link>
      </S.Button>
    </S.ContentBox>
  </S.Wrapper>
);

export default Reservation;
