//This component displays individual projects on the projects preview page
//Each one contains a small screenshot of the project, and a title
//When the SliderBar is moused_over, a short description of the project slides into view
//and the screenshot image expands to a larger view
//the entire bar should be a clickable link

import React,{Component} from 'react'
import styles from './Styles/sliderbar.module.css';


class SliderBar extends Component{

    render(){
        return(
            <div className={styles.slider_bar_container}>
                <div className={styles.slider_bar_title_card}>
                    <div classname={styles.slider_bar_preview}>
                        <img alt="preview"/>
                    </div>
                    <div classname={styles.slider_bar_title}>
                        <p>Sample Title</p>
                    </div>
                </div>
                <div className={styles.slider_bar_fullview}>

                </div>
            </div>
        )
    }
}

export default SliderBar;