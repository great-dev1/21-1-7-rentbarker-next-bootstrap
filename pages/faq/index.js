import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'react-bootstrap'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar_2 from '../../components/Navbar_2'
import Footer_1 from '../../components/Footer_1'
import Choose from '../../components/Choose'
import styles from './Faq.module.css'

export default class faq extends React.Component {
  state = {
    faq01: 'closed',
    faq02: 'closed',
    faq03: 'closed',
    faq04: 'closed',
    faq05: 'closed',
    faq06: 'closed',
    faq07: 'closed',
    faq08: 'closed',
    faq09: 'closed',
  }

  handleClick = (faqNum, value) => () => {
    this.setState({
      [faqNum]: value
    });
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    const { faq01, faq02, faq03, faq04, faq05, faq06, faq07, faq08, faq09 } = this.state;

    return (
      <div>
        <Head>
          <title>FAQs</title>
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
                    <h1 className={styles.hero_title}>Frequently Asked Questions</h1>
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

          {/* Question Section */}
          <div className={styles.question_section}>
            <div className={styles.container}>
              <div className={styles.question_item}>
                <div
                  className={faq01 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq01 === 'closed' ? this.handleClick('faq01', 'open') : this.handleClick('faq01', 'closed')}
                >
                  <p className={styles.question_title}>Question 1</p>
                  {faq01 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq01 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>

              <div className={styles.question_item}>
                <div
                  className={faq02 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq02 === 'closed' ? this.handleClick('faq02', 'open') : this.handleClick('faq02', 'closed')}
                >
                  <p className={styles.question_title}>Question 2</p>
                  {faq02 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq02 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>

              <div className={styles.question_item}>
                <div
                  className={faq03 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq03 === 'closed' ? this.handleClick('faq03', 'open') : this.handleClick('faq03', 'closed')}
                >
                  <p className={styles.question_title}>Question 3</p>
                  {faq03 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq03 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>

              <div className={styles.question_item}>
                <div
                  className={faq04 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq04 === 'closed' ? this.handleClick('faq04', 'open') : this.handleClick('faq04', 'closed')}
                >
                  <p className={styles.question_title}>Question 4</p>
                  {faq04 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq04 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>

              <div className={styles.question_item}>
                <div
                  className={faq05 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq05 === 'closed' ? this.handleClick('faq05', 'open') : this.handleClick('faq05', 'closed')}
                >
                  <p className={styles.question_title}>Question 5</p>
                  {faq05 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq05 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>

              <div className={styles.question_item}>
                <div
                  className={faq06 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq06 === 'closed' ? this.handleClick('faq06', 'open') : this.handleClick('faq06', 'closed')}
                >
                  <p className={styles.question_title}>Question 6</p>
                  {faq06 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq06 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>

              <div className={styles.question_item}>
                <div
                  className={faq07 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq07 === 'closed' ? this.handleClick('faq07', 'open') : this.handleClick('faq07', 'closed')}
                >
                  <p className={styles.question_title}>Question 7</p>
                  {faq07 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq07 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>

              <div className={styles.question_item}>
                <div
                  className={faq08 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq08 === 'closed' ? this.handleClick('faq08', 'open') : this.handleClick('faq08', 'closed')}
                >
                  <p className={styles.question_title}>Question 8</p>
                  {faq08 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq08 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>

              <div className={styles.question_item}>
                <div
                  className={faq09 === 'open' ? styles.question_header_active : styles.question_header}
                  onClick={faq09 === 'closed' ? this.handleClick('faq09', 'open') : this.handleClick('faq09', 'closed')}
                >
                  <p className={styles.question_title}>Question 9</p>
                  {faq09 === 'open' ?
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron_icon} />
                    : <FontAwesomeIcon icon={faChevronDown} className={styles.chevron_icon} />
                  }
                </div>
                <p className={faq09 === 'open' ? styles.question_detail_open : styles.question_detail}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                  enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,
                  velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                </p>
              </div>
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
}
