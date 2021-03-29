import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import utils from '../../styles/utils.module.css'
import styles from './Signup.module.css'

export default class Signup extends React.Component {
  state = {
    fullName: '',
    isLandlord: false,
  }

  handleChange = (e) => {
    this.setState({ fullName: e.target.value });
  }

  handleSubmit = () => {
    const { fullName } = this.state;

    localStorage.setItem('fullName', fullName);
    localStorage.setItem('logged', true);
    // localStorage.setItem('isLandlord', false)
  }

  componentDidMount() {
    const fullName = localStorage.getItem('fullName') !== null ? localStorage.getItem('fullName') : 'Saepul Rohman';
    const isLandlord = localStorage.getItem('isLandlord') === 'true';

    this.setState({ fullName, isLandlord });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { fullName, isLandlord } = this.state;

    return (
      <div>
        <Head>
          <title>Sign up</title>
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
                Create your free<br />
                account
              </h2>

              <form className={styles.form}>
                <input
                  className={styles.email_box}
                  name="fullName"
                  value={fullName}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="What's your full name?"
                  required
                />

                <input
                  className={styles.email_box}
                  name="email"
                  type="email"
                  placeholder="Please enter your email"
                />

                <input
                  className={styles.password_box}
                  name="password"
                  type="password"
                  placeholder="Enter 8 characters or more"
                />

                <div className={styles.check_block}>
                  <h3 className={styles.check_title}>
                    I'm a landlord or property professional
                  </h3>

                  <label className={styles.check_label}>
                    <input
                      className={styles.check_box}
                      name="remember"
                      type="checkbox"
                    />
                    Property Manager
                  </label>

                  <label className={styles.check_label}>
                    <input
                      className={styles.check_box}
                      name="remember"
                      type="checkbox"
                    />
                    Owner
                  </label>

                  <label className={styles.check_label}>
                    <input
                      className={styles.check_box}
                      name="remember"
                      type="checkbox"
                    />
                    Agent
                  </label>

                  <hr />

                  <label className={styles.check_label}>
                    <input
                      className={styles.check_box}
                      name="remember"
                      type="checkbox"
                    />
                    <Link href="/">
                      <a className={styles.terms_link}>
                        I agree to Terms and Conditions
                      </a>
                    </Link>
                  </label>
                </div>

                <Link href={isLandlord ? "/landlord/property/add" : "/brochure"}>
                  <button className={utils.sign_btn} onClick={this.handleSubmit} type="submit">CREATE YOUR ACCOUNT</button>
                </Link>
              </form>

              <div className={styles.bottom_links}>
                <div className="d-flex align-items-center">
                  <p className={styles.bottom_text}>Already have an account?</p>
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
}