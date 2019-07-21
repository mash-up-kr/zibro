import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  MenuItem, FormControl, Select,
} from '@material-ui/core';
import { AppBar, DetailRoute } from '../components/common';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding-top:60px;
  `,
  DetailRoute: styled(DetailRoute)`
    padding-left: 28px;
    padding-bottom:24px;
    padding-top:24px;
    border-bottom:1px solid #e0e0e0;
  `,
  SelectWrapper: styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    border-bottom:1px solid #e0e0e0;
  `,
  FormControl: styled(FormControl)`
    width: 120px;
    font-family: NotoSansCJKkr;
    font-size: 15px;
    color: #a4a4a4;
    margin-right:20px;
    margin-top:4px;
  `,
};
// TODO: 택시조합 result 배열 받아오기
const routes = [
  [{
    step: 0,
    stepDuration: '20분',
    instructions: '현위치 택시 탑승',
    travelMode: 'TAXI',
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
    stepDuration: '30분',
    instructions: '강남역 앞 택시 탑승',
    travelMode: 'TAXI',
  }],
  [{
    step: 0,
    stepDuration: '17분',
    instructions: '현위치 택시 탑승',
    travelMode: 'TAXI',
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
    instructions: '지하철 성수역행',
    transitDetail: {
      arrivalStopName: '강남역',
      departureStopName: '사당역',
      headSign: '성수역',
      transitColor: '#0f993d',
      transitNumber: '2호선',
      transitType: 'SUBWAY',
      numStops: 3,
    },
    travelMode: 'TRANSIT',
  },
  {
    step: 3,
    stepDuration: '3분',
    instructions: '약수역',
    travelMode: 'WALKING',
  },
  {
    step: 4,
    instructions: '지하철 대화역행',
    transitDetail: {
      arrivalStopName: '사당역',
      departureStopName: '교대역',
      headSign: '대화역',
      transitColor: '#f26100',
      transitNumber: '3호선',
      transitType: 'SUBWAY',
      numStops: 15,
    },
    travelMode: 'TRANSIT',
  },
  {
    step: 5,
    stepDuration: '3분',
    instructions: '도보',
    travelMode: 'WALKING',
  },
  ],
];

const duration = ['1시간 40분', '1시간 58분'];
const arrivalTime = ['오전 2시 40분', '오전 2시 30분'];
const departureTime = ['오후 11시 40분', '오후 11시 50분'];
const expectedCost = ['10,500원', '11,350원'];

const RecommendedRoutes = () => {
  const [values, setValues] = React.useState({
    order: 'cost',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <S.Wrapper>
      <AppBar>추천 경로</AppBar>
      <S.SelectWrapper>
        <S.FormControl>
          <Select
            value={values.order}
            onChange={handleChange}
            inputProps={{
              name: 'order',
              id: 'order',
            }}
          >
            <MenuItem value="cost">최저 비용 순</MenuItem>
            <MenuItem value="duration">적은 시간 순 </MenuItem>
          </Select>
        </S.FormControl>
      </S.SelectWrapper>
      {routes.map((route, idx) => (
        <Link to="/recommended-routes/1">
          <S.DetailRoute
            duration={duration[idx]}
            arrivalTime={arrivalTime[idx]}
            departureTime={departureTime[idx]}
            steps={route}
            expectedCost={expectedCost[idx]}
          />
        </Link>
      ))}
    </S.Wrapper>
  );
};

export default RecommendedRoutes;
