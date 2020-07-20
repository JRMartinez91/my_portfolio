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
                    <img alt="photo of me"/>
                </div>
                <div className={styles.contact_box}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et magna maximus, volutpat mauris eleifend, ultricies neque. Fusce ut lorem mattis, sagittis arcu eleifend, mattis ante. Morbi pharetra eleifend neque, eget scelerisque ante gravida quis. Ut et orci eget est aliquet lacinia nec eget felis. Donec convallis scelerisque massa, a eleifend massa fringilla ac. In est velit, tempus ac ullamcorper vitae, hendrerit vel est. Nullam quis orci lacus. Vestibulum maximus magna sed fringilla faucibus. Nulla finibus vehicula urna eget sagittis. Curabitur id risus porttitor enim ultrices interdum. Ut in nulla rhoncus, porta nulla sit amet, feugiat metus. Maecenas id lacus auctor, venenatis mi sit amet, viverra eros. Fusce aliquet, nibh at tempus facilisis, augue diam efficitur magna, non dignissim libero ligula non mauris. Aenean fringilla quis neque vitae iaculis. In id auctor mauris.</p>
                    <h2>jrmartinez3d@gmail.com</h2>
                    <h2>347 247 2896</h2>
                </div>
            </div>
            </>
        )
    }
}

export default Contact