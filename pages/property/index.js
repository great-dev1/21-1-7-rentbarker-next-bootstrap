import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Form, FormControl, Tabs, Tab } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import ImageCard from './ImageCard'
import utils from '../../styles/utils.module.css'
import styles from './Property.module.css'

export default function Property() {
  return (
    <div>
      <img src="/testback-2.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} />

      <Head>
        <title>Add your properties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Container className={utils.container}>
          <h1 className={styles.primary_title}>Add your properties</h1>
          <h2 className={styles.secondary_title}>Search for the properties you would like to compete for you.</h2>

          <Tabs defaultActiveKey="url" className={styles.property_tabs}>
            <Tab className={styles.property_tab} eventKey="url" title="Listing URL">
              <Form className={styles.form}>
                <div className="d-flex justify-content-between align-items-center">
                  <FormControl className={styles.input_box} type="text" placeholder="Insert officaila listing URL" />
                  <div className={styles.search_btn}>
                    <MyButton blue width="100%" height="50px" margin="0">SEARCH</MyButton>
                  </div>
                </div>
              </Form>

              <div className={styles.property_box}>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className={styles.property_subtitle}>
                      Apartment Complex Five
                    </h3>
                    <h4 className={styles.property_address}>
                      123 Main St., Dallas, TX75225
                    </h4>
                    <div className={styles.property_feature}>
                      <img className={styles.feature_icon} src="/property/bed-icon.png" alt="bed" /> 1-2 <span className={styles.splitbar}>|</span>
                      <img className={styles.feature_icon} src="/property/bath-icon.png" alt="bath" /> 1 <span className={styles.splitbar}>|</span>
                      <img className={styles.feature_icon} src="/property/size-icon.png" alt="size" /> 530-800 sqft
                    </div>
                  </div>
                  <div className={styles.plus_btn}>
                    +
                  </div>
                </div>
              </div>
            </Tab>
            <Tab className={styles.property_tab} eventKey="address" title="Address">
              Address
            </Tab>
          </Tabs>

          <Row className={styles.property_row}>
            <Col md={6} xl={4} className={styles.property_card_wrapper}>
              <ImageCard number="1" img="/property/property-1.jpg" />
            </Col>

            <Col md={6} xl={4} className={styles.property_card_wrapper}>
              <ImageCard number="2" img="/property/property-2.jpg" />
            </Col>

            <Col md={6} xl={4} className={styles.property_card_wrapper}>
              <ImageCard number="3" img="/property/property-3.jpg" />
            </Col>

            <Col md={6} xl={4} className={styles.property_card_wrapper}>
              <ImageCard number="4" img="/property/property-1.jpg" />
            </Col>

            <Col md={6} xl={4} className={styles.property_card_wrapper}>
              <ImageCard number="5" img="/property/property-2.jpg" />
            </Col>
          </Row>

          <div className={styles.continue_btn}>
            <Link href="/bed">
              <a><MyButton blue width="100%" height="44px" margin="0">CONTITUE</MyButton></a>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
