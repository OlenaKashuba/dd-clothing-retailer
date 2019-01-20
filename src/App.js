import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import Cart from './Cart';
import Vouchers from './Vouchers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <p> This is app</p>
          <Item />
          <Cart />
          <Vouchers />
        </main>
      </div>
    );
  }
}

export default App;
