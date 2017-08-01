import { combineEpics } from 'redux-observable';
import results from './results/epic';

export default combineEpics(
    results
);