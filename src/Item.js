import React from 'react';

const Item = (props) => {
  const { name, colour, category, price, quantity, pic } = props.item;
  return (
    <article className='item'>
      <img
        className='item-pic'
        alt={name}
        src={pic}
        width='150'
        height='200'
      />
      <h3 className='item-header'> {name} </h3>
      <p className='item-colour'> Colour: {colour}</p>
      <p className='item-price'> £{price} </p>
      <p className='item-stock'> {quantity > 0 ? 'In Stock' : 'Out of Stock'} </p>
      <p className='item-category'> {category} </p>
      <button
      > Add to cart </button>
    </article >
  )
}

export default Item;