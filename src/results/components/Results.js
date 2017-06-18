import React from 'react';
import PropTypes from 'prop-types';
import PanelHeader from './PanelHeader';
import PanelBody from './PanelBody';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import '../../index.css';
const wikiURL = 'https://en.wikipedia.org/?curid=';
const Results = ({results}) => {
        return (

            <div className="container-panels">
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={700}
              transitionLeaveTimeout={700}
            >
                {(Object.keys(results)).map((key, i) => {
                  let result = results[key];
                  let thumbnail = result.thumbnail ? (result.thumbnail.source ? result.thumbnail.source : "") : "";

                  //if (results[0][i] && results[1][i] && results[2][i]){
                    return (

                        <div className="panel panel-default" key={key}>
                          <PanelHeader thumbnail={thumbnail} url={wikiURL + result.pageid} text={result.title}/>
                          <PanelBody text={result.extract} />
                        </div>
                    );
                  //}
                })}

              </ReactCSSTransitionGroup>
            </div>
        );
};

Results.propTypes = {
    results: PropTypes.object.isRequired
}

export default Results;
