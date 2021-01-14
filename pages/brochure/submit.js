import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { ProgressBar, Step } from 'react-step-progress-bar'
import 'react-step-progress-bar/styles.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Brochure.module.css'

export default function Brochure() {
  return (
    <div>
      {/* <img src="/testback-12.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.6" }} /> */}

      <Head>
        <title>Borchure - Review & Submit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Container className={utils.container}>
          <h1 className={styles.primary_title}>Build Your Barker Brochure</h1>
          <p>
            This free application will be used for all landlords that bid on you.<br />
            No hidden fees and hassel-free! Your personal information will remain anonymous to all landlords.
          </p>

          <div className={styles.progress_bar}>
            <ProgressBar percent={100} filledBackground="#007c77">
              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.complete}>
                    {index + 1}
                  </div>
                )}
              </Step>

              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.complete}>
                    {index + 1}
                  </div>
                )}
              </Step>

              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.complete}>
                    {index + 1}
                  </div>
                )}
              </Step>

              <Step>
                {({ accomplished, index }) => (
                  <div className={styles.complete}>
                    {index + 1}
                  </div>
                )}
              </Step>
            </ProgressBar>
          </div>

          <div className={styles.form_container}>
            <h2 className={styles.form_title}>Review & Submit</h2>

            <div className={styles.info_table}>
              <div className="d-flex justify-content-between">
                <h3 className={styles.table_title}>Personal Information</h3>
                <Link href="/brochure/personal">
                  <a className={styles.edit_link}>Edit</a>
                </Link>
              </div>

              <Row className={styles.table_content}>
                <Col md={6}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Name:</h4>
                    <p className={styles.table_detail}>Victoria Jefferson</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Date of birth:</h4>
                    <p className={styles.table_detail}>01/03/1986</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Present home address:</h4>
                    <p className={styles.table_detail}>
                      1234 Magnolia Ave<br />
                      Dallas TX, 55555
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Length of time:</h4>
                    <p className={styles.table_detail}>12 months</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Monthly Rent:</h4>
                    <p className={styles.table_detail}>$1,000</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Reason for moving:</h4>
                    <p className={styles.table_detail}>Too far from work</p>
                  </div>
                </Col>

                <Col md={6} className={styles.right_content}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Previous home address:</h4>
                    <p className={styles.table_detail}>
                      1234 Magnolia Ave<br />
                      Dallas TX, 55555
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Length of time:</h4>
                    <p className={styles.table_detail}>2 years</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Reason for moving:</h4>
                    <p className={styles.table_detail}>Wanted to upgrade to a bigger place</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Monthly Rent:</h4>
                    <p className={styles.table_detail}>$899</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.info_table}>
              <div className="d-flex justify-content-between">
                <h3 className={styles.table_title}>Additional Information</h3>
                <Link href="/brochure/additional">
                  <a className={styles.edit_link}>Edit</a>
                </Link>
              </div>

              <Row className={styles.table_content}>
                <Col md={6}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Desired Move-In Date:</h4>
                    <p className={styles.table_detail}>12/01/2020</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Pets:</h4>
                    <p className={styles.table_detail}>
                      Yes, Dog, Yellow Lab, 2 yrs old, 60 lbs<br />
                      ESA: No
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Smoker:</h4>
                    <p className={styles.table_detail}>No</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Judgements or liens:</h4>
                    <p className={styles.table_detail}>No</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Evictions:</h4>
                    <p className={styles.table_detail}>No</p>
                  </div>
                </Col>

                <Col md={6} className={styles.right_content}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Bankruptcy:</h4>
                    <p className={styles.table_detail}>No</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.info_table}>
              <div className="d-flex justify-content-between">
                <h3 className={styles.table_title}>Employment Information</h3>
                <Link href="/brochure/employment">
                  <a className={styles.edit_link}>Edit</a>
                </Link>
              </div>

              <Row className={styles.table_content}>
                <Col md={6}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Present occupation:</h4>
                    <p className={styles.table_detail}>Teacher at Renner Middle School</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Employer name:</h4>
                    <p className={styles.table_detail}>Jack</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Time with employer:</h4>
                    <p className={styles.table_detail}>3 years</p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Employer address:</h4>
                    <p className={styles.table_detail}>
                      1234 Magnolia Ave<br />
                      Dallas TX, 55555
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Gross Monthly Income:</h4>
                    <p className={styles.table_detail}>$4,000</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.info_table}>
              <div className="d-flex justify-content-between">
                <h3 className={styles.table_title}>Preferences</h3>
                <Link href="/brochure/bed">
                  <a className={styles.edit_link}>Edit</a>
                </Link>
              </div>

              <Row className={styles.table_content}>
                <Col md={6}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Roommates, Beds, and Baths:</h4>
                    <p className={styles.table_detail}>
                      1 Roommate<br />
                      1 Bed<br />
                      1 Bath<br />
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Unique Features:</h4>
                    <p className={styles.table_detail}>
                      In-unit washer/dryer<br />
                      Yard
                    </p>
                  </div>

                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Budget & Lease Length:</h4>
                    <p className={styles.table_detail}>$1500/month, 14 months</p>
                  </div>
                </Col>

                <Col md={6} className={styles.right_content}>
                  <div className={styles.table_item}>
                    <h4 className={styles.table_subtitle}>Credit Score:</h4>
                    <p className={styles.table_detail}>
                      Self: 750<br />
                      Roommate: 725
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={styles.continue_btn}>
              <Link href="/brochure">
                <MyButton blue width="205px" height="45px" margin="10px">SUBMIT</MyButton>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}