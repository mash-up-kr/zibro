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
    border-radius:100px;
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
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.78px;
    color: #333333;
  `,
  SubField: styled.div`
    opacity: 0.8;
    font-family: NotoSansCJKkr;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.38px;
    color: #000;
    margin-top:4px;
  `,
  Cost: styled.div`
    position:absolute;
    right:24px;
    font-family: NotoSansCJKkr;
    font-size: 12px;
    letter-spacing: 0.38px;
    text-align: right;
    background-color:#fff;
    color:#000000;
  `,
};
const icon = {
  WALKING: walkIcon,
  TRANSIT: busIcon,
  TAXI: taxiIcon,
};
const DetailRoute = ({
  className, classes, duration, arrivalTime, departureTime, steps, expectedCost,
}) => (
  <S.Wrapper className={className}>
    <S.Cost className={classes.cost}>
      예상 비용:
      { expectedCost }
    </S.Cost>
    <S.Field>
      { duration }
    </S.Field>
    <S.SubField>
      { departureTime }
      ~
      { arrivalTime }
    </S.SubField>
    <S.SubWrapper>
      <S.Line />
      {steps.map(step => (
        <>
          { step.transitDetail != null ? (
            <div key={step.step}>
              <S.Row>
                <S.Icon
                  src={icon[step.travelMode]}
                  alt="transit-icon"
                  style={{ backgroundColor: step.transitDetail.transitColor }}
                />
                <S.Label>
                  {step.transitDetail.departureStopName}
                  <S.SubLabel>
                    <S.Tag
                      style={{ backgroundColor: step.transitDetail.transitColor }}
                    >
                      {step.transitDetail.transitNumber}
                    </S.Tag>
                    {step.transitDetail.headSign}
                       행
                  </S.SubLabel>
                </S.Label>
              </S.Row>
              <S.Row>
                <S.Icon
                  src={icon[step.travelMode]}
                  style={{ backgroundColor: step.transitDetail.transitColor }}
                  alt="transit-icon"
                />
                <S.Label>
                  {step.transitDetail.arrivalStopName}
                  에서 하차
                </S.Label>
              </S.Row>
            </div>
          ) : (
            <div key={step.step}>
              <S.Row key={step.step}>
                <S.Icon
                  src={icon[step.travelMode]}
                  alt="transit-icon"
                  style={{ backgroundColor: '#a4a4a4' }}
                />
                <S.Label>
                  {step.instructions}
                  {step.stepDuration}
                </S.Label>
              </S.Row>
            </div>
          )}
        </>
      ))}
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
  classes: PropTypes.shape({
    cost: PropTypes.string,
  }),
  duration: PropTypes.string,
  arrivalTime: PropTypes.string,
  departureTime: PropTypes.string,
  expectedCost: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    travelMode: PropTypes.string,
    instructions: PropTypes.string,
    transitDetail: PropTypes.shape({
      arrivalStopName: PropTypes.string,
      departureStopName: PropTypes.string,
      transitColor: PropTypes.string,
      headSign: PropTypes.string,
      transitType: PropTypes.string,
      transitNumber: PropTypes.string,
      numStops: PropTypes.number,
    }),
  })),
};

DetailRoute.defaultProps = {
  className: undefined,
  classes: {
    cost: 'cost',
    field: 'field',
  },
  duration: '',
  arrivalTime: '',
  departureTime: '',
  steps: undefined,
  expectedCost: '',
};

export default DetailRoute;
