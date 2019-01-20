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

  //ADD AN ITEM TO THE CART
  addToCartHandler = (e, id) => {
    e.preventDefault();
    const cart = this.state.cart;
    const cartItem = this.state.data.filter(item => item.id === id);//get item by id
    cart.push(cartItem[0]); //save item to the cart
    this.setState({
      cart: cart,
    });
  }

  render() {
    const { data, validVouchers, cart } = this.state;
    const itemsToRender = data.map((item, key) => {
      return <Item
        item={item}
        key={key}
        addToCart={(e) => this.addToCartHandler(e, item.id)}
      />
    });
    return (
      <div className="App">
        <main>
          <p> This is app</p>
          {itemsToRender}
          <Cart />
          <Vouchers validVouchers={validVouchers} />
        </main>
      </div>
    );
  }
}

export default App;
