import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import './GridInformation.css'
import GridItem from '../GridItem'
import AboutList from '../AboutList'
import AdditionalInformation from '../AdditionalInformation'
import Quote from '../Quote'
import CodeExample from '../CodeExample'
import ModalAddNewItem from '../ModalAddNewItem'
import portfolioActions from '../../actions/portfolioActions'
import experienceActions from '../../actions/experienceActions'

class GridInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridInRow: null
        };

        this.checkCountEmptyGrids = this.checkCountEmptyGrids.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.saveAboutItem = this.saveAboutItem.bind(this);
    }

    componentWillMount() {
        this.checkCountEmptyGrids();
        window.addEventListener('resize', this.checkCountEmptyGrids)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkCountEmptyGrids)
    }

    checkCountEmptyGrids() {
        const {gridInRow} = this.state;

        const availableCounts = [
            {width: 1200, count: 4},
            {width: 768, count: 3},
            {width: 480, count: 2},
            {width: 320, count: 1},
        ];

        for (let i = 0; i < availableCounts.length; i++) {
            if (window.matchMedia(`(min-width: ${availableCounts[i].width}px)`).matches) {
                this.setState(
                    gridInRow !== availableCounts[i].count
                        ? {gridInRow: availableCounts[i].count}
                        : null
                );
                break;
            }
        }
    }

    removeAboutItem(type) {
        return id => {
            const {portfolioActions, experienceActions} = this.props;

            if (type === 'experience') experienceActions.removeExperience(id);
            if (type === 'portfolio') portfolioActions.removePortfolio(id);
        }
    }

    openAddModal(openedModalType) {
        return ()  => {
            this.setState({openedModalType});
        }
    }

    onCloseModal() {
        this.setState({openedModalType: null})
    }

    saveAboutItem(type) {
        return ({name, description}) => {
            const {portfolioActions, experienceActions} = this.props;

            const data = {
                id: Date.now(),
                name,
                description
            };

            if (type === 'Experience') experienceActions.addNewExperience(data);
            if (type === 'Portfolio') portfolioActions.addNewPortfolio(data);
        }
    }

    render() {
        const {gridInRow, openedModalType} = this.state;
        const {portfolio, experience, quotes, availability, environment, codeExamples} = this.props;

        const gridRemainder = (quotes.length + 4) % gridInRow;
        const emptyGridCount = gridRemainder ? gridInRow - gridRemainder : 0;

        return (
            <div className="grid-information">

                <GridItem>
                    <AboutList
                        header="Portfolio"
                        subHeader="PHP, Ruby, Javascript"
                        list={portfolio}
                        removeItem={this.removeAboutItem('portfolio')}
                        openAddModal={this.openAddModal('Portfolio')}
                        link="/portfolio"
                    />
                </GridItem>

                <GridItem>
                    <AboutList
                        header="Experience"
                        list={experience}
                        removeItem={this.removeAboutItem('experience')}
                        openAddModal={this.openAddModal('Experience')}
                        link="/experience"
                    />
                </GridItem>

                <GridItem>
                    <CodeExample
                        codeString={codeExamples[0]}
                    />
                </GridItem>

                <GridItem>
                    <AdditionalInformation
                        header="Availability"
                        subHeader="Preferred environment"
                        availability={availability}
                        environment={environment}
                    />
                </GridItem>

                {quotes.map((quote, index) => (
                    <GridItem key={index} noteOrder={quote.type === "note"}>
                        <Quote quote={quote} />
                    </GridItem>
                ))}

                {/* Show empty grid items in list before notes */}
                {(emptyGridCount > 0) && (new Array(emptyGridCount)).fill('').map((i, index) => <GridItem key={index} />)}

                {openedModalType && <ModalAddNewItem
                    closeModal={this.onCloseModal}
                    openedModalType={openedModalType}
                    saveItem={this.saveAboutItem(openedModalType)}
                />}

            </div>
        );
    }
}

GridInformation.propTypes = {
    portfolio: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired,
    experience: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired,
    quotes: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            author: PropTypes.string,
            type: PropTypes.string
        })
    ).isRequired,
    availability: PropTypes.string.isRequired,
    environment: PropTypes.arrayOf(PropTypes.string).isRequired,
    codeExamples: PropTypes.arrayOf(PropTypes.string).isRequired,
    portfolioActions: PropTypes.shape({
        addNewPortfolio: PropTypes.func.isRequired,
        removePortfolio: PropTypes.func.isRequired
    }).isRequired,
    experienceActions: PropTypes.shape({
        addNewExperience: PropTypes.func.isRequired,
        removeExperience: PropTypes.func.isRequired
    }).isRequired
};

const mapStateToProps = state => (
    {
        portfolio: state.portfolio,
        experience: state.experience,
        quotes: state.quotes,
        availability: state.additionalInformation.availability,
        environment: state.additionalInformation.environment,
        codeExamples: state.codeExamples
    }
);

const mapDispatchToProps = dispatch => (
    {
        portfolioActions: bindActionCreators(portfolioActions, dispatch),
        experienceActions: bindActionCreators(experienceActions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(GridInformation)