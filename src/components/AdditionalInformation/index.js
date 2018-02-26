import React from 'react'
import PropTypes from 'prop-types'

import './AdditionalInformation.css'

const AdditionalInformation = ({
    header,
    subHeader,
    availability,
    environment
}) => (
    <div className="additional-info">
        <h3>{header}</h3>
        <h2>{availability}</h2>
        <div className="divider"></div>
        <h4>{subHeader}</h4>
        <ul>
            {environment.map((item, index) => (
                <li key={index}>
                    <span>{item}</span>
                    {index + 1 !== environment.length && <span>, </span>}
                </li>
            ))}
        </ul>
    </div>
);

AdditionalInformation.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    environment: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default AdditionalInformation