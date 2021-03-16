import Head from 'next/head'
import Link from 'next/link'

import utils from '../../styles/utils.module.css'
import styles from './Reset.module.css'

export default function Reset() {
  return (
    <div>
      <Head>
        <title>Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
        <a><img className={styles.logo_bar} src="/login/logo-bar.jpg" alt="logo" /></a>
      </Link>

      <Link href="/">
        <a><img className={styles.logo_bar_mid} src="/login/logo-bar-1.jpg" alt="logo" /></a>
      </Link>

      <main className="d-flex flex-column flex-xl-row">
        <div className={styles.main_img}>
          <img className={styles.main_back} src="/login/main-back.png" alt="back" />

          <Link href="/">
            <a><img className={styles.logo} src="/login/logo.png" alt="logo" /></a>
          </Link>
        </div>

        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <div className={styles.main_content}>
            <h2 className={styles.title}>
              Reset your<br />
              password here
            </h2>

            <form className={styles.form}>
              <input
                className={styles.email_box}
                name="email"
                type="email"
                placeholder="Please enter your email"
                required
              />

              <button className={utils.sign_btn} type="submit">RESET PASSWORD</button>
            </form>

            <div className={styles.bottom_links}>
              <div className="d-flex align-items-center">
                <p className={styles.bottom_text}>Return to</p>
                <Link href="/login">
                  <a className={styles.bottom_link}>Sign In</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}