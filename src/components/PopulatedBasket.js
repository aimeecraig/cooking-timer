import React, { Component } from 'react'
import Item from './Item';

export class PopulatedBasket extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
            <Item key={item.id} item={item} />
        ))}
      </div>
    )
  }
}

export default PopulatedBasket
