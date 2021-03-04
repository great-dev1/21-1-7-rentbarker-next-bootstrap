import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form } from 'react-bootstrap'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Message.module.css'

export default class Message extends React.Component {
  state = {
    property: 1
  }

  handleChange = (num) => () => this.setState({ property: num });

  handleClick = () => fileUp.click();

  render() {
    const { property } = this.state;

    return (
      <div>
        {/* <img src="/testback-17.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.6" }} /> */}

        <Head>
          <title>Messages</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
          <Container className={utils.container}>
            <Link href="#">
              <a className={styles.prev_link}>
                <FontAwesomeIcon icon={faAngleLeft} className={styles.arrow_left} />
                Back
              </a>
            </Link>

            <div className={styles.message_box}>
              <div className={styles.box_header}>
                <h1 className={styles.box_title}>Messages</h1>
              </div>

              <div className={styles.box_main}>
                <div className={styles.side_menu}>
                  <div
                    className={property === 1 ? styles.menu_item_active : styles.menu_item_inactive}
                    onClick={this.handleChange(1)}
                  >
                    <h3 className={styles.menu_title}>Property 1</h3>
                    <h4 className={styles.menu_subtitle}>1234 Homeside St, Los Angeles</h4>
                  </div>

                  <div
                    className={property === 2 ? styles.menu_item_active : styles.menu_item_inactive}
                    onClick={this.handleChange(2)}
                  >
                    <h3 className={styles.menu_title}>Property 2</h3>
                    <h4 className={styles.menu_subtitle}>4845 Saturn St, Los Angeles</h4>
                  </div>

                  <div
                    className={property === 3 ? styles.menu_item_active : styles.menu_item_inactive}
                    onClick={this.handleChange(3)}
                  >
                    <h3 className={styles.menu_title}>Property 3</h3>
                    <h4 className={styles.menu_subtitle}>1234 Alice St, Los Angeles</h4>
                  </div>
                </div>

                <div className={styles.message_content}>
                  <div className={styles.content_header}>
                    <div>
                      <h2 className={styles.content_title}>Property 2 Landlord</h2>
                      <h4 className={styles.content_subtitle}>4845 Saturn St, Los Angeles</h4>
                    </div>

                    <MyButton width="170px" height="45px" margin="0">SCHEDULE TOUR</MyButton>
                  </div>

                  <div className={styles.content_main}>
                    <div className={styles.message_item}>
                      <p className={styles.message_date}>June 11, 2020</p>

                      <div className={styles.left_item}>
                        <div className={styles.message_header}>
                          <div className={styles.message_name}>Property 2 Landlord</div>
                          <div className={styles.message_time}>5:30pm</div>
                        </div>

                        <div className={styles.message_detail}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Tenim ad minim veniam, quis nostrud exercitation ullamco.
                        </div>
                      </div>
                    </div>

                    <div className={styles.message_item}>
                      <p className={styles.message_date}>June 12, 2020</p>

                      <div className={styles.right_item}>
                        <div className={styles.message_header}>
                          <div className={styles.message_name}>You</div>
                          <div className={styles.message_time}>9:15am</div>
                        </div>

                        <div className={styles.message_detail}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Tenim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tenim ad
                          minim veniam, quis nostrud exercitation ullamco.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.content_footer}>
                    <textarea className={styles.input_box} name="message" id="inputBox" cols="" rows="" placeholder="Type message"></textarea>

                    <div className={styles.btn_group}>
                      <div className="d-flex justify-content-end align-items-center">
                        <img className={styles.clip_icon} src="/message/clip.png" onClick={this.handleClick} alt="clip icon" />
                        <Form.File className="d-none" id="fileUp" />
                        <MyButton green={true} width="170px" height="45px" margin="0">SEND</MyButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}
