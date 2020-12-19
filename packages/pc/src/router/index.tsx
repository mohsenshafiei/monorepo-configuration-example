import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from 'ui/pages/home';
import { createBrowserHistory } from "history"

const history = createBrowserHistory();

interface RouteObject {
  path: string;
  component: any;
  isPrivate: boolean;
}

const routes: RouteObject[] = [
  {
    path: '/',
    component: Home,
    isPrivate: false,
  },
  {
    path: '*',
    component: lazy(() => import('ui/pages/not-found')),
    isPrivate: false,
  },
];


const Empty = () => <></>;

export const MainRouter: React.SFC<unknown> = () => {
  return (
    <Suspense fallback={<Empty />}>
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                exact
                key={index}
                path={route.path}
                render={() => <route.component />}
              />
            );
          })}
        </Switch>
      </Router>
    </Suspense>
  );
};
