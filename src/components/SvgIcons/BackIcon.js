import React from 'react'
import PropTypes from 'prop-types'

const BackIcon = ({
    width,
    height
}) => (
    <svg
        fill="#000"
        height={height}
        viewBox="0 0 24 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
    </svg>
);

BackIcon.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};


export default BackIcon