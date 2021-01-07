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
      {/* <img src="/testback-10.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}
      <Head>
        <title>Additional Information</title>
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
            <ProgressBar percent={33.33} filledBackground="#007c77">
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
            <h2 className={styles.form_title}>Additional Information</h2>

            <Form className={styles.form}>
              <h4 className={styles.input_title}>Desired Move-in Date</h4>
              <Row>
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

              <div className={styles.quiz}>
                <p>Do you (or any household member) have any pets?</p>
                <Form.Check type="radio" label="Yes" name="petRadios" id="petRadio1" />
                <Form.Check type="radio" label="No" name="petRadios" id="petRadio2" />

                <div className={styles.addition_input}>
                  <h4 className={styles.input_title}>
                    Please provide the species, breed, age, and weight of the pet:
                  </h4>
                  <Row>
                    <Col md={8}>
                      <Form.Control className={styles.input_box} type="text" placeholder="Species, breed, age, and weight" />
                    </Col>
                  </Row>
                </div>
              </div>

              <div className={styles.quiz}>
                <p>Is the pet a registered Emotional Support Animal?</p>
                <Form.Check type="radio" label="Yes" name="emotionRadios" id="emotionRadio1" />
                <Form.Check type="radio" label="No" name="emotionRadios" id="emotionRadio2" />
              </div>

              <div className={styles.quiz}>
                <p>Are you (or any household member) a smoker?</p>
                <Form.Check type="radio" label="Yes" name="smokerRadios" id="smokerRadio1" />
                <Form.Check type="radio" label="No" name="smokerRadios" id="smokerRadio2" />
              </div>

              <div className={styles.quiz}>
                <p>Have you ever been evicted?</p>
                <Form.Check type="radio" label="Yes" name="evictedRadios" id="evictedRadio1" />
                <Form.Check type="radio" label="No" name="evictedRadios" id="evictedRadio2" />

                <div className={styles.addition_input}>
                  <h4 className={styles.input_title}>
                    If yes, please explain:
                  </h4>
                  <Row>
                    <Col md={8}>
                      <Form.Control className={styles.input_box} type="text" placeholder="Explain eviction details" />
                    </Col>
                  </Row>
                </div>
              </div>

              <div className={styles.quiz}>
                <p>Do you have any judgements or liens?</p>
                <Form.Check type="radio" label="Yes" name="judgeRadios" id="judgeRadio1" />
                <Form.Check type="radio" label="No" name="judgeRadios" id="judgeRadio2" />

                <div className={styles.addition_input}>
                  <h4 className={styles.input_title}>
                    If yes, please explain:
                  </h4>
                  <Row>
                    <Col md={8}>
                      <Form.Control className={styles.input_box} type="text" placeholder="Explain judgement or liens" />
                    </Col>
                  </Row>
                </div>
              </div>

              <div className={styles.quiz}>
                <p>Have you ever filed for bankruptcy?</p>
                <Form.Check type="radio" label="Yes" name="bankruptRadios" id="bankruptRadio1" />
                <Form.Check type="radio" label="No" name="bankruptRadios" id="bankruptRadio2" />

                <div className={styles.addition_input}>
                  <h4 className={styles.input_title}>
                    If yes, please provide the date:
                  </h4>
                  <Row>
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
                </div>
              </div>
            </Form>

            <div className={styles.continue_btn}>
              <MyButton width="205px" height="45px" margin="10px">PREVIOUS PAGE</MyButton>
              <MyButton blue width="205px" height="45px" margin="10px">CONTINUE</MyButton>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}