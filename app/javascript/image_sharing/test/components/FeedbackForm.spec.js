import React from 'react';
import { Form, Button } from 'reactstrap';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import FeedbackForm from '../../components/FeedbackForm';

describe('<FeedbackForm />', () => {
  it('should render correctly', () => {
    const store = {
      userName: 'Soeren',
      comments: 'This is a comment'
    };
    const onClick = sinon.spy();

    const wrapper = shallow(<FeedbackForm store={store} onClick={onClick} />);
    const form = wrapper.find(Form);

    expect(form).to.have.lengthOf(1);

    const userNameInput = form.find('.username-input');
    expect(userNameInput).to.have.length(1);
    expect(userNameInput.prop('value')).to.equal('Soeren');
    const commentInput = form.find('.comment-input');
    expect(commentInput).to.have.length(1);
    expect(commentInput.prop('value')).to.equal('This is a comment');

    const button = form.find(Button);
    expect(button).to.have.length(1);
  });
});
