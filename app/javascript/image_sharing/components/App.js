import React, { Component } from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  render() {
    const feedbackStore = this.props.stores.feedbackStore;
    return (
      <div>
        <Header title='Tell us what you think' />
        (/* Put your components here: Flash Message */)
        <Body store={feedbackStore} />
        <Footer />
      </div>
    );
  }
}

export default inject('stores')(App);
