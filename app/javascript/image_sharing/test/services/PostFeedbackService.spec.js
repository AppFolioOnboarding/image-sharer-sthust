import 'jsdom-global/register';
import { afterEach, beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import PostFeedbackService from '../../services/PostFeedbackService';
import * as api from '../../utils/helper';

describe('PostFeedbackService', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set success message', () => {
    const dummyStore = {
      setResponse: sinon.spy(),
      resetForm: sinon.spy()
    };

    const data = Promise.resolve({ message: 'message' });
    sandbox.stub(api, 'post').returns(data);

    const service = new PostFeedbackService(dummyStore, {});
    return service.postFeedback().then(() => {
      sinon.assert.calledWith(dummyStore.setResponse, 'success', 'message');
      sinon.assert.calledOnce(dummyStore.resetForm);
    });
  });

  it('should set failed message', () => {
    const dummyStore = {
      setResponse: sinon.spy(),
      resetForm: sinon.spy()
    };

    const data = Promise.reject();
    sandbox.stub(api, 'post').returns(data);

    const service = new PostFeedbackService(dummyStore, {});
    const failedMessage = 'Something went wrong, please try again later';
    return service.postFeedback().then(() => {
      sinon.assert.calledWith(dummyStore.setResponse, 'danger', failedMessage);
      sinon.assert.notCalled(dummyStore.resetForm);
    });
  });
});
