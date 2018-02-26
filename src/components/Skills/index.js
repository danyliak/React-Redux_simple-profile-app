import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Skills.css'
import skillsActions from '../../actions/skillsActions'
import OkIcon from '../SvgIcons/OkIcon'
import CloseIcon from '../SvgIcons/CloseIcon'

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rating: 1
        };

        this.closeEditForm = this.closeEditForm.bind(this);
        this.addNewSkill = this.addNewSkill.bind(this);
    }

    addNewSkill() {
        const {skillsActions} = this.props;
        const {name, rating} = this.state;

        if (!name) return this.setState({errorMessage: 'Enter skill name'});

        skillsActions.addNewSkill({
            id: Date.now(),
            name,
            rating: +rating
        });

        this.setState({
            name: '',
            rating: 1,
            errorMessage: null
        });
    }

    closeEditForm() {
        this.setState({
            addNewSkillForm: false,
            name: '',
            rating: 1,
            errorMessage: null
        });
    }

    deleteSkill(id) {
        return () => {
            const {skillsActions} = this.props;
            skillsActions.removeSkill(id);
        }
    }

    onHandleChange(type) {
        return e => {
            this.setState({
                [type]: e.target.value,
                errorMessage: null
            })
        }
    }

    render() {
        const {skills} = this.props;
        const {addNewSkillForm, rating, name, errorMessage} = this.state;

        return (
            <Fragment>
                <ul className="skills-list">
                    {skills.map(skill => (
                        <li
                            key={skill.id}
                            className={classNames({
                                "skill-strong": skill.rating === 1,
                                "skill-average": skill.rating === 2,
                                "skill-low": skill.rating === 3
                            })}
                        >
                            {skill.name}
                            <CloseIcon
                                width={12}
                                height={12}
                                onClick={this.deleteSkill(skill.id)}
                            />
                        </li>
                    ))}
                </ul>
                {!addNewSkillForm && <span
                    onClick={() => this.setState({addNewSkillForm: true})}
                >
                    Add skills
                </span>}
                {addNewSkillForm && <div className="add-skill-form">
                    <input
                        type="text"
                        placeholder="Add skill"
                        onChange={this.onHandleChange('name')}
                        value={name}
                    />
                    <div className="skill-form-actions">
                        <select
                            value={rating}
                            onChange={this.onHandleChange('rating')}
                        >
                            <option value="1">Strong</option>
                            <option value="2">Average</option>
                            <option value="3">Low</option>
                        </select>
                        <OkIcon
                            width={12}
                            height={12}
                            onClick={this.addNewSkill}
                        />
                        <CloseIcon
                            width={12}
                            height={12}
                            onClick={this.closeEditForm}
                        />
                    </div>
                </div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </Fragment>
        );
    }
}

Skills.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    skillsActions: PropTypes.shape({
        addNewSkill: PropTypes.func.isRequired,
        removeSkill: PropTypes.func.isRequired
    }).isRequired
};

const mapStateToProps = state => (
    {
        skills: state.skills
    }
);

const mapDispatchToProps = dispatch => (
    {
        skillsActions: bindActionCreators(skillsActions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Skills)