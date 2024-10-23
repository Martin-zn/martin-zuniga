import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section className={styles.container} id='footer'>
        <p> &copy; 2024 Martín Zúñiga. <br/>   
        All rights reserved. <br />
        MARTINZUNIGANU@GMAIL.COM | +56 934418828
        </p>
    </section>
  )
}

export default Footer
