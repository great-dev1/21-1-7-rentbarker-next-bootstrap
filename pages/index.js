import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Form, FormControl, InputGroup } from 'react-bootstrap'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../components/Navbar'
import MyButton from '../components/MyButton'
import utils from '../styles/utils.module.css'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div>
      {/* <img src="/testback-1.png" alt="" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

      <Head>
        <title>RentBarker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Navbar />

        <div className={styles.header_container}>
          <Container className={utils.container}>
            <h1 className={styles.primary_title}>Welcome to RentBarker.</h1>

            <Link href="/property">
              <MyButton blue width="224px" height="45px" margin="12px">FOR TENANTS</MyButton>
            </Link>
            
            <MyButton width="224px" height="45px" margin="12px">FOR LANDLORDS</MyButton>
          </Container>
        </div>
      </header>

      <main className={styles.main}>

        {/* Intro Seciton */}
        <section className={styles.intro_section}>
          <Container className={utils.container}>
            <h2 className={styles.intro_title}>Is it hot in here... or is it just you?</h2>
            <p className={styles.intro_detail}>
              You've worked hard to be an attractive tenant, so you deserve the best deal on your next lease. Rental properties are desperately seeking
              reliable tenants like you. RentBarker's job is to hook you up with their lowest offers. landlords have great flexibility with their pricing, but thery
              are experts at playing hard to get. We eliminate the back-and-forth negotiation, compelling landlords to compete in a bid to sweep you off your
              feet. It's like blind dating, except you'll always go home with your top choice.<br />
              <br />
              After all, you're a perfect ten(ant).
            </p>
          </Container>
        </section>

        {/* Service Section */}
        <section className={styles.service_section}>
          <img className={styles.service_back} src="/home/service-back.jpg" alt="service back" />
          <img className={styles.service_back_mobile} src="home/service-back-mobile.jpg" alt="service back" />
          <Container className={utils.container}>
            <h2 className={styles.secondary_title}>What we do</h2>
            <Row className={styles.service_row}>
              <Col md={4} className={styles.service_item}>
                <div className={styles.service_img_wrapper}>
                  <img src="/home/card.png" alt="card" />
                </div>
                <h3 className={styles.service_name}>
                  The Secret Admirer<br />
                    (Tenant)
                  </h3>
                <p className={styles.service_detail}>
                  Our process is 100% anonymous. Tell us the properties you're curshing on and answer a few questions.
                  We create your personalized Barker Brochure, highlighting what a perfect catch you are.
                  </p>
              </Col>

              <Col md={4} className={styles.service_item}>
                <div className={styles.service_img_wrapper}>
                  <img src="/home/megaphone.png" alt="megaphone" />
                </div>
                <h3 className={styles.service_name}>
                  The Potential Suitors<br />
                    (Landlords)
                  </h3>
                <p className={styles.service_detail}>
                  We contact each of the properties you have your eye on. In an attempt to win you ever, landlords bid
                  against each other, driving their prices down. in this auction, you are both the prize and the winner.
                  </p>
              </Col>

              <Col md={4} className={styles.service_item}>
                <div className={styles.service_img_wrapper}>
                  <img src="/home/house.png" alt="house" />
                </div>
                <h3 className={styles.service_name}>
                  The Proposals<br />
                    (Offers)
                  </h3>
                <p className={styles.service_detail}>
                  Ultimatley, we send you each property's absolute lowest offer. Now, the ball's in your court, and
                  you are in complete control. May the best proposal win!
                  </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Select Section */}
        <section className={styles.select_section}>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <img className={styles.select_img} src="/home/flat.jpg" alt="flat" />

            <div className={styles.select_panel}>
              <h2 className={styles.select_title}>Are you a rental property professional or landlord?</h2>
              <Link href="#">
                <a className={styles.learn_more}>
                  LEARN MORE
                  <FontAwesomeIcon icon={faAngleRight} className={styles.arrow_right} />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section className={styles.review_section}>
          <Container className={utils.container}>
            <h2 className={styles.secondary_title}>Why Tenants Love Us</h2>

            <Row className={styles.review_row}>
              <Col lg={4} className="mb-3 mb-lg-0">
                <div className={styles.review_item}>
                  <img className={styles.avatar} src="/home/woman-avatar.png" alt="woman" />
                  <img className={styles.quote} src="/home/quote-mark.png" alt="quote" />
                  <div className="d-flex flex-column justify-content-between">
                    <p className={styles.review_detail}>
                      RentBarker helped me find the home of my dreams in such a short amount of time!
                    </p>
                    <div className={styles.reviewer}>
                      <h3 className={styles.reviewer_name}>Amanda Norman</h3>
                      <h3 className={styles.reviewer_address}>Dallas, TX</h3>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="mb-3 mb-lg-0">
                <div className={styles.review_item}>
                  <img className={styles.avatar} src="/home/man-avatar.png" alt="woman" />
                  <img className={styles.quote} src="/home/quote-mark.png" alt="quote" />
                  <div className="d-flex flex-column justify-content-stretch">
                    <p className={styles.review_detail}>
                      The RentBarker process was so easy. Whoever designed this website should get a raise!
                      Very user friendly and simple process.
                    </p>
                    <div className={styles.reviewer}>
                      <h3 className={styles.reviewer_name}>Felicia Harrison</h3>
                      <h3 className={styles.reviewer_address}>Dallas, TX</h3>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} className="mb-3 mb-lg-0">
                <div className={styles.review_item}>
                  <img className={styles.avatar} src="/home/girl-avatar.png" alt="girl" />
                  <img className={styles.quote} src="/home/quote-mark.png" alt="quote" />
                  <div className="d-flex flex-column justify-content-between">
                    <p className={styles.review_detail}>
                      Just moved to Los Andgeles and had the best experience because of RentBarker!
                      So glad I stumbled upon this gem.
                    </p>
                    <div className={styles.reviewer}>
                      <h3 className={styles.reviewer_name}>Felicia Harrison</h3>
                      <h3 className={styles.reviewer_address}>Los Angeles, CA</h3>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Free Section */}
        <section className={styles.free_section}>
          <Row className={styles.free_row}>
            <Col md={6} className="d-flex flex-column justify-content-center align-items-center p-0">
              <div className={styles.free_description}>
                <h3 className={styles.free_title}>Free Application</h3>
                <p className={styles.free_detail}>
                  WORKING COPY RentBarker is 100% free to you. The landlords absorb the cost of our servies.
                  Should you have to pay an application fee upon accepting an offer, RentBarker will reimburse
                  you up to $100.
                </p>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <img className={styles.free_img} src="/home/free-1.jpg" alt="free" />
            </Col>
          </Row>

          <Row className={styles.free_row}>
            <Col md={6} className="p-0">
              <img className={styles.free_img} src="/home/free-2.jpg" alt="free" />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center align-items-center p-0">
              <div className={styles.free_description}>
                <h3 className={styles.free_title_1}>Free of Discrimination</h3>
                <p className={styles.free_detail}>
                  WORKING COPY While housing should always be discrimination-free, rarely is this true. RentBarker
                  ensures a fair process, free from discrimination and harassment. We will not disclose anything
                  about your identity or contact information until you accept an offer, so you are assured not to be
                  hassled with unwanted emails and phone calls, and that the process is 100% fair.
                </p>
                <div className="mt-3">
                  <MyButton width="224px" height="45px" margin="0">START BARKING</MyButton>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={styles.free_row}>
            <Col md={6} className="d-flex flex-column justify-content-center align-items-center p-0">
              <div className={styles.free_description}>
                <h3 className={styles.free_title}>Free of Hassle</h3>
                <p className={styles.free_detail}>
                  WORKING COPY The leasing process is outdated. The days of hidden fees, expensive applicatins,
                  and badgering from landlords are over. Save your valuable time, money, and energy. RentBarker is
                  here to flip the script and change the game, before the landlord even knows your name.
                </p>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <img className={styles.free_img} src="/home/free-3.jpg" alt="free" />
            </Col>
          </Row>
        </section>

        {/* Start Section */}
        <section className={styles.start_section}>
          <Container className={utils.container}>
            <h2 className={styles.secondary_title}>Get Started!</h2>

            <Form className={styles.form}>
              <div className="d-md-flex justify-content-center align-items-center">
                <InputGroup className={styles.search_box}>
                  <InputGroup.Prepend>
                    <InputGroup.Text className={styles.prepend}>
                      <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className={styles.input_box}
                    placeholder="Paste URL or Search Property"
                    aria-label="URL"
                  />
                </InputGroup>
                <div className={styles.start_btn}>
                  <MyButton blue width="100%" height="60px" margin="0">START BARKING</MyButton>
                </div>
              </div>
            </Form>
          </Container>
        </section>
      </main>

      <footer className={styles.footer}>
        <Container className={utils.container}>
          <h2 className={styles.secondary_title}>RentBarker</h2>

          <div className={styles.footer_links}>
            <div className="d-flex flex-column flex-md-row justify-content-between align-itmes-center">
              <Link href="#"><span className={styles.footer_link}>Landlords</span></Link>
              <Link href="#"><span className={styles.footer_link}>Tenants</span></Link>
              <Link href="#"><span className={styles.footer_link}>About</span></Link>
              <Link href="#"><span className={styles.footer_link}>FAQs</span></Link>
              <Link href="#"><span className={styles.footer_link}>Contact Us</span></Link>
            </div>
          </div>

          <div className={styles.social_links}>
            <div className="d-flex justify-content-between align-itmes-center">
              <Link href="#">
                <img className={styles.social_link} src="/home/twitter-icon.png" alt="twitter" />
              </Link>
              <Link href="#">
                <img className={styles.social_link} src="/home/instagram-icon.png" alt="instagram" />
              </Link>
              <Link href="#">
                <img className={styles.social_link} src="/home/linkedin-icon.png" alt="linkedin" />
              </Link>
              <Link href="#">
                <img className={styles.social_link} src="/home/facebook-icon.png" alt="facebook" />
              </Link>
            </div>
          </div>
          <h3 className={styles.copyright}>
            ©2020 Barker, LLC. All rights reserved 2020.<br className="d-block d-md-none" />
            U.S. Patent Pending</h3>
        </Container>
      </footer>
    </div>
  )
}
