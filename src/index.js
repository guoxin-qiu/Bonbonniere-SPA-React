import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodosApp from './components/Todos/App'
import rootReducer from './reducers'

import './index.css';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <TodosApp />
  </Provider>,
  document.getElementById('root')
)