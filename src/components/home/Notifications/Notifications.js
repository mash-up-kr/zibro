import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, IconButton, Paper } from '@material-ui/core';
import {
  Clear, CreditCard, Event, Place,
} from '@material-ui/icons';
import { map } from 'lodash/fp';

const S = {
  NotificationList: styled.ul`
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: auto;
    overflow-y: visible;
  `,
  NotificationItem: styled.li`
    flex-shrink: 0;
    width: 240px;
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
    :not(:last-child) {
      margin-right: 16px;
    }
  `,
  NotificationItemHeader: styled.div`
    display: flex;
    align-items: center;
    padding: 12px 16px 12px 20px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: #2F3E9E;
    font-size: 1rem;
  `,
  HeaderTitle: styled.strong`
    margin-right: 4px;
    font-weight: 500;
  `,
  Count: styled.data`
    margin-right: auto;
    font-weight: 500;
  `,
  Clear: styled(Clear)`
    opacity: 0.5;
  `,
  NotificationItemBody: styled.div`
    padding: 12px 20px;
  `,
  Actions: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4px;
  `,
  Button: styled(Button)`
    min-width: 48px;
    min-height: 20px;
    padding: 0;
    opacity: 0.7;
    border: 1px solid #2F3E9E;
    border-radius: 14.5px;
    font-size: ${({ theme }) => theme.typography.pxToRem(11)};
  `,
  Row: styled.div`
    display: flex;
  `,
  Event: styled(Event)`
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  Place: styled(Place)`
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  CreditCard: styled(CreditCard)`
    color: ${({ theme }) => theme.palette.primary.main};
  `,
};

const Notifications = ({ notifications }) => (
  <div>
    {notifications
      ? (
        <S.NotificationList>
          {map(notification => (
            <S.NotificationItem key={notification.id}>
              <Paper>
                <S.NotificationItemHeader>
                  <S.HeaderTitle>진행 중 예약</S.HeaderTitle>
                  <S.Count value="1">1</S.Count>
                  <IconButton type="button" size="small">
                    <S.Clear />
                  </IconButton>
                </S.NotificationItemHeader>
                <S.NotificationItemBody>
                  <S.Actions>
                    <S.Button type="button">
                      변경
                    </S.Button>
                  </S.Actions>
                  <S.Row>
                    <S.Event />
                    <div>
                      <strong>
                        예약 날짜
                      </strong>
                      <p>2019년 6월 22일</p>
                    </div>
                  </S.Row>
                  <S.Row>
                    <S.Place />
                    <div>
                      <strong>
                        예약 경로
                      </strong>
                      <p>강남역 - 집</p>
                    </div>
                  </S.Row>
                  <S.Row>
                    <S.CreditCard />
                    <div>
                      <strong>
                        예상 비용
                      </strong>
                      <p>11,600원</p>
                    </div>
                  </S.Row>
                </S.NotificationItemBody>
              </Paper>
            </S.NotificationItem>
          ), notifications)}
        </S.NotificationList>
      )
      : (
        <p>예약된 알림이 없습니다.</p>
      )}
  </div>
);

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({})),
};

Notifications.defaultProps = {
  notifications: null,
};


export default Notifications;
