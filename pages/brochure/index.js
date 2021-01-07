import Head from 'next/head'
import { Container, Tabs, Tab, Row, Col, Form } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Brochure.module.css'

export default function Brochure() {
  return (
    <div>
      {/* <img src="/testback-13.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

      <Head>
        <title>Your Barker Brochure</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Container className={utils.container}>
          <h1 className={styles.primary_title}>Your Barker Brochure</h1>
          <p className={styles.brochure_detail}>
            Your Barker Brochure is a compilation of your credit score, bank statements, rental statements, employemnt, and landlord
            reviews. We take the information you have provided and highlight your best qualities. Your Barker Brochure makes you a
            competitive tenant and will, in turn, give you the lowest reates. Don't forget, this process is completely anonymous! Your identity
            will only be revealed once you have accepted an offer.
          </p>

          <div className={styles.view_toggle}>
            <p className={styles.toggle_text}>Landlord View</p>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>

          <Tabs defaultActiveKey="yourView" className={styles.brochure_tabs}>
            <Tab className={styles.brochure_tab} eventKey="yourView" title="Your View">
              <div className={styles.tab_head}>
                <div className="d-flex align-items-center">
                  <img src="/brochure/user-icon.png" alt="user" />

                  <div className="ml-3">
                    <h2 className={styles.username}>Amanda Norman</h2>
                    <p className={styles.tab_detail}>4845 Saturn St, Los Angeles</p>
                  </div>
                </div>
                <div className="d-none d-md-block">
                  <MyButton width="150px" height="50px">EDIT</MyButton>
                </div>
              </div>

              <div className={styles.tab_main}>
                <h3 className={styles.tab_title}>
                  This page/mobile page needs: Desired lease length, smoker/non smoker, roommates/no, unique features, beds/baths
                </h3>

                <Row className={styles.info_section}>
                  <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <img className={styles.credit_img} src="/brochure/indicator.png" alt="credit indicator" />
                    <div className={styles.credit_blocks}>
                      <div className={styles.credit_block}>
                        <p className={styles.credit_score}>0</p>
                        <p className={styles.credit_title}>Evictions Records</p>
                      </div>

                      <div className={styles.credit_block}>
                        <p className={styles.credit_score}>0</p>
                        <p className={styles.credit_title}>Judgements/Liens</p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <Row className={styles.price_item}>
                      <Col md={6}>
                        <p className={styles.price_number}>$4,500</p>
                        <h3 className={styles.price_title}>Total Monthly income</h3>
                      </Col>
                      <Col md={6}>
                        <p className={styles.price_number}>June 1st</p>
                        <h3 className={styles.price_title}>Desired Move-In Date</h3>
                      </Col>
                    </Row>

                    <div className={styles.info_item}>
                      <h3 className={styles.info_title}>About Me</h3>
                      <p className={styles.info_detail}>
                        I am a full-time marketing professional who would
                        like to rent a reliable and safe ares for the long term.
                      </p>
                    </div>

                    <div className={styles.info_item}>
                      <h3 className={styles.info_title}>My Employment</h3>
                      <p className={styles.info_detail}>
                        Registered Nurse<br />
                        Kaiser Permanente
                      </p>
                    </div>

                    <div className={styles.info_item}>
                      <h3 className={styles.info_title}>Pets</h3>
                      <p className={styles.info_detail}>
                        1 Medium Size Dog
                      </p>
                    </div>
                  </Col>
                </Row>

                <div className={styles.property_section}>
                  <h2 className={styles.section_title}>Properties</h2>
                  <Row>
                    <Col md={4}>
                      <div className={styles.property_card}>
                        <img className={styles.property_img} src="/brochure/property-1.jpg" alt="property" />
                        <p className={styles.property_name}>1234 Street Name</p>
                        <p className={styles.property_price}>$1,800 monthly</p>
                        <p className={styles.property_match}>85% match</p>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className={styles.property_card}>
                        <img className={styles.property_img} src="/brochure/property-1.jpg" alt="property" />
                        <p className={styles.property_name}>1234 Street Name</p>
                        <p className={styles.property_price}>$1,800 monthly</p>
                        <p className={styles.property_match}>85% match</p>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className={styles.property_card}>
                        <img className={styles.property_img} src="/brochure/property-1.jpg" alt="property" />
                        <p className={styles.property_name}>1234 Street Name</p>
                        <p className={styles.property_price}>$1,800 monthly</p>
                        <p className={styles.property_match}>85% match</p>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className={styles.history_section}>
                  <h2 className={styles.section_title}>Rental History</h2>
                  <Row>
                    <Col md={6}>
                      <div className={styles.history_card}>
                        <h3 className={styles.history_title}>CURRENT RESIDENCE</h3>

                        <div className={styles.history_card_item}>
                          <h4 className={styles.history_subtitle}>Address</h4>
                          <p>1131 Homeside St. Culver City, CA 91203</p>
                        </div>

                        <div className={styles.history_card_item}>
                          <h4 className={styles.history_subtitle}>Monthly Rent</h4>
                          <p>$1,725</p>
                        </div>

                        <div className={styles.history_card_item}>
                          <h4 className={styles.history_subtitle}>Duration of Stay</h4>
                          <p>June 2019 - Present</p>
                        </div>

                        <div className={styles.history_card_item}>
                          <h4 className={styles.history_subtitle}>Reason for leaving</h4>
                          <p>Got a new job, looking for a new place closer to work</p>
                        </div>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className={styles.history_card}>
                        <h3 className={styles.history_title}>PREVIOUS RESIDENCE</h3>

                        <div className={styles.history_card_item}>
                          <h4 className={styles.history_subtitle}>Address</h4>
                          <p>1131 Shirly Lane Los Angeles, CA 90016</p>
                        </div>

                        <div className={styles.history_card_item}>
                          <h4 className={styles.history_subtitle}>Monthly Rent</h4>
                          <p>$1,650</p>
                        </div>

                        <div className={styles.history_card_item}>
                          <h4 className={styles.history_subtitle}>Duration of Stay</h4>
                          <p>May 2017 - May 2019</p>
                        </div>

                        <div className={styles.history_card_item}>
                          <h4 className={styles.history_subtitle}>Reason for leaving</h4>
                          <p>Relocated to a new and better apartment</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="d-blok d-md-none text-right">
                  <MyButton width="150px" height="50px">EDIT</MyButton>
                </div>
              </div>
            </Tab>

            <Tab className={styles.brochure_tab} eventKey="landlordView" title="Landlord View">
              Landlord View
            </Tab>
          </Tabs>

          <div className={styles.next_block}>
            <h2 className={styles.next_title}>What's next?</h2>
            <p className={styles.next_detail}>
              Now it's time for the fun stuff! The following page will display your properties and their offer statuses.
            </p>

            <div className={styles.check}>
              <Form.Check className={styles.check_box} type="checkbox" inline />
              <span className={styles.check_detail}>I APPROVE MY BARKER BROCHURE</span>
            </div>

            <MyButton blue width="307px" height="75px">TAKE ME TO MY OFFERS</MyButton>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}