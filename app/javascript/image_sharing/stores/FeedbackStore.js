import { action, observable } from 'mobx';

export class FeedbackStore {
  @observable userName;
  @observable comments;

  constructor() {
    this.userName = '';
    this.comments = '';
  }

  @action
  setUserName(name) {
    this.userName = name;
  }

  @action
  setComments(comments) {
    this.comments = comments;
  }
}

export default FeedbackStore;
