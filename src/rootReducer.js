import { combineReducers } from 'redux';
import results from './results/reducer';
import query from './query/reducer';

export default combineReducers({
    results,
    query
})
