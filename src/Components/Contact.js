//this page will include my contact information and a small bio, as well as a photo of me

import React, {Component} from 'react'
import styles from './Styles/contact.module.css'

class Contact extends Component {
    render(){
        return(
            <>
            <h1 className={styles.about_title}>About Me</h1>
            <div className={styles.about_wrapper}>
                <div className={styles.photo_box}>
                    <img src="https://i.imgur.com/2fYqvrh.jpg" alt="photo of me"/>
                </div>
                <div className={styles.contact_box}>
                    <p>Web developer with a background in visual art and design, bringing creative
solutions to any kind of problem. I take great pride in the feeling of bringing a big
project together piece by piece, and delivering clients the satisfaction of getting
exactly what they need. I believe on principle that attention to detail is paramount.</p>
<p>A newcomer to the world of technology, having made a career change from the arts in 2020, ready willing and able to learn new skills and meet new people.</p>
                    <h2>jrmartinez3d@gmail.com</h2>
                    <h2>347 247 2896</h2>
                </div>
            </div>
            </>
        )
    }
}

export default Contact