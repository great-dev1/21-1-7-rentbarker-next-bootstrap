import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import OfferCard from './OfferCard'
import utils from '../../styles/utils.module.css'
import styles from './Offer.module.css'

export default function Offer() {
  return (
    <div>
      {/* <img src="/testback-14.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

      <Head>
        <title>Offers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Container className={utils.container}>
          <h1 className={utils.primary_title}>Welcome, Amanda!</h1>
          <h2 className={utils.secondary_title}>You have 4 new offers!</h2>

          <div className={styles.offer_block}>
            <h2 className={styles.offer_title}>Solicited Offers</h2>

            <Row className={styles.offer_row}>
              <Col md={6} xl={4} className={styles.offer_card_wrapper}>
                <OfferCard img="/offer/offer-1.jpg" />
              </Col>

              <Col md={6} xl={4} className={styles.offer_card_wrapper}>
                <OfferCard img="/offer/offer-2.jpg" />
              </Col>

              <Col md={6} xl={4} className={styles.offer_card_wrapper}>
                <OfferCard img="/offer/offer-3.jpg" />
              </Col>
            </Row>

            <div className={styles.view_btn}>
              <MyButton width="190px" height="44px" margin="10px">+ ADD A PROPERTY</MyButton>
            </div>
          </div>

          <div className={styles.offer_block}>
            <h2 className={styles.offer_title}>Unsolicited Offers</h2>

            <Row className={styles.offer_row}>
              <Col md={6} xl={4} className={styles.offer_card_wrapper}>
                <OfferCard img="/offer/offer-4.jpg" />
              </Col>
            </Row>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}