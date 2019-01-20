import React from 'react';

const Vouchers = (props) => {
  const { validVouchers, vouchersCollapsed } = props;
  const vouchersToRender = validVouchers.map((item, key) => {
    return <li className='voucher' key={key}>
      <p className='voucher-description'> {item.description}</p>
      <b className='voucher-code'> {item.code}</b>
    </li>
  })
  return (
    <section className='vouchers-block'>
      <h3
        onClick={props.openBlock}
        id='vouchersCollapsed'
        className='vouchers-block-header'
      > Vouchers </h3>
      <div className={vouchersCollapsed ? 'collapsed' : 'block'}>
        <p className='vouchers-block-intro'> Shop more, get more! Check out our discounts:</p>
        <ul className='vouchers-block-list'>
          {vouchersToRender}
        </ul>
        <button
          onClick={props.closeBlock}
          name='vouchersCollapsed'
          className='close-vouchers-btn'
        >Close block </button>
      </div>
    </section >
  )
}

export default Vouchers;