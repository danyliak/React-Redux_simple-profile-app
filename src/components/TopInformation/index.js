import React from 'react'

import './TopInformation.css'
import MainTopInfo from '../MainTopInfo'
import Skills from '../Skills'

const TopInformation = () => (
    <div className="top-information">
        <div className="profile-image"></div>
        <div className="top-descr">
            <MainTopInfo />
            <Skills />
        </div>
        <div className="top-right-action">
            <button>Print this page</button>
        </div>
    </div>
);

export default TopInformation