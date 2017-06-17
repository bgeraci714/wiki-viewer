import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';



const PanelHeader = ({ text }) => (
    <div className="panel-header">
         {text}
    </div>
);


PanelHeader.propTypes = {
    text: PropTypes.string.isRequired
}

export default PanelHeader;
