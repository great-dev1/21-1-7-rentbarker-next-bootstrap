import Head from 'next/head'
import Link from 'next/link'
import { Container, Form } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import CreditCircle from './CreditCircle'
import utils from '../../styles/utils.module.css'
import styles from './Credit.module.css'

export default function Credit() {
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
            <Form.Check type="checkbox" label="I am using a guarantor, and estimating their credit score." />

            <div className={styles.circle_group}>
              <div className="d-flex justify-content-center flex-wrap">
                <CreditCircle>Excellent<br />720+</CreditCircle>
                <CreditCircle>Good<br />680-719</CreditCircle>
                <CreditCircle>Fair<br />640-679</CreditCircle>
                <CreditCircle>Poor<br />639-</CreditCircle>
              </div>
            </div>

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

            <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
              <Link href="/budget">
                <div className={styles.back_btn}>
                  <MyButton width="100%" height="50px" margin="0">BACK</MyButton>
                </div>
              </Link>

              <Link href="/signup">
                <div className={styles.save_btn}>
                  <MyButton blue width="100%" height="50px" margin="0">SAVE & CREATE ACCOUNT</MyButton>
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