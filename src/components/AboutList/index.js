import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import './AboutList.css'
import AddIcon from '../SvgIcons/AddIcon'
import CloseIcon from '../SvgIcons/CloseIcon'

const AboutList = ({
    header,
    subHeader,
    list,
    openAddModal,
    removeItem,
    link
}) => (
    <div className="about-list">
        <h3><Link to={link}>{header}</Link></h3>
        <h4>{subHeader}</h4>
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <span className="about-item-wrap">
                        <strong>{item.name}, </strong>
                        <span>{item.description}</span>
                        <CloseIcon
                            width={18}
                            height={18}
                            fill="#ff2f0f"
                            onClick={() => removeItem(item.id)}
                        />
                    </span>
                </li>
            ))}
        </ul>
        <AddIcon
            width={36}
            height={36}
            onClick={openAddModal}
        />
    </div>
);

AboutList.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired,
    openAddModal: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired
};

export default AboutList