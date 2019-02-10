import React from 'react';
import { Provider } from 'mobx-react';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import { createStores } from './stores/createStore';
import Home from './router/Home';

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
      <Home />
    </Container>
  </Provider>
);

export default App;
