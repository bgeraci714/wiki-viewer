import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const SearchBox = ({onChange, value}) => (
    <input
        className="form-control"
        placeholder="Search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => { e.target.select()}}
    />
)

SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default SearchBox;
