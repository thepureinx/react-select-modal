import React from 'react'
import { bindActionCreators } from 'redux'
import * as PopupActions from '../actions/PopupActions'
import { connect } from 'react-redux'

import { Modal, Select, Button } from 'antd'
const Option = Select.Option;


class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleFirstPopupClick = this.handleFirstPopupClick.bind(this);
    this.handleSecondPopupClick = this.handleSecondPopupClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFirstPopupClick() {
    this.props.popupActions.firstPopup();
  }

  handleSecondPopupClick() {
    this.props.popupActions.secondPopup();
  }

  handleChange(value) {
    switch (value) {
      case 'first':
        this.props.popupActions.firstPopup();
      case 'second':
        this.props.popupActions.secondPopup();
      default:
        return value;
    }
  }

  render() {
    const { popup } = this.props;
    const { firstPopup, secondPopup } = this.props.popupActions;

    return (
      <div>
        <Select
          defaultValue="Select modal..."
          style={{ width: 120 }}
          onChange={this.handleChange}
        >
          <Option value="first">
            First Modal
          </Option>
          <Option value="second">
            Second Modal
          </Option>
        </Select>

        <Button type="primary" ghost>Open all modals</Button>

        {popup.popupWindow === 'first' &&
          <Modal
            visible="true"
            title="Basic Modal"
          >
            <p>First Modal Window</p>
          </Modal>
          }
        {popup.popupWindow === 'second' &&
          <Modal
            visible="true"
            title="Basic Modal"
          >
            <p>Second Modal Window</p>
          </Modal>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.popup
  };
}

function mapDispatchToProps(dispatch) {
  return {
    popupActions: bindActionCreators(PopupActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
