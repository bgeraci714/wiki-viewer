import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';



const PanelHeader = ({ text, url, thumbnail }) => (
    <div className="panel-header">
        <img src={thumbnail} alt=""/>
        <a href={url}>{text}</a>
    </div>
);


PanelHeader.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default PanelHeader;
