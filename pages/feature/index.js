import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import utils from '../../styles/utils.module.css'
import styles from './Feature.module.css'

export default class Featrue extends React.Component {
  state = {
    inunitToggle: false, inunitMust: false, inunitNice: false,
    connectionToggle: false, connectionMust: false, connectionNice: false,
    laundryToggle: false, laundryMust: false, laundryNice: false,
    dishwasherToggle: false, dishwasherMust: false, dishwasherNice: false,
    balconyToggle: false, balconyMust: false, balconyNice: false,
    parkingToggle: false, parkingMust: false, parkingNice: false,
    garageToggle: false, garageMust: false, garageNice: false,
    fitnessToggle: false, fitnessMust: false, fitnessNice: false,
    yardToggle: false, yardMust: false, yardNice: false,
    petToggle: false, petMust: false, petNice: false,
    poolToggle: false, poolMust: false, poolNice: false,
  }

  handleToggle = (featureToggle) => () => {
    this.setState(prevState => ({
      [featureToggle]: !prevState[featureToggle]
    }));
  }

  handleChoose = (select1, select2) => () => {
    this.setState({ [select1]: true, [select2]: false });
  }

  handleSubmit = () => {
    const {
      inunitToggle, inunitMust, inunitNice,
      connectionToggle, connectionMust, connectionNice,
      laundryToggle, laundryMust, laundryNice,
      dishwasherToggle, dishwasherMust, dishwasherNice,
      balconyToggle, balconyMust, balconyNice,
      parkingToggle, parkingMust, parkingNice,
      garageToggle, garageMust, garageNice,
      fitnessToggle, fitnessMust, fitnessNice,
      yardToggle, yardMust, yardNice,
      petToggle, petMust, petNice,
      poolToggle, poolMust, poolNice,
    } = this.state;

    localStorage.setItem('inunitToggle', inunitToggle);
    localStorage.setItem('inunitMust', inunitMust);
    localStorage.setItem('inunitNice', inunitNice);

    localStorage.setItem('connectionToggle', connectionToggle);
    localStorage.setItem('connectionMust', connectionMust);
    localStorage.setItem('connectionNice', connectionNice);

    localStorage.setItem('laundryToggle', laundryToggle);
    localStorage.setItem('laundryMust', laundryMust);
    localStorage.setItem('laundryNice', laundryNice);

    localStorage.setItem('dishwasherToggle', dishwasherToggle);
    localStorage.setItem('dishwasherMust', dishwasherMust);
    localStorage.setItem('dishwasherNice', dishwasherNice);

    localStorage.setItem('balconyToggle', balconyToggle);
    localStorage.setItem('balconyMust', balconyMust);
    localStorage.setItem('balconyNice', balconyNice);

    localStorage.setItem('parkingToggle', parkingToggle);
    localStorage.setItem('parkingMust', parkingMust);
    localStorage.setItem('parkingNice', parkingNice);

    localStorage.setItem('garageToggle', garageToggle);
    localStorage.setItem('garageMust', garageMust);
    localStorage.setItem('garageNice', garageNice);

    localStorage.setItem('fitnessToggle', fitnessToggle);
    localStorage.setItem('fitnessMust', fitnessMust);
    localStorage.setItem('fitnessNice', fitnessNice);

    localStorage.setItem('yardToggle', yardToggle);
    localStorage.setItem('yardMust', yardMust);
    localStorage.setItem('yardNice', yardNice);

    localStorage.setItem('petToggle', petToggle);
    localStorage.setItem('petMust', petMust);
    localStorage.setItem('petNice', petNice);

    localStorage.setItem('poolToggle', poolToggle);
    localStorage.setItem('poolMust', poolMust);
    localStorage.setItem('poolNice', poolNice);
  }

  componentDidMount() {
    const inunitToggle = localStorage.getItem('inunitToggle') === 'true';
    const inunitMust = localStorage.getItem('inunitMust') === 'true';
    const inunitNice = localStorage.getItem('inunitNice') === 'true';

    const connectionToggle = localStorage.getItem('connectionToggle') === 'true';
    const connectionMust = localStorage.getItem('connectionMust') === 'true';
    const connectionNice = localStorage.getItem('connectionNice') === 'true';

    const laundryToggle = localStorage.getItem('laundryToggle') === 'true';
    const laundryMust = localStorage.getItem('laundryMust') === 'true';
    const laundryNice = localStorage.getItem('laundryNice') === 'true';

    const dishwasherToggle = localStorage.getItem('dishwasherToggle') === 'true';
    const dishwasherMust = localStorage.getItem('dishwasherMust') === 'true';
    const dishwasherNice = localStorage.getItem('dishwasherNice') === 'true';

    const balconyToggle = localStorage.getItem('balconyToggle') === 'true';
    const balconyMust = localStorage.getItem('balconyMust') === 'true';
    const balconyNice = localStorage.getItem('balconyNice') === 'true';

    const parkingToggle = localStorage.getItem('parkingToggle') === 'true';
    const parkingMust = localStorage.getItem('parkingMust') === 'true';
    const parkingNice = localStorage.getItem('parkingNice') === 'true';

    const garageToggle = localStorage.getItem('garageToggle') === 'true';
    const garageMust = localStorage.getItem('garageMust') === 'true';
    const garageNice = localStorage.getItem('garageNice') === 'true';

    const fitnessToggle = localStorage.getItem('fitnessToggle') === 'true';
    const fitnessMust = localStorage.getItem('fitnessMust') === 'true';
    const fitnessNice = localStorage.getItem('fitnessNice') === 'true';

    const yardToggle = localStorage.getItem('yardToggle') === 'true';
    const yardMust = localStorage.getItem('yardMust') === 'true';
    const yardNice = localStorage.getItem('yardNice') === 'true';

    const petToggle = localStorage.getItem('petToggle') === 'true';
    const petMust = localStorage.getItem('petMust') === 'true';
    const petNice = localStorage.getItem('petNice') === 'true';

    const poolToggle = localStorage.getItem('poolToggle') === 'true';
    const poolMust = localStorage.getItem('poolMust') === 'true';
    const poolNice = localStorage.getItem('poolNice') === 'true';

    this.setState({
      inunitToggle, inunitMust, inunitNice,
      connectionToggle, connectionMust, connectionNice,
      laundryToggle, laundryMust, laundryNice,
      dishwasherToggle, dishwasherMust, dishwasherNice,
      balconyToggle, balconyToggle, balconyMust, balconyNice,
      parkingToggle, parkingToggle, parkingMust, parkingNice,
      garageToggle, garageMust, garageNice,
      fitnessToggle, fitnessMust, fitnessNice,
      yardToggle, yardMust, yardNice,
      petToggle, petMust, petNice,
      poolToggle, poolMust, poolNice,
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const {
      inunitToggle, inunitMust, inunitNice,
      connectionToggle, connectionMust, connectionNice,
      laundryToggle, laundryMust, laundryNice,
      dishwasherToggle, dishwasherMust, dishwasherNice,
      balconyToggle, balconyMust, balconyNice,
      parkingToggle, parkingMust, parkingNice,
      garageToggle, garageMust, garageNice,
      fitnessToggle, fitnessMust, fitnessNice,
      yardToggle, yardMust, yardNice,
      petToggle, petMust, petNice,
      poolToggle, poolMust, poolNice,
    } = this.state;

    return (
      <div>
        <Head>
          <title>Unique Features</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <img className={styles.body_back} src="/bed/main-back.jpg" alt="back" />

        <main className={styles.main}>
          <Container className="d-flex justify-content-md-center align-items-center">
            <Link href="/bed">
              <a className="d-block d-sm-none">
                <FontAwesomeIcon icon={faChevronLeft} className={utils.chevron_left} />
              </a>
            </Link>

            <h2 className={styles.primary_title}>
              Unique Features
            </h2>
          </Container>

          <Container className={styles.container}>
            <div className={styles.main_content}>
              <h3 className={styles.secondary_title}>
                Select the apartment features you want in and indicate the importance.
              </h3>

              <div className={styles.feature_group}>
                {/* In-unit washer and dryer */}
                <div className={styles.feature_item}>
                  <div
                    className={inunitToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('inunitToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/inunit.png" alt="inunit" />
                      <p className={styles.box_text}>In-unit washer and dryer</p>
                    </div>
                  </div>

                  {inunitToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={inunitMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('inunitMust', 'inunitNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={inunitNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('inunitNice', 'inunitMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Washer & dryer connections */}
                <div className={styles.feature_item}>
                  <div
                    className={connectionToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('connectionToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/connection.png" alt="connection" />
                      <p className={styles.box_text}>Washer & dryer connections</p>
                    </div>
                  </div>

                  {connectionToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={connectionMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('connectionMust', 'connectionNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={connectionNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('connectionNice', 'connectionMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* On-site laundry */}
                <div className={styles.feature_item}>
                  <div
                    className={laundryToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('laundryToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/laundry.png" alt="laundry" />
                      <p className={styles.box_text}>On-site laundry</p>
                    </div>
                  </div>

                  {laundryToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={laundryMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('laundryMust', 'laundryNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={laundryNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('laundryNice', 'laundryMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Dishwasher */}
                <div className={styles.feature_item}>
                  <div
                    className={dishwasherToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('dishwasherToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/dishwasher.png" alt="dishwasher" />
                      <p className={styles.box_text}>Dishwasher</p>
                    </div>
                  </div>

                  {dishwasherToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={dishwasherMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('dishwasherMust', 'dishwasherNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={dishwasherNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('dishwasherNice', 'dishwasherMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Balcony/Patio */}
                <div className={styles.feature_item}>
                  <div
                    className={balconyToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('balconyToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/balcony.png" alt="balcony" />
                      <p className={styles.box_text}>Balcony/Patio</p>
                    </div>
                  </div>

                  {balconyToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={balconyMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('balconyMust', 'balconyNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={balconyNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('balconyNice', 'balconyMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Parking */}
                <div className={styles.feature_item}>
                  <div
                    className={parkingToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('parkingToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/parking.png" alt="parking" />
                      <p className={styles.box_text}>Parking</p>
                    </div>
                  </div>

                  {parkingToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={parkingMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('parkingMust', 'parkingNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={parkingNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('parkingNice', 'parkingMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Garage/Covered parking */}
                <div className={styles.feature_item}>
                  <div
                    className={garageToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('garageToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/garage.png" alt="garage" />
                      <p className={styles.box_text}>Garage/covered parking</p>
                    </div>
                  </div>

                  {garageToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={garageMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('garageMust', 'garageNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={garageNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('garageNice', 'garageMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Fitness center */}
                <div className={styles.feature_item}>
                  <div
                    className={fitnessToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('fitnessToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/fitness.png" alt="fitness" />
                      <p className={styles.box_text}>Fitness center</p>
                    </div>
                  </div>

                  {fitnessToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={fitnessMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('fitnessMust', 'fitnessNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={fitnessNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('fitnessNice', 'fitnessMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Enclosed yard */}
                <div className={styles.feature_item}>
                  <div
                    className={yardToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('yardToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/yard.png" alt="yard" />
                      <p className={styles.box_text}>Enclosed yard</p>
                    </div>
                  </div>

                  {yardToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={yardMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('yardMust', 'yardNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={yardNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('yardNice', 'yardMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Pets allowed */}
                <div className={styles.feature_item}>
                  <div
                    className={petToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('petToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/pet.png" alt="pet" />
                      <p className={styles.box_text}>Pets allowed</p>
                    </div>
                  </div>

                  {petToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={petMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('petMust', 'petNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={petNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('petNice', 'petMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>

                {/* Swimming pool */}
                <div className={styles.feature_item}>
                  <div
                    className={poolToggle ? styles.box_active : styles.box_inactive}
                    onClick={this.handleToggle('poolToggle')}
                  >
                    <div className={styles.circle}>
                      <div className={styles.inner_circle}></div>
                    </div>
                    <div className={styles.box_content}>
                      <img className={styles.icon} src="/feature/pool.png" alt="pool" />
                      <p className={styles.box_text}>Swimming pool</p>
                    </div>
                  </div>

                  {poolToggle &&
                    <div className="d-flex justify-content-between">
                      <div
                        className={poolMust ? styles.must_btn_active : styles.must_btn_inactive}
                        onClick={this.handleChoose('poolMust', 'poolNice')}
                      >
                        MUST HAVE
                      </div>
                      <div
                        className={poolNice ? styles.nice_btn_active : styles.nice_btn_inactive}
                        onClick={this.handleChoose('poolNice', 'poolMust')}
                      >
                        NICE TO HAVE
                      </div>
                    </div>
                  }
                </div>
              </div>

              <div className={styles.btn_group}>
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                  <Link href="/bed">
                    <a className={utils.prev_link}>PREVIOUS PAGE</a>
                  </Link>

                  <Link href="/budget">
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