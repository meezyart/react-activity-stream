import './style/main.css'
import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import Layout from 'containers/base_layout'
import ActivityStream from 'containers/activityStream'

import reducers from 'reducers'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)


const Root = () => {
  return ( 
    <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={ActivityStream} /> 
        {/* <Route path='cards/:id' component={UserLayout} />  */}
      </Route>
    </Router>
    </Provider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
console.log('starting goodness...')
