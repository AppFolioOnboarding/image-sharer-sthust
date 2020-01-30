import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);
  const pElement = wrapper.find('p');

  it('should render correctly', () => {
    expect(pElement).to.have.lengthOf(1);
    expect(pElement.text()).to.equal('Copyright: AppFolio Inc. Onboarding');
  });
});
