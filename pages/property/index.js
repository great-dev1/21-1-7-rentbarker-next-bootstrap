import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Form, InputGroup, FormControl, Tabs, Tab } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import PropertyCard from './PropertyCard'
import styles from './Property.module.css'

export default function Property() {
  return (
    <div>
      <Head>
        <title>Add your properties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Container>
          <h2 className={styles.primary_title}>Add your properties</h2>
          <h2 className={styles.secondary_title}>Search for the properties you would like to compete for you.</h2>
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
                <h4 className={styles.group_title}>Search Result</h4>
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
              Address content ...
            </Tab>
          </Tabs>
        </Container>
      </main>

      <Footer />
    </div >
  )
}
