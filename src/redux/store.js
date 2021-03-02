import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import gameReducer from './gameReducer'

const saveToLocalStorage = state => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const reducers = combineReducers({
  gamePage: gameReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, loadFromLocalStorage(), composeEnhancers(applyMiddleware(thunkMiddleware)))

store.subscribe(() => saveToLocalStorage(store.getState()));

window.store = store;

export default store;