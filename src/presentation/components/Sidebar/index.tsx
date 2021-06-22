import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { Column, Margin, Typography } from 'presentation/components';
import { positionState } from 'presentation/recoil';
import { profile } from 'resources/images';

const Container = styled(Column)`
  min-height: 100vh;
  background: #2d2d2d;
  width: 238px;
  position: fixed;
  z-index: 25;
  top: 0;
  left: 0;
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 100px;
  object-fit: cover;
  background: white;
  border: 10px solid #ccc;
`;

export const Sidebar: React.FC<{ className?: string }> = ({ className }) => {
  const [position, setPosition] = useRecoilState<number>(positionState);

  return (
    <Container className={className} align="center">
      <Margin size={233} />
      <Avatar src={profile} alt="profile" />
      <Margin size={42} />
      <Typography
        size={16}
        color={window.scrollY < 333 ? 'blue50' : 'white'}
        onClick={() => window.scrollTo(0, 0)}
      >
        ABOUT
      </Typography>
      <Margin size={20} />
      <Typography
        size={16}
        color={
          window.scrollY > 333 && window.scrollY < 2850 ? 'blue50' : 'white'
        }
        onClick={() => window.scrollTo(0, 1035)}
      >
        EXPERIENCE
      </Typography>
      <Margin size={20} />
      <Typography
        size={16}
        color={
          window.scrollY >= 2850 && window.scrollY < 4000 ? 'blue50' : 'white'
        }
        onClick={() => window.scrollTo(0, 3597)}
      >
        PROJECT
      </Typography>
      <Margin size={20} />
      <Typography
        size={16}
        color={window.scrollY >= 4000 ? 'blue50' : 'white'}
        onClick={() => window.scrollTo(0, 4471)}
      >
        SKILLS
      </Typography>
      <Margin size={20} />
    </Container>
  );
};
