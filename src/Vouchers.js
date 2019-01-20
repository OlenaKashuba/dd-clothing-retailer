import React from 'react';

const Vouchers = (props) => {
  const validVouchers = props.validVouchers;
  const vouchersToRender = validVouchers.map((item, key) => {
    return <li className='voucher' key={key}>
      <p className='voucher-description'> {item.description}</p>
      <b className='voucher-code'> {item.code}</b>
    </li>
  });
  return (
    <section className='vouchers-block'>
      <h3 className='vouchers-block-header'
      > Vouchers </h3>
      <p className='vouchers-intro'> Shop more, get more! Check out our discounts:</p>
      <ul className='vouchers-list'>
        {vouchersToRender}
      </ul>
      <button>Close block </button>
    </section >
  )
}

export default Vouchers;