import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Header from '../../components/Header';

describe('<Header />', () => {
  const wrapper = shallow(<Header title={'Test Title'}/>);
  const h_element = wrapper.find('h3');

  it('should render correctly', () => {
    expect(h_element).to.have.lengthOf(1);
    expect(h_element.text()).to.equal('Test Title');
  });
});
