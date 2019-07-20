import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Home, LocalOffer } from '@material-ui/icons';
import { map } from 'lodash/fp';

const S = {
  Wrapper: styled.ul`
    width: 100%;
    height: calc(100vh - 112px);
    background-color: #fff;
  `,
  SearchItem: styled.li`
    position: relative;
    display: flex;
    padding: 8px 60px;
    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #e0e0e0;
    }
  `,
  IconWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: #A4A4A4;
    ${({ color }) => color === 'primary' && css`
      background-color: ${({ theme }) => theme.palette.primary.main};
    `}
  `,
  Home: styled(Home)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: 1rem;
  `,
  LocalOffer: styled(LocalOffer)`
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: 0.75rem;
  `,
};

const SearchList = ({ className }) => {
  const [searchList, setSearchList] = useState(null);

  useEffect(() => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory'));

    setSearchList(searchHistory);
  }, []);

  return (
    <S.Wrapper className={className}>
      <S.SearchItem>
        <S.IconWrapper color="primary">
          <S.Home />
        </S.IconWrapper>
        집으로
      </S.SearchItem>
      {map(search => (
        <S.SearchItem key={search}>
          <S.IconWrapper>
            <S.LocalOffer />
          </S.IconWrapper>
          {search}
        </S.SearchItem>
      ), searchList)}
    </S.Wrapper>
  );
};

SearchList.propTypes = {
  className: PropTypes.string,
};

SearchList.defaultProps = {
  className: undefined,
};

export default SearchList;
