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
  }],
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
  const [values, setValues] = React.useState({
    order: '추천 순',
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
      {routes.map(route => (
        <Link to="/id">
          <S.DetailRoute
            duration="1시간 40분"
            arrivalTime="오전 2시 40분"
            departureTime="오후 11시 40분"
            steps={route}
          />
        </Link>
      ))}
    </S.Wrapper>
  );
};

export default RecommendedRoutes;
