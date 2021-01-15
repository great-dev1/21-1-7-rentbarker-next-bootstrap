import React from 'react'
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
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value.toString() });
  }

  handleSubmit = () => {
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
  }

  componentDidMount() {
    const firstName = localStorage.getItem('firstName') !== null ? localStorage.getItem('firstName') : 'Victoria';
    const middleName = localStorage.getItem('middleName') !== null ? localStorage.getItem('middleName') : '';
    const lastName = localStorage.getItem('lastName') !== null ? localStorage.getItem('lastName') : 'Jefferson';
    const birthMonth = localStorage.getItem('birthMonth') !== null ? localStorage.getItem('birthMonth') : '1';
    const birthDate = localStorage.getItem('birthDate') !== null ? localStorage.getItem('birthDate') : '3';
    const birthYear = localStorage.getItem('birthYear') !== null ? localStorage.getItem('birthYear') : '1986';
    const currentAddress = localStorage.getItem('currentAddress') !== null ? localStorage.getItem('currentAddress') : '1234 Magnolia Ave';
    const currentUnit = localStorage.getItem('currentUnit') !== null ? localStorage.getItem('currentUnit') : '';
    const currentCity = localStorage.getItem('currentCity') !== null ? localStorage.getItem('currentCity') : 'Dallas';
    const currentState = localStorage.getItem('currentState') !== null ? localStorage.getItem('currentState') : 'TX';
    const currentZipcode = localStorage.getItem('currentZipcode') !== null ? localStorage.getItem('currentZipcode') : '55555';
    const currentRent = localStorage.getItem('currentRent') !== null ? localStorage.getItem('currentRent') : '1000';
    const currentLength = localStorage.getItem('currentLength') !== null ? localStorage.getItem('currentLength') : '12 months';
    const currentReason = localStorage.getItem('currentReason') !== null ? localStorage.getItem('currentReason') : 'Too far from work';
    const prevAddress = localStorage.getItem('prevAddress') !== null ? localStorage.getItem('prevAddress') : '1234 Magnolia Ave';
    const prevUnit = localStorage.getItem('prevUnit') !== null ? localStorage.getItem('prevUnit') : '';
    const prevCity = localStorage.getItem('prevCity') !== null ? localStorage.getItem('prevCity') : 'New York';
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
    } = this.state;

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
                    <Form.Control
                      className={styles.input_box}
                      name="firstName"
                      value={firstName}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="middleName"
                      value={middleName}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Middle Name (optional)"
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="lastName"
                      value={lastName}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Last Name" />
                  </Col>
                </Row>

                <h4 className={styles.input_title}>Date of Birth</h4>
                <Row className={styles.input_row}>
                  <Col md={4}>
                    <Form.Control className={styles.input_box} name="birthMonth" value={birthMonth} onChange={this.handleChange} as="select" custom>
                      <option value="">Month</option>
                      <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option>
                      <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option>
                      <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option>
                    </Form.Control>
                  </Col>
                  <Col md={4}>
                    <Form.Control className={styles.input_box} name="birthDate" value={birthDate} onChange={this.handleChange} as="select" custom>
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
                      name="birthYear"
                      value={birthYear}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Year (YYYY)"
                    />
                  </Col>
                </Row>

                <h4 className={styles.input_title}>Current Address</h4>
                <Row className={styles.input_row}>
                  <Col md={8}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentAddress"
                      value={currentAddress}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Address"
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentUnit"
                      value={currentUnit}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Unit/Apart (optional)"
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentCity"
                      value={currentCity}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="City"
                    />
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentState"
                      value={currentState}
                      onChange={this.handleChange}
                      as="select"
                      custom
                    >
                      <option value="">State</option>
                      <option value="TX">TX</option>
                      <option value="WA">WA</option>
                      <option value="NV">NV</option>
                    </Form.Control>
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentZipcode"
                      value={currentZipcode}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Zipcode"
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentRent"
                      value={currentRent}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Monthly Rent"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentLength"
                      value={currentLength}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Length of Time"
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="currentReason"
                      value={currentReason}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Reason for Moving"
                    />
                  </Col>
                </Row>

                <h4 className={styles.input_title}>Previous Address (if current lease is under a year)</h4>
                <Row className={styles.input_row}>
                  <Col md={8}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevAddress"
                      value={prevAddress}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Address"
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevUnit"
                      value={prevUnit}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Unit/Apart (optional)"
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevCity"
                      value={prevCity}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="City"
                    />
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevState"
                      value={prevState}
                      onChange={this.handleChange}
                      as="select"
                      custom
                    >
                      <option value="">State</option>
                      <option value="TX">TX</option>
                      <option value="WA">WA</option>
                      <option value="NV">NV</option>
                    </Form.Control>
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevZipcode"
                      value={prevZipcode}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Zipcode"
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevRent"
                      value={prevRent}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Monthly Rent"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevLength"
                      value={prevLength}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Length of Time"
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="prevReason"
                      value={prevReason}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Reason for Moving"
                    />
                  </Col>
                </Row>
              </Form>

              <Link href="/brochure/additional">
                <div className={styles.continue_btn} onClick={this.handleSubmit}>
                  <MyButton blue width="205px" height="45px" margin="0">CONTINUE</MyButton>
                </div>
              </Link>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}