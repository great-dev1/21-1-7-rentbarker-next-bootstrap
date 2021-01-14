import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { ProgressBar, Step } from 'react-step-progress-bar'
import 'react-step-progress-bar/styles.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Brochure.module.css'

export default function Brochure() {
  return (
    <div>
      {/* <img src="/testback-11.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}
      <Head>
        <title>Employment Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Container className={utils.container}>
          <h1 className={styles.primary_title}>Build Your Barker Brochure</h1>
          <p>
            This free application will be used for all landlords that bid on you.<br />
            No hidden fees and hassel-free! Your personal information will remain anonymous to all landlords.
          </p>

          <div className={styles.progress_bar}>
            <ProgressBar percent={66.66} filledBackground="#007c77">
              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.complete}>
                    {index + 1}
                  </div>
                )}
              </Step>

              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.complete}>
                    {index + 1}
                  </div>
                )}
              </Step>

              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.complete}>
                    {index + 1}
                  </div>
                )}
              </Step>

              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.incomplete}>
                    {index + 1}
                  </div>
                )}
              </Step>
            </ProgressBar>
          </div>

          <div className={styles.form_container}>
            <h2 className={styles.form_title}>Employment Information</h2>

            <Form className={styles.form}>
              <h4 className={styles.input_title_bg}>Add employment history for the past year</h4>
              <Row>
                <Col md={12}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Current Occupation" />
                </Col>
                <Col md={6}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Employer Name" />
                </Col>
                <Col md={6}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Length of Time" />
                </Col>
                <Col md={12}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Employer Address" />
                </Col>
                <Col md={6}>
                  <Form.Control className={styles.input_box} type="text" placeholder="City" />
                </Col>
                <Col md={3}>
                  <Form.Control className={styles.input_box} as="select" custom>
                    <option>State</option>
                    <option>United States</option>
                    <option>Spain</option>
                    <option>German</option>
                  </Form.Control>
                </Col>
                <Col md={3}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Zipcode" />
                </Col>
              </Row>

              <h3 className={styles.add_text}>
                <div className={styles.plus_btn}>+</div>
                Add Employment
              </h3>

              <h4 className={styles.input_title_bg}>Estimate your income</h4>
              <Row>
                <Col md={12}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Gross Monthly Income" />
                </Col>
              </Row>

              <h4 className={styles.input_title_bg}>Estimate your guarantor's income</h4>
              <Row>
                <Col md={12}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Gross Monthly Income" />
                </Col>
              </Row>

              <h4 className={styles.input_title_bg}>Estimate your roommate(s) income</h4>
              <Row>
                <Col md={12}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Gross Monthly Income (combined if more than one)" />
                </Col>
              </Row>
            </Form>

            <div className={styles.continue_btn}>
              <Link href="/brochure/additional">
                <MyButton width="205px" height="45px" margin="10px">PREVIOUS PAGE</MyButton>
              </Link>

              <Link href="/brochure/submit">
                <MyButton blue width="205px" height="45px" margin="10px">CONTINUE</MyButton>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}