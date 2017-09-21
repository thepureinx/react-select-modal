import { FIRST_POPUP_TRIGGER, SECOND_POPUP_TRIGGER } from '../constants/ActionTypes';

const initialState = {
  popupWindow: ''
};

export default function popup(state = initialState, action) {
  switch (action.type) {
    case FIRST_POPUP_TRIGGER:
      return { ...state, popupWindow: action.count }
    case SECOND_POPUP_TRIGGER:
      return { ...state, popupWindow: action.count }
    default:
      return state;
  }
}
