import React from 'react';

import { Default } from './pages/_layouts/Default';
import { Home } from './pages/Home';

import GlobalStyle from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <Default>
        <Home />
      </Default>
      <GlobalStyle />
    </>
  );
};
