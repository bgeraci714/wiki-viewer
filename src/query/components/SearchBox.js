import { connect } from 'react-redux';
import axios from 'axios';
import Input from './Input';
import results from '../../results';
import { updateQuery } from '../actions';

const { actions } = results;

//const holdQuery = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=10&namespace=0&format=json`;
const mapDispatchToProps = (dispatch) => {
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    return {
        onChange: (query) => {
          
          if (query !== ""){
            axios.get('https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='
              + query + '&format=json', {
                cancelToken: source.token
              }
            )
            .then((response)  => {
              //console.log(response);

              dispatch(actions.updateResults(response.data.query.pages));
            }).catch((thrown) => {
              if (axios.isCancel(thrown)){
                console.log('Request canceled', thrown.message);
              }
              else {
                console.log("There was an error: " + thrown);
              }
            });
          }
          else {
            dispatch(actions.updateResults({}));
          }

          dispatch(updateQuery(query));

        }
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.query
    }
}

const SearchBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default SearchBox;
