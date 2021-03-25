import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, InputGroup, FormControl, Modal } from 'react-bootstrap'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar_1 from '../../../components/Navbar_1'
import Footer from '../../../components/Footer'
import MyButton from '../../../components/MyButton'
import styles from './Property.module.css'

export default class Property extends React.Component {
  state = {
    modalShow: false,
    property: 1,
  }

  handleChange = (num) => () => this.setState({ property: num });

  handleShow = () => this.setState({ modalShow: true });

  handleClose = () => this.setState({ modalShow: false });

  render() {
    const { modalShow, property } = this.state;

    return (
      <div className={modalShow ? styles.blur_effect : null}>
        <Head>
          <title>Properties</title>
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
          <main className="flex-grow-1">
            <div className="d-flex flex-column flex-lg-row">
              <div className={styles.property_section}>
                <div className={styles.property_header}>
                  <h2 className={styles.primary_title}>Properties</h2>
                  <p className={styles.primary_detail}>Sunday, 13 December 2020</p>

                  <div className={styles.property_search}>
                    <Form>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text className={styles.prepend_content}>
                            <img className={styles.search_icon} src="/property/search-icon.png" alt="search" />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl className={styles.search_box} type="text" placeholder="Search in Leads" />
                      </InputGroup>
                    </Form>
                  </div>

                  <h3 className={styles.property_title}>All Properties</h3>
                </div>

                <div className={styles.property_group}>
                  <div
                    className={property === 1 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(1)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-1.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 2 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(2)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-2.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 3 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(3)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-3.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 4 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(4)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-4.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 5 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(5)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-5.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 6 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(6)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-6.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 7 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(7)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-7.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 8 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(8)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-8.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 9 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(9)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-9.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={property === 10 ? styles.property_item_active : styles.property_item_inactive}
                    onClick={this.handleChange(10)}
                  >
                    <div className="d-flex align-items-center">
                      <img className={styles.property_img} src="/landlord/property/property-10.jpg" alt="property" />
                      <div className={styles.property_text}>
                        <p className={styles.property_name}>Property Name</p>
                        <p className={styles.property_address}>4845 Saturn St, Los Angeles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.preview_section}>
                <div className={styles.preview_header}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className={styles.preview_title}>Apartments</h3>

                    <a href="#" onClick={this.handleShow}>
                      <MyButton width="144px" height="36px" color="#126660" backgroundColor="#fff">+INVITE MEMBER</MyButton>
                    </a>

                    {/* Invite Member Modal */}
                    <Modal show={modalShow} onHide={this.handleClose} centered>
                      <div className={styles.modal}>
                        <img className={styles.close_icon} onClick={this.handleClose} src="/landlord/property/close-icon.png" alt="close" />
                        <div className={styles.modal_content}>
                          <h4 className={styles.modal_title}>Invite Member</h4>
                          <img className={styles.modal_img} src="/landlord/property/user.png" alt="user" />

                          <Form className={styles.form}>
                            <Form.Control
                              className={styles.input_box}
                              name="name"
                              type="text"
                              placeholder="Name"
                              required
                            />

                            <Form.Control
                              className={styles.input_box}
                              name="email"
                              type="email"
                              placeholder="Email Address"
                              required
                            />

                            <Form.Control
                              className={styles.input_box}
                              name="status"
                              as="select"
                              custom
                              required
                            >
                              <option value="">Status</option>
                              <option value="Property Manager">Property Manager</option>
                              <option value="Tenant">Tenant</option>
                              <option value="Landlord">Landlord</option>
                            </Form.Control>

                            <MyButton width="144px" height="40px">SEND INVITE</MyButton>
                          </Form>
                        </div>
                      </div>
                    </Modal>
                  </div>

                  <div className={styles.apartment_overview}>
                    <img src="/landlord/property/apartment.jpg" alt="apartment" />
                    <div className={styles.apartment_detail}>
                      <div className="d-flex justify-content-between align-items-ceter">
                        <div>
                          <h4 className={styles.apartment_name}>Propery Name</h4>
                          <p className={styles.apartment_address}>4845 Saturn St, Los Angeles, CA 90019</p>
                        </div>

                        <Link href="">
                          <a className={styles.edit_link}>
                            <img src="/brochure/pencil-icon.png" alt="pencil" />
                            <span className="ml-2">EDIT</span>
                          </a>
                        </Link>
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

                <div className={styles.unit_card}>
                  <div className={styles.unit_overview}>
                    <img className={styles.unit_img} src="/landlord/property/unit-1.jpg" alt="unit" />
                    <div className={styles.unit_detail}>
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="mb-3">
                          <h4 className={styles.apartment_name}>Unit Name 1</h4>
                          <p className={styles.unit_price}>$2,775</p>
                        </div>

                        <Link href="">
                          <a className={styles.edit_link}>
                            <img src="/brochure/pencil-icon.png" alt="pencil" />
                            <span className="ml-2">EDIT</span>
                          </a>
                        </Link>
                      </div>

                      <div className={styles.unit_description}>
                        <h4 className={styles.amenity_title}>DESCRIPTION</h4>
                        <p className={styles.description_detail}>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>

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
                    </div>
                  </div>

                  <div className={styles.potential_leads}>
                    <h4 className={styles.amenity_title}>POTENTIAL LEADS</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className={styles.potential_lead}>
                        <img src="/landlord/property/user-icon.png" alt="user" />
                        <p className={styles.lead_num}>Lead #1</p>
                        <p className={styles.lead_match}>92% Match</p>
                      </div>

                      <div className={styles.potential_lead}>
                        <img src="/landlord/property/user-icon.png" alt="user" />
                        <p className={styles.lead_num}>Lead #2</p>
                        <p className={styles.lead_match}>92% Match</p>
                      </div>

                      <div className={styles.potential_lead}>
                        <img src="/landlord/property/user-icon.png" alt="user" />
                        <p className={styles.lead_num}>Lead #3</p>
                        <p className={styles.lead_match}>92% Match</p>
                      </div>

                      <div className="d-none d-sm-block">
                        <div className={styles.potential_lead}>
                          <img src="/landlord/property/user-icon.png" alt="user" />
                          <p className={styles.lead_num}>Lead #4</p>
                          <p className={styles.lead_match}>92% Match</p>
                        </div>
                      </div>

                      <div className="d-none d-md-block">
                        <div className={styles.potential_lead}>
                          <img src="/landlord/property/user-icon.png" alt="user" />
                          <p className={styles.lead_num}>Lead #5</p>
                          <p className={styles.lead_match}>92% Match</p>
                        </div>
                      </div>

                      <div className="d-none d-xl-block">
                        <div className={styles.potential_lead}>
                          <img src="/landlord/property/user-icon.png" alt="user" />
                          <p className={styles.lead_num}>Lead #6</p>
                          <p className={styles.lead_match}>92% Match</p>
                        </div>
                      </div>

                      <Link href="/landlord/lead">
                        <a>
                          <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.unit_card}>
                  <div className={styles.unit_overview}>
                    <img className={styles.unit_img} src="/landlord/property/unit-2.jpg" alt="unit" />
                    <div className={styles.unit_detail}>
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="mb-3">
                          <h4 className={styles.apartment_name}>Unit Name 2</h4>
                          <p className={styles.unit_price}>$4,500</p>
                        </div>

                        <Link href="">
                          <a className={styles.edit_link}>
                            <img src="/brochure/pencil-icon.png" alt="pencil" />
                            <span className="ml-2">EDIT</span>
                          </a>
                        </Link>
                      </div>

                      <div className={styles.unit_description}>
                        <h4 className={styles.amenity_title}>DESCRIPTION</h4>
                        <p className={styles.description_detail}>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>

                        <div className={styles.unit_feature}>
                          3
                          <img className={styles.feature_icon} src="/offer/bed-icon.png" alt="bed" />
                          <span className={styles.splitbar}>|</span>
                          4
                          <img className={styles.feature_icon} src="/offer/bath-icon.png" alt="bath" />
                          <span className={styles.splitbar}>|</span>
                          138 M<sup>2</sup>
                          <img className={styles.feature_icon} src="/offer/size-icon.png" alt="size" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.potential_leads}>
                    <h4 className={styles.amenity_title}>POTENTIAL LEADS</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className={styles.potential_lead}>
                        <img src="/landlord/property/user-icon.png" alt="user" />
                        <p className={styles.lead_num}>Lead #1</p>
                        <p className={styles.lead_match}>92% Match</p>
                      </div>

                      <div className={styles.potential_lead}>
                        <img src="/landlord/property/user-icon.png" alt="user" />
                        <p className={styles.lead_num}>Lead #2</p>
                        <p className={styles.lead_match}>92% Match</p>
                      </div>

                      <div className={styles.potential_lead}>
                        <img src="/landlord/property/user-icon.png" alt="user" />
                        <p className={styles.lead_num}>Lead #3</p>
                        <p className={styles.lead_match}>92% Match</p>
                      </div>

                      <div className="d-none d-sm-block">
                        <div className={styles.potential_lead}>
                          <img src="/landlord/property/user-icon.png" alt="user" />
                          <p className={styles.lead_num}>Lead #4</p>
                          <p className={styles.lead_match}>92% Match</p>
                        </div>
                      </div>

                      <div className="d-none d-md-block">
                        <div className={styles.potential_lead}>
                          <img src="/landlord/property/user-icon.png" alt="user" />
                          <p className={styles.lead_num}>Lead #5</p>
                          <p className={styles.lead_match}>92% Match</p>
                        </div>
                      </div>

                      <div className="d-none d-xl-block">
                        <div className={styles.potential_lead}>
                          <img src="/landlord/property/user-icon.png" alt="user" />
                          <p className={styles.lead_num}>Lead #6</p>
                          <p className={styles.lead_match}>92% Match</p>
                        </div>
                      </div>

                      <Link href="/landlord/lead">
                        <a>
                          <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div >
    )
  }
}
