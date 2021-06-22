import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { menu } from 'resources/icons';
import { Column, Margin, Typography } from 'presentation/components';
import { positionState } from 'presentation/recoil';

const Navbar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 8px 30px;
  width: -webkit-fill-available;
  width: fill-available;
  height: 50px;
  background: #2d2d2d;
`;

const ToggleWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  background-color: ${(props): string => props.theme.colors.white};
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const ToggleIcon = styled.img``;

export const NavBar: React.FC = () => {
  return (
    <Navbar>
      <Typography color="white" bold size={20}>
        Sungwon
      </Typography>
      <ToggleWrapper>
        <ToggleIcon src={menu} alt="menu" />
      </ToggleWrapper>
    </Navbar>
  );
};
