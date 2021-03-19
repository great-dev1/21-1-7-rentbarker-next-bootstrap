import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import styles from './Message.module.css'

export default class Message extends React.Component {
  state = {
    property: 1,
    page: 1,
  }

  handlePropertyChange = (num) => () => {
    this.setState({
      property: num,
      page: 2,
    });
  }

  handleReturn = () => this.setState({ page: 1 });

  handleClick = () => fileUp.click();

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { property, page } = this.state;

    return (
      <div>
        <Head>
          <title>Messages</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <div className="d-flex">
          <div className={styles.sidebar}>
            <div>
              <Link href="/offer">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/mailbox-grey.png" alt="mailbox" />
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
                <a className={styles.sidebar_menu_active}>
                  <img src="/sidebar/message-green.png" alt="message" />
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

          <main className="flex-grow-1">
            <div className="d-flex flex-column flex-lg-row">
              <div className={page === 1 ? styles.contact_section : styles.contact_section_mobile_hidden}>
                <div className={styles.contact_header}>
                  <h2 className={styles.primary_title}>Messages</h2>
                  <p className={styles.primary_detail}>Sunday, 13 December 2020</p>
                  <h3 className={styles.contact_title}>All Conversations</h3>
                </div>

                <div className={styles.contact_group}>
                  <div
                    className={property === 1 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(1)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 1</p>
                        <p className={styles.contact_date}>2 Days Ago</p>
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
                      <p className={styles.match_text}>95% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 2 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(2)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 2</p>
                        <p className={styles.contact_date}>3 Days Ago</p>
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
                      <p className={styles.match_text}>94% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 3 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(3)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 3</p>
                        <p className={styles.contact_date}>3 Days Ago</p>
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

                  <div
                    className={property === 4 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(4)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 4</p>
                        <p className={styles.contact_date}>4 Days Ago</p>
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
                    className={property === 5 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(5)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 5</p>
                        <p className={styles.contact_date}>4 Days Ago</p>
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
                    className={property === 6 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(6)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 6</p>
                        <p className={styles.contact_date}>5 Days Ago</p>
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

                  <div
                    className={property === 7 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(7)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 7</p>
                        <p className={styles.contact_date}>5 Days Ago</p>
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
                    className={property === 8 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(8)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 8</p>
                        <p className={styles.contact_date}>5 Days Ago</p>
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
                    className={property === 9 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(9)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 9</p>
                        <p className={styles.contact_date}>5 Days Ago</p>
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
                    className={property === 10 ? styles.contact_item_active : styles.contact_item_inactive}
                    onClick={this.handlePropertyChange(10)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.contact_text}>
                        <p className={styles.contact_name}>Property 10</p>
                        <p className={styles.contact_date}>5 Days Ago</p>
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

              <div className={page === 2 ? styles.message_section : styles.message_section_mobile_hidden}>
                <a className={styles.prev_link} onClick={this.handleReturn}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron_left} />
                    Return to the list
                  </div>
                </a>

                <div className={styles.message_header}>
                  <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
                    <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-left">
                      <img src="/message/user-1.png" alt="user" />

                      <div className="m-0 ml-sm-3">
                        <p className={styles.message_name}>Property 2</p>
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

                  <div className={styles.message_address}>
                    <img className="mr-2 mb-1" src="/message/map-icon.png" alt="map" />
                    <div>
                      <p className={styles.address_title}>Address</p>
                      <p className={styles.address_detail}>1234 Homeside St, Los Angeles</p>
                    </div>
                  </div>

                  <Link href="">
                    <a className="d-block d-sm-none mt-4">
                      <MyButton width="160px" height="44px" color="#126660" backgroundColor="#fff">SCHEDULE TOUR</MyButton>
                    </a>
                  </Link>
                </div>

                <div className={styles.message_content}>
                  <div className={styles.message_item}>
                    <p className={styles.message_date}>16 January, 2021</p>

                    <div className={styles.left_message}>
                      <p className={styles.left_message_detail}>
                        Hey Alexandra, this is the apartment
                        manager. Would you be interested in
                        seeing the apartment?
                      </p>
                      <p className={styles.left_message_time}>11:50</p>
                    </div>
                  </div>

                  <div className={styles.message_item}>
                    <p className={styles.message_date}>17 January, 2021</p>

                    <div className={styles.right_message}>
                      <p className={styles.right_message_detail}>
                        Good day. I would love to see it. Yes,
                        I will be able to make it then. I used to live in that area.
                      </p>
                      <p className={styles.right_message_time}>08:43</p>
                    </div>

                    <div className={styles.left_message}>
                      <p className={styles.left_message_detail}>
                        I’ll give you an application form
                        when I see you.
                      </p>
                      <p className={styles.left_message_time}>09:02</p>
                    </div>

                    <div className={styles.right_message}>
                      <p className={styles.right_message_detail}>
                        That sounds good. Do I need to bring anything?
                      </p>
                      <p className={styles.right_message_time}>09:06</p>
                    </div>

                    <div className={styles.left_message}>
                      <p className={styles.left_message_detail}>
                        No, thanks.
                      </p>
                      <p className={styles.left_message_time}>09:07</p>
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
