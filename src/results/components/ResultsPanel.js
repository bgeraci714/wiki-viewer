import { connect } from 'react-redux';
import Results from './Results';

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

const ResultsPanel = connect(
    mapStateToProps,
    null
)(Results);

export default ResultsPanel;
