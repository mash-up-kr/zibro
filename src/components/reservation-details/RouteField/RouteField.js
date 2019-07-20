import React from 'react';
import styled from 'styled-components';
import { DetailRoute } from '../../common';
import { placeIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    margin-top:18px;
    width: 100%;
    padding-left:24px;
    display:flex;
    align-items:start;
  `,
  Icon: styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right:9px;
  `,
  Label: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    color: #2f3e9e;
    margin-bottom:8px;
  `,
  DetailRoute: styled(DetailRoute)`
    padding-left: 58px;
    .cost{
      display:none;
    }
  `,
};
// mock 데이터
const steps = [
  {
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
];
const RouteField = () => (
  <>
    <S.Wrapper>
      <S.Icon src={placeIcon} alt="place-icon" />
      <div className="RouteField">
        <S.Label>상세 경로</S.Label>
      </div>
    </S.Wrapper>
    <S.DetailRoute
      duration="1시간 40분"
      arrivalTime="오후 11시 40분"
      departureTime="오후 2시 40분"
      steps={steps}
    />
  </>

);

export default RouteField;
