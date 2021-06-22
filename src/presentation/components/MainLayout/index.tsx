import React from 'react';
import styled from 'styled-components';

import { Sidebar, Row, Margin } from 'presentation/components';
import { useCheckMobileScreen } from 'presentation/hooks/useCheckMobileScreen';

const Container = styled(Row)`
  position: relative;
  background: white;
  width: 100vw;
  min-height: 100vh;
`;

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isMobile = useCheckMobileScreen();
  return (
    <Container>
      {!isMobile && (
        <>
          <Sidebar />
        </>
      )}
      {children}
    </Container>
  );
};
