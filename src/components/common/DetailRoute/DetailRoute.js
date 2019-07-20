import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { taxiIcon, busIcon, walkIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    width:100%;
    position:relative;
  `,
  SubWrapper: styled.div`
    margin-top:16px;
    width:100%;
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
    height: -moz-calc(100% - 18px);
    height: calc(100% - 18px);
    position:absolute;
    transform:translateX(12px);
    width: 1px;
    background-color: #d8d8d8;
    z-index:0;
  `,
  Field: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.54px;
    color: #333333;
  `,
  SubField: styled.div`
    opacity: 0.8;
    font-family: NotoSansCJKkr;
    font-size: 11px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.35px;
    color: #333333;
    margin-top:6px;
  `,
  Cost: styled.div`
    position:absolute;
    right:24px;
    font-family: NotoSansCJKkr;
    font-size: 12px;
    letter-spacing: 0.38px;
    text-align: right;
    color:#000000;
  `,
};

const DetailRoute = ({ className }) => (
  <S.Wrapper className={className}>
    <S.Cost> 예상 비용: 11,350 원</S.Cost>
    <S.Field> 1 시간 40 분 </S.Field>
    <S.SubField> 오후 11: 45~오전 1: 30 </S.SubField>
    <S.SubWrapper>
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
    </S.SubWrapper>
  </S.Wrapper>
);

DetailRoute.propTypes = {
  className: PropTypes.string,
};

DetailRoute.defaultProps = {
  className: undefined,
};

export default DetailRoute;
