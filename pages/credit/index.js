import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import utils from '../../styles/utils.module.css'
import styles from './Credit.module.css'

export default class Credit extends React.Component {
  state = {
    useGuarantor: false,
    myCredit: '',
  }

  handleCheck = (e) => {
    const value = e.target.checked;
    this.setState({ useGuarantor: value });
  }

  handleChange = (variable, value) => () => {
    this.setState({
      [variable]: value
    });
  }

  handleSubmit = () => {
    const { useGuarantor, myCredit } = this.state;

    localStorage.setItem('useGuarantor', useGuarantor);
    localStorage.setItem('myCredit', myCredit);
  }

  componentDidMount() {
    const useGuarantor = localStorage.getItem('useGuarantor') === 'true';
    const myCredit = localStorage.getItem('myCredit') !== null ? localStorage.getItem('myCredit') : '';

    this.setState({ useGuarantor, myCredit });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { useGuarantor, myCredit } = this.state;

    return (
      <div>
        <Head>
          <title>Credit Score</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <img className={styles.body_back} src="/bed/main-back.jpg" alt="back" />

        <main className={styles.main}>
          <Container className="d-flex justify-content-md-center align-items-center">
            <Link href="/budget">
              <a className="d-block d-sm-none">
                <FontAwesomeIcon icon={faChevronLeft} className={utils.chevron_left} />
              </a>
            </Link>

            <h2 className={styles.primary_title}>
              Credit Score
            </h2>
          </Container>

          <Container className={styles.container}>
            <div className={styles.main_content}>
              <h3 className={styles.secondary_title}>
                Please estimate your current credit score. This credit score will be verified.
              </h3>

              <label className={styles.check_label}>
                <input
                  className={styles.check_box}
                  name="useGuarantor"
                  checked={useGuarantor}
                  onChange={this.handleCheck}
                  type="checkbox"
                  inline
                />
                I am using a guarantor, and estimating their credit score.
              </label>

              <div className={styles.box_group}>
                <div
                  className={myCredit === '639-' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('myCredit', '639-')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <div>
                      <p className={styles.box_num}>639-</p>
                      <p className={styles.box_text}>Poor</p>
                    </div>
                  </div>
                </div>

                <div
                  className={myCredit === '640-679' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('myCredit', '640-679')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <div>
                      <p className={styles.box_num}>640-679</p>
                      <p className={styles.box_text}>Fair</p>
                    </div>
                  </div>
                </div>

                <div
                  className={myCredit === '680-719' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('myCredit', '680-719')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <div>
                      <p className={styles.box_num}>680-719</p>
                      <p className={styles.box_text}>Good</p>
                    </div>
                  </div>
                </div>

                <div
                  className={myCredit === '720+' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('myCredit', '720+')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <div>
                      <p className={styles.box_num}>720+</p>
                      <p className={styles.box_text}>Excellent</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.btn_group}>
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                  <Link href="/budget">
                    <a className={utils.prev_link}>PREVIOUS PAGE</a>
                  </Link>

                  <Link href={useGuarantor ? "/credit/roommate" : "/signup"}>
                    <a className={utils.continue_btn} onClick={this.handleSubmit}>
                      <span className="pl-3">CONTINUE</span>
                      <img className="ml-2" src="/right-arrow.png" alt="arrow" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}