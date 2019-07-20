import React from 'react';
import styled from 'styled-components';
import { taxiIcon, busIcon, walkIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    margin-top:16px;
    width: 100%;
    padding-left:58px;
    position:relative;
  `,
  Icon: styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right:9px;
    z-index:100;
  `,
  Row: styled.div`
    display:flex;
    align-items:center;
    margin-bottom:12px;
  `,
  Label: styled.div`
    font-size: 11px;
    letter-spacing: 0.35px;
    color: #333333;
  `,
  SubLabel: styled.div`
    font-size: 11px;
    letter-spacing: 0.35px;
    color: #333333;
    margin-top:4px;
  `,
  Tag: styled.div`
    width: 30px;
    height: 16px;
    margin-right:4px;
    padding:2px 8px;
    background-color: #e01540;
    color:#fff;
    font-size:11px;
    display:inline;
  `,
  Arrival: styled.div`
    margin:0 19px 0 10px;
    width: 5px;
    height: 5px;
    border-radius:5px;
    border: solid 2px #e01540;
    z-index:100;
  `,
  Line: styled.div`
    height: -webkit-calc(100% - 18px);
    height:    -moz-calc(100% - 18px);
    height:         calc(100% - 18px);
    position:absolute;
    transform:translateX(12px);
    width: 1px;
    background-color: #d8d8d8;
    z-index:0;
  `,
};

const DetailRoute = () => (
  <S.Wrapper>
    <S.Line />
    <S.Row>
      <S.Icon src={taxiIcon} alt="taxi-icon" />
      <S.Label>건대입구역 택시 탑승</S.Label>
    </S.Row>
    <S.Row>
      <S.Icon src={busIcon} alt="taxi-icon" />
      <S.Label>
        강남역
        <S.SubLabel>
          <S.Tag>광역</S.Tag>
              3013
        </S.SubLabel>
      </S.Label>
    </S.Row>
    <S.Row>
      <S.Icon src={walkIcon} alt="taxi-icon" />
      <S.Label>
        상록중학교 하차
      </S.Label>
    </S.Row>
    <S.Row>
      <S.Arrival />
      <S.Label>
        집도착
      </S.Label>
    </S.Row>
  </S.Wrapper>
);

export default DetailRoute;
