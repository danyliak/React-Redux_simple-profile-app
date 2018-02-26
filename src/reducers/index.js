import { combineReducers } from 'redux'
import mainInfo from './mainInfoReducer'
import skills from './skillsReducer'
import portfolio from './portfolioReducer'
import experience from './experienceReducer'
import additionalInformation from './additionalInformationReducer'
import quotes from './quotesReducer'
import codeExamples from './codeExamplesReducer'

const rootReducer = combineReducers({
    mainInfo,
    skills,
    portfolio,
    experience,
    additionalInformation,
    quotes,
    codeExamples
});

export default rootReducer