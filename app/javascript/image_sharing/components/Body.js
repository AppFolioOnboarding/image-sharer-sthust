import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import FeedbackForm from './FeedbackForm';
import PostFeedbackService from '../services/PostFeedbackService';

class Body extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  onClickHandler = () => {
    const params = {
      name: this.props.store.userName,
      comments: this.props.store.comments
    };
    const service = new PostFeedbackService(this.props.store, params);
    return service.postFeedback();
  };

  render() {
    return (
      <Row>
        <Col lg={{ size: 4, offset: 4 }}>
          <FeedbackForm store={this.props.store} onClick={this.onClickHandler} />
        </Col>
      </Row>
    );
  }
}

export default Body;
