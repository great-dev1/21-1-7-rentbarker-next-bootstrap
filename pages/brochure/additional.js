import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { ProgressBar, Step } from 'react-step-progress-bar'
import 'react-step-progress-bar/styles.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Brochure.module.css'

export default class Additional extends React.Component {
  state = {
    moveMonth: '',
    moveDate: '',
    moveYear: '',
    petYes: false,
    petNo: false,
    petInfo: '',
    esaYes: false,
    esaNo: false,
    smokerYes: false,
    smokerNo: false,
    evictionYes: false,
    evictionNo: false,
    evictionInfo: '',
    judgeYes: false,
    judgeNo: false,
    judgeInfo: '',
    bankruptcyYes: false,
    backruptcyNo: false,
    bankruptcyMonth: '',
    bankruptcyDate: '',
    bankruptcyYear: '',
    validated: false,
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value.toString() });
  }

  handleRadio = (e) => {
    const radio = e.target;
    if (radio.id === 'petRadio1') {
      this.setState({ petYes: radio.checked, petNo: !radio.checked });
    }
    if (radio.id === 'petRadio2') {
      this.setState({ petYes: !radio.checked, petNo: radio.checked });
    }

    if (radio.id === 'esaRadio1') {
      this.setState({ esaYes: radio.checked, esaNo: !radio.checked });
    }
    if (radio.id === 'esaRadio2') {
      this.setState({ esaYes: !radio.checked, esaNo: radio.checked });
    }

    if (radio.id === 'smokerRadio1') {
      this.setState({ smokerYes: radio.checked, smokerNo: !radio.checked });
    }
    if (radio.id === 'smokerRadio2') {
      this.setState({ smokerYes: !radio.checked, smokerNo: radio.checked });
    }

    if (radio.id === 'evictionRadio1') {
      this.setState({ evictionYes: radio.checked, evictionNo: !radio.checked });
    }
    if (radio.id === 'evictionRadio2') {
      this.setState({ evictionYes: !radio.checked, evictionNo: radio.checked });
    }

    if (radio.id === 'judgeRadio1') {
      this.setState({ judgeYes: radio.checked, judgeNo: !radio.checked });
    }
    if (radio.id === 'judgeRadio2') {
      this.setState({ judgeYes: !radio.checked, judgeNo: radio.checked });
    }

    if (radio.id === 'bankruptcyRadio1') {
      this.setState({ bankruptcyYes: radio.checked, bankruptcyNo: !radio.checked });
    }
    if (radio.id === 'bankruptcyRadio2') {
      this.setState({ bankruptcyYes: !radio.checked, bankruptcyNo: radio.checked });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      validated: true,
    })

    const {
      moveMonth, moveDate, moveYear, petYes, petNo, petInfo, esaYes, esaNo,
      smokerYes, smokerNo, evictionYes, evictionNo, evictionInfo, judgeYes, judgeNo, judgeInfo,
      bankruptcyYes, bankruptcyNo, bankruptcyMonth, bankruptcyDate, bankruptcyYear,
    } = this.state;

    localStorage.setItem('moveMonth', moveMonth);
    localStorage.setItem('moveDate', moveDate);
    localStorage.setItem('moveYear', moveYear);
    localStorage.setItem('petYes', petYes);
    localStorage.setItem('petNo', petNo);
    localStorage.setItem('petInfo', petInfo);
    localStorage.setItem('esaYes', esaYes);
    localStorage.setItem('esaNo', esaNo);
    localStorage.setItem('smokerYes', smokerYes);
    localStorage.setItem('smokerNo', smokerNo);
    localStorage.setItem('evictionYes', evictionYes);
    localStorage.setItem('evictionNo', evictionNo);
    localStorage.setItem('evictionInfo', evictionInfo);
    localStorage.setItem('judgeYes', judgeYes);
    localStorage.setItem('judgeNo', judgeNo);
    localStorage.setItem('judgeInfo', judgeInfo);
    localStorage.setItem('bankruptcyYes', bankruptcyYes);
    localStorage.setItem('bankruptcyNo', bankruptcyNo);
    localStorage.setItem('bankruptcyMonth', bankruptcyMonth);
    localStorage.setItem('bankruptcyDate', bankruptcyDate);
    localStorage.setItem('bankruptcyYear', bankruptcyYear);

    const form = e.currentTarget;
    if (form.checkValidity()) {
      Router.push('/brochure/employment');
    }
  }

  componentDidMount() {
    const moveMonth = localStorage.getItem('moveMonth') !== null ? localStorage.getItem('moveMonth') : '12';
    const moveDate = localStorage.getItem('moveDate') !== null ? localStorage.getItem('moveDate') : '1';
    const moveYear = localStorage.getItem('moveYear') !== null ? localStorage.getItem('moveYear') : '2020';
    const petYes = localStorage.getItem('petYes') === 'true';
    const petNo = localStorage.getItem('petNo') === 'true';
    const petInfo = localStorage.getItem('petInfo') !== null ? localStorage.getItem('petInfo') : 'Dog, Yellow, Lab, 2 yers old, 60 lbs';
    const esaYes = localStorage.getItem('esaYes') === 'true';
    const esaNo = localStorage.getItem('esaNo') === 'true';
    const smokerYes = localStorage.getItem('smokerYes') === 'true';
    const smokerNo = localStorage.getItem('smokerNo') === 'true';
    const evictionYes = localStorage.getItem('evictionYes') === 'true';
    const evictionNo = localStorage.getItem('evictionNo') === 'true';
    const evictionInfo = localStorage.getItem('evictionInfo') !== null ? localStorage.getItem('evictionInfo') : 'Eviction info';
    const judgeYes = localStorage.getItem('judgeYes') === 'true';
    const judgeNo = localStorage.getItem('judgeNo') === 'true';
    const judgeInfo = localStorage.getItem('judgeInfo') !== null ? localStorage.getItem('judgeInfo') : 'Judgement info';
    const bankruptcyYes = localStorage.getItem('bankruptcyYes') === 'true';
    const bankruptcyNo = localStorage.getItem('bankruptcyNo') === 'true';
    const bankruptcyMonth = localStorage.getItem('bankruptcyMonth') !== null ? localStorage.getItem('bankruptcyMonth') : '1';
    const bankruptcyDate = localStorage.getItem('bankruptcyDate') !== null ? localStorage.getItem('bankruptcyDate') : '1';
    const bankruptcyYear = localStorage.getItem('bankruptcyYear') !== null ? localStorage.getItem('bankruptcyYear') : '2018';

    this.setState({
      moveMonth, moveDate, moveYear, petYes, petNo, petInfo, esaYes, esaNo,
      smokerYes, smokerNo, evictionYes, evictionNo, evictionInfo, judgeYes, judgeNo, judgeInfo,
      bankruptcyYes, bankruptcyNo, bankruptcyMonth, bankruptcyDate, bankruptcyYear,
    });
  }

  render() {
    const {
      moveMonth, moveDate, moveYear, petYes, petNo, petInfo, esaYes, esaNo,
      smokerYes, smokerNo, evictionYes, evictionNo, evictionInfo, judgeYes, judgeNo, judgeInfo,
      bankruptcyYes, bankruptcyNo, bankruptcyMonth, bankruptcyDate, bankruptcyYear,
      validated,
    } = this.state;

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

              <Form className={styles.form} noValidate validated={validated} onSubmit={this.handleSubmit}>
                <h4 className={styles.input_title}>Desired Move-in Date</h4>
                <Row>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="moveMonth"
                      as="select"
                      value={moveMonth}
                      onChange={this.handleChange}
                      custom
                      required
                    >
                      <option value="">Month</option>
                      <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option>
                      <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option>
                      <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option>
                    </Form.Control>
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="moveDate"
                      as="select"
                      value={moveDate}
                      onChange={this.handleChange}
                      custom
                      required
                    >
                      <option value="">Day</option>
                      <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option>
                      <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option>
                      <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option>
                      <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option>
                      <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option>
                      <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option>
                      <option value="31">31</option>
                    </Form.Control>
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="moveYear"
                      type="text"
                      placeholder="Year (YYYY)"
                      value={moveYear}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Row>

                <div className={styles.quiz}>
                  <p>Do you (or any household member) have any pets?</p>
                  <Form.Check
                    id="petRadio1"
                    name="petYes"
                    checked={petYes}
                    onChange={this.handleRadio}
                    type="radio"
                    label="Yes"
                    required
                  />
                  <Form.Check
                    id="petRadio2"
                    name="petYes"
                    checked={petNo}
                    onChange={this.handleRadio}
                    type="radio"
                    label="No"
                    required
                  />

                  {petYes &&
                    <div className={styles.addition_input}>
                      <h4 className={styles.input_title}>
                        Please provide the species, breed, age, and weight of the pet:
                      </h4>
                      <Row>
                        <Col md={8}>
                          <Form.Control
                            className={styles.input_box}
                            name="petInfo"
                            value={petInfo}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Species, breed, age, and weight"
                            required
                          />
                        </Col>
                      </Row>
                    </div>
                  }
                </div>

                {petYes &&
                  <div className={styles.quiz}>
                    <p>Is the pet a registered Emotional Support Animal?</p>
                    <Form.Check
                      id="esaRadio1"
                      name="esaYes"
                      checked={esaYes}
                      onChange={this.handleRadio}
                      type="radio"
                      label="Yes"
                      required
                    />
                    <Form.Check
                      id="esaRadio2"
                      name="esaYes"
                      checked={esaNo}
                      onChange={this.handleRadio}
                      type="radio"
                      label="No"
                      required
                    />
                  </div>
                }

                <div className={styles.quiz}>
                  <p>Are you (or any household member) a smoker?</p>
                  <Form.Check
                    id="smokerRadio1"
                    name="smokerYes"
                    checked={smokerYes}
                    onChange={this.handleRadio}
                    type="radio"
                    label="Yes"
                    required
                  />
                  <Form.Check
                    id="smokerRadio2"
                    name="smokerYes"
                    checked={smokerNo}
                    onChange={this.handleRadio}
                    type="radio"
                    label="No"
                    required
                  />
                </div>

                <div className={styles.quiz}>
                  <p>Have you ever been evicted?</p>
                  <Form.Check
                    id="evictionRadio1"
                    name="evictionYes"
                    checked={evictionYes}
                    onChange={this.handleRadio}
                    type="radio"
                    label="Yes"
                    required
                  />
                  <Form.Check
                    id="evictionRadio2"
                    name="evictionYes"
                    checked={evictionNo}
                    onChange={this.handleRadio}
                    type="radio"
                    label="No"
                    required
                  />

                  {evictionYes &&
                    <div className={styles.addition_input}>
                      <h4 className={styles.input_title}>
                        If yes, please explain:
                      </h4>
                      <Row>
                        <Col md={8}>
                          <Form.Control
                            className={styles.input_box}
                            name="evictionInfo"
                            value={evictionInfo}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Explain eviction details"
                            required
                          />
                        </Col>
                      </Row>
                    </div>
                  }
                </div>

                <div className={styles.quiz}>
                  <p>Do you have any judgements or liens?</p>
                  <Form.Check
                    id="judgeRadio1"
                    name="judgeYes"
                    checked={judgeYes}
                    onChange={this.handleRadio}
                    type="radio"
                    label="Yes"
                    required
                  />
                  <Form.Check
                    id="judgeRadio2"
                    name="judgeYes"
                    checked={judgeNo}
                    onChange={this.handleRadio}
                    type="radio"
                    label="No"
                    required
                  />

                  {judgeYes &&
                    <div className={styles.addition_input}>
                      <h4 className={styles.input_title}>
                        If yes, please explain:
                      </h4>
                      <Row>
                        <Col md={8}>
                          <Form.Control
                            className={styles.input_box}
                            name="judgeInfo"
                            value={judgeInfo}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Explain judgement or liens"
                            required
                          />
                        </Col>
                      </Row>
                    </div>
                  }
                </div>

                <div className={styles.quiz}>
                  <p>Have you ever filed for bankruptcy?</p>
                  <Form.Check
                    id="bankruptcyRadio1"
                    name="bankruptcyYes"
                    checked={bankruptcyYes}
                    onChange={this.handleRadio}
                    type="radio"
                    label="Yes"
                    required
                  />
                  <Form.Check
                    id="bankruptcyRadio2"
                    name="bankruptcyYes"
                    checked={bankruptcyNo}
                    onChange={this.handleRadio}
                    type="radio"
                    label="No"
                    required
                  />

                  {bankruptcyYes &&
                    <div className={styles.addition_input}>
                      <h4 className={styles.input_title}>
                        If yes, please provide the date:
                      </h4>
                      <Row>
                        <Col md={4}>
                          <Form.Control
                            className={styles.input_box}
                            name="bankruptcyMonth"
                            as="select"
                            value={bankruptcyMonth}
                            onChange={this.handleChange}
                            custom
                            required
                          >
                            <option value="">Month</option>
                            <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option>
                            <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option>
                            <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option>
                          </Form.Control>
                        </Col>
                        <Col md={4}>
                          <Form.Control
                            className={styles.input_box}
                            name="bankruptcyDate"
                            as="select"
                            value={bankruptcyDate}
                            onChange={this.handleChange}
                            custom
                            required
                          >
                            <option value="">Day</option>
                            <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option>
                            <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option>
                            <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option>
                            <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option>
                            <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option>
                            <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option>
                            <option value="31">31</option>
                          </Form.Control>
                        </Col>
                        <Col md={4}>
                          <Form.Control
                            className={styles.input_box}
                            name="bankruptcyYear"
                            value={bankruptcyYear}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Year (YYYY)"
                            required
                          />
                        </Col>
                      </Row>
                    </div>
                  }
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-end align-items-center">
                  <Link href="/brochure/personal">
                    <a><MyButton width="205px" height="45px" margin="20px">PREVIOUS PAGE</MyButton></a>
                  </Link>

                  <Button className={styles.continue_btn} type="submit">CONTINUE</Button>
                </div>
              </Form>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}