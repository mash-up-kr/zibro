import React, { useCallback } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { AppBar, DetailRoute } from '../components/common';
import { daumtools } from '../utils';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  `,
  Script: styled.div`
    padding:24px;
    border-bottom:1px solid #d7d9ec;
    width: 100%;
    font-size: 16px;
    letter-spacing: 0.7px;
    color: #333333;
  `,
  DetailRoute: styled(DetailRoute)`
    padding-left: 28px;
    padding-bottom:24px;
    padding-top:24px;
    .cost {
      background-color: red;
    }
    .field {
      color: #fff;
    }
  `,
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

const RecommendedRoutes = () => {
  const handleClick = useCallback(() => {
    const ua = daumtools.userAgent();
    const androidPackage = 'com.kakao.taxi';
    const url = 'kakaot://launch?page=main';

    function getInstallURL() {
      if (ua.os.android) {
        return `market://details?id=${androidPackage}`;
      }
      if (ua.os.ios) {
        return 'itms-apps://itunes.apple.com/app/kakaotaxi/id981110422?mt=8';
      }
      return window.location.href;
    }

    const web2appOptions = {
      urlScheme: url,
      intentURI: `intent:${url}#Intent;package=${androidPackage};end;`,
      appName: 'KakaoTaxi',
      storeURL: getInstallURL(),
      onUnsupportedEnvironment: () => {
        console.log('unsupported environment');
      },
    };

    daumtools.web2app(web2appOptions);
  }, []);

  return (
    <S.Wrapper>
      <AppBar title="추천 경로 1" />
      <S.Script>
      추천 경로 이용을 위해 택시를 예약해보세요.
      </S.Script>
      <S.DetailRoute />
      <S.Button variant="contained" onClick={handleClick}>
      택시 예약하기
      </S.Button>
    </S.Wrapper>
  );
};

export default RecommendedRoutes;
