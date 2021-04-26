import React, {Component} from 'react'
import styles from './Styles/mylinks.module.css'

class MyLinks extends Component{
    render(){
        return(
            <>
            <h1>Links</h1>
            <div className={styles.links_box}>
                <a href="https://github.com/JRMartinez91" target="_blank" rel="noopener noreferrer"><div>
                    <img className={styles.github_logo} src="images/GitHub-Mark-120px-plus.png" alt="github logo"/>
                    <h2>Github</h2>
                </div></a>
                <a href="https://www.linkedin.com/in/jrmartinez3d/" target="_blank" rel="noopener noreferrer"><div>
                    <img className={styles.linkedin_logo} src="images/LI-in-Bug.png" alt="linkedin logo"/>
                    <h2>Linkedin</h2>
                </div></a>
                <a href="https://medium.com/@jrmartinez3d" target="_blank"><div>
                    <img src="images/Monogram.png" alt="medium logo"/>
                    <h2>Medium</h2>
                </div></a>
            </div>
            <h1>{"Art & Design Portfolio"}</h1>
            <div className={styles.links_box}>
                <a href="https://jrmartinez3d.wixsite.com/gallery" target="_blank"><div>
                        <img src="images/compass image.png" alt="art logo"/>
                        <h2>Gallery</h2>
                    </div></a>
            </div>
            </>
        )
    }
}

export default MyLinks