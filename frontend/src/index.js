import React, {Suspense} from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18next';

ReactDOM.render(
  <Suspense fallback = {(<div>Loading ...</div>)}>
  <Provider store={store}>
    <App />
  </Provider>,
  </Suspense>,
   document.getElementById('root'));

