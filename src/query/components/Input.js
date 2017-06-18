import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'

const SearchBox = ({onChange, value}) => (
  <div className="input-container">
    <input
        className="input-form"
        placeholder="Search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => { e.target.select()}}
    />
  </div>
)

SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default SearchBox;
