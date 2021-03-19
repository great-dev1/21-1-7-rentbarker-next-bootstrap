import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar_1 from '../../../components/Navbar_1'
import Footer from '../../../components/Footer'
import styles from './Dashboard.module.css'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar_1 />

        <div className="d-flex">
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div>
              <Link href="/landlord/dashboard">
                <a className={styles.sidebar_menu_active}>
                  <img src="/sidebar/window-green.png" alt="window" />
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
          <main className={styles.main}>
            <Container>
              <h2 className={styles.primary_title}>Dashboard</h2>
              <p className={styles.primary_detail}>Sunday, 13 December 2020</p>
              <hr className="d-none d-md-block" />

              <Row>
                <Col lg={8}>
                  <div className={styles.start_panel}>
                    <h2 className={styles.start_title}>Hi, <b>Saepul Rohman</b></h2>
                    <p className={styles.start_detail}>Learn all features of the RentBarker. It’s easy and quickly!</p>

                    <Link href="">
                      <a className={styles.start_btn}>GET STARTED</a>
                    </Link>
                  </div>

                  <Row>
                    <Col md={6}>
                      <div className={styles.notification_section}>
                        <h3 className={styles.section_title}>Latest Notifications</h3>

                        <div className={styles.notification_group}>
                          <div className={styles.notification_item}>
                            <div className="d-flex align-items-center">
                              <img src="/landlord/message-icon.png" alt="message" />
                              <div className={styles.notification_text}>
                                <p className={styles.notification_detail}>Marry Jodor</p>
                                <p className={styles.notification_title}>Message</p>
                              </div>
                            </div>
                            <p className={styles.notification_date}>22 Jan, 2020</p>
                          </div>

                          <div className={styles.notification_item}>
                            <div className="d-flex align-items-center">
                              <img src="/landlord/property-icon.png" alt="property" />
                              <div className={styles.notification_text}>
                                <p className={styles.notification_detail}>Unit was viewed</p>
                                <p className={styles.notification_title}>Properties</p>
                              </div>
                            </div>
                            <p className={styles.notification_date}>22 Jan, 2020</p>
                          </div>

                          <div className={styles.notification_item}>
                            <div className="d-flex align-items-center">
                              <img src="/landlord/message-icon.png" alt="message" />
                              <div className={styles.notification_text}>
                                <p className={styles.notification_detail}>Arcadiy Seberyak</p>
                                <p className={styles.notification_title}>Message</p>
                              </div>
                            </div>
                            <p className={styles.notification_date}>21 Jan, 2020</p>
                          </div>

                          <div className={styles.notification_item}>
                            <div className="d-flex align-items-center">
                              <img src="/landlord/user-icon.png" alt="user" />
                              <div className={styles.notification_text}>
                                <p className={styles.notification_detail}>Marry Jodor</p>
                                <p className={styles.notification_title}>Potential Lead</p>
                              </div>
                            </div>
                            <p className={styles.notification_date}>21 Jan, 2020</p>
                          </div>

                          <div className={styles.notification_item}>
                            <div className="d-flex align-items-center">
                              <img src="/landlord/message-icon.png" alt="message" />
                              <div className={styles.notification_text}>
                                <p className={styles.notification_detail}>Anna Merly</p>
                                <p className={styles.notification_title}>Message</p>
                              </div>
                            </div>
                            <p className={styles.notification_date}>20 Jan, 2020</p>
                          </div>
                        </div>

                        <Link href="/landlord/message">
                          <a className={styles.show_btn}>SHOW MORE</a>
                        </Link>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className={styles.property_section}>
                        <h3 className={styles.section_title}>Your Apartments</h3>
                        <hr className="d-none d-md-block" />

                        <div className={styles.property_card}>
                          <img className={styles.property_img} src="/property/property-1.jpg" alt="property" />
                          <p className={styles.property_name}>Property Name</p>
                          <p className={styles.property_address}>4845 Saturn St, Los Angeles, CA 90019</p>
                          <hr />
                          <div className={styles.unit_item}>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className={styles.unit_name}>Unit Name 1</p>
                              <p className={styles.unit_price}>$2775</p>
                            </div>
                            <div className={styles.unit_feature}>
                              2
                              <img className={styles.feature_icon} src="/property/bed-icon.png" alt="bed" />
                              <span className={styles.splitbar}>|</span>
                              2
                              <img className={styles.feature_icon} src="/property/bath-icon.png" alt="bath" />
                              <span className={styles.splitbar}>|</span>
                              105M<sup className={styles.sup}>2</sup>
                              <img className={styles.feature_icon} src="/property/size-icon.png" alt="size" />
                            </div>
                          </div>
                          <hr />

                          <div className={styles.unit_item}>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className={styles.unit_name}>Unit Name 2</p>
                              <p className={styles.unit_price}>$4500</p>
                            </div>
                            <div className={styles.unit_feature}>
                              3
                              <img className={styles.feature_icon} src="/property/bed-icon.png" alt="bed" />
                              <span className={styles.splitbar}>|</span>
                              4
                              <img className={styles.feature_icon} src="/property/bath-icon.png" alt="bath" />
                              <span className={styles.splitbar}>|</span>
                              138M<sup className={styles.sup}>2</sup>
                              <img className={styles.feature_icon} src="/property/size-icon.png" alt="size" />
                            </div>
                          </div>
                        </div>

                        <Link href="/landlord/property">
                          <a className={styles.show_btn}>SHOW MORE</a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col lg={4}>
                  <div className={styles.lead_section}>
                    <h3 className={styles.section_title}>Potential Leads</h3>
                    <hr className="d-none d-md-block" />

                    <div className={styles.lead_group}>
                      <div className={styles.lead_item}>
                        <div className="d-flex align-items-center">
                          <img className={styles.user_icon} src="/message/user-1.png" alt="user" />
                          <div className={styles.lead_text}>
                            <p className={styles.lead_name}>Lead #1</p>
                            <p className={styles.lead_date}>1 Days Ago</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column align-items-center">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>95% Match</p>
                          </div>
                          <Link href="/landlord/lead">
                            <a>
                              <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className={styles.lead_item}>
                        <div className="d-flex align-items-center">
                          <img className={styles.user_icon} src="/message/user-1.png" alt="user" />
                          <div className={styles.lead_text}>
                            <p className={styles.lead_name}>Lead #2</p>
                            <p className={styles.lead_date}>2 Days Ago</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column align-items-center">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>91% Match</p>
                          </div>
                          <Link href="/landlord/lead">
                            <a>
                              <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className={styles.lead_item}>
                        <div className="d-flex align-items-center">
                          <img className={styles.user_icon} src="/message/user-1.png" alt="user" />
                          <div className={styles.lead_text}>
                            <p className={styles.lead_name}>Lead #3</p>
                            <p className={styles.lead_date}>2 Days Ago</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column align-items-center">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>91% Match</p>
                          </div>
                          <Link href="/landlord/lead">
                            <a>
                              <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className={styles.lead_item}>
                        <div className="d-flex align-items-center">
                          <img className={styles.user_icon} src="/message/user-1.png" alt="user" />
                          <div className={styles.lead_text}>
                            <p className={styles.lead_name}>Lead #4</p>
                            <p className={styles.lead_date}>3 Days Ago</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column align-items-center">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>86% Match</p>
                          </div>
                          <Link href="/landlord/lead">
                            <a>
                              <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className={styles.lead_item}>
                        <div className="d-flex align-items-center">
                          <img className={styles.user_icon} src="/message/user-1.png" alt="user" />
                          <div className={styles.lead_text}>
                            <p className={styles.lead_name}>Lead #5</p>
                            <p className={styles.lead_date}>4 Days Ago</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column align-items-center">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>81% Match</p>
                          </div>
                          <Link href="/landlord/lead">
                            <a>
                              <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className={styles.lead_item}>
                        <div className="d-flex align-items-center">
                          <img className={styles.user_icon} src="/message/user-1.png" alt="user" />
                          <div className={styles.lead_text}>
                            <p className={styles.lead_name}>Lead #6</p>
                            <p className={styles.lead_date}>4 Days Ago</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="d-flex flex-column align-items-center">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>80% Match</p>
                          </div>
                          <Link href="/landlord/lead">
                            <a>
                              <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <Link href="/landlord/lead">
                      <a className={styles.show_btn}>SHOW MORE</a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </main>
        </div>
        <Footer />
      </div >
    )
  }
}
