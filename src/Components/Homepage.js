//This page displays a header bar at the top of the page
//and buttons linking to the other main sections of the site:
//Projects, Resume, Contact, Bio, Links

import React, {Component} from 'react'

class Homepage extends Component {
    render(){
        return(
            <>
            <h1>Welcome!</h1>
            <h2>Click a link to explore my portfolio;</h2>
            <h2>And check back soon for new projects and updates!</h2>
           
            </>
        )
    }
}

export default Homepage