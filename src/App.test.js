import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import shopData from './shop-data.json';
import vouchersData from './vouchers-data.json';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render a child Item component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Item').exists()).toBeTruthy();
  });

  it('render a child Vouchers component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Vouchers').exists()).toBeTruthy();
  });

  it('should render the same amount of items compared to json file', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Item').length).toEqual(shopData.items.length);
  });
});
