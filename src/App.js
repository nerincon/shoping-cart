import React, { Component } from 'react'
import Shop from './Shop'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Redux Shoping Cart</h1>
        </header>
        <div>
          <Shop />
        </div>
      </div>
    )
  }
}

export default App
