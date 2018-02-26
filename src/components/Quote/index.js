import React from 'react'
import PropTypes from 'prop-types'

import './Quote.css'

const Quote = ({
    quote: {
        header,
        description,
        author
    }
}) => (
    <div className="quote-item">
        <h3>{header}</h3>
        <div className="quote-body">
            <div>{description}</div>
            {author && <strong>- {author}</strong>}
        </div>
    </div>
);

Quote.propTypes = {
    quote: PropTypes.shape({
        header: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string,
        type: PropTypes.string
    }).isRequired
};

export default Quote