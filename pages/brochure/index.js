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

export default class Personal extends React.Component {
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthMonth: '',
    birthDate: '',
    birthYear: '',
    currentAddress: '',
    currentUnit: '',
    currentCity: '',
    currentState: '',
    currentZipcode: '',
    currentRent: '',
    currentLength: '',
    currentReason: '',
    prevAddress: '',
    prevUnit: '',
    prevCity: '',
    prevState: '',
    prevZipcode: '',
    prevRent: '',
    prevLength: '',
    prevReason: '',
    validated: false,
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value.toString() });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      validated: true,
    })

    const {
      firstName, middleName, lastName, birthMonth, birthDate, birthYear,
      currentAddress, currentUnit, currentCity, currentState, currentZipcode, currentRent, currentLength, currentReason,
      prevAddress, prevUnit, prevCity, prevState, prevZipcode, prevRent, prevLength, prevReason,
    } = this.state;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('middleName', middleName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('birthMonth', birthMonth);
    localStorage.setItem('birthDate', birthDate);
    localStorage.setItem('birthYear', birthYear);
    localStorage.setItem('currentAddress', currentAddress);
    localStorage.setItem('currentUnit', currentUnit);
    localStorage.setItem('currentCity', currentCity);
    localStorage.setItem('currentState', currentState);
    localStorage.setItem('currentZipcode', currentZipcode);
    localStorage.setItem('currentRent', currentRent);
    localStorage.setItem('currentLength', currentLength);
    localStorage.setItem('currentReason', currentReason);
    localStorage.setItem('prevAddress', prevAddress);
    localStorage.setItem('prevUnit', prevUnit);
    localStorage.setItem('prevCity', prevCity);
    localStorage.setItem('prevState', prevState);
    localStorage.setItem('prevZipcode', prevZipcode);
    localStorage.setItem('prevRent', prevRent);
    localStorage.setItem('prevLength', prevLength);
    localStorage.setItem('prevReason', prevReason);

    const form = e.currentTarget;
    if (form.checkValidity()) {
      Router.push('/brochure/additional');
    }
  }

  componentDidMount() {
    const firstName = localStorage.getItem('firstName') !== null ? localStorage.getItem('firstName') : 'Saepul';
    const middleName = localStorage.getItem('middleName') !== null ? localStorage.getItem('middleName') : '';
    const lastName = localStorage.getItem('lastName') !== null ? localStorage.getItem('lastName') : 'Rohman';
    const birthMonth = localStorage.getItem('birthMonth') !== null ? localStorage.getItem('birthMonth') : '01';
    const birthDate = localStorage.getItem('birthDate') !== null ? localStorage.getItem('birthDate') : '03';
    const birthYear = localStorage.getItem('birthYear') !== null ? localStorage.getItem('birthYear') : '1986';
    const currentAddress = localStorage.getItem('currentAddress') !== null ? localStorage.getItem('currentAddress') : '1234 Magnolia Ave';
    const currentUnit = localStorage.getItem('currentUnit') !== null ? localStorage.getItem('currentUnit') : '';
    const currentCity = localStorage.getItem('currentCity') !== null ? localStorage.getItem('currentCity') : 'City 1';
    const currentState = localStorage.getItem('currentState') !== null ? localStorage.getItem('currentState') : 'TX';
    const currentZipcode = localStorage.getItem('currentZipcode') !== null ? localStorage.getItem('currentZipcode') : '55555';
    const currentRent = localStorage.getItem('currentRent') !== null ? localStorage.getItem('currentRent') : '1000';
    const currentLength = localStorage.getItem('currentLength') !== null ? localStorage.getItem('currentLength') : '12 months';
    const currentReason = localStorage.getItem('currentReason') !== null ? localStorage.getItem('currentReason') : 'Too far from work';
    const prevAddress = localStorage.getItem('prevAddress') !== null ? localStorage.getItem('prevAddress') : '837 Magnolia Ave';
    const prevUnit = localStorage.getItem('prevUnit') !== null ? localStorage.getItem('prevUnit') : '';
    const prevCity = localStorage.getItem('prevCity') !== null ? localStorage.getItem('prevCity') : 'City 2';
    const prevState = localStorage.getItem('prevState') !== null ? localStorage.getItem('prevState') : 'NY';
    const prevZipcode = localStorage.getItem('prevZipcode') !== null ? localStorage.getItem('prevZipcode') : '33333';
    const prevRent = localStorage.getItem('prevRent') !== null ? localStorage.getItem('prevRent') : '899';
    const prevLength = localStorage.getItem('prevLength') !== null ? localStorage.getItem('prevLength') : '2 years';
    const prevReason = localStorage.getItem('prevReason') !== null ? localStorage.getItem('prevReason') : 'Wanted to upgrade to a bigger place';

    this.setState({
      firstName, middleName, lastName, birthMonth, birthDate, birthYear,
      currentAddress, currentUnit, currentCity, currentState, currentZipcode, currentRent, currentLength, currentReason,
      prevAddress, prevUnit, prevCity, prevState, prevZipcode, prevRent, prevLength, prevReason,
    });
  }

  render() {
    const {
      firstName, middleName, lastName, birthMonth, birthDate, birthYear,
      currentAddress, currentUnit, currentCity, currentState, currentZipcode, currentRent, currentLength, currentReason,
      prevAddress, prevUnit, prevCity, prevState, prevZipcode, prevRent, prevLength, prevReason,
      validated,
    } = this.state;

    return (
      <div className={styles.body}>
        <Head>
          <title>Personal Information</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.navbar}>
          <Navbar />
        </div>

        <header className={styles.header}>
          <Link href="/credit">
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
              <p className={styles.progress_step_title_orange}>STEP 01 <span className={styles.progress_step_title_grey}> / 04</span></p>
              <p className={styles.progress_step_detail_white}>Basic Details</p>
            </div>
          </div>

          <div className={styles.progress_bar}>
            <div className={styles.progress_step_one}></div>
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
                <img src="/brochure/step-1-orange.png" alt="step 1" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_orange}>STEP 01</p>
                  <p className={styles.progress_step_detail_white}>Basic Details</p>
                </div>
              </div>

              <div className={styles.progress_divider_grey}></div>

              <div className={styles.progress_step}>
                <img src="/brochure/step-2-grey.png" alt="step 2" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_grey}>STEP 02</p>
                  <p className={styles.progress_step_detail_grey}>Additional Info</p>
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
              <h2 className={styles.primary_title}>Your Barker Brochure</h2>
              <p className={styles.primary_detail}>
                This free application will be used for all landlords that bid on you.No hidden fees and hassle-free!<br />
                Your personal information will remain anonymous to all landlords.
              </p>

              <Form className={styles.form} noValidate validated={validated} onSubmit={this.handleSubmit}>
                <h4 className={styles.secondary_title}>Personal Information</h4>
                <Row>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="middleName"
                      type="text"
                      placeholder="Middle Name (optional)"
                      value={middleName}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Row>

                <h4 className={styles.secondary_title}>Date of Birth</h4>
                <Row className={styles.input_row}>
                  <Col xs={6} md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="birthMonth"
                      as="select"
                      value={birthMonth}
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
                      name="birthDate"
                      as="select"
                      value={birthDate}
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
                      name="birthYear"
                      type="text"
                      placeholder="Year (YYYY)"
                      value={birthYear}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Row>

                <h4 className={styles.secondary_title}>Current Address</h4>
                <Row className={styles.input_row}>
                  <Col xs={6} md={8}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentAddress"
                      type="text"
                      placeholder="Address"
                      value={currentAddress}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentUnit"
                      type="text"
                      placeholder="Unit/Apart (optional)"
                      value={currentUnit}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={4} md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentCity"
                      as="select"
                      value={currentCity}
                      onChange={this.handleChange}
                      custom
                      required
                    >
                      <option value="">City</option>
                      <option value="City 1">City 1</option>
                      <option value="City 2">City 2</option>
                      <option value="City 3">City 3</option>
                    </Form.Control>
                  </Col>
                  <Col xs={4} md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentState"
                      as="select"
                      value={currentState}
                      onChange={this.handleChange}
                      custom
                      required
                    >
                      <option value="">State</option>
                      <option value="TX">TX</option>
                      <option value="WA">WA</option>
                      <option value="NY">NY</option>
                    </Form.Control>
                  </Col>
                  <Col xs={4} md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentZipcode"
                      type="text"
                      placeholder="Zipcode"
                      value={currentZipcode}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentRent"
                      type="text"
                      placeholder="Monthly Rent"
                      value={currentRent}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentLength"
                      type="text"
                      placeholder="Length of Time"
                      value={currentLength}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentReason"
                      type="text"
                      placeholder="Reason for Moving"
                      value={currentReason}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Row>

                <h4 className={styles.secondary_title}>
                  Previous Address <br className="d-block d-md-none" />
                  <span className={styles.grey_text}> (if current lease is under a year)</span>
                </h4>
                <Row className={styles.input_row}>
                  <Col xs={6} md={8}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevAddress"
                      type="text"
                      placeholder="Address"
                      value={prevAddress}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevUnit"
                      type="text"
                      placeholder="Unit/Apart (optional)"
                      value={prevUnit}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={4} md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevCity"
                      as="select"
                      value={prevCity}
                      onChange={this.handleChange}
                      custom
                      required
                    >
                      <option value="">City</option>
                      <option value="City 1">City 1</option>
                      <option value="City 2">City 2</option>
                      <option value="City 3">City 3</option>
                    </Form.Control>
                  </Col>
                  <Col xs={4} md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevState"
                      as="select"
                      value={prevState}
                      onChange={this.handleChange}
                      custom
                      required
                    >
                      <option value="">State</option>
                      <option value="TX">TX</option>
                      <option value="WA">WA</option>
                      <option value="NY">NY</option>
                    </Form.Control>
                  </Col>
                  <Col xs={4} md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevZipcode"
                      type="text"
                      placeholder="Zipcode"
                      value={prevZipcode}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevRent"
                      type="text"
                      placeholder="Monthly Rent"
                      value={prevRent}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col xs={6} md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevLength"
                      type="text"
                      placeholder="Length of Time"
                      value={prevLength}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevReason"
                      type="text"
                      placeholder="Reason for Moving"
                      value={prevReason}
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>

                <div className="d-flex justify-content-end">
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