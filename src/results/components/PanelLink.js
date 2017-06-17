import React from 'react';
import PropTypes from 'prop-types';


const PanelLink = ({ link }) => (
    <div>
        <a href={link}> link </a>
    </div>
);


PanelBody.propTypes = {
    link: PropTypes.string.isRequired
}

export default PanelLink;
