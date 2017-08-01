import { Observable }  from 'rxjs';
import axios from 'axios';
import actions from './actions';

const wikiQuery = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
const format = '&format=json';

export default function fetchResultsEpic (action$){
  return action$.ofType('FETCH_RESULTS')

    .mergeMap(action =>
      Observable.fromPromise(axios.get(wikiQuery + action.query + format))
        .map((response) => {
          
          return actions.updateResults(response.data.query.pages);
        })

        .takeUntil(action$.ofType('FETCH_RESULTS_REJECTED'))

        .catch(error => Observable.of({
        	type: 'FETCH_RESULTS_REJECTED',
        	query: ''
        }))
    );
}

//Observable.fromPromise(axios.get('/api/scores')
