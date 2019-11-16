import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import serviceLocator from './ServiceLocator';

const middleware = applyMiddleware(thunk.withExtraArgument(serviceLocator));

const store = createStore(
  () => null,
  composeWithDevTools(middleware),
);

export default store;
