import { createStore, applyMiddleware, Store, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import reducer from "./reducers";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    process.env.NODE_ENV === "development"
      ? (typeof window !== "undefined" &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose
      : compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);