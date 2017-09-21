import { FIRST_POPUP_TRIGGER, SECOND_POPUP_TRIGGER, ALL_POPUP_TRIGGER, CLOSE_MODAL } from '../constants/ActionTypes';

const initialState = {
  popupWindow: '',
  visible: true
};

export default function popup(state = initialState, action) {
  switch (action.type) {
    case FIRST_POPUP_TRIGGER:
      return { ...state, popupWindow: action.count, visible: true }
    case SECOND_POPUP_TRIGGER:
      return { ...state, popupWindow: action.count, visible: true }
    case CLOSE_MODAL:
      return { ...state, visible: false }
    default:
      return state;
  }
}
