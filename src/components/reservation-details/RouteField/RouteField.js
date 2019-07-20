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
  `,
};

const RouteField = () => (
  <>
    <S.Wrapper>
      <S.Icon src={placeIcon} alt="place-icon" />
      <div className="RouteField">
        <S.Label>상세 경로</S.Label>
      </div>
    </S.Wrapper>
    <S.DetailRoute />
  </>

);

export default RouteField;
