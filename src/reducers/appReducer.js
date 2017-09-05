// @flow
import {setCurrentUser, setFavorites} from './reducers';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  currentUser: setCurrentUser,
  favorites: setFavorites
});

export default appReducer;
