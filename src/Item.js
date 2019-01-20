import React from 'react';

const Item = (props) => {
  const { name, colour, category, price, quantity, pic } = props.item;
  const addToCart = props.addToCart;
  return (
    <article className='item'>
      <div className='item-top-wrap'>
        <img
          className='item-pic'
          alt={name}
          src={pic}
          width='150'
          height='200'
        />
        <h3 className='item-header'> {name} </h3>
      </div>
      <div className='item-content-wrap'>
        <p className='item-colour'> Colour: {colour}</p>
        <p className='item-price'> £{price} </p>
        <p className='item-stock'> {quantity > 0 ? 'In Stock' : 'Out of Stock'} </p>
        <p className='item-category'> {category} </p>
        <button
          onClick={addToCart}
          className={quantity === 0 ? 'disabled-btn' : 'add-btn'}
          disabled={quantity === 0 ? true : false} //disable button if item is out of stock
        > Add to cart </button>
      </div>
    </article >
  )
}

export default Item;