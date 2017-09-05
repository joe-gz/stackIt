import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/appReducer';

const styles = {
  actionType: 'font-weight:bold;font-size:1.1em',
  stateLabel: 'color:blue;'
};

const logger = (api) => (next) => {
  return (action) => {
    const result = next(action);
    console.log(`%c ${action.type}:`, styles.actionType, action);
    console.log('%c next state', styles.stateLabel, api.getState());
    return result;
  };
};

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default createStoreWithMiddleware(appReducer);
