import React from 'react';
import styled from 'styled-components';

const S = {
  Button: styled.div`
    height:21px;
    line-height:21px;
    padding:0 15px;
    opacity: 0.8;
    border-radius: 14.5px;
    border: solid 0.8px #2f3e9e;
    color: #2f3e9e;
    position:absolute;
    right:40px;

  `,
};

const ChangeButton = () => {
  return (
    <S.Button>
      변경
    </S.Button>
  );
};

export default ChangeButton;
