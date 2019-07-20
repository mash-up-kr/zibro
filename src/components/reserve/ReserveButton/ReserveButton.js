import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const S = {
  Button: styled(Button)`
    padding:18px 0;
    margin-top: auto;
    background-color:#2f3e9e;
    color:#fff;
    font-size: 14px;
    text-align: center;
    border-radius:0;
  `,
};
const ReserveButton = () => (
  <S.Button variant="contained">
    <Link to="/">막차 알림 예약하기</Link>
  </S.Button>
);

export default ReserveButton;
