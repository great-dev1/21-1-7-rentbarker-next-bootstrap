import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Welcome.module.css'

export default class Welcome extends React.Component {
  state = {
    logged: false,
    firstName: '',
  }

  componentDidMount() {
    const logged = localStorage.getItem('logged') === 'true';
    const firstName = logged ? localStorage.getItem('fullName').split(' ')[0] : '';
    this.setState({ logged, firstName });
  }

  render() {
    const { firstName } = this.state;

    return (
      <div>
        <Head>
          <title>Welcome</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container className={utils.container}>
          <main className={styles.main}>
            <h2 className={styles.title}>Welcome, {firstName}!</h2>
            <p className={styles.detail}>
              All of your properties and preferences have been saved! There's only one step
              left to create your Barker Brochure: the free application. Again, we won't
              disclose your identity or contact information until you choose to accept an offer.
              We only share necessary information for landlords to consider to make you an
              offer, such as your requirements, job history and credit score.
            </p>

            <div className="d-sm-flex flex-column align-items-center">
              <div className="m-2">
                <Link href="/brochure">
                  <a><MyButton width="275px" height="45px">CONTINUE TO MY APPLICATION</MyButton></a>
                </Link>
              </div>

              <div className="m-2">
                <Link href="/">
                  <a><MyButton width="275px" height="45px" borderColor="#" color="#126660" backgroundColor="#ffffff">SAVE FOR LATER</MyButton></a>
                </Link>
              </div>
            </div>
          </main>
        </Container>
        <Footer />
      </div >
    )
  }
}