import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import styles from './Offer.module.css'

export default class Review extends React.Component {
  state = {
    logged: false,
    modalShow: false,
  }

  handleShow = () => this.setState({ modalShow: true });

  handleClose = () => this.setState({ modalShow: false });

  componentDidMount() {
    const logged = localStorage.getItem('logged') === 'true';
    this.setState({ logged });
  }

  render() {
    const { logged, modalShow } = this.state;

    return (
      <div className={modalShow ? styles.blur_effect : null}>
        <Head>
          <title>Offers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <div className="d-flex">
          {logged &&
            <div className={styles.sidebar}>
              <div>
                <Link href="/offer">
                  <a className={styles.sidebar_menu_active}>
                    <img src="/sidebar/mailbox-green.png" alt="mailbox" />
                    <span className={styles.sidebar_text}>Offers</span>
                  </a>
                </Link>

                <Link href="/brochure">
                  <a className={styles.sidebar_menu}>
                    <img src="/sidebar/contact-grey.png" alt="contact" />
                    <span className={styles.sidebar_text}>Barker Brochure</span>
                  </a>
                </Link>

                <Link href="/message">
                  <a className={styles.sidebar_menu}>
                    <img src="/sidebar/message-grey.png" alt="message" />
                    <span className={styles.sidebar_text}>Messages</span>
                  </a>
                </Link>

                <Link href="/setting">
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
          }

          <main className={styles.main}>
            <Container>
              <div className="d-none d-md-block">
                <h2 className={styles.primary_title}>Offers</h2>
                <p className={styles.primary_detail}>Sunday, 13 December 2020</p>
              </div>

              <Link href="/offer">
                <a className={styles.prev_link}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow_left} />
                    Return to the Offers
                  </div>
                </a>
              </Link>

              <div className={styles.review_container}>
                <div className={styles.review_header}>
                  <h2 className={styles.review_title}>Your offer from Vantage Apartments</h2>
                </div>

                <div className={styles.review_content}>
                  {/* Offer Summary */}
                  <Row>
                    <Col md={6}>
                      <img className={styles.offer_img} src="/offer/vantage.jpg" alt="vantage" />
                    </Col>
                    <Col md={6}>
                      <h3 className={styles.offer_name}>4845 Barnes Avenue</h3>
                      <p className={styles.offer_address}>4845 Saturn St, Los Angeles, CA 90019</p>

                      <h4 className={styles.description_title}>DESCRIPTION</h4>
                      <p className={styles.description_detail}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.
                      </p>

                      <div className={styles.offer_feature}>
                        2
                        <img className={styles.feature_icon} src="/offer/bed-icon.png" alt="bed" />
                        <span className={styles.splitbar}>|</span>
                        2
                        <img className={styles.feature_icon} src="/offer/bath-icon.png" alt="bath" />
                        <span className={styles.splitbar}>|</span>
                        89 M<sup>2</sup>
                        <img className={styles.feature_icon} src="/offer/size-icon.png" alt="size" />
                      </div>

                      <div className={styles.offer_amenity}>
                        <h4 className={styles.description_title}>AMENITIES</h4>
                        <Row>
                          <Col xs={6}>
                            <li className={styles.amenity_item}>
                              On-site Laundary
                            </li>
                          </Col>
                          <Col xs={6}>
                            <li className={styles.amenity_item}>
                              Off-street Parking
                            </li>
                          </Col>
                          <Col xs={6}>
                            <li className={styles.amenity_item}>
                              Dishwasher
                            </li>
                          </Col>
                          <Col xs={6}>
                            <li className={styles.amenity_item}>
                              Hardwood Floors
                            </li>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                  {/* Offer Details */}
                  <h3 className={styles.section_title}>Offer Details</h3>
                  <Row>
                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Your Offer</h4>
                      <p className={styles.detail_content}>
                        $1,750 monthly<br />
                        $21,000 per lease
                      </p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Advertised Price</h4>
                      <p className={styles.detail_content}>
                        $2,000 monthly<br />
                        $24,000 per lease
                      </p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Lease Length </h4>
                      <p className={styles.detail_content}>12 month</p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Property Address</h4>
                      <p className={styles.detail_content}>
                        2810 Routh Creek<br />
                        Richardson, TX 75080
                      </p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Additional Info</h4>
                      <p className={styles.detail_content}>Text</p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Security Deposit</h4>
                      <p className={styles.detail_content}>$150</p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Unit Number</h4>
                      <p className={styles.detail_content}>4845</p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Move in Date</h4>
                      <p className={styles.detail_content}>January 16, 2021</p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>Additional Discounts</h4>
                      <p className={styles.detail_content}>
                        First month free rent<br />
                        Waived application fee (originally $100)
                      </p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>
                        Your Total Lease Costs<br />
                        Without RentBarker
                      </h4>
                      <p className={styles.detail_content}>$24,718</p>
                    </Col>

                    <Col xs={6} md={3}>
                      <h4 className={styles.detail_title}>
                        Your Total Lease Costs<br />
                        With RentBarker
                      </h4>
                      <p className={styles.detail_content}>$19,718</p>
                    </Col>
                  </Row>

                  {/* Offer Profits */}
                  <Row>
                    <Col md={6}>
                      <div className={styles.offer_profit}>
                        <img className={styles.logo} src="/offer/logo.png" alt="logo" />
                        <div>
                          <h4 className={styles.profit_title}>Profits</h4>
                          <p className={styles.profit_detail}>
                            Your total savings using RentBarker:<br />
                            $5,000
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <h4 className={styles.detail_title}>Additional Monthly Fees</h4>
                      <p className={styles.detail_content}>
                        Amenities: $30 monthly/$360 per lease<br />
                        Pest control: $3 monthly/$36 per lease<br />
                        Trash: $6 monthly/$72 per lease<br />
                      </p>
                    </Col>
                  </Row>

                  {/* Before you accept */}
                  <h3 className={styles.section_title}>Before you accept</h3>
                  <p className={styles.accept_detail}>
                    Once you accept an offer, the landlord has 72 hours to supply a lease. You then have 72 hours to sign the lease and submit a payment in which you will be
                    legally bound with the property you signed with. If you choose not to sign the lease within the given time frame, the offer will expire and you will be taken back to
                    the offers page.  The landlord has the right to withdraw an offer at any time before it is signed to the tenant. Don’t lose this unit. Sign it before someone else
                    takes it!
                  </p>

                  <div className={styles.btn_group}>
                    <div className="d-flex flex-column flex-sm-row align-items-center">
                      <a className={styles.accept_btn} onClick={this.handleShow}>ACCEPT OFFER</a>

                      <Link href="/message">
                        <a className={styles.message_link}>MESSAGE LANDLORD</a>
                      </Link>
                    </div>
                  </div>

                  {/* Accept Confirm Modal */}
                  <Modal show={modalShow} onHide={this.handleClose} centered>
                    <div className={styles.modal_container}>
                      <img src="/offer/logo-large.png" alt="logo" />

                      <h4 className={styles.modal_title}>Important Fact!</h4>

                      <p className={styles.modal_detail}>
                        You may only accept one offer. Upon accecpting, all other offers will be voided and the
                        landlord will contact you with all of the necessary documents to move forward with the
                        leasing process.<br className="d-block d-md-none" />
                        <br className="d-block d-md-none" />
                        Do you agress to release your contact information, such as your name,
                        phone number, and email to this landlord?
                      </p>

                      <Link href="/offer/success">
                        <a className={styles.modal_btn}>
                          <MyButton height="46px" margin="auto">AGREE & ACCEPT OFFER</MyButton>
                        </a>
                      </Link>

                      <a className={styles.message_link} href="#" onClick={this.handleClose}>BACK TO OFFER</a>
                    </div>
                  </Modal>
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