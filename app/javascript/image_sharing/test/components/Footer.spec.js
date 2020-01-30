import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);
  const p_element = wrapper.find('p');

  it('should render correctly', () => {
    expect(p_element).to.have.lengthOf(1);
    expect(p_element.text()).to.equal('Copyright: AppFolio Inc. Onboarding');
  });
});
