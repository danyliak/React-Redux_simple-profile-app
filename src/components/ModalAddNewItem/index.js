import React, { Component } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

class ModalAddNewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.onHandleChange = this.onHandleChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    onHandleChange(type) {
        return e => {
            this.setState({
                [type]: e.target.value,
                errorMessage: null
            })
        }
    }

    saveItem() {
        const {name,  description} = this.state;
        const {saveItem, closeModal} = this.props;

        if (!name) return this.setState({errorMessage: 'Enter name'});
        if (!description) return this.setState({errorMessage: 'Enter description'});

        saveItem({name, description});
        closeModal();
    }

    render() {
        const {closeModal, openedModalType} = this.props;
        const {name, description, errorMessage} = this.state;

        const modalStyle = {
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                overflowY: 'auto',
                overflowX: 'hidden',
                width: '100%',
                minHeight: '100%'
            },
            content: {
                position: 'relative',
                background: '#fff',
                border: 'none',
                padding: '0',
                top: '30px',
                left: 'auto',
                right: 'auto',
                bottom: 'auto',
                margin: '30px auto',
                borderRadius: '5px',
                width: '30rem',
                overflow: 'visible'
            }
        };

        return (
            <Modal
                isOpen={true}
                contentLabel="tl-modal"
                style={modalStyle}
                onRequestClose={closeModal}
            >
                <div className="modal-header">Add new {openedModalType}</div>
                <hr/>
                <div className="modal-body">
                    <input
                        type="text"
                        value={name || ''}
                        onChange={this.onHandleChange('name')}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        value={description || ''}
                        onChange={this.onHandleChange('description')}
                        placeholder="Description"
                    />
                    <div className="modal-actions">
                        <button
                            className="modal-close"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            className="modal-save"
                            onClick={this.saveItem}
                        >
                            Save
                        </button>
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>


            </Modal>
        )
    }
}

ModalAddNewItem.propTypes = {
    closeModal: PropTypes.func.isRequired,
    openedModalType: PropTypes.string.isRequired,
    saveItem: PropTypes.func.isRequired
};

export default ModalAddNewItem