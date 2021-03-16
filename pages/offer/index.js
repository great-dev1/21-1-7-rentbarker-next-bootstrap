import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OfferCard from './OfferCard'
import styles from './Offer.module.css'

export default class Offers extends React.Component {
  state = {
    logged: false,
  }

  componentDidMount() {
    const logged = localStorage.getItem('logged') === 'true';
    this.setState({ logged });
  }

  render() {
    const { logged } = this.state;

    return (
      <div>
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
              <h2 className={styles.primary_title}>Offers</h2>
              <p className={styles.primary_detail}>Sunday, 13 December 2020</p>

              {/* Solicited Offers */}
              <div className={styles.offer_group}>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className={styles.group_title}>Solicited Offers</h4>
                  <Link href="/property">
                    <a className={styles.add_link}>
                      <img src="/offer/plus-icon.png" alt="plus" />
                      <span className="ml-2">ADD PROPERTY</span>
                    </a>
                  </Link>
                </div>
                <hr />

                <Row className={styles.offer_row}>
                  <Col md={6} xl={4} className={styles.offer_card_wrapper}>
                    <OfferCard
                      status="available"
                      img="/offer/offer-1.jpg"
                      name="Unit Name 1"
                      price="1,775"
                      address="4845 Saturn st, Los Angeles, CA 90019"
                      bed="2"
                      bath="2"
                      size="89"
                    />
                  </Col>

                  <Col md={6} xl={4} className={styles.offer_card_wrapper}>
                    <OfferCard
                      status="unavailable"
                      img="/offer/offer-2.jpg"
                      name="Unit Name 2"
                      price="2,500"
                      address="4845 Saturn st, Los Angeles, CA 90019"
                      bed="3"
                      bath="4"
                      size="105"
                    />
                  </Col>

                  <Col md={6} xl={4} className={styles.offer_card_wrapper}>
                    <OfferCard
                      status="pending"
                      img="/offer/offer-3.jpg"
                      name="Unit Name 3"
                      price="2,850"
                      address="4845 Saturn st, Los Angeles, CA 90019"
                      bed="3"
                      bath="4"
                      size="124"
                    />
                  </Col>
                </Row>

                <a href="#" className={styles.show_more}>SHOW MORE</a>
              </div>

              {/* Unsolicited Offers */}
              <div className={styles.offer_group}>
                <h4 className={styles.group_title}>Unsolicited Offers</h4>
                <hr />

                <Row className={styles.offer_row}>
                  <Col md={6} xl={4} className={styles.offer_card_wrapper}>
                    <OfferCard
                      status="available"
                      img="/offer/offer-4.jpg"
                      name="Unit Name 4"
                      price="1,500"
                      address="4845 Saturn st, Los Angeles, CA 90019"
                      bed="2"
                      bath="2"
                      size="72"
                    />
                  </Col>
                </Row>
              </div>

            </Container>
          </main>
        </div>
        <Footer />
      </div >
    )
  }
}
