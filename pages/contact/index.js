import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Nav, Row, Col, Form } from 'react-bootstrap'

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
        <Navbar className={styles.navbar} collapseOnSelect expand="lg" variant="light">
          <Navbar.Toggle className={styles.toggle} aria-controls="responsive-navbar-nav">
            <img src="/navbar/menu.png" alt="menu" />
          </Navbar.Toggle>

          <Navbar.Brand className={styles.brand} href="/">
            <img src="/navbar/logo.png" alt="logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav className={styles.nav_links}>
              <Nav.Link className={styles.nav_link} href="/landlord">Landlords</Nav.Link>
              <Nav.Link className={styles.nav_link} href="/faq">FAQs</Nav.Link>
              <Nav.Link className={styles.nav_link} href="/contact">Contact Us</Nav.Link>
            </Nav>

            <Nav className={styles.sign_links}>
              <Nav.Link className={styles.signin_link} href="/login">Sign In</Nav.Link>
              <Nav.Link className={styles.signup_btn} href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
                <Link href="#">
                  <a className={styles.submit_btn}>
                    <MyButton width="180px" height="48px">Send Message</MyButton>
                  </a>
                </Link>
              </div>
            </Form>

          </div>
        </div>

        {/* Choose Section */}
        <div className={styles.choose_section}>
          <h2 className={styles.choose_title}>Choose a better way to work</h2>
          <div className="d-sm-flex">
            <Link href="/">
              <a className={styles.tenant_btn}>
                <MyButton width="180px" height="48px" borderColor="#fff" color="#126660" backgroundColor="#fff">
                  <span className="d-block d-sm-none text-uppercase">For Tenants</span>
                  <span className="d-none d-sm-block text-capitalize">For Tenants</span>
                </MyButton>
              </a>
            </Link>

            <Link href="/landlord">
              <a className="">
                <MyButton width="180px" height="48px" borderColor="#fff" color="#fff" backgroundColor="#126660">
                  <span className="d-block d-sm-none text-uppercase">For Landlords</span>
                  <span className="d-none d-sm-block text-capitalize">For Landlords</span>
                </MyButton>
              </a>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className={styles.footer_desktop}>
          <div className={styles.container}>
            <div className={styles.footer_top}>
              <Link href="/">
                <a>
                  <img src="/footer/logo.png" alt="logo" />
                </a>
              </Link>
              <div className={styles.footer_links}>
                <Link href="/landloard">
                  <a className={styles.footer_link}>Landlords</a>
                </Link>
                <Link href="/faq">
                  <a className={styles.footer_link}>FAQs</a>
                </Link>
                <Link href="/contact">
                  <a className={styles.footer_link}>Contact Us</a>
                </Link>
              </div>
            </div>

            <div className={styles.footer_mid}>
              <Link href="/privacy">
                <a className={styles.footer_privacy}>Privacy & Terms</a>
              </Link>

              <div className={styles.social_links}>
                <Link href="">
                  <div>
                    <img src="/footer/twitter.png" alt="twitter" />
                    <a className={styles.social_link}>Twitter</a>
                  </div>
                </Link>
                <Link href="">
                  <div>
                    <img src="/footer/instagram.png" alt="instagram" />
                    <a className={styles.social_link}>Instagram</a>
                  </div>
                </Link>
                <Link href="">
                  <div>
                    <img src="/footer/facebook.png" alt="facebook" />
                    <a className={styles.social_link}>Facebook</a>
                  </div>
                </Link>
                <Link href="">
                  <div>
                    <img src="/footer/linkedin.png" alt="linkedin" />
                    <a className={styles.social_link}>Linkedin</a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer_mobile}>
          <Link href="/">
            <a>
              <img className={styles.footer_logo} src="/footer/logo.png" alt="logo" />
            </a>
          </Link>
          <div className={styles.footer_links_mobile}>
            <Link href="/landlord">
              <a className={styles.footer_link_mobile}>Landlords</a>
            </Link>
            <Link href="/">
              <a className={styles.footer_link_mobile}>Tenants</a>
            </Link>
            <Link href="/about">
              <a className={styles.footer_link_mobile}>About</a>
            </Link>
            <Link href="/faq">
              <a className={styles.footer_link_mobile}>FAQs</a>
            </Link>
            <Link href="/privacy">
              <a className={styles.footer_link_mobile}>Privacy & Terms</a>
            </Link>
            <Link href="/contact">
              <a className={styles.footer_link_mobile}>Contact Us</a>
            </Link>
          </div>

          <div className={styles.social_links_mobile}>
            <Link href="">
              <img className={styles.social_icon} src="/footer/twitter-mobile.png" alt="twitter" />
            </Link>
            <Link href="">
              <img className={styles.social_icon} src="/footer/facebook-mobile.png" alt="facebook" />
            </Link>
            <Link href="">
              <img className={styles.social_icon} src="/footer/instagram-mobile.png" alt="instagram" />
            </Link>
            <Link href="">
              <img className={styles.social_icon} src="/footer/linkedin-mobile.png" alt="linkedin" />
            </Link>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <div className={styles.container}>
            <p className="text-center text-md-left">
              ©2021 Barker, LLC.<br className="d-block d-md-none" />
              All rights reserved 2020. U.S. Patent Pending.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
