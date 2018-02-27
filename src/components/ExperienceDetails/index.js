import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BackIcon from '../SvgIcons/BackIcon'

class ExperienceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {

        return (
            <div className="inner-page-wrap">
                <Link to="/" className="back-link">
                    <BackIcon width={24} height={24} />
                    <span>Back</span>
                </Link>
                <div>
                    <h2>Experience details:</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta dolores incidunt magnam officia optio velit voluptatem? Laboriosam molestiae, necessitatibus. Alias facere nam, pariatur repellendus sapiente sequi tempore totam voluptatem.
                </div>
            </div>
        )
    }
}

export default ExperienceDetails