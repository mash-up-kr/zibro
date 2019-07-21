import React from 'react';
import styled from 'styled-components';
import { AlertBefore, HomeLocation } from '../components/profile';
import { AppBar } from '../components/common';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    padding-top:56px;
  `,
};

const Profile = () => (
  <S.Wrapper>
    <AppBar>내 프로필 설정</AppBar>
    <HomeLocation />
    <AlertBefore />
  </S.Wrapper>
);

export default Profile;
