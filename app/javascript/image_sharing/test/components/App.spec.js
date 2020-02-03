import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import App from '../../components/App';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


describe('<App />', () => {
  it('should render correctly', () => {
    const stores = {
      feedbackStore: {}
    };
    const wrapper = shallow(<App.wrappedComponent stores={stores} />);
    const header = wrapper.find(Header);
    const body = wrapper.find(Body);
    const footer = wrapper.find(Footer);

    expect(header).to.have.lengthOf(1);
    expect(body).to.have.lengthOf(1);
    expect(footer).to.have.lengthOf(1);
  });
});
