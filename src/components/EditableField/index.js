import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './EditableField.css'
import OkIcon from '../SvgIcons/OkIcon'
import CloseIcon from '../SvgIcons/CloseIcon'

const EditableField = ({
    text,
    isEditable,
    additionalStyle,
    onSetEditable,
    iconSize,
    onClickClose,
    onClickOk,
    refCallback
}) => (
    <div
        className={classNames("editable-field-wrap", {'active-editable': isEditable})}
        onClick={onSetEditable}
    >
        <div
            style={additionalStyle}
            contentEditable={true}
            suppressContentEditableWarning={true}
            ref={refCallback}
        >
            {text}
        </div>
        {isEditable && <div className="editable-actions">
             <OkIcon
                 width={iconSize}
                 height={iconSize}
                 onClick={onClickOk}
             />
             <CloseIcon
                 width={iconSize}
                 height={iconSize}
                 onClick={onClickClose}
             />
        </div>}
    </div>
);

EditableField.defaultProps = {
    iconSize: 12
};

EditableField.propTypes = {
    text: PropTypes.string.isRequired,
    isEditable: PropTypes.bool.isRequired,
    additionalStyle: PropTypes.object,
    onSetEditable: PropTypes.func.isRequired,
    iconSize: PropTypes.number,
    onClickClose: PropTypes.func.isRequired,
    onClickOk: PropTypes.func.isRequired,
    refCallback: PropTypes.func.isRequired
};

export default EditableField