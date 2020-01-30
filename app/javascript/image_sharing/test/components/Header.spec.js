import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Header from '../../components/Header';

describe('<Header />', () => {
  const wrapper = shallow(<Header title='Test Title' />);
  const hElement = wrapper.find('h3');

  it('should render correctly', () => {
    expect(hElement).to.have.lengthOf(1);
    expect(hElement.text()).to.equal('Test Title');
  });
});
