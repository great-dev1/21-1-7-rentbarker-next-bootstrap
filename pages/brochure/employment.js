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

    const form = e.currentTarget;
    if (form.checkValidity()) {
      Router.push('/brochure/review');
    }
  }

  componentDidMount() {
    const employerOccupation = localStorage.getItem('employerOccupation') !== null ? localStorage.getItem('employerOccupation') : 'Teacher at Renner Middle School';
    const employerName = localStorage.getItem('employerName') !== null ? localStorage.getItem('employerName') : 'Hollis Co.';
    const employerLength = localStorage.getItem('employerLength') !== null ? localStorage.getItem('employerLength') : '3 years';
    const employerAddress = localStorage.getItem('employerAddress') !== null ? localStorage.getItem('employerAddress') : '1234 Magnolia Ave';
    const employerCity = localStorage.getItem('employerCity') !== null ? localStorage.getItem('employerCity') : 'City 1';
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
      validated,
    } = this.state;

    return (
      <div>
        <Head>
          <title>Employment Information</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.navbar}>
          <Navbar />
        </div>

        <header className={styles.header}>
          <Link href="/brochure/additional">
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
              <p className={styles.progress_step_title_orange}>STEP 03 <span className={styles.progress_step_title_grey}> / 04</span></p>
              <p className={styles.progress_step_detail_white}>Employment</p>
            </div>
          </div>

          <div className={styles.progress_bar}>
            <div className={styles.progress_step_three}></div>
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
                <img src="/brochure/check-icon.png" alt="check" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_grey}>STEP 02</p>
                  <p className={styles.progress_step_detail_white}>Additional Info</p>
                </div>
              </div>

              <div className={styles.progress_divider_white}></div>

              <div className={styles.progress_step}>
                <img src="/brochure/step-3-orange.png" alt="step 3" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_orange}>STEP 03</p>
                  <p className={styles.progress_step_detail_white}>Employment</p>
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
                <h4 className={styles.secondary_title}>Employment History for the Past Year</h4>
                <Row>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="employerOccupation"
                      value={employerOccupation}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Current Occupation"
                      required
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
                      required
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
                      required
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
                      required
                    />
                  </Col>
                  <Col xs={4} md={6}>
                    <Form.Control
                      className={styles.input_box}
                      name="employerCity"
                      as="select"
                      value={employerCity}
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
                      name="employerState"
                      value={employerState}
                      onChange={this.handleChange}
                      as="select"
                      custom
                      required
                    >
                      <option value="">State</option>
                      <option value="TX">TX</option>
                      <option value="WA">WA</option>
                      <option value="NV">NV</option>
                    </Form.Control>
                  </Col>
                  <Col xs={4} md={3}>
                    <Form.Control
                      className={styles.input_box}
                      name="employerZipcode"
                      value={employerZipcode}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Zipcode"
                      required
                    />
                  </Col>
                </Row>

                <div className="d-flex align-items-center mb-4">
                  <img src="/brochure/plus-icon.png" alt="plus" />
                  <p className={styles.add_text}>ADD EMPLOYMENT</p>
                </div>

                <h4 className={styles.secondary_title}>Estimation</h4>
                <Row>
                  <Col md={12}>
                    <Form.Control
                      className={styles.input_box}
                      name="myIncome"
                      value={myIncome}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Estimate Your Income (Monthly)"
                      required
                    />
                  </Col>
                </Row>

                {useGuarantor &&
                  <div>
                    <Row>
                      <Col md={12}>
                        <Form.Control
                          className={styles.input_box}
                          name="guarantorIncome"
                          value={guarantorIncome}
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Estimate Your Guarantor’s Income (Monthly)"
                          required
                        />
                      </Col>

                      <Col md={12}>
                        <Form.Control
                          className={styles.input_box}
                          name="roommateIncome"
                          value={roommateIncome}
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Estimate Your Roommate(s) Income (Monthly)"
                          required
                        />
                      </Col>
                    </Row>
                  </div>
                }

                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                  <Link href="/brochure/additional">
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