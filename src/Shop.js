import React, { Component } from 'react'
import './Shop.css'
import * as actions from './actions/itemsActions'
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
  constructor (props) {
    super(props)
    console.log('')
  };

  render () {
    return (
      <div id='list'>
        <table>
          <ShopHeaders />
          <tbody>
            {this.props.items.items.map((item, i) =>
              <tr key={i}>
                <td>{item.itemname}</td>
                <td><button>Delete Item</button></td>
                <td><button>Add Item</button></td>
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

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: function (data) {
      console.log('data dispatched is: ', data)
      dispatch(actions.add(data))
    }
  }
}

var ConnectedShop = connect(
  mapStateToProps, mapDispatchToProps)(Shop)

export default ConnectedShop