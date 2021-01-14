import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Button } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import CreditCircle from './CreditCircle'
import utils from '../../styles/utils.module.css'
import styles from './Credit.module.css'

export default class Credit extends React.Component {
  state = {
    useGuarantor: false,
  }

  handleChange = (e) => {
    const value = e.target.checked;
    this.setState({ useGuarantor: value });
  }

  handleSubmit = (e) => {
    const { useGuarantor } = this.state;
    localStorage.setItem('useGuarantor', useGuarantor);
  }

  componentDidMount() {
    const useGuarantor = localStorage.getItem('useGuarantor') === 'true';
    this.setState({ useGuarantor });
  }

  render() {
    const { useGuarantor } = this.state;

    return (
      <div>
        {/* <img src="/testback-6.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

        <Head>
          <title>Credit Score</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
          <Navbar />
        </header>

        <main className={styles.main}>
          <Container className={utils.container}>
            <h1 className={utils.primary_title}>Credit Score</h1>
            <h2 className={utils.secondary_title}>
              Please estimate your current credti score. This credit score will be verified.
            </h2>

            <Form>
              <Form.Check
                name="useGuarantor"
                checked={this.state.useGuarantor}
                onChange={this.handleChange}
                type="checkbox"
                label="I am using a guarantor, and estimating their credit score."
              />

              <div className={styles.circle_group}>
                <div className="d-flex justify-content-center flex-wrap">
                  <CreditCircle>Excellent<br />720+</CreditCircle>
                  <CreditCircle>Good<br />680-719</CreditCircle>
                  <CreditCircle>Fair<br />640-679</CreditCircle>
                  <CreditCircle>Poor<br />639-</CreditCircle>
                </div>
              </div>

              {useGuarantor && (
                <div>
                  <div className={styles.circle_group}>
                    <h2 className={styles.credit_title}>
                      Please estimate your roommate's credit score.
                    </h2>
                    <div className="d-flex justify-content-center flex-wrap">
                      <CreditCircle>Excellent<br />720+</CreditCircle>
                      <CreditCircle>Good<br />680-719</CreditCircle>
                      <CreditCircle>Fair<br />640-679</CreditCircle>
                      <CreditCircle>Poor<br />639-</CreditCircle>
                    </div>
                  </div>

                  <div className={styles.circle_group}>
                    <h2 className={styles.credit_title}>
                      Please estimate your guarantor's credit score.
                    </h2>
                    <div className="d-flex justify-content-center flex-wrap">
                      <CreditCircle>Excellent<br />720+</CreditCircle>
                      <CreditCircle>Good<br />680-719</CreditCircle>
                      <CreditCircle>Fair<br />640-679</CreditCircle>
                      <CreditCircle>Poor<br />639-</CreditCircle>
                    </div>
                  </div>
                </div>
              )}

              <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                <Link href="/budget">
                  <div className={styles.back_btn}>
                    <MyButton width="100%" height="50px" margin="0">BACK</MyButton>
                  </div>
                </Link>

                <Link href="/signup">
                  <div className={styles.save_btn}>
                    <Button className={utils.submit_btn} onClick={this.handleSubmit}>SAVE & CREATE ACCOUNT</Button>
                  </div>
                </Link>
              </div>
            </Form>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}