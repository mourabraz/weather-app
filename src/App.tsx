import React from 'react';

import GlobalStyle from './styles/global';
import { Default } from './pages/_layouts/Default';
import { Home } from './pages/Home';
import { ShowNextDays } from './pages/ShowNextDays';

export const App: React.FC = () => {
  return (
    <>
      <Default>
        <Home />
        <ShowNextDays />
      </Default>
      <GlobalStyle />
    </>
  );
};
