import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, Form } from 'react-bootstrap'

import Navbar_2 from '../../components/Navbar_2'
import Footer_1 from '../../components/Footer_1'
import Choose from '../../components/Choose'
import MyButton from '../../components/MyButton'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className={styles.container}>
        <Navbar_2 />
      </div>

      <main>
        {/* Hero Section */}
        <div className={styles.hero_section}>
          <div className={styles.container}>
            <Row>
              <Col lg={5} className="d-flex align-items-center pr-xl-0">
                <div className={styles.hero_content}>
                  <h1 className={styles.hero_title}>Contact Us</h1>
                  <p className={styles.hero_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
              </Col>

              <Col lg={7}>
                <div className={styles.hero_right}>
                  <img className={styles.hero_img} src="/contact/hero.png" alt="hero" />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Submit Section */}
        <div className={styles.submit_section}>
          <div className={styles.submit_card}>
            <h4 className={styles.submit_card_title}>Submit a Message</h4>
            <p className={styles.submit_card_detail}>
              Send us a message and a team member will get back to you as soon as possible.
            </p>
            <Form className={styles.submit_form}>
              <Form.Control
                className={styles.input_box}
                name="firstName"
                type="text"
                placeholder="First Name"
                required
              />
              <Form.Control
                className={styles.input_box}
                name="email"
                type="text"
                placeholder="Email"
                required
              />
              <Form.Control
                className={styles.input_box}
                name="messageDetail"
                as="textarea"
                rows={5}
                placeholder="Message Details"
              />

              <div className="d-sm-flex">
                <Link href="/">
                  <a className={styles.submit_btn}>
                    <MyButton width="180px" height="48px">Send Message</MyButton>
                  </a>
                </Link>
              </div>
            </Form>

          </div>
        </div>

        {/* Choose Section */}
        <Choose />
      </main>

      {/* Footer */}
      <Footer_1 />
    </div>
  )
}
