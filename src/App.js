import React, { Component } from 'react';
import './App.css';

import Items from './components/Items';
import Form from './components/Form';
import Header from './components/Header';

class App extends Component {
  state = {
    items: []
  }

  addItem = (event) => {
    this.state.items.push({
      id: Date.now(),
      itemName: event.target.itemName.value,
      cookingTime: parseInt(event.target.cookingTime.value)
    });
    this.state.items.sort(this.compare);
    this.forceUpdate();
  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const itemA = a.cookingTime;
    const itemB = b.cookingTime;
  
    let comparison = 0;
    if (itemA < itemB) {
      comparison = 1;
    } else if (itemA > itemB) {
      comparison = -1;
    }
    return comparison;
  }

  render() {
    return (
      <div className="App">
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <Header />
              <Form addItem={this.addItem} />    
            </div>
            <div className="col-sm-4">
              <Items items={this.state.items} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
