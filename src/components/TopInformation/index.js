import React from 'react'

import './TopInformation.css'
import MainTopInfo from '../MainTopInfo'
import Skills from '../Skills'

const TopInformation = () => (
    <div className="top-information">
        <div
            className="profile-image"
            style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/photo.jpg)`}}
        ></div>
        <div className="top-descr">
            <MainTopInfo />
            <Skills />
        </div>
        <div className="top-right-action">
            <button onClick={() => window.print()}>Print this page</button>
        </div>
    </div>
);

export default TopInformation