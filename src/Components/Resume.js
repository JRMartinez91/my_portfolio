import React, {Component} from 'react'
import styles from './Styles/resume.module.css';

class Resume extends Component{
    render(){
        return(
            <div className={styles.resume_wrapper}>
                <h1>Resume</h1>
                <h2>Skills</h2>
                <div className={styles.resume_list}>
                    <ul>
                        <li>Alpha</li>
                        <li>Bravo</li>
                        <li>Charlie</li>
                    </ul>
                </div>
                <h2>Work Histoy</h2>
                <div className={styles.resume_list}>
                    <ul>
                        <li>Alpha</li>
                        <li>Bravo</li>
                        <li>Charlie</li>
                    </ul>
                </div>
                <h2>Education</h2>
                <div className={styles.resume_list}>
                    <ul>
                        <li>Alpha</li>
                        <li>Bravo</li>
                        <li>Charlie</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Resume