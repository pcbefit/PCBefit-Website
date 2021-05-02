import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(),
	// other store enhancers if any
);
export default configureStore({
	reducer,
	enhancer
});