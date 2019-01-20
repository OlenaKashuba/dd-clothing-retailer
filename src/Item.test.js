import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Item from './Item';
import shopData from './shop-data.json';
import vouchersData from './vouchers-data.json';

describe('Item component', () => {
  it('Renders the name of first item correctly', () => {
    let wrapper = shallow(<Item item={shopData.items[0]} />);
    const name = wrapper
      .find('.item-header')
      .first()
      .text()
      .trim()
    expect(name).toBe(shopData.items[0].name);
  });
});
