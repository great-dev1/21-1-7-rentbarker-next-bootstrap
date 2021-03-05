import Head from 'next/head'
import Link from 'next/link'

import utils from '../../styles/utils.module.css'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div>
      <Head>
        <title>Log in</title>
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
              Good afternoon!<br />
              Welcome back.
            </h2>

            <form className={styles.form}>
              <input
                className={styles.email_box}
                name="email"
                type="email"
                placeholder="Please enter your email"
                required
              />

              <input
                className={styles.password_box}
                name="password"
                type="password"
                placeholder="Please enter your password"
              />

              <div className="d-flex justify-content-between">
                <label className={styles.check_label}>
                  <input
                    className={styles.check_box}
                    name="remember"
                    type="checkbox"
                  />
                  Remember me
                </label>

                <Link href="/reset">
                  <a className={styles.forgot_link}>Forgot Password?</a>
                </Link>
              </div>

              <button className={utils.sign_btn} type="submit">SIGN IN</button>

              <div className={styles.mid_content}>
                <div className={styles.mid_line}></div>
                <p className={styles.mid_text}>Or</p>
                <div className={styles.mid_line}></div>
              </div>

              <button className={styles.social_btn}>
                <img className="mr-2" src="/login/google-icon.png" alt="google" />
                SIGN IN WITH GOOGLE
              </button>
              <button className={styles.social_btn}>
                <img className="mr-2" src="/login/facebook-icon.png" alt="facebook" />
                SIGN IN WITH FACEBOOK
              </button>
            </form>

            <div className={styles.bottom_links}>
              <div className="d-flex align-items-center">
                <p className={styles.bottom_text}>Don't have an account?</p>
                <Link href="/signup">
                  <a className={styles.bottom_link}>Sign Up</a>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <p className={styles.bottom_text}>Would you like about terms?</p>
                <Link href="/">
                  <a className={styles.bottom_link}>Terms and Conditions</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}