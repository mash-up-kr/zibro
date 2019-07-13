import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, AppBar, Dialog } from '@material-ui/core';
import AlarmLastTrain from './AlarmLastTrain';

const S = {
  AppBar: styled(AppBar)`
    width:100%;
    hight:56sp;
  `,
  Dialog: styled(Dialog)`
    hight:280sp;
    fullWidth={ture};

  `,
  Button: styled(Button)`
    height: 52px;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 0.61px;
    text-align: center;
    color: #333333;
  `,
  Title: styled.div`
    width: 136px;
    height: 52px;
    font-family: NotoSansCJKkr;
    font-size: 17px;
    font-weight: 500;
    font-style: normal;
    text-align: center;
    font-stretch: normal;
    line-height: 1.3;
    letter-spacing: 0.54\px;
    text-align: center;
    color: #000000;
  `,
  BottomText: styled.div`
    width: 132px;
    height: 17px;
    -webkit-text-stroke: 1px #979797;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.45px;
    text-align: center;
    color: #3e50b4;
  `,
  Wrapper: styled.div`
    width:100%;
    hight:100%;
  `,
};

const AlarmLastTrainDialog = () => {
  const [open, setOpen] = useState(true);
  const handleClose = useCallback(() => setOpen(prevOpen => !prevOpen), []);
  return (
    <S.Wrapper>
      <S.AppBar>
        <div>막차 알림</div>
      </S.AppBar>
      <S.Dialog open={open} onClose={handleClose}>
        <S.Title>
          <div>지금 막차 타러</div>
          <div>출발하셔야해요!</div>
        </S.Title>
        <AlarmLastTrain />
        <S.Button>네,탔어요!</S.Button>
        <S.Button>다음 막차 알려줘요!</S.Button>
      </S.Dialog>
      <S.BottomText>+ 다른 경로는 없나요?</S.BottomText>
    </S.Wrapper>
  );
};

export default AlarmLastTrainDialog;
