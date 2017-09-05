import {SET_USER, SET_FAVORITES} from '../constants/actionTypes';

export function setCurrentUser (data) {
  return { type: SET_USER, data };
}

export function setFavorites (data) {
  return { type: SET_FAVORITES, data };
}
