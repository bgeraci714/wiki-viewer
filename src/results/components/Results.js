import React from 'react';
import PropTypes from 'prop-types';
import PanelHeader from './PanelHeader';
import PanelBody from './PanelBody';


import '../../index.css';


const Results = ({results}) => {
    if (results.length > 0)
        return (
            <div>
                    {results[0].map((result, i) => {
                    //console.log(result);
                    return (
                        <div className="panel panel-default" key={i}>
                            <PanelHeader text={results[0][i]}/>
                            <PanelBody text={results[1][i]} />
                        </div>
                    )
                })}
            </div>
        );
    else
        return null;
};

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}

export default Results;
