import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import App from '../../components/App';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


describe('<App />', () => {
  it('should render correctly', () => {
    const stores = {
      feedbackStore: {}
    };
    const wrapper = shallow(<App.wrappedComponent stores={stores} />);
    const header = wrapper.find(Header);
    const footer = wrapper.find(Footer);

    expect(header).to.have.lengthOf(1);
    expect(footer).to.have.lengthOf(1);
  });
});
