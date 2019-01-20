import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render a child Item component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Item").exists()).toBeTruthy();
  });

  it('render a child Cart component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Cart").exists()).toBeTruthy();
  });

  it('render a child Vouchers component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Vouchers").exists()).toBeTruthy();
  });
});
