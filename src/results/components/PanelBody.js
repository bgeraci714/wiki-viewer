import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const PanelBody = ({ text }) => (
    <div className="panel-body">
        <p> {text} </p>
    </div>
);


PanelBody.propTypes = {
    text: PropTypes.string.isRequired
}

export default PanelBody;
