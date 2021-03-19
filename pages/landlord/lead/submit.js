import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Row, Col } from 'react-bootstrap'

import Navbar_1 from '../../../components/Navbar_1'
import Footer from '../../../components/Footer'
import MyButton from '../../../components/MyButton'
import styles from './Lead.module.css'

export default class Submit extends React.Component {
  state = {
    w2: false,
    bankState: false,
    payStub: false,
    other: false,
    submitCheck: false,
  }

  handleCheck = (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    this.setState({ [name]: value });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { w2, bankState, payStub, other, submitCheck } = this.state;

    return (
      <div>
        <Head>
          <title>Leads - Submit</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar_1 />

        <div className="d-flex">
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div>
              <Link href="/landlord/dashboard">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/window-grey.png" alt="window" />
                  <span className={styles.sidebar_text}>Dashboard</span>
                </a>
              </Link>

              <Link href="/landlord/lead">
                <a className={styles.sidebar_menu_active}>
                  <img src="/sidebar/user-green.png" alt="user" />
                  <span className={styles.sidebar_text}>Leads</span>
                </a>
              </Link>

              <Link href="/landlord/property">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/property-grey.png" alt="property" />
                  <span className={styles.sidebar_text}>Properties</span>
                </a>
              </Link>

              <Link href="/landlord/search">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/search-grey.png" alt="search" />
                  <span className={styles.sidebar_text}>Prospect Search</span>
                </a>
              </Link>

              <Link href="/landlord/message">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/message-grey.png" alt="message" />
                  <span className={styles.sidebar_text}>Messages</span>
                </a>
              </Link>

              <Link href="landlord/setting">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/setting-grey.png" alt="setting" />
                  <span className={styles.sidebar_text}>Settings</span>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/exit-grey.png" alt="exit" />
                  <span className={styles.sidebar_text}>Log Out</span>
                </a>
              </Link>
            </div>
          </div>

          {/* Main */}
          <main className={styles.submit_main}>
            <Container>
              <h2 className={styles.primary_title}>Leads</h2>
              <p className={styles.submit_primary_detail}>Sunday, 13 December 2020</p>
              <hr className="d-none d-md-block" />

              <div className={styles.submit_content}>
                <div className={styles.submit_content_header}>
                  <h3 className={styles.submit_title}>Submit Your Offer</h3>
                  <p className={styles.submit_detail}>4845 Saturn St, Los Angeles | Unit 303  | $1,775</p>
                </div>

                <div className={styles.submit_content_main}>
                  <Form className={styles.submit_form}>
                    <h4 className={styles.form_title}>Add the details for your offer</h4>
                    <Form.Control
                      className={styles.input_box}
                      name="rent"
                      type="text"
                      placeholder="Monthly Rent"
                      required
                    />
                    <Form.Control
                      className={styles.input_box}
                      name="deposit"
                      type="text"
                      placeholder="Security Deposit"
                      required
                    />
                    <Form.Control
                      className={styles.input_box}
                      name="unitNum"
                      type="text"
                      placeholder="Unit Number (Optional)"
                    />
                    <Row>
                      <Col xs={6}>
                        <Form.Control
                          className={styles.input_box}
                          name="moveDate"
                          type="date"
                          placeholder="Move-In Date"
                          required
                        />
                      </Col>
                      <Col xs={6}>
                        <Form.Control
                          className={styles.input_box}
                          name="length"
                          type="text"
                          placeholder="Lease Terms"
                          required
                        />
                      </Col>
                    </Row>
                    <Form.Control
                      className={styles.input_box}
                      name="parkingFee"
                      type="text"
                      placeholder="Parking Fee (Optional)"
                    />
                    <Form.Control
                      className={styles.input_box}
                      name="petFee"
                      type="text"
                      placeholder="Pet Fee and Deposits (Optional)"
                    />

                    <Row>
                      <Col md={6}>
                        <h4 className={styles.form_title}>Lease Incentives</h4>
                        <div className={styles.incentive_item}>
                          <div className={styles.incentive_box}>1</div>
                          <p className={styles.incentive_text}>Months Free Rent</p>
                        </div>
                        <div className={styles.incentive_item}>
                          <div className={styles.incentive_box}>$0</div>
                          <p className={styles.incentive_text}>Moving Incentives</p>
                        </div>
                        <div className={styles.incentive_item}>
                          <div className={styles.incentive_box}>$0</div>
                          <div>
                            <p className={styles.incentive_text}>Other Discount</p>
                            <a className={styles.add_link} href="#">ADD DETAILS</a>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <h4 className={styles.form_title}>Lease Incentives</h4>
                        <label className={w2 ? styles.check_label_active : styles.check_label}>
                          <input
                            className={styles.check_box}
                            name="w2"
                            type="checkbox"
                            checked={w2}
                            onChange={this.handleCheck}
                          />
                          W2
                        </label>
                        <label className={bankState ? styles.check_label_active : styles.check_label}>
                          <input
                            className={styles.check_box}
                            name="bankState"
                            type="checkbox"
                            checked={bankState}
                            onChange={this.handleCheck}
                          />
                          Banks Statements
                        </label>
                        <label className={payStub ? styles.check_label_active : styles.check_label}>
                          <input
                            className={styles.check_box}
                            name="payStub"
                            type="checkbox"
                            checked={payStub}
                            onChange={this.handleCheck}
                          />
                          Pay Stubs
                        </label>
                        <label className={other ? styles.check_label_active : styles.check_label}>
                          <input
                            className={styles.check_box}
                            name="other"
                            type="checkbox"
                            checked={other}
                            onChange={this.handleCheck}
                          />
                          Other
                          <div className="mt-1 ml-4">
                            <a className={styles.add_link} href="#">ADD DETAILS</a>
                          </div>
                        </label>
                      </Col>
                    </Row>

                    <Form.Control
                      className={styles.input_box}
                      name="unitLink"
                      type="text"
                      placeholder="Unit Link (Optional)"
                    />
                    <Form.Control
                      className={styles.input_box}
                      name="unitDetail"
                      as="textarea"
                      rows={5}
                      placeholder="Apartment Unit Details"
                    />

                    <div className="d-flex">
                      <input
                        className={styles.check_box}
                        name="submitCheck"
                        type="checkbox"
                        checked={submitCheck}
                        onChange={this.handleCheck}
                      />
                      <label className={styles.check_detail}>
                        By submitting this offer, I agree to the terms to pay a fee equal to 25% of the average monthly rental once the tenant has signed lease and moved in.<br />
                        <br />
                        Payment method will be required to receive security deposit payment from tenant. View Terms and Conditions.
                      </label>
                    </div>

                    <div className="d-sm-flex">
                      <Link href="#">
                        <a className={styles.submit_btn}>
                          <MyButton width="218px" height="44px">SUBMIT OFFER</MyButton>
                        </a>
                      </Link>

                      <Link href="#">
                        <a className="">
                          <MyButton width="218px" height="44px" color="#126660" backgroundColor="#fff">DECLINE</MyButton>
                        </a>
                      </Link>
                    </div>
                  </Form>

                  <div className={styles.property_card}>
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />

                      <div className="ml-3">
                        <p className={styles.tenant_name}>Tenant Lead #1</p>
                        <div className="d-flex align-items-center flex-wrap">
                          <div className={styles.stars}>
                            <img src="/message/star.png" alt="star" />
                            <img src="/message/star.png" alt="star" />
                            <img src="/message/star.png" alt="star" />
                            <img src="/message/star.png" alt="star" />
                            <img src="/message/star.png" alt="star" />
                          </div>
                          <p className={styles.tenant_match}>94% Match</p>
                        </div>
                      </div>
                    </div>

                    <Row className="mt-3">
                      <Col sm={6}>
                        <p className={styles.preview_title}>Total Monthly Income</p>
                        <p className={styles.preview_detail}>$4500</p>
                      </Col>
                      <Col sm={6}>
                        <p className={styles.preview_title}>Desired Move-In Date</p>
                        <p className={styles.preview_detail}>June 1st</p>
                      </Col>
                    </Row>
                    <hr />

                    <div className={styles.competitor_group}>
                      <h4 className={styles.competitor_title}>TOP COMPETITOR'S</h4>

                      <div className={styles.competitor_item}>
                        <img src="/brochure/flat-1.jpg" alt="flat" />
                        <div className="ml-2">
                          <p className={styles.flat_address}>Street Name #1</p>
                          <p className={styles.flat_price}>$1800 monthly</p>
                          <p className={styles.flat_match}>85% match</p>
                        </div>
                      </div>

                      <div className={styles.competitor_item}>
                        <img src="/brochure/flat-2.jpg" alt="flat" />
                        <div className="ml-2">
                          <p className={styles.flat_address}>Street Name #2</p>
                          <p className={styles.flat_price}>$1750 monthly</p>
                          <p className={styles.flat_match}>83% match</p>
                        </div>
                      </div>

                      <div className={styles.competitor_item}>
                        <img src="/brochure/flat-3.jpg" alt="flat" />
                        <div className="ml-2">
                          <p className={styles.flat_address}>Street Name #3</p>
                          <p className={styles.flat_price}>$1695 monthly</p>
                          <p className={styles.flat_match}>82% match</p>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className={styles.price_group}>
                      <div className={styles.price_item}>
                        <p className={styles.price_text}>Average Monthly:</p>
                        <p className={styles.price_num}>$1,795</p>
                      </div>
                      <div className={styles.price_item}>
                        <p className={styles.price_text}>Total amount:</p>
                        <p className={styles.price_num}>$19,745</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </main>
        </div>
        <Footer />
      </div >
    )
  }
}
