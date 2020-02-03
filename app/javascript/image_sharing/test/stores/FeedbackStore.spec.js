import 'jsdom-global/register';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import AppFeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore', () => {
  it('should set user name', () => {
    const store = new AppFeedbackStore();
    store.setUserName('soeren');
    expect(store.userName).to.equal('soeren');
  });

  it('should set comments', () => {
    const store = new AppFeedbackStore();
    store.setComments('some comments');
    expect(store.comments).to.equal('some comments');
  });
});
