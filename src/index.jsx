import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import App from './App';
import { globalStyles } from './ui/theme';

injectGlobal`${globalStyles}`;

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
