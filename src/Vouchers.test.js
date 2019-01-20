import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Vouchers from './Vouchers';
import vouchers from './vouchers-data.json';

describe('Vouchers component', () => {
  it('renders the same amount of vouchers compared to json file', () => {
    const wrapper = mount(<Vouchers validVouchers={vouchers.vouchers} />);
    expect(wrapper.find('ul').children().length).toEqual(
      vouchers.vouchers.length
    );
  });
});