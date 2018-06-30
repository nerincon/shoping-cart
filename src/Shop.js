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

  handleAddClick (idx) {
      this.props.onClick(idx)
  }

  handleDeleteClick (idx) {
      this.props.onSubmit(idx)
  }

  render () {
    return (
      <div id='list'>
        <table>
          <ShopHeaders />
          <tbody>
            {this.props.items.map((item, idx) =>
              <tr key={idx}>
                <td>{item.itemname}</td>
                <td><button onClick={() => this.handleAddClick(idx)}>Add Item</button></td>
                <td><button onClick={() => this.handleDeleteClick(idx)}>Delete Item</button></td>
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
    onClick: function(idx) {
       console.log('got to dispatch')
      dispatch(actions.add(idx))
    },
    onSubmit: function(idx) {
      console.log('got to dispatch')
     dispatch(actions.subtract(idx))
   }
  }
}

var ConnectedShop = connect(
  mapStateToProps, mapDispatchToProps)(Shop)

export default ConnectedShop
