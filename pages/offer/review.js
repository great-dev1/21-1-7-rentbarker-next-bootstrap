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

export default function Review() {
  return (
    <div>
      {/* <img src="/testback-16.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.6" }} /> */}

      <Head>
        <title>Review Offer</title>
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
            <h1 className={styles.primary_title}>Congratulations on your new home!</h1>
            <h3 className={styles.subtitle}><br /></h3>

            <div className={styles.offer_table}>
              <img className={styles.table_img} src="/offer/flat.jpg" alt="flat" />

              <h2 className={styles.secondary_title}>Accepted Offer Details</h2>
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
                      Amenities: $30 monthly/$$360 per lease<br />
                      Pest Control: $3 monthly/$$36 per lease<br />
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

            <p className={styles.offer_detail}>
              Congratulations, Amanda! The landlord will hold your unit for 24 hours. We are so happy you found your
              home. The landlord now has access to your personal contact information, and will be reaching out with the
              necessary documents to wrap up the leasing process. We have also provided their contact information below.
            </p>

            <p className="text-center m-3">
              Vantage Apartments<br />
              Patrick@vantageapartments.com<br />
              214-837-3928<br />
              2810 Routh Creek<br />
              Richardson, TX 75082
            </p>

            <div className={styles.btn_group}>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <MyButton blue width="230px" height="45px" margin="10px">ONE LAST THING...</MyButton>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}