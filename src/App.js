import React, { Component } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import store from './reducers/index'
import RouteMap from './router/routerMap'

export default class App extends Component {
  constructor(){
    super()
    this.state ={
      name: 'APP'
    }
  }
  
  history = createBrowserHistory()
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={this.history}>
            <RouteMap />
          </Router>
        </Provider>
      </div>
    )
  }
}
