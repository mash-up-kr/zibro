import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton, Paper } from '@material-ui/core';
import { Clear, Event, Place } from '@material-ui/icons';
import { map } from 'lodash/fp';
import dayjs from 'dayjs';

const S = {
  NotificationList: styled.ul`
    display: flex;
    flex-direction: column;
  `,
  NotificationItem: styled.li`
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
    :not(:last-child) {
      margin-bottom: 16px;
    }
  `,
  NotificationItemHeader: styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
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
    color: ${({ theme }) => theme.palette.primary.contrastText};
    opacity: 0.5;
  `,
  NotificationItemBody: styled.div`
    padding: 16px 16px 24px;
  `,
  Row: styled.div`
    display: flex;
    margin-bottom: 20px;
  `,
  Event: styled(Event)`
    margin-right: 8px;
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  Place: styled(Place)`
    margin-right: 8px;
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  Label: styled.strong`
    margin-bottom: 8px;
    color: #2F3E9E;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  `,
  Value: styled.p`
    color: #212121;
    font-size: 1rem;
  `,
};

const Notifications = ({ notifications }) => (
  <div>
    {notifications.data
      ? (
        <S.NotificationList>
          {map(notification => (
            <S.NotificationItem key={notification.id}>
              <Paper>
                <S.NotificationItemHeader>
                  <S.HeaderTitle>알람 예약</S.HeaderTitle>
                  <S.Count value="1">1</S.Count>
                  <IconButton type="button" size="small">
                    <S.Clear />
                  </IconButton>
                </S.NotificationItemHeader>
                <S.NotificationItemBody>
                  <S.Row>
                    <S.Event />
                    <div>
                      <S.Label>
                        예약 날짜
                      </S.Label>
                      <S.Value>{dayjs(notification.sendAt).format('YYYY년 MM월 DD일')}</S.Value>
                    </div>
                  </S.Row>
                  <S.Row>
                    <S.Place />
                    <div>
                      <S.Label>
                        예약 경로
                      </S.Label>
                      <S.Value>
                        {notification.origin.region}
                        {' '}
                        -
                        {' '}
                        {notification.destination.region}

                      </S.Value>
                    </div>
                  </S.Row>
                </S.NotificationItemBody>
              </Paper>
            </S.NotificationItem>
          ), notifications.data)}
        </S.NotificationList>
      )
      : (
        <p>예약된 알림이 없습니다.</p>
      )}
  </div>
);

Notifications.propTypes = {
  notifications: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
    loading: PropTypes.bool,
    error: PropTypes.shape({}),
  }),
};

Notifications.defaultProps = {
  notifications: null,
};


export default Notifications;
