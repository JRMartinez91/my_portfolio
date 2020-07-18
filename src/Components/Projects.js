import React, {Component} from 'react'
import SliderBar from './SliderBar';
import styles from './Styles/sliderbar.module.css';


class Projects extends Component {
    render(){
        return(
            <>
            <h1>Projects Page</h1>
            <h2>Reversi</h2>
            <h2>Musical Automat</h2>
            <h2>Rails React Library</h2>
            <h2>Coming Soon: Tarot Gadget</h2>
            <SliderBar/>
            </>
        )
    }
}

export default Projects