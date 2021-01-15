import React from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Welcome.module.css'

export default class Welcome extends React.Component {
  state = {
    firstName: '',
  }

  componentDidMount() {
    const firstName = localStorage.getItem('fullName').split(' ')[0];
    this.setState({ firstName });
  }

  render() {
    const { firstName } = this.state;
    return (
      <div>
        {/* <img src="/testback-8.png" style={{ position: "absolute", "zIndex": "99", top: "-250px", width: "100%", opacity: "0.5" }} /> */}

        <Container className={utils.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Welcome, {firstName}!</h1>
            <p className={styles.detail}>
              All of your properties and preferences have been saved! There's only one step
              left to create your Barker Brochure: the free application. Again, we won't
              disclose your identity or contact information until you choose to accept an offer.
              We only share necessary information for landlords to consider to make you an
              offer, such as your requirements, job history and credit score.
            </p>

            <div className={styles.btn_group}>
              <Link href="/brochure/personal">
                <a><MyButton blue width="275px" height="45px" margin="10px">CONTINUE TO MY APPLICATION</MyButton></a>
              </Link>

              <Link href="/">
                <a><MyButton width="275px" height="45px" margin="10px">SAVE FOR LATER</MyButton></a>
              </Link>
            </div>
          </main>
        </Container>
        <Footer />
      </div>
    )
  }
}