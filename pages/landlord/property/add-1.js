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
import Dropzone from './Dropzone'

export default class Add extends React.Component {
  state = {
    unitNum: 1,
  }

  addUnit = () => {
    const { unitNum } = this.state;
    this.setState({ unitNum: unitNum + 1 });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { unitNum } = this.state;

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
                <Link href="/landlord/property/add">
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

              {/* 01. Property Details */}
              <div className="d-none d-md-block">
                <div className={styles.add_content}>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-ceter">
                      <h4 className={styles.add_title}>
                        <span className={styles.green_text}>01. </span>
                        Property Details
                      </h4>

                      <Link href="/landlord/property/add">
                        <a className={styles.edit_link}>
                          <img src="/brochure/pencil-icon.png" alt="pencil" />
                          <span className="ml-2">EDIT</span>
                        </a>
                      </Link>
                    </div>
                    <p className={styles.add_detail}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry's standard dummy text ever since.
                    </p>

                    <div className={styles.apartment_overview}>
                      <img src="/landlord/property/apartment.jpg" alt="apartment" />
                      <div className={styles.apartment_detail}>
                        <div>
                          <h4 className={styles.apartment_name}>Propery Name</h4>
                          <p className={styles.apartment_address}>4845 Saturn St, Los Angeles, CA 90019</p>
                        </div>

                        <div className={styles.apartment_amenity}>
                          <h4 className={styles.amenity_title}>AMENITIES</h4>
                          <div>
                            <p className={styles.amenity_item}>• On-site Laundry</p>
                            <p className={styles.amenity_item}>• Off-street Parking</p>
                          </div>
                          <div>
                            <p className={styles.amenity_item}>• Dishwasher</p>
                            <p className={styles.amenity_item}>• Hardwood Floors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 02. Available Units */}
              <div className={styles.add_content}>
                <div className="d-flex flex-column flex-lg-row align-items-lg-start">
                  <Form className={styles.add_form}>
                    <h4 className={styles.add_title_1}>
                      <span className={styles.green_text}>02. </span>
                      Available Units
                    </h4>
                    <Form.Control
                      className={styles.input_box}
                      name="unitName"
                      type="text"
                      placeholder="Unit Name"
                      required
                    />
                    <Form.Control
                      className={styles.input_box}
                      name="square"
                      type="text"
                      placeholder="Square Footage"
                      required
                    />
                    <Row>
                      <Col xs={6}>
                        <Form.Control
                          className={styles.input_box}
                          name="bedNum"
                          as="select"
                          custom
                          required
                        >
                          <option value="">Bedrooms</option>
                          <option value="01">1</option>
                          <option value="02">2</option>
                          <option value="03">3</option>
                        </Form.Control>
                      </Col>
                      <Col xs={6}>
                        <Form.Control
                          className={styles.input_box}
                          name="bathNum"
                          as="select"
                          custom
                          required
                        >
                          <option value="">Bathrooms</option>
                          <option value="01">1</option>
                          <option value="02">2</option>
                          <option value="03">3</option>
                        </Form.Control>
                      </Col>
                    </Row>
                  </Form>

                  <div className={styles.upload_section_1}>
                    <h4 className={styles.add_subtitle}>Upload your image</h4>
                    <p className={styles.add_detail_1}>
                      File should be Jpg, Png
                    </p>
                    <Dropzone />
                  </div>
                </div>

                {(unitNum === 2 || unitNum === 3) &&
                  <div>
                    <hr className={styles.split_line} />
                    <div className="d-flex flex-column flex-lg-row align-items-lg-start">
                      <Form className={styles.add_form}>
                        <Form.Control
                          className={styles.input_box}
                          name="unitName"
                          type="text"
                          placeholder="Unit Name"
                          required
                        />
                        <Form.Control
                          className={styles.input_box}
                          name="square"
                          type="text"
                          placeholder="Square Footage"
                          required
                        />
                        <Row>
                          <Col xs={6}>
                            <Form.Control
                              className={styles.input_box}
                              name="bedNum"
                              as="select"
                              custom
                              required
                            >
                              <option value="">Bedrooms</option>
                              <option value="01">1</option>
                              <option value="02">2</option>
                              <option value="03">3</option>
                            </Form.Control>
                          </Col>
                          <Col xs={6}>
                            <Form.Control
                              className={styles.input_box}
                              name="bathNum"
                              as="select"
                              custom
                              required
                            >
                              <option value="">Bathrooms</option>
                              <option value="01">1</option>
                              <option value="02">2</option>
                              <option value="03">3</option>
                            </Form.Control>
                          </Col>
                        </Row>
                      </Form>

                      <div className={styles.upload_section_1}>
                        <Dropzone />
                      </div>
                    </div>
                  </div>
                }

                {unitNum === 3 &&
                  <div>
                    <hr className={styles.split_line} />
                    <div className="d-flex flex-column flex-lg-row align-items-lg-start">
                      <Form className={styles.add_form}>
                        <Form.Control
                          className={styles.input_box}
                          name="unitName"
                          type="text"
                          placeholder="Unit Name"
                          required
                        />
                        <Form.Control
                          className={styles.input_box}
                          name="square"
                          type="text"
                          placeholder="Square Footage"
                          required
                        />
                        <Row>
                          <Col xs={6}>
                            <Form.Control
                              className={styles.input_box}
                              name="bedNum"
                              as="select"
                              custom
                              required
                            >
                              <option value="">Bedrooms</option>
                              <option value="01">1</option>
                              <option value="02">2</option>
                              <option value="03">3</option>
                            </Form.Control>
                          </Col>
                          <Col xs={6}>
                            <Form.Control
                              className={styles.input_box}
                              name="bathNum"
                              as="select"
                              custom
                              required
                            >
                              <option value="">Bathrooms</option>
                              <option value="01">1</option>
                              <option value="02">2</option>
                              <option value="03">3</option>
                            </Form.Control>
                          </Col>
                        </Row>
                      </Form>

                      <div className={styles.upload_section_1}>
                        <Dropzone />
                      </div>
                    </div>
                  </div>
                }

                {unitNum < 3 &&
                  <div className={styles.add_unit} onClick={this.addUnit}>
                    <img src="/brochure/plus-icon.png" alt="plus" />
                    <p className={styles.add_text}>Add Another Unit</p>
                  </div>
                }

                <div className="mt-4">
                  <Link href="/landlord/property/add-2">
                    <a className={utils.continue_btn} onClick={this.handleSubmit}>
                      <span className="pl-3">CONTINUE</span>
                      <img className="ml-2" src="/right-arrow.png" alt="arrow" />
                    </a>
                  </Link>
                </div>
              </div>

              {/* 03. Tenant Criteria */}
              <div className="d-none d-md-block">
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
