import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import utils from '../../styles/utils.module.css'
import styles from './Bed.module.css'

export default class Bed extends React.Component {
  state = {
    roommateNum: '',
    bedroomNum: '',
    bathroomNum: '',
  }

  handleChange = (variable, value) => () => {
    this.setState({
      [variable]: value
    });
  }

  handleSubmit = () => {
    const { roommateNum, bedroomNum, bathroomNum } = this.state;

    localStorage.setItem('roommateNum', roommateNum);
    localStorage.setItem('bedroomNum', bedroomNum);
    localStorage.setItem('bathroomNum', bathroomNum);
  }

  componentDidMount() {
    const roommateNum = localStorage.getItem('roommateNum') !== null ? localStorage.getItem('roommateNum') : '';
    const bedroomNum = localStorage.getItem('bedroomNum') !== null ? localStorage.getItem('bedroomNum') : '';
    const bathroomNum = localStorage.getItem('bathroomNum') !== null ? localStorage.getItem('bathroomNum') : '';

    this.setState({ roommateNum, bedroomNum, bathroomNum });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { roommateNum, bedroomNum, bathroomNum } = this.state;

    return (
      <div>
        <Head>
          <title>Roommates, Beds and Baths</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <img className={styles.body_back} src="/bed/main-back.jpg" alt="back" />

        <main className={styles.main}>
          <Container className="d-flex justify-content-md-center align-items-center">
            <Link href="/property">
              <a className="d-block d-sm-none">
                <FontAwesomeIcon icon={faChevronLeft} className={utils.chevron_left} />
              </a>
            </Link>

            <h2 className={styles.primary_title}>
              Roommates, Beds, and Baths
            </h2>
          </Container>

          <Container className={styles.container}>
            <div className={styles.main_content}>

              {/* Rommmates */}
              <h3 className={styles.secondary_title}>Roomates</h3>
              <div className={styles.box_group}>
                <div
                  className={roommateNum === '0' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('roommateNum', '0')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className="d-none d-md-block invisible" src="/bed/roommate-1.png" alt="roommate" />
                    <div>
                      <p className={styles.box_num}>0</p>
                      <p className={styles.box_text}>Nobody</p>
                    </div>
                  </div>
                </div>

                <div
                  className={roommateNum === '1' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('roommateNum', '1')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} src="/bed/roommate-1.png" alt="roommate" />
                    <div>
                      <p className={styles.box_num}>1</p>
                      <p className={styles.box_text}>Roommate</p>
                    </div>
                  </div>
                </div>

                <div
                  className={roommateNum === '2' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('roommateNum', '2')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} src="/bed/roommate-2.png" alt="roommate" />
                    <div>
                      <p className={styles.box_num}>2</p>
                      <p className={styles.box_text}>Roommates</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bedrooms */}
              <h3 className={styles.secondary_title}>Bedrooms</h3>
              <div className={styles.box_group}>
                <div
                  className={bedroomNum === 'studio' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('bedroomNum', 'studio')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} className="d-none d-md-block invisible" src="/bed/bed-1.png" alt="bedroom" />
                    <p className={styles.box_num}>Studio</p>
                  </div>
                </div>

                <div
                  className={bedroomNum === '1' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('bedroomNum', '1')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} src="/bed/bed-1.png" alt="bedroom" />
                    <div>
                      <p className={styles.box_num}>1</p>
                      <p className={styles.box_text}>Bedroom</p>
                    </div>
                  </div>
                </div>

                <div
                  className={bedroomNum === '2' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('bedroomNum', '2')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} src="/bed/bed-2.png" alt="bedroom" />
                    <div>
                      <p className={styles.box_num}>2</p>
                      <p className={styles.box_text}>Bedrooms</p>
                    </div>
                  </div>
                </div>

                <div
                  className={bedroomNum === '3' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('bedroomNum', '3')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} src="/bed/bed-3.png" alt="bedroom" />
                    <div>
                      <p className={styles.box_num}>3</p>
                      <p className={styles.box_text}>Bedrooms</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bathrooms */}
              <h3 className={styles.secondary_title}>Bathrooms</h3>
              <div className={styles.box_group}>
                <div
                  className={bathroomNum === '1' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('bathroomNum', '1')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} src="/bed/bath-1.png" alt="bathroom" />
                    <div>
                      <p className={styles.box_num}>1</p>
                      <p className={styles.box_text}>Bathroom</p>
                    </div>
                  </div>
                </div>

                <div
                  className={bathroomNum === '2' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('bathroomNum', '2')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} src="/bed/bath-2.png" alt="bathroom" />
                    <div>
                      <p className={styles.box_num}>2</p>
                      <p className={styles.box_text}>Bathrooms</p>
                    </div>
                  </div>
                </div>

                <div
                  className={bathroomNum === '3' ? styles.box_active : styles.box_inactive}
                  onClick={this.handleChange('bathroomNum', '3')}
                >
                  <div className={styles.circle}>
                    <div className={styles.inner_circle}></div>
                  </div>
                  <div className={styles.box_content}>
                    <img className={styles.icon} src="/bed/bath-2.png" alt="bathroom" />
                    <div>
                      <p className={styles.box_num}>3</p>
                      <p className={styles.box_text}>Bathrooms</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.btn_group}>
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                  <Link href="/property">
                    <a className={utils.prev_link}>PREVIOUS PAGE</a>
                  </Link>

                  <Link href="/feature">
                    <a className={utils.continue_btn} onClick={this.handleSubmit}>
                      <span className="pl-3">CONTINUE</span>
                      <img className="ml-2" src="/right-arrow.png" alt="arrow" />
                    </a>
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
}