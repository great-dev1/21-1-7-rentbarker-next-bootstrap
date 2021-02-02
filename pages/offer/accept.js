import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Offer.module.css'

export default function Accept() {
  return (
    <div>
      {/* <img src="/testback-15.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.6" }} /> */}

      <Head>
        <title>Accept Offer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Link href="/offer">
          <a className={styles.prev_link}>
            <FontAwesomeIcon icon={faAngleLeft} className={styles.arrow_left} />
            Back to offers
          </a>
        </Link>

        <Container className={utils.container}>
          <div className={styles.content}>
            <h1 className={styles.primary_title}>Your offer from Vantage Apartments</h1>
            <h3 className={styles.subtitle}>
              Wow, Amanda! You're a hot commondity! Check out the details on your offer below.
            </h3>

            <div className={styles.offer_table}>
              <img className={styles.table_img} src="/offer/flat.jpg" alt="flat" />

              <h2 className={styles.secondary_title}>Offer Details</h2>
              <Row className={styles.table_content}>
                <Col md={6}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Your Offer:</h4>
                    <p className={styles.table_detail}>
                      $1,750 monthly<br />
                      $21,000 per lease
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Advertised price:</h4>
                    <p className={styles.table_detail}>
                      $2,000 monthly<br />
                      $24,000 per lease
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Security deposit:</h4>
                    <p className={styles.table_detail}>$150</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Additional monthly fees:</h4>
                    <p className={styles.table_detail}>
                      Amenities: $30 monthly/$360 per lease<br />
                      Pest Control: $3 monthly/$36 per lease<br />
                      Trash: $6 monthly/$72 per lease
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Additional discounts:</h4>
                    <p className={styles.table_detail}>
                      First month free rent<br />
                      Walved application fee (originally $100)
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Your total lease costs without RentBarker:</h4>
                    <p className={styles.table_detail}>$24,718</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Your total lease costs with RentBarker:</h4>
                    <p className={styles.table_detail}>$19,718</p>
                  </div>
                </Col>

                <Col md={6} className={styles.right_content}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Property Address:</h4>
                    <p className={styles.table_detail}>
                      2810 Routh Creek<br />
                      Richardson, TX 75080
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Unit number:</h4>
                    <p className={styles.table_detail}>5102</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Lease length:</h4>
                    <p className={styles.table_detail}>12 months</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Move in date:</h4>
                    <p className={styles.table_detail}>January 16, 2021</p>
                  </div>
                </Col>
              </Row>

              <div className={styles.green_bar}>
                Your total savings using RentBarker: $5,000
              </div>
            </div>

            <h2 className={styles.secondary_title}>Before you accept:</h2>
            <p className={styles.offer_detail}>
              Once you accept an offer, the landlord has 72 hours to supply a lease. You then have 72 hours to sign the
              lease and submit a payment in which you will be legally bound with the property you signed with. If you
              choose not to sign the lease within the given time frame, the offer will expire and you will be taken back to
              the offers page. <b>The landlord has the right to withdraw an offer at any time</b> before it is signed to the tenant.
              Don't lose this unit. Sign it before someone else takes it!
            </p>

            <div className={styles.btn_group}>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <MyButton width="230px" height="45px" margin="10px">MESSAGE LANDLORD</MyButton>

                <Link href="/accept">
                  <a><MyButton blue width="230px" height="45px" margin="10px">ACCEPT OFFER</MyButton></a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}