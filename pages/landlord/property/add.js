import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar_1 from '../../../components/Navbar_1'
import Footer from '../../../components/Footer'
import utils from '../../../styles/utils.module.css'
import styles from './Property.module.css'
import Dropzone from './Dropzone';

export default class Add extends React.Component {
  state = {
    ac: false,
    central: false,
    hardwood: false,
    offstreet: false,
    covered: false,
    dishwasher: false,
    onsite: false,
    laundry: false,
    stainless: false,
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
    const { ac, central, hardwood, offstreet, covered, dishwasher, onsite, laundry, stainless } = this.state;

    return (
      <div>
        <Head>
          <title>Add Apartment</title>
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
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/user-grey.png" alt="user" />
                  <span className={styles.sidebar_text}>Leads</span>
                </a>
              </Link>

              <Link href="/landlord/property">
                <a className={styles.sidebar_menu_active}>
                  <img src="/sidebar/property-green.png" alt="property" />
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
          <main className={styles.add_main}>
            <Container>
              <div className="d-flex align-items-center mt-2">
                <Link href="/landlord/property">
                  <a className="d-block d-sm-none">
                    <FontAwesomeIcon icon={faChevronLeft} className={utils.chevron_left} />
                  </a>
                </Link>

                <h2 className={styles.primary_title}>Add Apartment</h2>
              </div>
              <hr className="d-none d-md-block" />
              <div className="d-none d-md-block">
                <Link href="/landlord/property">
                  <a className={styles.prev_link}>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron_left} />
                      Return to the list
                    </div>
                  </a>
                </Link>
              </div>

              <div className={styles.add_content}>
                <Form className={styles.add_form}>
                  <h4 className={styles.add_title}>
                    <span className={styles.green_text}>01. </span>
                      Property Details
                    </h4>
                  <p className={styles.add_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry,
                    lorem ipsum has been the industry's standard dummy text ever since.
                    </p>
                  <Form.Control
                    className={styles.input_box}
                    name="name"
                    type="text"
                    placeholder="Property Name (optional)"
                    required
                  />
                  <Form.Control
                    className={styles.input_box}
                    name="address"
                    type="text"
                    placeholder="Address"
                    required
                  />
                  <Form.Control
                    className={styles.input_box}
                    name="city"
                    type="text"
                    placeholder="City"
                    required
                  />
                  <Row>
                    <Col xs={6}>
                      <Form.Control
                        className={styles.input_box}
                        name="state"
                        as="select"
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
                    <Col xs={6}>
                      <Form.Control
                        className={styles.input_box}
                        name="currentZipcode"
                        type="text"
                        placeholder="Zipcode"
                        required
                      />
                    </Col>
                  </Row>

                  <h4 className={styles.add_subtitle}>Add pet fees and deposits</h4>
                  <p className={styles.add_subdetail}>
                    Complete and accurate details provides good tenant leads
                  </p>
                  <Row>
                    <Col xs={6}>
                      <label className={ac ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="ac"
                          type="checkbox"
                          checked={ac}
                          onChange={this.handleCheck}
                        />
                          A/C
                        </label>
                      <label className={central ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="central"
                          type="checkbox"
                          checked={central}
                          onChange={this.handleCheck}
                        />
                          Central Heating
                        </label>
                      <label className={hardwood ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="hardwood"
                          type="checkbox"
                          checked={hardwood}
                          onChange={this.handleCheck}
                        />
                          Hardwood Floors
                        </label>
                      <label className={offstreet ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="offstreet"
                          type="checkbox"
                          checked={offstreet}
                          onChange={this.handleCheck}
                        />
                          Off-street Parking
                        </label>
                      <label className={covered ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="covered"
                          type="checkbox"
                          checked={covered}
                          onChange={this.handleCheck}
                        />
                          Covered Parking
                        </label>
                    </Col>
                    <Col xs={6}>
                      <label className={dishwasher ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="dishwasher"
                          type="checkbox"
                          checked={dishwasher}
                          onChange={this.handleCheck}
                        />
                          Dishwasher
                        </label>
                      <label className={onsite ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="onsite"
                          type="checkbox"
                          checked={onsite}
                          onChange={this.handleCheck}
                        />
                          On-site Laundry
                        </label>
                      <label className={laundry ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="laundry"
                          type="checkbox"
                          checked={laundry}
                          onChange={this.handleCheck}
                        />
                          Laundry in unit
                        </label>
                      <label className={stainless ? styles.check_label_active : styles.check_label}>
                        <input
                          className={styles.check_box}
                          name="stainless"
                          type="checkbox"
                          checked={stainless}
                          onChange={this.handleCheck}
                        />
                          Stainless steel appliances
                        </label>
                    </Col>
                  </Row>

                  <div className="d-none d-sm-block mt-3 mt-lg-5">
                    <Link href="/landlord/add-1">
                      <a className={utils.continue_btn} onClick={this.handleSubmit}>
                        <span className="pl-3">CONTINUE</span>
                        <img className="ml-2" src="/right-arrow.png" alt="arrow" />
                      </a>
                    </Link>
                  </div>
                </Form>

                <div className={styles.upload_section}>
                  <h4 className={styles.add_subtitle}>Upload your image</h4>
                  <p className={styles.add_detail}>
                    File should be Jpg, Png
                  </p>
                  <Dropzone />
                </div>
              </div>

              <div className="d-none d-md-block">
                <div className={styles.add_content}>
                  <h4 className={styles.add_title}>
                    <span className={styles.green_text}>02. </span>
                    Available Units
                  </h4>
                </div>

                <div className={styles.add_content}>
                  <h4 className={styles.add_title}>
                    <span className={styles.green_text}>03. </span>
                    Tenant Criteria
                  </h4>
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
