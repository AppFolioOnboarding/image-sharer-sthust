import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Body from './Body';
import FlashMessage from './FlashMessage';
import Footer from './Footer';
import Header from './Header';

@observer
class App extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  render() {
    const feedbackStore = this.props.stores.feedbackStore;
    return (
      <div>
        <Header title='Tell us what you think' />
        <FlashMessage store={feedbackStore} />
        <Body store={feedbackStore} />
        <Footer />
      </div>
    );
  }
}

export default inject('stores')(App);
