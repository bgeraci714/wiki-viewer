import { connect } from 'react-redux';
import Input from './Input';
import results from '../../results';
import { updateQuery } from '../actions';

const { actions } = results;

//const holdQuery = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=10&namespace=0&format=json`;
const mapDispatchToProps = (dispatch) => {
    // need to figure out if cancelling request midway through would improve responsiveness of input
    return {
        onChange: (query) => {
          dispatch(actions.fetchResults(query));
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
