import 'jsdom-global/register';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore', () => {
  it('should set user name', () => {
    const store = new FeedbackStore();
    store.setUserName('soeren');
    expect(store.userName).to.equal('soeren');
  });

  it('should set comments', () => {
    const store = new FeedbackStore();
    store.setComments('some comments');
    expect(store.comments).to.equal('some comments');
  });

  it('should set response', () => {
    const store = new FeedbackStore();
    store.setResponse('success', 'store got response!');
    expect(store.response.status).to.equal('success');
    expect(store.response.message).to.equal('store got response!');
  });

  it('should reset form', () => {
    const store = new FeedbackStore();
    store.setUserName('soeren');
    store.setComments('nice job');
    expect(store.userName).to.equal('soeren');
    expect(store.comments).to.equal('nice job');

    store.resetForm();
    expect(store.userName).to.equal('');
    expect(store.comments).to.equal('');
  });
});
