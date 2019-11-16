import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const middleware = applyMiddleware(thunk);

const store = createStore(
  () => null,
  composeWithDevTools(middleware),
);

export default store;
