import { FIRST_POPUP_TRIGGER, SECOND_POPUP_TRIGGER, CLOSE_MODAL } from '../constants/ActionTypes';

export function firstPopup() {
  return {
    type: FIRST_POPUP_TRIGGER,
    count: 'first'
  };
}

export function secondPopup() {
  return {
    type: SECOND_POPUP_TRIGGER,
    count: 'second'
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
