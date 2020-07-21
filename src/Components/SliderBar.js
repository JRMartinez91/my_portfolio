//This component displays individual projects on the projects preview page
//Each one contains a small screenshot of the project, and a title
//When the SliderBar is moused_over, a short description of the project slides into view
//and the screenshot image expands to a larger view
//the entire bar should be a clickable link

import React,{Component} from 'react'
import styles from './Styles/sliderbar.module.css';


class SliderBar extends Component{

    getBackground(){
        let bgStyle = {};
        if(this.props.backgroundURL){
            bgStyle = {
                backgroundImage: 'url(' + this.props.backgroundURL + ')',
                backgroundSize: "cover"
            }
        } else {
            bgStyle = {
                backgroundImage: 'url(https://i.imgur.com/tJ4v6ND.png)'
            }
        }
        return bgStyle
    }

    render(){
        let bgStyle = this.getBackground()
        return(
            <div className={styles.slider_bar_container}>
                <div className={styles.slider_bar_title_card} onClick={()=>{window.open(this.props.externalLink,"_blank")}}>
                    <div className={styles.slider_bar_preview}>
                        <div className={styles.preview_img} style={bgStyle}></div>
                        {this.props.blurb}
                    </div>
                    <div className={styles.slider_bar_title}>
                        <p>{this.props.title}</p>
                    </div>
                    {/* <div className={styles.slider_bar_fullview}>
                        <img alt="screenshot"/>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default SliderBar;