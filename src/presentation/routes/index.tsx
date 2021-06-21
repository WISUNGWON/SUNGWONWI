import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainLayout } from 'presentation/components';
import { MainPage } from 'presentation/pages';

export const RootRoutes: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </MainLayout>
  );
};
