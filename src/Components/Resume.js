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
                        <li>
                            <h3>Front End Development</h3>
                            <p>HTML, CSS, Javascript, JQuery, React</p>
                        </li>
                        <li>
                            <h3>Back End Development</h3>
                            <p>SQL, Ruby, Ruby on Rails, Express, MongoDB</p>
                        </li>
                    </ul>
                </div>
                <h2>Work Histoy</h2>
                <div className={styles.resume_list}>
                    <ul>
                        <li>
                            <h3>Software Engineering Fellow</h3>
                            <h4>General Assembly</h4>
                            <p>Worked both solo and in teams developing various apps and websites from start to
finish, utilizing a wide variety of software stacks and platforms, with an eye towards
developing a deep understanding of every step of the process.</p>
                        </li>
                        <li>
                            <h3>Game Developer</h3>
                            <h4>Anvil Drop</h4>
                            <p>Worked remotely with a team of developers from across the US and Canada to
create indie video games, utilizing various graphical and software development
programs, and collaborating across a variety of platforms, with a focus on iterative
design via continuous feedback from the team leader.</p>
                        </li>
                        <li>
                            <h3>Teacher</h3>
                            <h4>Hofstra University</h4>
                            <p>Taught computer graphics technology and basic design concepts to middle school
students over the course of a summer educational program. Required attaining the
level of nuanced understanding of software necessary to fully explain it to another
person.</p>
                        </li>
                    </ul>
                </div>
                <h2>Education</h2>
                <div className={styles.resume_list}>
                    <ul>
                        <li>
                            <h3>Worcester Polytechnic Institute</h3>
                            <p>Bachelor of Science, 2013</p>
                        </li>
                        <li>
                            <h3>General Assembly</h3>
                            <p>Software Engineering Immersive Course, 2020</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Resume