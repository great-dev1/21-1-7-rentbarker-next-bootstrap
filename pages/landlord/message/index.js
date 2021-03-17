import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, InputGroup, FormControl, Row, Col } from 'react-bootstrap'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import MyButton from '../../../components/MyButton'
import styles from './Message.module.css'

export default class Message extends React.Component {
  state = {
    property: 1,
  }

  handleChange = (num) => () => this.setState({ property: num });

  render() {
    const { property } = this.state;

    return (
      <div>
        <Head>
          <title>Messages</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

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
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/property-grey.png" alt="property" />
                  <span className={styles.sidebar_text}>Properties</span>
                </a>
              </Link>

              <Link href="/landlord/search">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/search-grey.png" alt="search" />
                  <span className={styles.sidebar_text}>Tenant Search</span>
                </a>
              </Link>

              <Link href="/landlord/message">
                <a className={styles.sidebar_menu_active}>
                  <img src="/sidebar/message-green.png" alt="message" />
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
          <main className="flex-grow-1">
            <div className="d-flex flex-column flex-lg-row">
              <div className={styles.lead_section}>
                <div className={styles.lead_header}>
                  <h2 className={styles.primary_title}>Messages</h2>
                  <p className={styles.primary_detail}>Sunday, 13 December 2020</p>
                  <h3 className={styles.lead_title}>All Conversations</h3>
                </div>

                <div className={styles.lead_group}>
                  <h4 className={styles.property_name}>PROPERTY NAME | ADDRESS</h4>

                  <div
                    className={property === 1 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(1)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #1</p>
                        <p className={styles.lead_date}>2 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>92% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 2 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(2)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #2</p>
                        <p className={styles.lead_date}>3 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>88% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 3 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(3)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #3</p>
                        <p className={styles.lead_date}>3 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>87% Match</p>
                    </div>
                  </div>
                </div>

                <div className={styles.lead_group}>
                  <h4 className={styles.property_name}>PROPERTY NAME | ADDRESS</h4>

                  <div
                    className={property === 4 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(4)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #4</p>
                        <p className={styles.lead_date}>4 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>85% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 5 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(5)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #5</p>
                        <p className={styles.lead_date}>4 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>76% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 6 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(6)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #6</p>
                        <p className={styles.lead_date}>5 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>71% Match</p>
                    </div>
                  </div>
                </div>

                <div className={styles.lead_group}>
                  <h4 className={styles.property_name}>PROPERTY NAME | ADDRESS</h4>

                  <div
                    className={property === 7 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(7)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #7</p>
                        <p className={styles.lead_date}>5 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>64% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 8 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(8)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #8</p>
                        <p className={styles.lead_date}>5 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>63% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 9 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(9)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #9</p>
                        <p className={styles.lead_date}>5 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>63% Match</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className={styles.message_section}>
                <div className={styles.message_header}>
                  <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
                    <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-left">
                      <img src="/message/user-1.png" alt="user" />

                      <div className="m-3">
                        <p className={styles.message_name}>Alexandra Harrison</p>
                        <div className="d-flex align-items-center flex-wrap">
                          <div className={styles.stars_1}>
                            <img src="/message/star.png" alt="star" />
                            <img src="/message/star.png" alt="star" />
                            <img src="/message/star.png" alt="star" />
                            <img src="/message/star.png" alt="star" />
                            <img src="/message/star.png" alt="star" />
                          </div>
                          <p className={styles.match_text_1}>94% Match</p>
                          <p className={styles.contact_date_1}>5 Days Ago</p>
                        </div>
                      </div>
                    </div>

                    <Link href="">
                      <a className="d-none d-sm-block">
                        <MyButton width="160px" height="44px" color="#126660" backgroundColor="#fff">SCHEDULE TOUR</MyButton>
                      </a>
                    </Link>
                  </div>

                  <Row className={styles.preview_summary}>
                    <Col xs={6} sm={4} className={styles.preview_summary_item}>
                      <div className="d-flex flex-column flex-sm-row align-items-start">
                        <img className={styles.preview_icon} src="/brochure/dollar-icon.png" alt="dollar" />
                        <div className="mt-2 mt-sm-0">
                          <p className={styles.preview_title}>Rent</p>
                          <p className={styles.preview_detail}>$1,775 Monthly</p>
                        </div>
                      </div>
                    </Col>

                    <Col xs={6} sm={4} className={styles.preview_summary_item}>
                      <div className="d-flex flex-column flex-sm-row align-items-start">
                        <img className={styles.preview_icon} src="/brochure/room-icon.png" alt="room" />
                        <div className="mt-2 mt-sm-0">
                          <p className={styles.preview_title}>Flat Details</p>
                          <p className={styles.preview_detail}>Unit 303 | 1 bed, 1 bath</p>
                        </div>
                      </div>
                    </Col>

                    <Col xs={6} sm={4} className={styles.preview_summary_item}>
                      <div className="d-flex flex-column flex-sm-row align-items-start">
                        <img className={styles.preview_icon} src="/brochure/map-icon.png" alt="map" />
                        <div className="mt-2 mt-sm-0">
                          <p className={styles.preview_title}>Address</p>
                          <p className={styles.preview_detail}>4845-9 Saturn St, LA</p>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Link href="">
                    <a className="d-block d-sm-none mt-4">
                      <MyButton width="160px" height="44px" color="#126660" backgroundColor="#fff">SCHEDULE TOUR</MyButton>
                    </a>
                  </Link>
                </div>

                <div className={styles.message_content}>
                  <div className={styles.message_item}>
                    <p className={styles.message_date}>16 January, 2021</p>

                    <div className={styles.right_message}>
                      <p className={styles.right_message_detail}>
                        Hey Alexandra, this is the apartment
                        manager. Would you be interested in
                        seeing the apartment?
                      </p>
                      <p className={styles.right_message_time}>11:50</p>
                    </div>
                  </div>

                  <div className={styles.message_item}>
                    <p className={styles.message_date}>17 January, 2021</p>

                    <div className={styles.left_message}>
                      <p className={styles.left_message_detail}>
                        Good day. I would love to see it. Yes,
                        I will be able to make it then. I used to live in that area.
                      </p>
                      <p className={styles.left_message_time}>08:43</p>
                    </div>

                    <div className={styles.right_message}>
                      <p className={styles.right_message_detail}>
                        I’ll give you an application form
                        when I see you.
                      </p>
                      <p className={styles.right_message_time}>09:02</p>
                    </div>

                    <div className={styles.left_message}>
                      <p className={styles.left_message_detail}>
                        That sounds good. Do I need to bring anything?
                      </p>
                      <p className={styles.left_message_time}>09:06</p>
                    </div>

                    <div className={styles.right_message}>
                      <p className={styles.right_message_detail}>
                        No, thanks.
                      </p>
                      <p className={styles.right_message_time}>09:07</p>
                    </div>
                  </div>
                </div>

                <div className={styles.message_input}>
                  <input className={styles.input_box} type="text" placeholder="Write your message..." />

                  <div className={styles.btn_group}>
                    <img className={styles.clip_icon} src="/message/clip-icon.png" onClick={this.handleClick} alt="clip" />
                    <Form.File className="d-none" id="fileUp" />

                    <a href="">
                      <img className={styles.send_icon} src="/message/send-icon.png" alt="send" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    )
  }
}
