import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Reducers/index'
import Router from './Router'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme'

const createStoreWithMiddleware=applyMiddleware()(createStore)

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
        <App />
    </Router>
  </Provider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);
