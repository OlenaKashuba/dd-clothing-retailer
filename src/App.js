import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import Cart from './Cart';
import Vouchers from './Vouchers';
import shopData from './shop-data.json';
import vouchersData from './vouchers-data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      cart: [],
      validVouchers: []
    };
  };

  //GET DATA FROM JSON AND SAVE IT TO STATE
  componentDidMount() {
    this.setState({
      data: shopData.items,
      validVouchers: vouchersData.vouchers
    });
  };

  render() {
    const data = this.state.data;
    const itemsToRender = data.map((item, key) => {
      return <Item
        item={item}
        key={key}
      />
    });
    return (
      <div className="App">
        <main>
          <p> This is app</p>
          {itemsToRender}
          <Cart />
          <Vouchers />
        </main>
      </div>
    );
  }
}

export default App;
