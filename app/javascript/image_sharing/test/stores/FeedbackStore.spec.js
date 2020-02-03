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
});
