import React, { useMemo } from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { NotificationsActive } from '@material-ui/icons';
import { get } from 'lodash/fp';
import { noTextHero } from '../assets';
import { firebase } from '../utils';
import { Notifications, Title } from '../components/home';

const notifications = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
];

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    height: 100%;
    max-height: 100%;
    padding: 8vh 0 0;
    background-color: ${({ theme }) => theme.palette.primary.light};
  `,
  Header: styled.header`
    width: 90%;
  `,
  Main: styled.main`
    width: 90%;
  `,
  Paragraph: styled.p`
    margin-bottom: 32px;
    padding: 4vh 0;
    color: #000;
    background: url(${noTextHero}) right top / contain no-repeat;
    font-size: ${({ theme }) => theme.typography.pxToRem(20)};
    line-height: 1.5;
  `,
  UserName: styled.b`
    font-size: ${({ theme }) => theme.typography.pxToRem(22)};
    font-weight: 700;
  `,
  Row: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `,
  Notification: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    padding: 2px 16px;
    border-radius: 16px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: #3143CA;
  `,
  NotificationsActive: styled(NotificationsActive)`
    margin-right: 8px;
    color: #FCE388;
    font-size: 1.5rem;
  `,
  HelperText: styled.p`
    color: #333333;
    font-size: 0.75rem;
    font-weight: 300;
  `,
  Fab: styled(Fab)`
    position:fixed;
    right:20px;
    bottom:76px;
    border-image-source: linear-gradient(to bottom, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06) 20%, rgba(255, 255, 255, 0));
  `,
  AddIcon: styled(AddIcon)`
    color:#000;
  `,
};

const Home = () => {
  const user = useMemo(() => firebase.auth.getCurrentUser(), []);

  return (
    <S.Wrapper>
      <S.Header>
        <Title />
        <S.Paragraph>
          <S.UserName>{get('displayName', user)}</S.UserName>
          님,
          <br />
          서울의 밤을 마음껏 즐기세요.
          <br />
          그리고 편안하게 집으로!
        </S.Paragraph>
      </S.Header>
      <S.Main>
        <S.Row>
          <S.Notification>
            <S.NotificationsActive />
            <span>2</span>
          </S.Notification>
          <S.HelperText>
            하단 예약 2개 중 1개를 눌러 상세 경로를 확인하세요.
          </S.HelperText>
        </S.Row>
        <Notifications notifications={notifications} />
      </S.Main>
      <S.Fab color="secondary" aria-label="Add">
        <S.AddIcon />
      </S.Fab>
    </S.Wrapper>
  );
};

export default Home;
