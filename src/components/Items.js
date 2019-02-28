import React, { Component } from 'react';
import EmptyBasket from './EmptyBasket';
import PopulatedBasket from './PopulatedBasket';

class Items extends Component {
  render() {
    var basketView;
    if (this.props.items.length < 1) {
      basketView = <EmptyBasket />
    } else {
      basketView = <PopulatedBasket items={this.props.items} />
    }

    return (
      <div>
        <h2>Items</h2>
        {basketView}
      </div>
    );
  }
}

export default Items;
