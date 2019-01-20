import React from 'react';

const CartItem = (props) => {
  const { name, colour, category, price, img, pic } = props.item;
  const deleteFromCart = props.deleteFromCart;
  return (
    <article className='cart-item'>
      <img
        className='cart-item-pic'
        alt={name}
        src={pic}
        width='70'
        height='100'
      />
      <div className='content-wrap'>
        <p className='cart-item-name'>{name}</p>
        <p className='cart-item-colour'> Colour: {colour}</p>
        <p className='cart-item-category'> {category} </p>
      </div>
      <div className='price-wrap'>
        <p className='cart-item-price'> £{price} </p>
        <button
          onClick={deleteFromCart}
          className='delete-btn'
        > Delete </button>
      </div>
    </article >
  )
}
export default CartItem;