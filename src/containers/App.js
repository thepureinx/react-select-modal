import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PopupActions from '../actions/PopupActions';

import Dropdown from '../components/Dropdown';

class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Modal List</div>
        <Dropdown />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.popupWindow
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PopupActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
