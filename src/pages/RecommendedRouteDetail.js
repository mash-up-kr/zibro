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
    padding-top:60px;
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

// TODO: 택시조합 result 배열 받아오기
const routes = [
  [{
    step: 0,
    stepDuration: '7분',
    instructions: '남서울농협남현동지점까지 도보',
    travelMode: 'WALKING',
  },
  {
    step: 1,
    instructions: '버스 상계주공7단지행',
    transitDetail: {
      arrivalStopName: '강남역.역삼세무서',
      departureStopName: '남서울농협남현동지점',
      headSign: '상계주공7단지',
      transitColor: '#374ff2',
      transitNumber: 'N61',
      transitType: 'BUS',
      numStops: 15,
    },
    travelMode: 'TRANSIT',
  },
  {
    step: 2,
    stepDuration: '3분',
    instructions: '대한민국 서울특별시 중구 신당동 366-144까지 도보',
    travelMode: 'WALKING',
  },
  ],
  [{
    step: 0,
    stepDuration: '7분',
    instructions: '남서울농협남현동지점까지 도보',
    travelMode: 'WALKING',
  },
  {
    step: 1,
    instructions: '버스 상계주공7단지행',
    transitDetail: {
      arrivalStopName: '강남역.역삼세무서',
      departureStopName: '남서울농협남현동지점',
      headSign: '상계주공7단지',
      transitColor: '#374ff2',
      transitNumber: 'N61',
      transitType: 'BUS',
      numStops: 15,
    },
    travelMode: 'TRANSIT',
  },
  {
    step: 2,
    stepDuration: '3분',
    instructions: '대한민국 서울특별시 중구 신당동 366-144까지 도보',
    travelMode: 'WALKING',
  },
  ],
];

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
      <S.DetailRoute
        duration="1시간 40분"
        arrivalTime="오전 2시 40분"
        departureTime="오후 11시 40분"
        steps={routes}
      />
      <S.Button variant="contained" onClick={handleClick}>
      택시 예약하기
      </S.Button>
    </S.Wrapper>
  );
};

export default RecommendedRoutes;
