import React, {Component} from 'react'
import SliderBar from './SliderBar';


class Projects extends Component {
    render(){
        return(
            <>
            <h1>Projects Page</h1>
            <SliderBar title="Reversi"/>
            <SliderBar title="Musical Automat"/>
            <SliderBar title="Rails React Library"/>
            <SliderBar title="Coming Soon: Tarot Gadget"/>
            </>
        )
    }
}

export default Projects