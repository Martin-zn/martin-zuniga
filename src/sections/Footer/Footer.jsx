import React from 'react'
import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section className={styles.container} id='footer'>
        <p> &copy; 2024 Martín Zúñiga. <br/>   
        All rights reserved. <br />
        MARTIN.ZUNIGANU@GMAIL.COM
        </p>
    </section>
  )
}

export default Footer
