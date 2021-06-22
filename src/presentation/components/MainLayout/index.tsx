import React from 'react';
import styled from 'styled-components';

import { Sidebar, Row, Margin, NavBar } from 'presentation/components';
import { useCheckMobileScreen } from 'presentation/hooks/useCheckMobileScreen';

const Container = styled(Row)`
  position: relative;
  background: white;
  width: -webkit-fill-available;
  min-height: 100vh;
`;

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isMobile = useCheckMobileScreen();
  return (
    <Container>
      {!isMobile ? <Sidebar /> : <NavBar />}
      {children}
    </Container>
  );
};
