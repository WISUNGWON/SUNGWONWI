import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { RootRoutes } from 'presentation/routes';
import theme from 'resources/themes/theme';
import { GlobalStyles } from 'resources/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <RootRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
