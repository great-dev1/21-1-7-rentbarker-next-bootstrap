import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './Offer.module.css'

export default function Success() {
  return (
    <div>
      <Head>
        <title>Offer Success</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navbar}>
        <Navbar />
      </div>

      <header className={styles.header}>
        <Link href="/offer/review">
          <a>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron_left} />
          </a>
        </Link>

        <div className="d-flex justify-content-center">
          <Link href="/">
            <a className={styles.brand}>
              <img src="/brochure/brand.png" alt="brand" />
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.approve_main}>
        <div className={styles.approve_header}>
          <img className={styles.check_icon} src="/brochure/check-orange.png" alt="approve" />
          <h2 className={styles.approve_primary_title}>
            Congratulations<br className="d-block d-sm-none" />
            Your New Home!
          </h2>
        </div>

        <div className={styles.approve_content}>
          {/* Offer Summary */}
          <Row>
            <Col md={6}>
              <img className={styles.offer_img} src="/offer/vantage.jpg" alt="vantage" />
            </Col>
            <Col md={6}>
              <h3 className={styles.offer_name}>4845 Barnes Avenue</h3>
              <p className={styles.offer_address}>4845 Saturn St, Los Angeles, CA 90019</p>

              <h4 className={styles.description_title}>DESCRIPTION</h4>
              <p className={styles.description_detail}>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>

              <div className={styles.offer_feature}>
                2
                <img className={styles.feature_icon} src="/offer/bed-icon.png" alt="bed" />
                <span className={styles.splitbar}>|</span>
                2
                <img className={styles.feature_icon} src="/offer/bath-icon.png" alt="bath" />
                <span className={styles.splitbar}>|</span>
                89 M<sup>2</sup>
                <img className={styles.feature_icon} src="/offer/size-icon.png" alt="size" />
              </div>

              <div className={styles.offer_amenity}>
                <h4 className={styles.description_title}>AMENITIES</h4>
                <Row>
                  <Col xs={6}>
                    <li className={styles.amenity_item}>
                      On-site Laundary
                    </li>
                  </Col>
                  <Col xs={6}>
                    <li className={styles.amenity_item}>
                      Off-street Parking
                    </li>
                  </Col>
                  <Col xs={6}>
                    <li className={styles.amenity_item}>
                      Dishwasher
                    </li>
                  </Col>
                  <Col xs={6}>
                    <li className={styles.amenity_item}>
                      Hardwood Floors
                    </li>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* Offer Details */}
          <h3 className={styles.section_title}>Offer Details</h3>
          <Row>
            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Your Offer</h4>
              <p className={styles.detail_content}>
                $1,750 monthly<br />
                $21,000 per lease
              </p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Advertised Price</h4>
              <p className={styles.detail_content}>
                $2,000 monthly<br />
                $24,000 per lease
              </p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Lease Length </h4>
              <p className={styles.detail_content}>12 month</p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Property Address</h4>
              <p className={styles.detail_content}>
                2810 Routh Creek<br />
                Richardson, TX 75080
              </p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Additional Info</h4>
              <p className={styles.detail_content}>Text</p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Security Deposit</h4>
              <p className={styles.detail_content}>$150</p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Unit Number</h4>
              <p className={styles.detail_content}>4845</p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Move in Date</h4>
              <p className={styles.detail_content}>January 16, 2021</p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>Additional Discounts</h4>
              <p className={styles.detail_content}>
                First month free rent<br />
                Waived application fee (originally $100)
              </p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>
                Your Total Lease Costs<br />
                Without RentBarker
              </h4>
              <p className={styles.detail_content}>$24,718</p>
            </Col>

            <Col xs={6} md={3}>
              <h4 className={styles.detail_title}>
                Your Total Lease Costs<br />
                With RentBarker
              </h4>
              <p className={styles.detail_content}>$19,718</p>
            </Col>
          </Row>

          {/* Offer Profits */}
          <Row>
            <Col md={6}>
              <div className={styles.offer_profit}>
                <img className={styles.logo} src="/offer/logo.png" alt="logo" />
                <div>
                  <h4 className={styles.profit_title}>Profits</h4>
                  <p className={styles.profit_detail}>
                    Your total savings using RentBarker:<br />
                    $5,000
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <h4 className={styles.detail_title}>Additional Monthly Fees</h4>
              <p className={styles.detail_content}>
                Amenities: $30 monthly/$360 per lease<br />
                Pest control: $3 monthly/$36 per lease<br />
                Trash: $6 monthly/$72 per lease<br />
              </p>
            </Col>
          </Row>

          {/* Congratulations */}
          <p className={styles.accept_detail}>
            Congratulations, Rohman! The landlord will hold your unit for 24 hours. We are so happy you found your home. The landlord now has access to your personal
            contact information, and will be reaching out with the necessary documents to wrap up the leasing process. We have also provided their contact information below.
            <p className={styles.contact_detail}>
              Vantage Apartments<br />
              Patrick@vantageapartments.com<br />
              214-837-3928<br />
              2810 Routh Creek<br />
              Richardson, TX 75082
            </p>
          </p>

          <Link href="#">
            <a className={styles.accept_btn}>ONE LAST THING…</a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}