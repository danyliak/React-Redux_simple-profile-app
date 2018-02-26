import React from 'react'
import PropTypes from 'prop-types'

const AddIcon = ({
    width,
    height,
    onClick
}) => (
    <svg
        fill="#000000"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
    >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
);

AddIcon.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};


export default AddIcon