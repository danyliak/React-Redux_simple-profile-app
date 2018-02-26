import React from 'react'
import classNames from 'classnames'

import './GridItem.css'

const GridItem = ({
    children,
    noteOrder
}) => (
    <div className={classNames("grid-item", {"note-grid-item": noteOrder})}>
        {children}
    </div>
);

export default GridItem