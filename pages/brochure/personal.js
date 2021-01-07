import Head from 'next/head'
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
      {/* <img src="/testback-9.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

      <Head>
        <title>Personal Information</title>
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
            <ProgressBar percent={0} filledBackground="#007c77">
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

              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.incomplete}>
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
            <h2 className={styles.form_title}>Personal Information</h2>

            <Form className={styles.form}>
              <Row>
                <Col md={8}>
                  <Form.Control className={styles.input_box} type="text" placeholder="First Name" />
                </Col>
                <Col md={4}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Middle Name (optional)" />
                </Col>
                <Col md={12}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Last Name" />
                </Col>
              </Row>

              <h4 className={styles.input_title}>Date of Birth</h4>
              <Row className={styles.input_row}>
                <Col md={4}>
                  <Form.Control className={styles.input_box} as="select" custom>
                    <option>Month</option>
                    <option>1</option> <option>2</option> <option>3</option> <option>4</option>
                    <option>5</option> <option>6</option> <option>7</option> <option>8</option>
                    <option>9</option> <option>10</option> <option>11</option> <option>12</option>
                  </Form.Control>
                </Col>
                <Col md={4}>
                  <Form.Control className={styles.input_box} as="select" custom>
                    <option>Day</option>
                    <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option>
                    <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>
                    <option>11</option> <option>12</option> <option>13</option> <option>14</option> <option>15</option>
                    <option>16</option> <option>17</option> <option>18</option> <option>19</option> <option>20</option>
                    <option>21</option> <option>22</option> <option>23</option> <option>24</option> <option>25</option>
                    <option>26</option> <option>27</option> <option>28</option> <option>29</option> <option>30</option>
                    <option>31</option>
                  </Form.Control>
                </Col>
                <Col md={4}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Year (YYYY)" />
                </Col>
              </Row>

              <h4 className={styles.input_title}>Current Address</h4>
              <Row className={styles.input_row}>
                <Col md={8}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Address" />
                </Col>
                <Col md={4}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Unit/Apart (optional)" />
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

                <Col md={6}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Monthly Rent" />
                </Col>
                <Col md={6}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Length of Time" />
                </Col>
                <Col md={12}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Reason for Moving" />
                </Col>
              </Row>

              <h4 className={styles.input_title}>Previous Address (if current lease is under a year)</h4>
              <Row className={styles.input_row}>
                <Col md={8}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Address" />
                </Col>
                <Col md={4}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Unit/Apart (optional)" />
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

                <Col md={6}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Monthly Rent" />
                </Col>
                <Col md={6}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Length of Time" />
                </Col>
                <Col md={12}>
                  <Form.Control className={styles.input_box} type="text" placeholder="Reason for Moving" />
                </Col>
              </Row>
            </Form>

            <div className={styles.continue_btn}>
              <MyButton blue width="205px" height="45px" margin="0">CONTINUE</MyButton>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}