import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { Form, Row, Col } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
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
    const moveDate = localStorage.getItem('moveDate') !== null ? localStorage.getItem('moveDate') : '01';
    const moveYear = localStorage.getItem('moveYear') !== null ? localStorage.getItem('moveYear') : '2020';
    const petYes = localStorage.getItem('petYes') === 'true';
    const petNo = localStorage.getItem('petNo') === 'true';
    const petInfo = localStorage.getItem('petInfo') !== null ? localStorage.getItem('petInfo') : 'Dog, Yellow, Lab, 2 years old, 60 lbs';
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

  componentDidUpdate() {
    console.log(this.state);
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
        <Head>
          <title>Additional Information</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.navbar}>
          <Navbar />
        </div>

        <header className={styles.header}>
          <Link href="/brochure">
            <a>
              <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron_left} />
            </a>
          </Link>

          <div className="d-flex justify-content-center">
            <Link href="/">
              <a className={styles.brand}>
                <img src="/brochure/brand.png" alt="brand" />
              </a>
            </Link>
          </div>

          <div className={styles.header_step}>
            <img src="/brochure/info-icon.png" alt="info" />
            <div className={styles.progress_step_text}>
              <p className={styles.progress_step_title_orange}>STEP 02 <span className={styles.progress_step_title_grey}> / 04</span></p>
              <p className={styles.progress_step_detail_white}>Additional Info</p>
            </div>
          </div>

          <div className={styles.progress_bar}>
            <div className={styles.progress_step_two}></div>
            <div className={styles.progress_step_rest}></div>
          </div>
        </header>

        <main>
          <div className={styles.main_content}>
            <div className={styles.left_content}>
              <div className={styles.progress_header}>
                <img src="/brochure/info-icon.png" alt="info" />
                <p className={styles.progress_header_text}>
                  COMPLETE<br />
                  ALL STEPS:
                </p>
              </div>

              <div className={styles.progress_step}>
                <img src="/brochure/check-icon.png" alt="check" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_grey}>STEP 01</p>
                  <p className={styles.progress_step_detail_white}>Basic Details</p>
                </div>
              </div>

              <div className={styles.progress_divider_white}></div>

              <div className={styles.progress_step}>
                <img src="/brochure/step-2-orange.png" alt="step 2" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_orange}>STEP 02</p>
                  <p className={styles.progress_step_detail_white}>Additional Info</p>
                </div>
              </div>

              <div className={styles.progress_divider_grey}></div>

              <div className={styles.progress_step}>
                <img src="/brochure/step-3-grey.png" alt="step 3" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_grey}>STEP 03</p>
                  <p className={styles.progress_step_detail_grey}>Employment</p>
                </div>
              </div>

              <div className={styles.progress_divider_grey}></div>

              <div className={styles.progress_step}>
                <img src="/brochure/step-4-grey.png" alt="step 4" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_grey}>STEP 04</p>
                  <p className={styles.progress_step_detail_grey}>Review</p>
                </div>
              </div>
            </div>

            <div className={styles.right_content}>
              <div className="d-none d-md-block">
                <h2 className={styles.primary_title}>Your Barker Brochure</h2>
                <p className={styles.primary_detail}>
                  This free application will be used for all landlords that bid on you.No hidden fees and hassle-free!<br />
                  Your personal information will remain anonymous to all landlords.
                </p>
              </div>

              <Form className={styles.form} noValidate validated={validated} onSubmit={this.handleSubmit}>
                <h4 className={styles.secondary_title}>Desired Move-in Date</h4>
                <Row>
                  <Col xs={6} md={4}>
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
                      <option value="01">1</option> <option value="02">2</option> <option value="03">3</option> <option value="04">4</option>
                      <option value="05">5</option> <option value="06">6</option> <option value="07">7</option> <option value="08">8</option>
                      <option value="09">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option>
                    </Form.Control>
                  </Col>
                  <Col xs={6} md={4}>
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
                      <option value="01">1</option> <option value="02">2</option> <option value="03">3</option> <option value="04">4</option> <option value="05">5</option>
                      <option value="06">6</option> <option value="07">7</option> <option value="08">8</option> <option value="09">9</option> <option value="10">10</option>
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
                  <h4 className={styles.secondary_title}>Do you (or any household member) have any pets?</h4>
                  <div className={styles.radio_group}>
                    {!petYes &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="petRadio1"
                        name="petYes"
                        checked={petYes}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {petYes &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={petYes ? styles.green_text : null}>Yes</label><br />

                    {!petNo &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="petRadio2"
                        name="petYes"
                        checked={petNo}
                        onChange={this.handleRadio}
                        type="radio"

                        inline
                      />
                    }
                    {petNo &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={petNo ? styles.green_text : null}>No</label>
                  </div>

                  {petYes &&
                    <div>
                      <div className={styles.addition_input}>
                        <Form.Control
                          className={styles.input_box}
                          name="petInfo"
                          value={petInfo}
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Please provide the species, breed, age, and weight of the pet:"
                          required
                        />
                      </div>
                      <div className={styles.quiz}>
                        <h4 className={styles.secondary_title}>Is the pet a registered Emotional Support Animal?</h4>
                        <div className={styles.radio_group}>
                          {!esaYes &&
                            <Form.Check
                              className={styles.radio_btn}
                              id="esaRadio1"
                              name="esaYes"
                              checked={esaYes}
                              onChange={this.handleRadio}
                              type="radio"
                              inline
                            />
                          }
                          {esaYes &&
                            <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                          }
                          <label className={esaYes ? styles.green_text : null}>Yes</label><br />

                          {!esaNo &&
                            <Form.Check
                              className={styles.radio_btn}
                              id="esaRadio2"
                              name="esaYes"
                              checked={esaNo}
                              onChange={this.handleRadio}
                              type="radio"
                              inline
                            />
                          }
                          {esaNo &&
                            <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                          }
                          <label className={esaNo ? styles.green_text : null}>No</label>

                        </div>
                      </div>
                    </div>
                  }
                </div>

                <div className={styles.quiz}>
                  <h4 className={styles.secondary_title}>Are you (or any household member) a smoker?</h4>
                  <div className={styles.radio_group}>
                    {!smokerYes &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="smokerRadio1"
                        name="smokerYes"
                        checked={smokerYes}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {smokerYes &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={smokerYes ? styles.green_text : null}>Yes</label><br />

                    {!smokerNo &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="smokerRadio2"
                        name="smokerYes"
                        checked={smokerNo}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {smokerNo &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={smokerNo ? styles.green_text : null}>No</label>
                  </div>
                </div>

                <div className={styles.quiz}>
                  <h4 className={styles.secondary_title}>Have you ever been evicted?</h4>
                  <div className={styles.radio_group}>
                    {!evictionYes &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="evictionRadio1"
                        name="evictionYes"
                        checked={evictionYes}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {evictionYes &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={evictionYes ? styles.green_text : null}>Yes</label><br />

                    {!evictionNo &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="evictionRadio2"
                        name="evictionYes"
                        checked={evictionNo}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {evictionNo &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={evictionNo ? styles.green_text : null}>No</label>
                  </div>

                  {evictionYes &&
                    <div className={styles.addition_input}>
                      <Form.Control
                        className={styles.input_box}
                        name="evictionInfo"
                        value={evictionInfo}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Explain eviction details"
                        required
                      />
                    </div>
                  }
                </div>

                <div className={styles.quiz}>
                  <h4 className={styles.secondary_title}>Do you have any judgements or liens?</h4>
                  <div className={styles.radio_group}>
                    {!judgeYes &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="judgeRadio1"
                        name="judgeYes"
                        checked={judgeYes}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {judgeYes &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={judgeYes ? styles.green_text : null}>Yes</label><br />

                    {!judgeNo &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="judgeRadio2"
                        name="judgeYes"
                        checked={judgeNo}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {judgeNo &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={judgeNo ? styles.green_text : null}>No</label>
                  </div>

                  {judgeYes &&
                    <div className={styles.addition_input}>
                      <Form.Control
                        className={styles.input_box}
                        name="judgeInfo"
                        value={judgeInfo}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Explain judgement or liens"
                        required
                      />
                    </div>
                  }
                </div>

                <div className={styles.quiz}>
                  <h4 className={styles.secondary_title}>Have you ever filed for bankruptcy?</h4>
                  <div className={styles.radio_group}>
                    {!bankruptcyYes &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="bankruptcyRadio1"
                        name="bankruptcyYes"
                        checked={bankruptcyYes}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {bankruptcyYes &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={bankruptcyYes ? styles.green_text : null}>Yes</label><br />

                    {!bankruptcyNo &&
                      <Form.Check
                        className={styles.radio_btn}
                        id="bankruptcyRadio2"
                        name="bankruptcyYes"
                        checked={bankruptcyNo}
                        onChange={this.handleRadio}
                        type="radio"
                        inline
                      />
                    }
                    {bankruptcyNo &&
                      <img className={styles.radio_check} src="/brochure/radio-check.png" alt="radio" />
                    }
                    <label className={bankruptcyNo ? styles.green_text : null}>No</label>
                  </div>

                  {bankruptcyYes &&
                    <div className={styles.addition_input}>
                      <Row>
                        <Col xs={6} md={4}>
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
                        <Col xs={6} md={4}>
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

                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                  <Link href="/brochure">
                    <a className={utils.prev_link}>PREVIOUS PAGE</a>
                  </Link>

                  <button className={utils.continue_btn} type="submit">
                    <span className="pl-3">CONTINUE</span>
                    <img className="ml-2" src="/right-arrow.png" alt="arrow" />
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}