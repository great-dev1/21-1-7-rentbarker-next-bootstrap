import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Handle from './Handle'
import Track from './Track'
import utils from '../../styles/utils.module.css'
import styles from './Budget.module.css'

const sliderStyle = {
  position: 'relative',
  width: '100%',
  height: 80,
}

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 8,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: '#e7e8e8',
}

export default class Budget extends React.Component {
  state = {
    budgetMin: '',
    budgetMax: '',
    lengthMin: '',
    lengthMax: '',
  }

  handleBudget = (values) => {
    this.setState({
      budgetMin: values[0].toString(),
      budgetMax: values[1].toString(),
    });
  }

  handleLength = (values) => {
    this.setState({
      lengthMin: values[0].toString(),
      lengthMax: values[1].toString(),
    });
  }

  handleSubmit = () => {
    const { budgetMin, budgetMax, lengthMin, lengthMax } = this.state;

    localStorage.setItem('budgetMin', budgetMin);
    localStorage.setItem('budgetMax', budgetMax);
    localStorage.setItem('lengthMin', lengthMin);
    localStorage.setItem('lengthMax', lengthMax);
  }

  componentDidMount() {
    const budgetMin = localStorage.getItem('budgetMin') !== null ? localStorage.getItem('budgetMin') : '900';
    const budgetMax = localStorage.getItem('budgetMax') !== null ? localStorage.getItem('budgetMax') : '1150';
    const lengthMin = localStorage.getItem('lengthMin') !== null ? localStorage.getItem('lengthMin') : '6';
    const lengthMax = localStorage.getItem('lengthMax') !== null ? localStorage.getItem('lengthMax') : '15';

    this.setState({ budgetMin, budgetMax, lengthMin, lengthMax });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { budgetMin, budgetMax, lengthMin, lengthMax } = this.state;

    return (
      <div>
        <Head>
          <title>Budget & Lease Length</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <img className={styles.body_back} src="/bed/main-back.jpg" alt="back" />

        <main className={styles.main}>
          <Container className="d-flex justify-content-md-center align-items-center">
            <Link href="/feature">
              <a className="d-block d-sm-none">
                <FontAwesomeIcon icon={faChevronLeft} className={utils.chevron_left} />
              </a>
            </Link>

            <h1 className={styles.primary_title}>
              Budget & Lease Length
            </h1>
          </Container>

          <Container className={utils.container}>
            <div className={styles.main_content}>
              <h4 className={styles.secondary_title}>
                Please select a price range and lease length you are comfortable with.
              </h4>

              <div className={styles.slider_container}>
                <Slider
                  className={styles.budget_slider}
                  rootStyle={sliderStyle}
                  mode={2}
                  step={10}
                  domain={[500, 1500]}
                  values={[budgetMin, budgetMax]}
                  onUpdate={this.handleBudget}
                >
                  <Rail>
                    {({ getRailProps }) => (
                      <div style={railStyle} {...getRailProps()} />
                    )}
                  </Rail>
                  <Handles>
                    {({ handles, getHandleProps }) => (
                      <div className="slider-handles">
                        {handles.map(handle => (
                          <Handle
                            key={handle.id}
                            handle={handle}
                            getHandleProps={getHandleProps}
                            budget
                          />
                        ))}
                      </div>
                    )}
                  </Handles>
                  <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                      <div className="slider-tracks">
                        {tracks.map(({ id, source, target }) => (
                          <Track
                            key={id}
                            source={source}
                            target={target}
                            getTrackProps={getTrackProps}
                          />
                        ))}
                      </div>
                    )}
                  </Tracks>
                </Slider>

                <Slider
                  className={styles.time_slider}
                  rootStyle={sliderStyle}
                  mode={2}
                  step={1}
                  domain={[3, 18]}
                  values={[lengthMin, lengthMax]}
                  onUpdate={this.handleLength}
                >
                  <Rail>
                    {({ getRailProps }) => (
                      <div style={railStyle} {...getRailProps()} />
                    )}
                  </Rail>
                  <Handles>
                    {({ handles, getHandleProps }) => (
                      <div className="slider-handles">
                        {handles.map(handle => (
                          <Handle
                            key={handle.id}
                            handle={handle}
                            getHandleProps={getHandleProps}
                          />
                        ))}
                      </div>
                    )}
                  </Handles>
                  <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                      <div className="slider-tracks">
                        {tracks.map(({ id, source, target }) => (
                          <Track
                            key={id}
                            source={source}
                            target={target}
                            getTrackProps={getTrackProps}
                          />
                        ))}
                      </div>
                    )}
                  </Tracks>
                </Slider>
              </div>

              <div className={styles.btn_group}>
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                  <Link href="/feature">
                    <a className={utils.prev_link}>PREVIOUS PAGE</a>
                  </Link>

                  <Link href="/credit">
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