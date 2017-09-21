import React from 'react'
import { bindActionCreators } from 'redux'
import * as PopupActions from '../actions/PopupActions'
import { connect } from 'react-redux'

import { Modal, Select, Button } from 'antd'
const Option = Select.Option;


class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onRenderAll = this.onRenderAll.bind(this);

    this.state = {
      renderAll: false
    }
  }

  onClose() {
    this.props.popupActions.closeModal();

    if (this.state.renderAll === true) {
      this.props.popupActions.secondPopup();
      this.setState({ renderAll: false })
    }
  }

  onRenderAll() {
    this.props.popupActions.firstPopup();
    this.setState({ renderAll: true })
  }

  handleChange(value) {
    switch (value) {
      case 'first':
        this.props.popupActions.firstPopup();
        break;
      case 'second':
        this.props.popupActions.secondPopup();
        break;
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

        <Button type="primary" onClick={this.onRenderAll} ghost>Open all modals</Button>

        {popup.popupWindow === 'first' &&
          <Modal
            visible={popup.visible}
            title="Basic Modal"
            onCancel={this.onClose}
          >
            <p>First Modal Window</p>
          </Modal>
          }
        {popup.popupWindow === 'second' &&
          <Modal
            visible={popup.visible}
            title="Basic Modal"
            onCancel={this.onClose}
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
