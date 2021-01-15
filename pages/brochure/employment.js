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

export default class Employment extends React.Component {
  state = {
    employerOccupation: '',
    employerName: '',
    employerLength: '',
    employerAddress: '',
    employerCity: '',
    employerState: '',
    employerZipcode: '',
    myIncome: '',
    guarantorIncome: '',
    roommateIncome: '',
    useGuarantor: false,
  }

  state = {
    employerOccupation: 'Teacher at Renner Middle School',
    employerName: 'Mark Smith',
    employerLength: '3 years',
    employerAddress: '1234 Magnolia Ave',
    employerCity: 'Dallas',
    employerState: 'TX',
    employerZipcode: '55555',
    myIncome: '4000',
    guarantorIncome: '8000',
    roommateIncome: '5000',
    useGuarantor: true,
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value.toString() });
  }

  handleSumit = () => {
    const {
      employerOccupation, employerName, employerLength, employerAddress, employerCity,
      employerState, employerZipcode, myIncome, guarantorIncome, roommateIncome,
    } = this.state;

    localStorage.setItem('employerOccupation', employerOccupation);
    localStorage.setItem('employerName', employerName);
    localStorage.setItem('employerLength', employerLength);
    localStorage.setItem('employerAddress', employerAddress);
    localStorage.setItem('employerCity', employerCity);
    localStorage.setItem('employerState', employerState);
    localStorage.setItem('employerZipcode', employerZipcode);
    localStorage.setItem('myIncome', myIncome);
    localStorage.setItem('guarantorIncome', guarantorIncome);
    localStorage.setItem('roommateIncome', roommateIncome);
  }

  componentDidMount() {
    const employerOccupation = localStorage.getItem('employerOccupation') !== null ? localStorage.getItem('employerOccupation') : 'Teacher at Renner Middle School';
    const employerName = localStorage.getItem('employerName') !== null ? localStorage.getItem('employerName') : 'Mark Smith';
    const employerLength = localStorage.getItem('employerLength') !== null ? localStorage.getItem('employerLength') : '3 years';
    const employerAddress = localStorage.getItem('employerAddress') !== null ? localStorage.getItem('employerAddress') : '1234 Magnolia Ave';
    const employerCity = localStorage.getItem('employerCity') !== null ? localStorage.getItem('employerCity') : 'Dallas';
    const employerState = localStorage.getItem('employerState') !== null ? localStorage.getItem('employerState') : 'TX';
    const employerZipcode = localStorage.getItem('employerZipcode') !== null ? localStorage.getItem('employerZipcode') : '55555';
    const myIncome = localStorage.getItem('myIncome') !== null ? localStorage.getItem('myIncome') : '4000';
    const guarantorIncome = localStorage.getItem('guarantorIncome') !== null ? localStorage.getItem('guarantorIncome') : '8000';
    const roommateIncome = localStorage.getItem('roommateIncome') !== null ? localStorage.getItem('roommateIncome') : '5000';
    const useGuarantor = localStorage.getItem('useGuarantor') === 'true';

    this.setState({
      employerOccupation, employerName, employerLength, employerAddress, employerCity,
      employerState, employerZipcode, myIncome, guarantorIncome, roommateIncome, useGuarantor,
    });
  }

  render() {
    const {
      employerOccupation, employerName, employerLength, employerAddress, employerCity,
      employerState, employerZipcode, myIncome, guarantorIncome, roommateIncome, useGuarantor,
    } = this.state;

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
                    <Form.Control
                      className={styles.input_box}
                      name="employerOccupation"
                      value={employerOccupation}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Current Occupation"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="employerName"
                      value={employerName}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Employer Name"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="employerLength"
                      value={employerLength}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Length of Time"
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="employerAddress"
                      value={employerAddress}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Employer Address"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="employerCity"
                      value={employerCity}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="City"
                    />
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="employerState"
                      value={employerState}
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
                      name="employerZipcode"
                      value={employerZipcode}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Zipcode"
                    />
                  </Col>
                </Row>

                <h3 className={styles.add_text}>
                  <div className={styles.plus_btn}>+</div>
                  Add Employment
                </h3>

                <h4 className={styles.input_title_bg}>Estimate your income</h4>
                <Row>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="myIncome"
                      value={myIncome}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Gross Monthly Income"
                    />
                  </Col>
                </Row>

                {useGuarantor &&
                  <div>
                    <h4 className={styles.input_title_bg}>Estimate your guarantor's income</h4>
                    <Row>
                      <Col md={12}>
                        <Form.Control
                          className={styles.input_box}
                          name="guarantorIncome"
                          value={guarantorIncome}
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Gross Monthly Income"
                        />
                      </Col>
                    </Row>

                    <h4 className={styles.input_title_bg}>Estimate your roommate(s) income</h4>
                    <Row>
                      <Col md={12}>
                        <Form.Control
                          className={styles.input_box}
                          name="roommateIncome"
                          value={roommateIncome}
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Gross Monthly Income (combined if more than one)"
                        />
                      </Col>
                    </Row>
                  </div>
                }
              </Form>

              <div className="d-flex flex-column flex-md-row justify-content-end align-items-center">
                <Link href="/brochure/additional">
                  <a><MyButton width="205px" height="45px" margin="10px">PREVIOUS PAGE</MyButton></a>
                </Link>

                <Link href="/brochure/submit">
                  <a onClick={this.handleSumit}><MyButton blue width="205px" height="45px" margin="10px">CONTINUE</MyButton></a>
                </Link>
              </div>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}