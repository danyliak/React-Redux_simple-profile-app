import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { darcula } from 'react-syntax-highlighter/styles/prism'
import { Link } from 'react-router-dom'

import './CodeExample.css'

const CodeExample = ({
    codeString
}) => (
    <div className="code-example">
        <div className="coe-sample-header">
            <Link to="/code">
                <span>Sample code and algorithm</span>
            </Link>
        </div>
        <SyntaxHighlighter
            language='javascript'
            style={darcula}
            showLineNumbers={true}
        >
            {codeString}
        </SyntaxHighlighter>
    </div>
);

CodeExample.propTypes = {
    codeString: PropTypes.string.isRequired
};

export default CodeExample