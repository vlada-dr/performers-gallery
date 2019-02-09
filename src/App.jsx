import React from 'react';
import { Provider } from 'mobx-react';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import Router from './router/router';
import { createStores } from './stores/createStore';

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  height: 100%;
`;

const history = createBrowserHistory();

const stores = createStores(history);

const App = () => (
  <Provider {...stores}>
    <Container>
      <Router history={history} />
    </Container>
  </Provider>
);

export default App;
