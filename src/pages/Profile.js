import React from 'react';
import styled from 'styled-components';
import { AlertBefore, HomeLocation } from '../components';
import { AppBar } from '../components/common';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  `,
};

const Profile = () => (
  <S.Wrapper>
    <AppBar
      title="내 프로필 설정"
    />
    <HomeLocation />
    <AlertBefore />
  </S.Wrapper>
);

export default Profile;
