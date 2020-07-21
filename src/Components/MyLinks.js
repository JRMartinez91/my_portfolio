import React, {Component} from 'react'
import styles from './Styles/mylinks.module.css'

class MyLinks extends Component{
    render(){
        return(
            <>
            <h1>Links</h1>
            <div className={styles.links_box}>
                <a href="https://github.com/JRMartinez91" target="_blank" rel="noopener noreferrer"><div>
                    <img src="" alt="github logo"/>
                    <h2>Github</h2>
                </div></a>
                <a href="https://www.linkedin.com/in/jrmartinez3d/" target="_blank" rel="noopener noreferrer"><div>
                    <img src="" alt="linkedin logo"/>
                    <h2>Linkedin</h2>
                </div></a>
                <a href="http://google.com"><div>
                    <img src="" alt="medium logo"/>
                    <h2>Medium</h2>
                </div></a>
            </div>
            </>
        )
    }
}

export default MyLinks