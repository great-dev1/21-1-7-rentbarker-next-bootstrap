import Link from 'next/link'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>RentBarker</h2>
      <h3 className={styles.copyright}>
        ©2020 Barker, LLC. All rights reserved 2020.<br className="d-block d-md-none" />
        U.S. Patent Pending
      </h3>
    </div>
  )
}