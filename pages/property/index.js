import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Form, InputGroup, FormControl, Tabs, Tab } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import PropertyCard from './PropertyCard'
import styles from './Property.module.css'

export default class Property extends React.Component {
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
          <title>Add your properties</title>
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
              <h2 className={styles.primary_title}>Add your properties</h2>
              <p className={styles.primary_detail}>Search for the properties you would like to compete for you.</p>
            </Container>

            <Container className={styles.container}>
              <Tabs defaultActiveKey="url" className={styles.property_tabs}>
                <Tab className={styles.property_tab} eventKey="url" title="Listing URL">
                  <Form>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text className={styles.prepend_content}>
                          <img className={styles.search_icon} src="/property/search-icon.png" alt="search" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl className={styles.input_box} type="text" placeholder="Insert official listing URL" />
                    </InputGroup>
                  </Form>

                  <div className={styles.property_group}>
                    <h4 className={styles.group_title}>Search Result</h4>

                    <Row className={styles.property_row}>
                      <Col md={6} xl={4} className={styles.property_card_wrapper}>
                        <PropertyCard
                          img="/property/property-1.jpg"
                          name="Unit Name 1"
                          price="1,775"
                          address="4845 Saturn st, Los Angeles, CA 90019"
                          bed="2"
                          bath="2"
                          size="89"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={styles.property_group}>
                    <h4 className={styles.group_title}>Added Properties</h4>
                    <Row className={styles.property_row}>
                      <Col md={6} xl={4} className={styles.property_card_wrapper}>
                        <PropertyCard
                          added
                          img="/property/property-2.jpg"
                          name="Unit Name 2"
                          price="2,500"
                          address="4845 Saturn st, Los Angeles, CA 90019"
                          bed="3"
                          bath="4"
                          size="105"
                        />
                      </Col>

                      <Col md={6} xl={4} className={styles.property_card_wrapper}>
                        <PropertyCard
                          added
                          img="/property/property-3.jpg"
                          name="Unit Name 3"
                          price="2,850"
                          address="4845 Saturn st, Los Angeles, CA 90019"
                          bed="3"
                          bath="4"
                          size="124"
                        />
                      </Col>

                      <Col md={6} xl={4} className={styles.property_card_wrapper}>
                        <PropertyCard
                          added
                          img="/property/property-4.jpg"
                          name="Unit Name 4"
                          price="2,850"
                          address="4845 Saturn st, Los Angeles, CA 90019"
                          bed="3"
                          bath="4"
                          size="124"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={styles.submit_btn}>
                    <Link href="/bed">
                      <a><MyButton>SUBMIT</MyButton></a>
                    </Link>
                  </div>
                </Tab>

                <Tab className={styles.property_tab} eventKey="address" title="Address">
                  <Form>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text className={styles.prepend_content}>
                          <img className={styles.search_icon} src="/property/search-icon.png" alt="search" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl className={styles.input_box} type="text" placeholder="Insert official address" />
                    </InputGroup>
                  </Form>

                  <div className={styles.property_group}>
                    <h4 className={styles.group_title}>Search Result</h4>

                    <Row className={styles.property_row}>
                      <Col md={6} xl={4} className={styles.property_card_wrapper}>
                        <PropertyCard
                          img="/property/property-1.jpg"
                          name="Unit Name 1"
                          price="1,775"
                          address="4845 Saturn st, Los Angeles, CA 90019"
                          bed="2"
                          bath="2"
                          size="89"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={styles.property_group}>
                    <h4 className={styles.group_title}>Added Properties</h4>
                    <Row className={styles.property_row}>
                      <Col md={6} xl={4} className={styles.property_card_wrapper}>
                        <PropertyCard
                          added
                          img="/property/property-2.jpg"
                          name="Unit Name 2"
                          price="2,500"
                          address="4845 Saturn st, Los Angeles, CA 90019"
                          bed="3"
                          bath="4"
                          size="105"
                        />
                      </Col>

                      <Col md={6} xl={4} className={styles.property_card_wrapper}>
                        <PropertyCard
                          added
                          img="/property/property-3.jpg"
                          name="Unit Name 3"
                          price="2,850"
                          address="4845 Saturn st, Los Angeles, CA 90019"
                          bed="3"
                          bath="4"
                          size="124"
                        />
                      </Col>

                      <Col md={6} xl={4} className={styles.property_card_wrapper}>
                        <PropertyCard
                          added
                          img="/property/property-4.jpg"
                          name="Unit Name 4"
                          price="2,850"
                          address="4845 Saturn st, Los Angeles, CA 90019"
                          bed="3"
                          bath="4"
                          size="124"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div className={styles.submit_btn}>
                    <Link href="/bed">
                      <a><MyButton>SUBMIT</MyButton></a>
                    </Link>
                  </div>

                </Tab>
              </Tabs>
            </Container>
          </main>
        </div>
        <Footer />
      </div >
    )
  }
}
