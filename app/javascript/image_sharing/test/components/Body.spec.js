import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Body from '../../components/Body';
import AppFeedbackForm from '../../components/FeedbackForm';

describe('<Body />', () => {
  it('should render correctly', () => {
    const dummyStore = {};
    const wrapper = shallow(<Body store={dummyStore} />);
    const feedbackForm = wrapper.find(AppFeedbackForm);

    expect(feedbackForm).to.have.lengthOf(1);
  });
});
