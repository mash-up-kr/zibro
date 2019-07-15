import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { a11y } from '../../../styles';
import { ChangeButton } from '../ChangeButton'
import { placeIcon, taxiIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    margin-top:16px;
    width: 100%;
    padding-left:58px;
  `,
  Icon: styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right:9px;
  `,
  Row: styled.div`
  display:flex;
  align-items:center;
  margin-bottom:12px;
  `,
  Label: styled.div`
  font-family: NotoSansCJKkr;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.35px;
  color: #333333;
  `,
  SubLabel: styled.div`
  font-family: NotoSansCJKkr;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
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

};

const DetailRoute = () => (
  <S.Wrapper>
    <S.Row>
      <S.Icon src={taxiIcon} alt="taxi-icon" />
      <S.Label>건대입구역 택시 탑승</S.Label>
    </S.Row>
    <S.Row>
      <S.Icon src={taxiIcon} alt="taxi-icon" />
      <S.Label>
        강남역
        <S.SubLabel><S.Tag>광역</S.Tag>3013</S.SubLabel>
      </S.Label>
    </S.Row>
    <S.Row>
      <S.Icon src={taxiIcon} alt="taxi-icon" />
      <S.Label>
        상록중학교 하차
      </S.Label>
    </S.Row>
    <S.Row>
      <S.Icon src={taxiIcon} alt="taxi-icon" />
      <S.Label>
        집도착
      </S.Label>
    </S.Row>
  </S.Wrapper>
);

export default DetailRoute;
