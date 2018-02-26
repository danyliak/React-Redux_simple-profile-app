import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import './MainTopInfo.css'
import mainInfoActions from '../../actions/mainInfoActions'
import EditableField from '../EditableField'


class MainTopInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editableField: null,
        };

        this.refElements = {};

        this.setEditable = this.setEditable.bind(this);
        this.onClickClose = this.onClickClose.bind(this);
    }

    setEditable(editableField) {
        return () => {
            if (editableField === this.state.editableField) return;

            const keys = Object.keys(this.refElements);
            keys.forEach(k => {
                if (this.refElements[k].innerText !== this.props.mainInfo[k]) {
                    this.refElements[k].innerText = this.props.mainInfo[k]
                }
            });

            this.setState({editableField});
        }
    }

    onClickClose(name) {
        return e => {
            e.stopPropagation();
            this.setState({editableField: null});
            this.refElements[name].innerText = this.props.mainInfo[name];
        }
    }

    onClickOk(name) {
        return e => {
            e.stopPropagation();
            const {mainInfoActions} = this.props;
            const value = this.refElements[name].innerText;
            mainInfoActions.changeMainInformation({
                name,
                value
            });
            this.setState({editableField: null});
        }
    }

    render() {
        const {mainInfo: {name, location, languages}} = this.props;
        const {editableField} = this.state;

        return (
            <Fragment>

                <EditableField
                    text={name}
                    isEditable={editableField === 'name'}
                    additionalStyle={{fontSize: '2rem', fontWeight: 600}}
                    iconSize={24}
                    onSetEditable={this.setEditable('name')}
                    onClickClose={this.onClickClose('name')}
                    onClickOk={this.onClickOk('name')}
                    refCallback={node => this.refElements['name'] = node}
                />

                <EditableField
                    text={location}
                    isEditable={editableField === 'location'}
                    onSetEditable={this.setEditable('location')}
                    onClickClose={this.onClickClose('location')}
                    onClickOk={this.onClickOk('location')}
                    refCallback={node => this.refElements['location'] = node}
                />

                <EditableField
                    text={languages}
                    isEditable={editableField === 'languages'}
                    onSetEditable={this.setEditable('languages')}
                    onClickClose={this.onClickClose('languages')}
                    onClickOk={this.onClickOk('languages')}
                    refCallback={node => this.refElements['languages'] = node}
                />

            </Fragment>
        );
    }
}

MainTopInfo.propTypes = {
    mainInfoActions: PropTypes.shape({
        changeMainInformation: PropTypes.func.isRequired
    }).isRequired,
    mainInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string,
        languages: PropTypes.string
    }).isRequired
};

const mapStateToProps = state => (
    {
        mainInfo: state.mainInfo
    }
);

const mapDispatchToProps = dispatch => (
    {
        mainInfoActions: bindActionCreators(mainInfoActions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainTopInfo)
