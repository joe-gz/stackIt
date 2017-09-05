import { SET_USER, SET_FAVORITES } from '../constants/actionTypes';
import {initialState} from '../config';

export function setCurrentUser (state = initialState.currentUser, action) {
  const {type, data} = action;
  return type !== SET_USER ? state : (
    data
  );
}

export function setFavorites (state = initialState.favorites, action) {
  const {type, data} = action;
  return type !== SET_FAVORITES ? state : (
    data
  );
}
