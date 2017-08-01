export default function results (state = {}, action){
    switch(action.type){
        case 'UPDATE_RESULTS':
            return action.results;
        case 'FETCH_RESULTS_REJECTED':
            return {};
        default:
            return state;
    }
}
