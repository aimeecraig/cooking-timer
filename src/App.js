import React, { Component } from 'react';
import './App.css';

import Items from './components/Items';
import Form from './components/Form';
import Header from './components/Header';

class App extends Component {
  state = {
    items: [
      // {
      //   id: 1,
      //   itemName: 'Chicken',
      //   cookingTime: '30'
      // },
      // {
      //   id: 2,
      //   itemName: 'Pizza',
      //   cookingTime: '15'
      // },
      // {
      //   id: 3,
      //   itemName: 'Chips',
      //   cookingTime: '25'
      // }
    ]
  }

  addItem = (event) => {
    console.log("app addItem called")
    console.log(event)
    this.state.items.push({
      id: Date.now(),
      itemName: event.target.itemName.value,
      cookingTime: event.target.cookingTime.value
    })
    this.forceUpdate();
    console.log(this.state.items)
  }

  render() {
    console.log(this.state.items)
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
