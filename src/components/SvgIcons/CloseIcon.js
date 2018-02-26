import React from 'react'
import PropTypes from 'prop-types'

const CloseIcon = ({
    width,
    height,
    onClick,
    fill
}) => (
    <svg
        fill={fill}
        height={height}
        viewBox="0 0 24 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
    >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
);

CloseIcon.defaultProps = {
  fill: '#fff'
};

CloseIcon.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    fill: PropTypes.string
};


export default CloseIcon