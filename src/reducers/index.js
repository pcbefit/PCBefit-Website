import chartReducer from './chartSlice';
import diffReducer from './diffSlice';
const rootReducer = {
	chart: chartReducer,
	diff: diffReducer
};
export default rootReducer;