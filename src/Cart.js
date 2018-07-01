import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cart.css'

class Cart extends Component {
  render () {
    return (
      <div id='cart-list'>
        {this.props.items.map((item, i) =>
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

export default connect(({items}) => ({items}))(Cart)
