import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'

import Navbar_1 from '../../../components/Navbar_1'
import Footer from '../../../components/Footer'
import MyButton from '../../../components/MyButton'
import CreditScoreBar from '../../../components/CreditScoreBar'
import Handle from './Handle'
import Track from './Track'
import Tick from './Tick'
import styles from './Search.module.css'

const sliderStyle = {
  position: 'relative',
  width: '100%',
  height: 72,
}

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 6,
  marginTop: 28,
  borderRadius: 5,
  backgroundColor: '#e7e8e8',
}

export default class Search extends React.Component {
  state = {
    budgetMin: '400',
    budgetMax: '850',
    lengthMin: '1200',
    lengthMax: '5600',
    bedroomNum: '1',
    bathroomNum: '1',
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

  handleChange = (variable, value) => () => {
    this.setState({
      [variable]: value
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { budgetMin, budgetMax, lengthMin, lengthMax, bedroomNum, bathroomNum } = this.state;

    return (
      <div>
        <Head>
          <title>Prospect Search - Lead #2</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar_1 />

        <div className="d-flex">
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div>
              <Link href="/landlord/dashboard">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/window-grey.png" alt="window" />
                  <span className={styles.sidebar_text}>Dashboard</span>
                </a>
              </Link>

              <Link href="/landlord/search/lead">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/user-grey.png" alt="user" />
                  <span className={styles.sidebar_text}>Leads</span>
                </a>
              </Link>

              <Link href="/landlord/property">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/property-grey.png" alt="property" />
                  <span className={styles.sidebar_text}>Properties</span>
                </a>
              </Link>

              <Link href="/landlord/search">
                <a className={styles.sidebar_menu_active}>
                  <img src="/sidebar/search-green.png" alt="search" />
                  <span className={styles.sidebar_text}>Prospect Search</span>
                </a>
              </Link>

              <Link href="/landlord/message">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/message-grey.png" alt="message" />
                  <span className={styles.sidebar_text}>Messages</span>
                </a>
              </Link>

              <Link href="landlord/setting">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/setting-grey.png" alt="setting" />
                  <span className={styles.sidebar_text}>Settings</span>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/exit-grey.png" alt="exit" />
                  <span className={styles.sidebar_text}>Log Out</span>
                </a>
              </Link>
            </div>
          </div>

          {/* Main */}
          <main className={styles.search_main}>
            <Container>
              <div className={styles.search_header}>
                <h2 className={styles.primary_title}>Prospect Search</h2>
                <p className={styles.primary_detail}>
                  View prospect tenants looking in your area and unit features
                </p>
                <hr className="d-none d-md-block" />

                <div className={styles.search_input}>
                  <Form>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text className={styles.prepend_content}>
                          <img className={styles.search_icon} src="/property/search-icon.png" alt="search" />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl className={styles.search_box} type="text" placeholder="Prospect Search" />
                    </InputGroup>
                  </Form>
                </div>

                <Link href="/landlord/search">
                  <a className={styles.prev_link}>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron_left} />
                      Return to the list
                  </div>
                  </a>
                </Link>
              </div>

              <div className={styles.search_content}>
                <div className={styles.preview_section}>
                  <div className={styles.preview_header}>
                    <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
                      <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-left">
                        <img src="/message/user-1.png" alt="user" />

                        <div className="m-3">
                          <p className={styles.lead_name}>Lead #2</p>
                          <p className={styles.lead_date_1}>2 Days Ago</p>
                        </div>
                      </div>

                      <Link href="/landlord/lead/submit">
                        <a className="d-none d-sm-block">
                          <MyButton width="132px" height="44px">SEND OFFER</MyButton>
                        </a>
                      </Link>
                    </div>

                    <Row className={styles.preview_summary}>
                      <Col xs={6} sm={4} className={styles.preview_summary_item}>
                        <div className="d-flex flex-column flex-sm-row align-items-start">
                          <img className={styles.preview_icon} src="/brochure/dollar-icon.png" alt="dollar" />
                          <div className="mt-2 mt-sm-0">
                            <p className={styles.preview_title}>Rent</p>
                            <p className={styles.preview_detail}>$1,775 Monthly</p>
                          </div>
                        </div>
                      </Col>

                      <Col xs={6} sm={4} className={styles.preview_summary_item}>
                        <div className="d-flex flex-column flex-sm-row align-items-start">
                          <img className={styles.preview_icon} src="/brochure/room-icon.png" alt="room" />
                          <div className="mt-2 mt-sm-0">
                            <p className={styles.preview_title}>Flat Details</p>
                            <p className={styles.preview_detail}>Unit 303 | 1 bed, 1 bath</p>
                          </div>
                        </div>
                      </Col>

                      <Col xs={6} sm={4} className={styles.preview_summary_item}>
                        <div className="d-flex flex-column flex-sm-row align-items-start">
                          <img className={styles.preview_icon} src="/brochure/map-icon.png" alt="map" />
                          <div className="mt-2 mt-sm-0">
                            <p className={styles.preview_title}>Address</p>
                            <p className={styles.preview_detail}>4845-9 Saturn St, LA</p>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Link href="/landlord/lead/submit">
                      <a className="d-block d-sm-none mt-4">
                        <MyButton width="132px" height="44px">SEND OFFER</MyButton>
                      </a>
                    </Link>
                  </div>

                  <h4 className={styles.preview_section_title}>RATING</h4>
                  <Row className={styles.preview_rating}>
                    <Col md={6} className={styles.preview_item}>
                      <div className="d-flex justify-content-between justify-content-md-start align-items-center">
                        <div>
                          <p className={styles.preview_title}>Match</p>
                          <p className={styles.preview_rating_detail}>88%</p>
                        </div>
                        <div className={styles.preview_stars}>
                          <img className={styles.preview_star} src="/brochure/star.png" alt="star" />
                          <img className={styles.preview_star} src="/brochure/star.png" alt="star" />
                          <img className={styles.preview_star} src="/brochure/star.png" alt="star" />
                          <img className={styles.preview_star} src="/brochure/star.png" alt="star" />
                          <img className={styles.preview_star} src="/brochure/star.png" alt="star" />
                        </div>
                      </div>
                    </Col>

                    <Col md={6} className={styles.preview_item}>
                      <div className="d-flex justify-content-between justify-content-md-start align-items-center">
                        <div>
                          <p className={styles.preview_title}>Credit Score</p>
                          <p className={styles.preview_rating_detail}>680-720</p>
                        </div>
                        <div className={styles.preview_score}>
                          <CreditScoreBar credit={myCredit} />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <h4 className={styles.preview_section_title}>BASIC INFORMATION</h4>
                  <Row className={styles.preview_basic}>
                    <Col xs={6} md={4} className={styles.preview_item}>
                      <p className={styles.preview_title}>Total Monthly Income</p>
                      <p className={styles.preview_info_detail}>$4,500</p>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_item}>
                      <p className={styles.preview_title}>Desired Move-In Date</p>
                      <p className={styles.preview_info_detail}>June 1st</p>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_item}>
                      <p className={styles.preview_title}>Desired Lease Length</p>
                      <p className={styles.preview_info_detail}>12 month</p>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_item}>
                      <p className={styles.preview_title}>Monthly Rent Budget</p>
                      <p className={styles.preview_info_detail}>${budgetMin} - ${budgetMax}</p>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_item}>
                      <p className={styles.preview_title}>Smoker/Non-Smoker</p>
                      <p className={styles.preview_info_detail}>Non-Smoker</p>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_item}>
                      <p className={styles.preview_title}>Bed/Bath Rooms Prefer</p>
                      <p className={styles.preview_info_detail}>2 bed | 1 bath</p>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_item}>
                      <p className={styles.preview_title}>Number of Pets</p>
                      <p className={styles.preview_info_detail}>1 medium size dog</p>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_item}>
                      <p className={styles.preview_title}>Features</p>
                      <p className={styles.preview_info_detail}>
                        Parking, A/C
                      </p>
                    </Col>
                  </Row>

                  <h4 className={styles.preview_section_title}>ABOUT ME</h4>
                  <p className={styles.preview_about_detail}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    an unknown printer took a galley of type it to make a type specimen book.
                  </p>

                  <h4 className={styles.preview_section_title}>YOUR COMPETITORS</h4>
                  <Row className={styles.preview_competitor}>
                    <Col md={6} className={styles.preview_item}>
                      <div className={styles.flat_card}>
                        <img src="/brochure/flat-1.jpg" alt="flat" />
                        <div className="ml-2">
                          <p className={styles.flat_address}>Street Name #1</p>
                          <p className={styles.flat_price}>$1800 monthly</p>
                          <p className={styles.flat_match}>85% match</p>
                        </div>
                      </div>
                    </Col>

                    <Col md={6} className={styles.preview_item}>
                      <div className={styles.flat_card}>
                        <img src="/brochure/flat-2.jpg" alt="flat" />
                        <div className="ml-2">
                          <p className={styles.flat_address}>Street Name #2</p>
                          <p className={styles.flat_price}>$1750 monthly</p>
                          <p className={styles.flat_match}>85% match</p>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row className={styles.preview_residence}>
                    <Col md={6}>
                      <h4 className={styles.preview_section_title}>CURRENT RESIDENCE</h4>
                      <div className={styles.preview_item}>
                        <p className={styles.preview_title}>Address</p>
                        <p className={styles.preview_info_detail}>
                          4845 Saturn St, Los Angeles
                        </p>
                      </div>

                      <div className={styles.preview_item}>
                        <p className={styles.preview_title}>Monthly Rent</p>
                        <p className={styles.preview_info_detail}>$1,725</p>
                      </div>

                      <div className={styles.preview_item}>
                        <p className={styles.preview_title}>Duration of Stay</p>
                        <p className={styles.preview_info_detail}>June 2019 - Present</p>
                      </div>

                      <div className={styles.preview_item}>
                        <p className={styles.preview_title}>Reason for leaving</p>
                        <p className={styles.preview_info_detail}>
                          Got a new job, looking for a new place closer to work
                        </p>
                      </div>
                    </Col>

                    <Col md={6}>
                      <h4 className={styles.preview_section_title}>PREVIOUS RESIDENCE</h4>
                      <div className={styles.preview_item}>
                        <p className={styles.preview_title}>Address</p>
                        <p className={styles.preview_info_detail}>
                          1131 Shirly Lane Los Angeles, CA 90016
                        </p>
                      </div>

                      <div className={styles.preview_item}>
                        <p className={styles.preview_title}>Monthly Rent</p>
                        <p className={styles.preview_info_detail}>$1,650</p>
                      </div>

                      <div className={styles.preview_item}>
                        <p className={styles.preview_title}>Duration of Stay</p>
                        <p className={styles.preview_info_detail}>May 2017 - May 2019</p>
                      </div>

                      <div className={styles.preview_item}>
                        <p className={styles.preview_title}>Reason for leaving</p>
                        <p className={styles.preview_info_detail}>
                          Relocated to a new and better apartment
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className={styles.filter_panel}>
                  <h4 className={styles.filter_title}>Filters</h4>
                  <div className={styles.filter_section}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className={styles.filter_subtitle}>Credit Score</p>
                      <p className={styles.filter_value}>{budgetMin} - {budgetMax}</p>
                    </div>

                    <Slider
                      className={styles.budget_slider}
                      rootStyle={sliderStyle}
                      mode={2}
                      step={10}
                      domain={[0, 1000]}
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
                      <Ticks count={6}>
                        {({ ticks }) => (
                          <div className="slider-ticks">
                            {ticks.map(tick => (
                              <Tick key={tick.id} tick={tick} count={ticks.length} />
                            ))}
                          </div>
                        )}
                      </Ticks>
                    </Slider>
                  </div>

                  <div className={styles.filter_section}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className={styles.filter_subtitle}>Monthly Income</p>
                      <p className={styles.filter_value}>{lengthMin} - {lengthMax}</p>
                    </div>

                    <Slider
                      className={styles.budget_slider}
                      rootStyle={sliderStyle}
                      mode={2}
                      step={100}
                      domain={[0, 6000]}
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
                      <Ticks count={6}>
                        {({ ticks }) => (
                          <div className="slider-ticks">
                            {ticks.map(tick => (
                              <Tick key={tick.id} tick={tick} count={ticks.length} />
                            ))}
                          </div>
                        )}
                      </Ticks>
                    </Slider>
                  </div>

                  <div className={styles.filter_section}>
                    <p className={styles.filter_subtitle}>Bedrooms</p>

                    <div className={styles.filter_boxes}>
                      <div
                        className={bedroomNum === '1' ? styles.box_active : styles.box_inactive}
                        onClick={this.handleChange('bedroomNum', '1')}
                      >
                        1
                      </div>
                      <div
                        className={bedroomNum === '2' ? styles.box_active : styles.box_inactive}
                        onClick={this.handleChange('bedroomNum', '2')}
                      >
                        2
                      </div>
                      <div
                        className={bedroomNum === '3' ? styles.box_active : styles.box_inactive}
                        onClick={this.handleChange('bedroomNum', '3')}
                      >
                        3
                      </div>
                    </div>
                  </div>

                  <div className={styles.filter_section}>
                    <p className={styles.filter_subtitle}>Bathrooms</p>

                    <div className={styles.filter_boxes}>
                      <div
                        className={bathroomNum === '1' ? styles.box_active : styles.box_inactive}
                        onClick={this.handleChange('bathroomNum', '1')}
                      >
                        1
                      </div>
                      <div
                        className={bathroomNum === '2' ? styles.box_active : styles.box_inactive}
                        onClick={this.handleChange('bathroomNum', '2')}
                      >
                        2
                      </div>
                      <div
                        className={bathroomNum === '3' ? styles.box_active : styles.box_inactive}
                        onClick={this.handleChange('bathroomNum', '3')}
                      >
                        3
                      </div>
                    </div>
                  </div>

                  <div className={styles.filter_section}>
                    <a className="#">
                      <MyButton width="218px" height="44px" color="#126660" backgroundColor="#fff">APPLY FILTER</MyButton>
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </main>
        </div>
        <Footer />
      </div >
    )
  }
}
