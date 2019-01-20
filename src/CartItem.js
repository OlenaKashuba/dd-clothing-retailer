import React from 'react';

const CartItem = (props) => {
  const { name, colour, category, price, img, pic } = props.item;
  return (
    <article className='cart-item'>
      <img
        className='cart-item-pic'
        alt={name}
        src={pic}
        width='70'
        height='100'
      />
      <p className='cart-item-name'>{name}</p>
      <p className='cart-item-colour'> Colour: {colour}</p>
      <p className='cart-item-category'> {category} </p>
      <p className='cart-item-price'> £{price} </p>
      <button className='delete-btn'> Delete </button>
    </article >
  )
}
export default CartItem;