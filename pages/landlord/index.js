import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'

import MyButton from '../../components/MyButton'
import styles from './Landlord.module.css'

export default function Landlord() {
  return (
    <div>
      <Head>
        <title>Landlord</title>
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
                  <h1 className={styles.hero_title}>Finding Great Tenants Made Easier</h1>
                  <p className={styles.hero_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <div className="d-none d-sm-flex">
                    <Link href="/landlord/preview">
                      <a className={styles.tenant_btn}>
                        <MyButton width="180px" height="48px">Get Started</MyButton>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={7}>
                <div className={styles.hero_right}>
                  <img className={styles.hero_img} src="/landlord/home/hero.png" alt="hero" />
                </div>
              </Col>
            </Row>

            <div className="d-block d-sm-none">
              <Link href="/landlord/preview">
                <a className={styles.tenant_btn_1}>
                  <MyButton width="180px" height="48px">GET STARTED</MyButton>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Checking Section */}
        <div className={styles.checking_section}>
          <div className={styles.container}>
            <h2 className={styles.checking_title}>Tenants are checking you out</h2>
            <p className={styles.checking_detail}>
              Stop spending money on shotgun advertising and waiting for the perfect tenant to find you.<br />
              RentBarker matches you with qualified tenants that are searching for homes in your neighborhood.<br />
              Finding great tenants just got a whole lot easier.<br />
            </p>

            <Row>
              <Col md={4} className={styles.checking_item}>
                <img src="/landlord/home/person-icon.png" alt="person-icon" />
                <h4 className={styles.checking_item_title}>
                  Receive Reliable<br className="d-none d-md-block" />
                  Tenant Leads
                </h4>
                <p className={styles.checking_item_detail}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
              </Col>

              <Col md={4} className={styles.checking_item}>
                <img src="/landlord/home/note-icon.png" alt="note-icon" />
                <h4 className={styles.checking_item_title}>
                  Send Offers<br className="d-none d-md-block" />
                  to Tenants
                </h4>
                <p className={styles.checking_item_detail}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
              </Col>

              <Col md={4} className={styles.checking_item}>
                <img src="/landlord/home/home-icon.png" alt="home-icon" />
                <h4 className={styles.checking_item_title}>
                  Only Pay if Lease<br className="d-none d-md-block" />
                  is Signed
                </h4>
                <p className={styles.checking_item_detail}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
              </Col>
            </Row>
          </div>
        </div>

        {/* Free Section 1 */}
        <div className={styles.free_section}>
          <div className={styles.container}>
            <Row className={styles.free_application}>
              <Col md={5} className="d-flex align-items-center">
                <div>
                  <h2 className={styles.free_title}>
                    Easliy Add<br />
                    Your Listings
                  </h2>
                  <p className={styles.free_detail}>
                    Add your tenant requirements and existing listings
                    via URL when registering for free with RentBarker.
                  </p>
                  <div className="d-flex">
                    <div className={styles.feature_item}>
                      <img className={styles.feature_img} src="/landlord/home/database-icon.png" alt="database" />
                      <p className={styles.feature_text}>
                        Competitive<br />
                        Platform
                      </p>
                    </div>

                    <div className={styles.feature_item}>
                      <img className={styles.feature_img} src="/landlord/home/window-icon.png" alt="window" />
                      <p className={styles.feature_text}>
                        Simple<br />
                        Interface
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className={styles.feature_item}>
                      <img className={styles.feature_img} src="/landlord/home/aim-icon.png" alt="aim" />
                      <p className={styles.feature_text}>
                        Increase<br />
                        Sales
                      </p>
                    </div>

                    <div className={styles.feature_item}>
                      <img className={styles.feature_img} src="/landlord/home/mail-icon.png" alt="mail" />
                      <p className={styles.feature_text}>
                        Support<br />
                        24/7
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={7}>
                <img className="img-fluid" src="/landlord/home/composition.png" alt="composition" />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <img className="img-fluid" src="landlord/home/leads.png" alt="leads" />
              </Col>

              <Col md={6} className="d-flex align-items-center">
                <div>
                  <h2 className={styles.free_title}>
                    Let the Leads<br />
                    Come to You
                  </h2>
                  <p className={styles.free_detail}>
                    Receive tenant leads that inform you of tenant qualifications and occupancy needs. We will provide you with a Barker Brochure, detailing important information such as income, job history, credit score range, eviction history, desired lease commencement date and other key preferences.
                  </p>
                  <Link href="/landlord/preview">
                    <a className="">
                      <MyButton width="180px" height="48px">
                        <span className="d-block d-sm-none text-uppercase">Get Started</span>
                        <span className="d-none d-sm-block text-capitalize">Get Started</span>
                      </MyButton>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Review Section */}
        <div className={styles.review_section}>
          <div className={styles.container}>
            <h2 className={styles.review_title}>Tenants Love RentBarker</h2>
            <Row>
              <Col sm={6} md={4} className={styles.review_item}>
                <img src="/home/gentleman.png" alt="gentleman" />
                <h4 className={styles.review_name}>CHRISTIAN TOMITA</h4>
                <p className={styles.review_address}>LA, Los-Angeles</p>
                <div className={styles.review_divider}></div>
                <p className={styles.review_detail}>
                  RentBarker helped me find the home of my dreams in such a short amount of time!
                </p>
              </Col>

              <Col sm={6} md={4} className={styles.review_item_1}>
                <img src="/home/man.png" alt="man" />
                <h4 className={styles.review_name}>BROOKS PETTUS</h4>
                <p className={styles.review_address}>NY, New-York</p>
                <div className={styles.review_divider}></div>
                <p className={styles.review_detail}>
                  RentBarker process was so easy. Whoever designed this website should get a raise!
                  Very user friendly and simple process.
                </p>
              </Col>

              <Col sm={6} md={4} className={styles.review_item}>
                <img src="/home/woman.png" alt="woman" />
                <h4 className={styles.review_name}>JODI MAXSON</h4>
                <p className={styles.review_address}>LA, Los-Angeles</p>
                <div className={styles.review_divider}></div>
                <p className={styles.review_detail}>
                  Just moved to Los Angeles and had the best experience because of RentBarker! So glad
                  I stumbled upon this gem.
                </p>
              </Col>
            </Row>
          </div>
        </div>

        {/* Free Section 2 */}
        <div className={styles.free_section}>
          <div className={styles.container}>
            <Row className={styles.free_application}>
              <Col md={5} className="d-flex align-items-center">
                <div>
                  <h2 className={styles.free_title}>
                    We Do<br />
                    the Heavy Lifting
                  </h2>
                  <p className={styles.free_detail}>
                    Don’t let those vacant units sit on the market any longer! Limit your vacancies with RentBarker by matching the lease commencement dates of qualified tenants with your anticipated vacancy dates.
                  </p>
                </div>
              </Col>

              <Col md={7}>
                <img className="img-fluid" src="/landlord/home/bedroom.png" alt="bedroom" />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <img className="img-fluid" src="landlord/home/protect.png" alt="protect" />
              </Col>

              <Col md={6} className="d-flex align-items-center">
                <div>
                  <h2 className={styles.free_title}>
                    Protecting You From<br />
                    Discrimination Claims
                  </h2>
                  <p className={styles.free_detail}>
                    Fair housing lawsuits and claims are on the rise nationwide. Our Barker Brochure only provides
                    information that may be legally requested and considered when underwriting a tenant.<br />
                    <br />
                    Race, color, religion, sex, disability, familial status, and national origin will never be disclosed
                    and the name and contact information of a tenant will not be provided until a tenant accepts your offer.
                    This ensures a fair process and protects landlords from claims of discrimination.
                  </p>
                  <Link href="/landlord/preview">
                    <a className="">
                      <MyButton width="180px" height="48px">
                        <span className="d-block d-sm-none text-uppercase">Get Started</span>
                        <span className="d-none d-sm-block text-capitalize">Get Started</span>
                      </MyButton>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Plan Section */}
        <div className={styles.plan_section}>
          <h2 className={styles.plan_title}>Tenants Love RentBarker</h2>
          <p className={styles.plan_detail}>
            Pay only once when lease is executed
          </p>

          <div className={styles.plan_card}>
            <h4 className={styles.plan_card_title}>Pay only if lease is executed</h4>
            <p className={styles.plan_percent}>25<span className={styles.percent_icon}>%</span></p>
            <div className="d-flex align-items-center mb-0 mb-sm-4">
              <p className={styles.plan_text}>of average one-month lease</p>
              <img src="/landlord/home/question-icon.png" alt="question" />
            </div>
            <div className="d-none d-sm-block">
              <Link href="/landlord/preview">
                <a className="">
                  <MyButton width="284px" height="48px">
                    <span className="d-block d-sm-none text-uppercase">Get Started</span>
                    <span className="d-none d-sm-block text-capitalize">Get Started</span>
                  </MyButton>
                </a>
              </Link>
            </div>
            <ul className={styles.plan_list}>
              <li className={styles.plan_item}>
                <img className={styles.check_icon} src="/landlord/home/check-icon.png" alt="check" />
                No upfront cost or fee
              </li>
              <li className={styles.plan_item}>
                <img className={styles.check_icon} src="/landlord/home/check-icon.png" alt="check" />
                Received leads on pre-screened tenants
              </li>
              <li className={styles.plan_item}>
                <img className={styles.check_icon} src="/landlord/home/check-icon.png" alt="check" />
                Review anonymous application profiles
              </li>
              <li className={styles.plan_item}>
                <img className={styles.check_icon} src="/landlord/home/check-icon.png" alt="check" />
                Submit offers
              </li>
            </ul>
            <div className="d-block d-sm-none w-100">
              <Link href="/landlord/preview">
                <a className="">
                  <MyButton width="284px" height="48px">
                    <span className="d-block d-sm-none text-uppercase">Get Started</span>
                    <span className="d-none d-sm-block text-capitalize">Get Started</span>
                  </MyButton>
                </a>
              </Link>
            </div>
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
