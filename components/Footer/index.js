// This is a footer for pages

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <h2 className={styles.title}>RentBarker</h2>
      <h3 className={styles.copyright}>
        ©2021 Barker, LLC. All rights reserved 2021. <br className="d-block d-md-none" />
        U.S. Patent Pending
      </h3>
    </footer>
  )
}