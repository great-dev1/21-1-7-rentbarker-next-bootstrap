import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'

import Navbar_1 from '../../../components/Navbar_1'
import Footer from '../../../components/Footer'
import MyButton from '../../../components/MyButton'
import Handle from './Handle'
import Track from './Track'
import Tick from './Tick'
import utils from '../../../styles/utils.module.css'
import styles from './Property.module.css'

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

export default class Add extends React.Component {
  state = {
    budgetMin: '400',
    budgetMax: '800',
    incomeRange: '2x',
  }

  handleBudget = (values) => {
    this.setState({
      budgetMin: values[0].toString(),
      budgetMax: values[1].toString(),
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
    const { budgetMin, budgetMax, incomeRange } = this.state;

    return (
      <div>
        <Head>
          <title>Add Apartment</title>
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

              <Link href="/landlord/lead">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/user-grey.png" alt="user" />
                  <span className={styles.sidebar_text}>Leads</span>
                </a>
              </Link>

              <Link href="/landlord/property">
                <a className={styles.sidebar_menu_active}>
                  <img src="/sidebar/property-green.png" alt="property" />
                  <span className={styles.sidebar_text}>Properties</span>
                </a>
              </Link>

              <Link href="/landlord/search">
                <a className={styles.sidebar_menu}>
                  <img src="/sidebar/search-grey.png" alt="search" />
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
          <main className={styles.add_main}>
            <Container>
              <div className="d-flex align-items-center mt-2">
                <Link href="/landlord/property/add-1">
                  <a className="d-block d-sm-none">
                    <FontAwesomeIcon icon={faChevronLeft} className={utils.chevron_left} />
                  </a>
                </Link>

                <h2 className={styles.primary_title}>Add Apartment</h2>
              </div>
              <hr className="d-none d-md-block" />
              <div className="d-none d-md-block">
                <Link href="/landlord/property">
                  <a className={styles.prev_link}>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron_left} />
                      Return to the list
                    </div>
                  </a>
                </Link>
              </div>

              <div className="d-none d-md-block">
                {/* 01. Property Details */}
                <div className={styles.add_content}>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-ceter">
                      <h4 className={styles.add_title}>
                        <span className={styles.green_text}>01. </span>
                        Property Details
                      </h4>

                      <Link href="/landlord/property/add">
                        <a className={styles.edit_link}>
                          <img src="/brochure/pencil-icon.png" alt="pencil" />
                          <span className="ml-2">EDIT</span>
                        </a>
                      </Link>
                    </div>
                    <p className={styles.add_detail}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum has been the industry's standard dummy text ever since.
                    </p>

                    <div className={styles.apartment_overview}>
                      <img src="/landlord/property/apartment.jpg" alt="apartment" />
                      <div className={styles.apartment_detail}>
                        <div>
                          <h4 className={styles.apartment_name}>Propery Name</h4>
                          <p className={styles.apartment_address}>4845 Saturn St, Los Angeles, CA 90019</p>
                        </div>

                        <div className={styles.apartment_amenity}>
                          <h4 className={styles.amenity_title}>AMENITIES</h4>
                          <div>
                            <p className={styles.amenity_item}>• On-site Laundry</p>
                            <p className={styles.amenity_item}>• Off-street Parking</p>
                          </div>
                          <div>
                            <p className={styles.amenity_item}>• Dishwasher</p>
                            <p className={styles.amenity_item}>• Hardwood Floors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 02. Available Units */}
                <div className={styles.add_content}>
                  <div className="d-flex justify-content-between align-items-ceter">
                    <h4 className={styles.add_title}>
                      <span className={styles.green_text}>02. </span>
                      Available Units
                    </h4>

                    <Link href="/landlord/property/add-1">
                      <a className={styles.edit_link}>
                        <img src="/brochure/pencil-icon.png" alt="pencil" />
                        <span className="ml-2">EDIT</span>
                      </a>
                    </Link>
                  </div>

                  <div className="d-flex flex-wrap">
                    <div className="mt-4 mr-5">
                      <img className={styles.unit_img_2} src="/landlord/property/unit-1.jpg" alt="unit" />
                      <h4 className={styles.apartment_name}>Unit Name 1</h4>
                      <div className={styles.unit_feature}>
                        2
                        <img className={styles.feature_icon} src="/offer/bed-icon.png" alt="bed" />
                        <span className={styles.splitbar}>|</span>
                        2
                        <img className={styles.feature_icon} src="/offer/bath-icon.png" alt="bath" />
                        <span className={styles.splitbar}>|</span>
                        105 M<sup>2</sup>
                        <img className={styles.feature_icon} src="/offer/size-icon.png" alt="size" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <img className={styles.unit_img_2} src="/landlord/property/unit-2.jpg" alt="unit" />
                      <h4 className={styles.apartment_name}>Unit Name 2</h4>
                      <div className={styles.unit_feature}>
                        3
                        <img className={styles.feature_icon} src="/offer/bed-icon.png" alt="bed" />
                        <span className={styles.splitbar}>|</span>
                        4
                        <img className={styles.feature_icon} src="/offer/bath-icon.png" alt="bath" />
                        <span className={styles.splitbar}>|</span>
                        128 M<sup>2</sup>
                        <img className={styles.feature_icon} src="/offer/size-icon.png" alt="size" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 03. Tenant Criteria */}
              <div className={styles.add_content}>
                <h4 className={styles.add_title}>
                  <span className={styles.green_text}>03. </span>
                  Tenant Criteria
                </h4>

                <div className={styles.filter_section}>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className={styles.filter_title}>Credit Range</p>
                    <p className={styles.filter_value}>{budgetMin} - {budgetMax}</p>
                  </div>

                  <Slider
                    className={styles.budget_slider}
                    rootStyle={sliderStyle}
                    mode={2}
                    step={10}
                    domain={[300, 900]}
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

                  <p className={styles.filter_title}>Monthly Income Range</p>

                  <div className={styles.filter_boxes}>
                    <div
                      className={incomeRange === '2x' ? styles.box_active : styles.box_inactive}
                      onClick={this.handleChange('incomeRange', '2x')}
                    >
                      2x
                    </div>
                    <div
                      className={incomeRange === '2.5x' ? styles.box_active : styles.box_inactive}
                      onClick={this.handleChange('incomeRange', '2.5x')}
                    >
                      2.5x
                    </div>
                    <div
                      className={incomeRange === '3x' ? styles.box_active : styles.box_inactive}
                      onClick={this.handleChange('incomeRange', '3x')}
                    >
                      3x
                    </div>

                    <div className="d-none d-md-block">
                      <p className={styles.filter_detail}>the monthly rent</p>
                    </div>
                  </div>

                  <div className="my-4">
                    <label className={styles.check_label}>
                      <input
                        className={styles.check_box}
                        name="noEviction"
                        type="checkbox"
                      />
                      No evictions on report
                    </label>
                  </div>

                  <div className={styles.filter_section}>
                    <a className="#">
                      <MyButton width="218px" height="44px">ADD APARTMENT</MyButton>
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
