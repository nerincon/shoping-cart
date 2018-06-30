import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cart.css'

class Cart extends Component {
  constructor (props) {
    super(props)
    console.log('')
  };

  render () {
    return (
      <div id='cart-list'>
        {this.props.items.items.map((item, i) =>
          <ul key={i}>
            <h5>{item.itemname}</h5>
            <li>Qty: {item.count}</li>
            <li>$ {item.price}</li>
          </ul>
        )}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.items
  }
}

var ConnectedShop = connect(
  mapStateToProps)(Cart)

export default ConnectedShop
