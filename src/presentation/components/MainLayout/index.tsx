import React from 'react';
import styled from 'styled-components';

import { Sidebar, Row } from 'presentation/components';

const Container = styled(Row)`
  position: relative;
  background: white;
  width: 100%;
  min-height: 100vh;
`;

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
};
