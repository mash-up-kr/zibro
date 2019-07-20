import React from 'react';
import styled from 'styled-components';
import {
  MenuItem, FormControl, Select,
} from '@material-ui/core';
import { AppBar, DetailRoute } from '../components/common';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  DetailRoute: styled(DetailRoute)`
    padding-left: 28px;
    padding-bottom:24px;
    padding-top:24px;
    border-bottom:1px solid #e0e0e0;
    &:last-child{
      border-bottom:none;
    }
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
      <AppBar title="추천 경로" />
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
      <S.DetailRoute />
      <S.DetailRoute />
    </S.Wrapper>
  );
};

export default RecommendedRoutes;
