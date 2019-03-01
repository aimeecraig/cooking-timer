import React, { Component } from 'react';
import './App.css';

import Items from './components/Items';
import Form from './components/Form';
import Header from './components/Header';
import Timings from './components/Timings';
import Footer from './components/Footer';

class App extends Component {
  state = {
    items: [
      // Test array items
      {
        id: 1,
        itemName: 'Chicken',
        cookingTime: 35
      },
      {
        id: 2,
        itemName: 'Pizza',
        cookingTime: 22
      },
      {
        id: 3,
        itemName: 'Wings',
        cookingTime: 16
      }
    ]
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
        <div className="container">
          <div className="row border rounded mt-3 pt-1 pb-3">
            <div className="col-sm-8">
              <Header />
              <Form addItem={this.addItem} />    
            </div>
            <div className="col-sm-4">
              <Items items={this.state.items} />
            </div>
          </div>
          <div className="row border rounded mt-3 pt-1">
            <div className="col-sm-12">
              <Timings items={this.state.items} />
            </div>
          </div>
          <div className="row mt-3">
              <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
