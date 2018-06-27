import React, { Component } from 'react'
import './Shop.css'

function ShopHeaders () {
  return (
    <thead>
      <tr>
        <th>Name of Item</th>
      </tr>
    </thead>
  )
}

function ShopRows (props) {
  return (
    <tr>
      <td>{props.itemname}</td>
      <td><button id={props.itemname} onClick={(e) => props.handleAddClick(e)}>Add Item</button></td>
      <td><button id={props.itemname} onClick={(e) => props.handleDeleteClick(e)}>Delete Item</button></td>
    </tr>
  )
}

class Shop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      baseballcount: 0,
      soccercount: 0,
      golfcount: 0
    }
  }

  handleAddClick (idx) {
    var statecopy = {...this.state}
    if (idx.target.id === 'baseball bat') {
      statecopy.baseballcount = statecopy.baseballcount + 1
      this.setState(statecopy)
    }
    if (idx.target.id === 'soccer ball') {
      statecopy.soccercount = statecopy.soccercount + 1
      this.setState(statecopy)
    }
    if (idx.target.id === 'golf tee') {
      statecopy.golfcount = statecopy.golfcount + 1
      this.setState(statecopy)
    }
  }

  handleDeleteClick (idx) {
    var statecopy = {...this.state}
    if (idx.target.id === 'baseball bat') {
      statecopy.baseballcount = statecopy.baseballcount - 1
      this.setState(statecopy)
    }
    if (idx.target.id === 'soccer ball') {
      statecopy.soccercount = statecopy.soccercount - 1
      this.setState(statecopy)
    }
    if (idx.target.id === 'golf tee') {
      statecopy.golfcount = statecopy.golfcount - 1
      this.setState(statecopy)
    }
  }

  render () {
    return (
      <div>
        <table id='list'>
          <ShopHeaders />
          <tbody>
            <ShopRows handleAddClick={this.handleAddClick.bind(this)} handleDeleteClick={this.handleDeleteClick.bind(this)} itemname='baseball bat' />
            <ShopRows handleAddClick={this.handleAddClick.bind(this)} handleDeleteClick={this.handleDeleteClick.bind(this)} itemname='soccer ball' />
            <ShopRows handleAddClick={this.handleAddClick.bind(this)} handleDeleteClick={this.handleDeleteClick.bind(this)} itemname='golf tee' />
          </tbody>
        </table>
        <p>Baseball Bats: {this.state.baseballcount} - $25</p>
        <p>Soccer Balls: {this.state.soccercount} - $20</p>
        <p>Golf Tees: {this.state.golfcount} - $2</p>
      </div>
    )
  }
}

export default Shop
