import React, { Component } from 'react'
import './Shop.css'
import {add, subtract} from './actions/itemsActions'
import { connect } from 'react-redux'
import Cart from './Cart.js'

function ShopHeaders () {
  return (
    <thead>
      <tr>
        <th>Name of Item</th>
      </tr>
    </thead>
  )
}

class Shop extends Component {
  render () {
    return (
      <div id='list'>
        <table>
          <ShopHeaders />
          <tbody>
            {this.props.items.map((item, idx) =>
              <tr key={idx}>
                <td>{item.itemname}</td>
                <td><button onClick={() => this.props.add(idx)}>Add Item</button></td>
                <td><button onClick={() => this.props.subtract(idx)}>Delete Item</button></td>
              </tr>
            )}
          </tbody>
        </table>
        <div id='cart-display'>
          <h1 id='cart-header'>Cart</h1>
          <Cart />
        </div>
      </div>
    )
  }
}

export default connect(({items}) => ({items}), {add, subtract})(Shop)