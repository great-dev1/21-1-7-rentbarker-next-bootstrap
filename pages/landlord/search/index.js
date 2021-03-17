import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, InputGroup, FormControl } from 'react-bootstrap'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import MyButton from '../../../components/MyButton'
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
          <title>Prospect Search</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

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
                <p className={styles.primary_detail}>Sunday, 13 December 2020</p>
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

                <div className="d-none d-lg-block">
                  <p className={styles.result_text}>Showing 23 ressults</p>
                </div>
              </div>

              <div className={styles.search_content}>
                <div className={styles.search_results}>
                  <div className="d-block d-lg-none">
                    <p className={styles.result_text_1}>Showing 23 ressults</p>
                  </div>

                  <div className={styles.search_item}>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-between flex-grow-1">
                      <div className="d-flex align-items-center flex-fill">
                        <img src="/message/user.png" alt="user" />
                        <div className="d-flex flex-sm-column justify-content-between flex-grow-1 ml-3">
                          <p className={styles.lead_name}>Tenant Lead #1</p>
                          <div className="d-flex flex-column flex-sm-row align-items-center flex-shrink-0">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>81% Match</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between flex-fill">
                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Credit Score:</p>
                          <p className={styles.credit_detail}>680-720</p>
                        </div>

                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Income:</p>
                          <p className={styles.credit_detail}>$4,350</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/landlord/search/lead">
                      <a>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                      </a>
                    </Link>
                  </div>

                  <div className={styles.search_item}>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-between flex-grow-1">
                      <div className="d-flex align-items-center flex-fill">
                        <img src="/message/user.png" alt="user" />
                        <div className="d-flex flex-sm-column justify-content-between flex-grow-1 ml-3">
                          <p className={styles.lead_name}>Tenant Lead #2</p>
                          <div className="d-flex flex-column flex-sm-row align-items-center flex-shrink-0">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>81% Match</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between flex-fill">
                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Credit Score:</p>
                          <p className={styles.credit_detail}>680-720</p>
                        </div>

                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Income:</p>
                          <p className={styles.credit_detail}>$4,350</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/landlord/search/lead">
                      <a>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                      </a>
                    </Link>
                  </div>

                  <div className={styles.search_item}>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-between flex-grow-1">
                      <div className="d-flex align-items-center flex-fill">
                        <img src="/message/user.png" alt="user" />
                        <div className="d-flex flex-sm-column justify-content-between flex-grow-1 ml-3">
                          <p className={styles.lead_name}>Tenant Lead #3</p>
                          <div className="d-flex flex-column flex-sm-row align-items-center flex-shrink-0">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>81% Match</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between flex-fill">
                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Credit Score:</p>
                          <p className={styles.credit_detail}>680-720</p>
                        </div>

                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Income:</p>
                          <p className={styles.credit_detail}>$4,350</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/landlord/search/lead">
                      <a>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                      </a>
                    </Link>
                  </div>

                  <div className={styles.search_item}>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-between flex-grow-1">
                      <div className="d-flex align-items-center flex-fill">
                        <img src="/message/user.png" alt="user" />
                        <div className="d-flex flex-sm-column justify-content-between flex-grow-1 ml-3">
                          <p className={styles.lead_name}>Tenant Lead #4</p>
                          <div className="d-flex flex-column flex-sm-row align-items-center flex-shrink-0">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>81% Match</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between flex-fill">
                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Credit Score:</p>
                          <p className={styles.credit_detail}>680-720</p>
                        </div>

                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Income:</p>
                          <p className={styles.credit_detail}>$4,350</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/landlord/search/lead">
                      <a>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                      </a>
                    </Link>
                  </div>

                  <div className={styles.search_item}>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-between flex-grow-1">
                      <div className="d-flex align-items-center flex-fill">
                        <img src="/message/user.png" alt="user" />
                        <div className="d-flex flex-sm-column justify-content-between flex-grow-1 ml-3">
                          <p className={styles.lead_name}>Tenant Lead #5</p>
                          <div className="d-flex flex-column flex-sm-row align-items-center flex-shrink-0">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>81% Match</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between flex-fill">
                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Credit Score:</p>
                          <p className={styles.credit_detail}>680-720</p>
                        </div>

                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Income:</p>
                          <p className={styles.credit_detail}>$4,350</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/landlord/search/lead">
                      <a>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                      </a>
                    </Link>
                  </div>

                  <div className={styles.search_item}>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-between flex-grow-1">
                      <div className="d-flex align-items-center flex-fill">
                        <img src="/message/user.png" alt="user" />
                        <div className="d-flex flex-sm-column justify-content-between flex-grow-1 ml-3">
                          <p className={styles.lead_name}>Tenant Lead #6</p>
                          <div className="d-flex flex-column flex-sm-row align-items-center flex-shrink-0">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>81% Match</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between flex-fill">
                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Credit Score:</p>
                          <p className={styles.credit_detail}>680-720</p>
                        </div>

                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Income:</p>
                          <p className={styles.credit_detail}>$4,350</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/landlord/search/lead">
                      <a>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                      </a>
                    </Link>
                  </div>

                  <div className={styles.search_item}>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-between flex-grow-1">
                      <div className="d-flex align-items-center flex-fill">
                        <img src="/message/user.png" alt="user" />
                        <div className="d-flex flex-sm-column justify-content-between flex-grow-1 ml-3">
                          <p className={styles.lead_name}>Tenant Lead #7</p>
                          <div className="d-flex flex-column flex-sm-row align-items-center flex-shrink-0">
                            <div className={styles.lead_stars}>
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                              <img src="/landlord/lead/star.png" alt="star" />
                            </div>
                            <p className={styles.match_text}>81% Match</p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between flex-fill">
                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Credit Score:</p>
                          <p className={styles.credit_detail}>680-720</p>
                        </div>

                        <div className="d-flex flex-sm-column justify-content-center align-items-center mt-2">
                          <p className={styles.credit_title}>Income:</p>
                          <p className={styles.credit_detail}>$4,350</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/landlord/search/lead">
                      <a>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                      </a>
                    </Link>
                  </div>
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
