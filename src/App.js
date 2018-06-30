import React, { Component } from 'react'
import Shop from './Shop'
import './App.css'
import { Provider } from 'react-redux'
import store from './store.js'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Redux Shoping Cart</h1>
          </header>
          <div>
            <Shop />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
