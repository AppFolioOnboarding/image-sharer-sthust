import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Body from '../../components/Body';
import FeedbackForm from '../../components/FeedbackForm';

describe('<Body />', () => {
  it('should render correctly', () => {
    const dummyStore = {};
    const wrapper = shallow(<Body store={dummyStore} />);
    const feedbackForm = wrapper.find(FeedbackForm);

    expect(feedbackForm).to.have.lengthOf(1);
  });
});
