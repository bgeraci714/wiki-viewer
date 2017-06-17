import { connect } from 'react-redux';
import axios from 'axios';
import Input from './Input';
import results from '../../results';
import { updateQuery } from '../actions';
const { actions } = results;



const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (query) => {
            axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=10&namespace=0&format=json`)
            .then((response)  => {
                console.log(response);
                // slice(1) so that we skip the search query
                dispatch(actions.updateResults(response.data.slice(1)));
            })
            .catch((error)=>{
                console.log("There was an error: " + error);
            });
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
