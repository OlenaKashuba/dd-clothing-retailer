import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import CartItem from './CartItem';
import Vouchers from './Vouchers';
import shopData from './shop-data.json';
import vouchersData from './vouchers-data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      cart: [],
      validVouchers: [],
      numOfItems: 0,
      totalPrice: 0
    };
  };

  //GET DATA FROM JSON AND SAVE IT TO STATE
  componentDidMount() {
    this.setState({
      data: shopData.items,
      validVouchers: vouchersData.vouchers
    });
  };

  //COUNT TOTAL PRICE OF ALL ITEMS IN THE CART
  countTotal(cart, priceKey) {
    return cart.reduce(function (r, a) {
      return r + a[priceKey];
    }, 0);
  }

  //ADD AN ITEM TO THE CART
  addToCartHandler = (e, id) => {
    e.preventDefault();
    const cart = this.state.cart;
    const cartItem = this.state.data.filter(item => item.id === id);//get item by id
    cart.push(cartItem[0]); //save item to the cart
    const numOfItems = this.state.numOfItems + 1;//get number of items in the cart
    const totalPrice = this.countTotal(cart, 'price').toFixed(2); //count the price of items in the cart
    this.setState({
      cart: cart,
      numOfItems: numOfItems,
      totalPrice: totalPrice
    });
  }

  //DELETE AN ITEM FROM CART
  deleteFromCartHandler = (e, key) => {
    e.preventDefault();
    const cart = this.state.cart;
    cart.splice(key, 1); //delete item from cart
    const numOfItems = this.state.numOfItems - 1;//get number of items in the cart
    const totalPrice = this.countTotal(cart, 'price').toFixed(2); //count the price of items in the cart
    this.setState({
      cart: cart,
      numOfItems: numOfItems,
      totalPrice: totalPrice
    });
  }

  render() {
    const { data, validVouchers, cart, numOfItems, totalPrice } = this.state;

    const itemsToRender = data.map((item, key) => {
      return <Item
        item={item}
        key={key}
        addToCart={(e) => this.addToCartHandler(e, item.id)}
      />
    });

    const cartItemsToRender = cart.map((item, key) => {
      return <CartItem
        item={item}
        key={key}
        deleteFromCart={(e) => this.deleteFromCartHandler(e, key)}
      />
    })

    return (
      <div className="App">
        <main>
          {/* CART BLOCK */}
          <section className='cart'>
            <h2> Shopping cart (Items: {numOfItems}) </h2>
            {cartItemsToRender}
            <p> Total: £{totalPrice} </p>
          </section>
          {/* SHOP BLOCK */}
          {itemsToRender}
          {/* VOUCHERS BLOCK */}
          <Vouchers validVouchers={validVouchers} />
        </main>
      </div>
    );
  }
}

export default App;
