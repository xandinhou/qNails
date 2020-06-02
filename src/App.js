import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <Router history={history}>
      <Header />
      <GlobalStyles />
      <Routes />;
    </Router>
  );
}

export default App;
