import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';



const PanelHeader = ({ text, url, thumbnail }) => (
    <div className="panel-header">
        <a href={thumbnail}><img src={thumbnail} alt=""/></a>
        <a href={url}>{text}</a>
    </div>
);


PanelHeader.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default PanelHeader;
