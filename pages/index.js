import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import Navbar_2 from '../components/Navbar_2'
import Footer_1 from '../components/Footer_1'
import Choose from '../components/Choose'
import MyButton from '../components/MyButton'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RentBarker</title>
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
                  <h1 className={styles.hero_title}>Lorem Ipsum is Simply Dummy Text of the Printing Industry.</h1>
                  <p className={styles.hero_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <div className="d-none d-sm-flex">
                    <Link href="/property">
                      <a className={styles.tenant_btn}>
                        <MyButton width="180px" height="48px">For Tenants</MyButton>
                      </a>
                    </Link>

                    <Link href="/landlord">
                      <a className="">
                        <MyButton width="180px" height="48px" color="#126660" backgroundColor="#fff">For Landlords</MyButton>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={7}>
                <div className={styles.hero_right}>
                  <img className={styles.hero_img} src="/home/hero.png" alt="hero" />
                  <div className={styles.hero_orange}>
                    <h4 className={styles.orange_title}>songkick</h4>
                    <p className={styles.orange_detail}>
                      The RentBarker process was so easy. Whoever designed this website should get a raise!
                      Very user friendly and simple process.
                    </p>
                    <p className={styles.orange_name}>Felicia Harrison</p>
                    <p className={styles.orange_address}>Dallas, TX</p>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="d-block d-sm-none">
              <Link href="/property">
                <a className={styles.tenant_btn_1}>
                  <MyButton width="180px" height="48px">FOR TENANTS</MyButton>
                </a>
              </Link>

              <Link href="/landlord">
                <a className="">
                  <MyButton width="180px" height="48px" color="#126660" backgroundColor="#fff">FOR LANDLORDS</MyButton>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className={styles.about_section}>
          <div className={styles.container}>
            <h2 className={styles.about_title}>About RentBarker</h2>
            <Row>
              <Col md={6} className="mb-0 mb-sm-5">
                <p className={styles.about_detail}>
                  You’ve worked hard to be an attractive tenant, so you deserve the best deal on your next lease. Landlords are desperately seeking reliable tenants like you,
                  and RentBarker’s job is to hook you up with their lowest offers. Did you know that advertised leasing prices are not fixed?<br />
                  <br />
                  Landlords can have great flexibility with their numbers,
                  but they are experts at playing hard to get. We eliminate the back-and-forth negotiation, compelling landlords to compete with each other and sweep you off your feet.  It’s like blind dating, except we promise that you will always go home with your top choice.<br />
                  <br />
                  After all, you’re a perfect ten(ant).
                </p>

                <Link href="/property">
                  <a className="d-none d-sm-block">
                    <MyButton width="180px" height="48px" color="#126660" backgroundColor="#fff">Start Barking</MyButton>
                  </a>
                </Link>
              </Col>

              <Col md={6}>
                <Row>
                  <Col sm={6} md={12} lg={6}>
                    <img src="/home/person.png" alt="person" />
                    <h4 className={styles.about_subtitle}>The Secret Admirer</h4>
                    <p className={styles.about_subdetail}>
                      Our process is 100% anonymous. We create your personalized Barker Brochure,
                      highlighting what a perfect catch you are.
                    </p>
                  </Col>

                  <Col sm={6} md={12} lg={6}>
                    <img src="/home/megaphone.png" alt="megaphone" />
                    <h4 className={styles.about_subtitle}>The Potential Suitors</h4>
                    <p className={styles.about_subdetail}>
                      We contact each of the properties you have your eye on. In an attempt to win you over,
                      landlords bid against each other, driving their prices down.
                    </p>
                  </Col>

                  <Col sm={6} md={12} lg={6}>
                    <img src="/home/house.png" alt="house" />
                    <h4 className={styles.about_subtitle}>The Proposals</h4>
                    <p className={styles.about_subdetail}>
                      Ultimately, we send you each property’s absolute lowest offer. Now, the ball’s in your court,
                      and you are in complete control. May the best proposal win!
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Link href="/property">
              <a className="d-block d-sm-none">
                <MyButton width="180px" height="48px" color="#126660" backgroundColor="#fff">START BARKING</MyButton>
              </a>
            </Link>
          </div>
        </div>

        {/* Start Section */}
        <div className={styles.start_section}>
          <div className={styles.container}>
            <Row>
              <Col lg={6}>
                <img className="img-fluid" src="/home/start.png" alt="start" />
              </Col>

              <Col lg={6}>
                <h2 className={styles.start_title}>Are You a Rental Property Professional or Landlord?</h2>
                <p className={styles.start_detail}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <Link href="/property">
                  <a className="d-none d-sm-block">
                    <MyButton width="180px" height="48px">Get Started</MyButton>
                  </a>
                </Link>
              </Col>
            </Row>

            <Link href="/property">
              <a className="d-block d-sm-none">
                <MyButton width="180px" height="48px">GET STARTED</MyButton>
              </a>
            </Link>
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

        {/* Free Section */}
        <div className={styles.free_section}>
          <div className={styles.container}>
            <Row className={styles.free_application}>
              <Col md={5} className="d-flex align-items-center">
                <div>
                  <h2 className={styles.free_title}>Free Application</h2>
                  <p className={styles.free_detail}>
                    You will already be filling out a free application with us. We are aware this takes time,
                    so we will reimburse you up to $100 should you have to fill out another upon accepting an offer.
                  </p>
                  <div className="d-flex">
                    <div className={styles.feature_item}>
                      <img className={styles.feature_img} src="/home/database.png" alt="database" />
                      <p className={styles.feature_text}>
                        Competitive<br />
                        Platform
                      </p>
                    </div>

                    <div className={styles.feature_item}>
                      <img className={styles.feature_img} src="/home/dollar.png" alt="dollar" />
                      <p className={styles.feature_text}>
                        Reimburse<br />
                        $100
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className={styles.feature_item}>
                      <img className={styles.feature_img} src="/home/chat.png" alt="chat" />
                      <p className={styles.feature_text}>
                        Messaging<br />
                        Insight
                      </p>
                    </div>

                    <div className={styles.feature_item}>
                      <img className={styles.feature_img} src="/home/group.png" alt="group" />
                      <p className={styles.feature_text}>
                        Simple<br />
                        Interface
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={7}>
                <img className="img-fluid" src="/home/free-1.png" alt="free" />
              </Col>
            </Row>

            <Row className={styles.free_discrimination}>
              <Col md={6}>
                <img className="img-fluid" src="/home/free-2.png" alt="free" />
              </Col>

              <Col md={6} className="d-flex align-items-center">
                <div>
                  <h2 className={styles.free_title}>Free of Discrimination</h2>
                  <p className={styles.free_detail}>
                    We ensure a fair process, free from discrimination and harassment. We will not disclose anything
                    about your identity or contact information until you accept an offer, so you are assured not to be
                    hassled with unwanted emails and phone calls, and that the process is 100% fair.
                  </p>
                  <Link href="/property">
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

            <Row className={styles.free_hassle}>
              <Col md={5} className="d-flex align-items-center">
                <div>
                  <h2 className={styles.free_title}>Free of Hassle</h2>
                  <p className={styles.free_detail}>
                    The leasing process is outdated. The days of hidden fees, expensive applications, and
                    badgering from landlords are over.<br />
                    <br />
                    Stop wasting your valuable time, money, and energy. RentBarker is here to flip the script
                    and change the game, before the landlord even knows your name.
                  </p>
                </div>
              </Col>

              <Col md={7}>
                <img className="img-fluid" src="/home/free-3.png" alt="free" />
              </Col>
            </Row>
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
