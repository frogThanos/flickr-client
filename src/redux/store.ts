import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import serviceLocator from './ServiceLocator';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk.withExtraArgument(serviceLocator));

const store = createStore(
  rootReducer,
  composeWithDevTools(middleware),
);

export default store;
