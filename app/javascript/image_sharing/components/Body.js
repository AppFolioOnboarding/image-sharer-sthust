import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import AppFeedbackForm from './FeedbackForm';

class Body extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  onClickHandler = () => {
  };

  render() {
    return (
      <Row>
        <Col lg={{ size: 4, offset: 4 }}>
          <AppFeedbackForm store={this.props.store} onClick={this.onClickHandler} />
        </Col>
      </Row>
    );
  }
}

export default Body;
