import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import MyButton from '../../../components/MyButton'
import styles from './Property.module.css'

export default class Property extends React.Component {
  state = {
    property: 1,

    firstName: '', middleName: '', lastName: '', birthMonth: '', birthDate: '', birthYear: '',
    currentAddress: '', currentUnit: '', currentCity: '', currentState: '', currentZipcode: '', currentRent: '', currentLength: '', currentReason: '',
    prevAddress: '', prevUnit: '', prevCity: '', prevState: '', prevZipcode: '', prevRent: '', prevLength: '', prevReason: '',

    moveMonth: '', moveDate: '', moveYear: '', petYes: false, petNo: false, petInfo: '', esaYes: false, esaNo: false,
    smokerYes: false, smokerNo: false, evictionYes: false, evictionNo: false, evictionInfo: '',
    judgeYes: false, judgeNo: false, judgeInfo: '', bankruptcyYes: false, backruptcyNo: false,
    bankruptcyMonth: '', bankruptcyDate: '', bankruptcyYear: '',

    employerOccupation: '', employerName: '', employerLength: '', employerAddress: '', employerCity: '', employerState: '', employerZipcode: '',
    myIncome: '', guarantorIncome: '', roommateIncome: '',

    roommateNum: '', bedroomNum: '', bathroomNum: '',

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

    budgetMin: '', budgetMax: '', lengthMin: '', lengthMax: '',

    useGuarantor: false, myCredit: '', roommateCredit: '', guarantorCredit: '',
  }

  handleChange = (num) => () => this.setState({ property: num });

  handleClick = () => fileUp.click();

  componentDidMount() {
    const firstName = localStorage.getItem('firstName') !== null ? localStorage.getItem('firstName') : '';
    const middleName = localStorage.getItem('middleName') !== null ? localStorage.getItem('middleName') : '';
    const lastName = localStorage.getItem('lastName') !== null ? localStorage.getItem('lastName') : '';
    const birthMonth = localStorage.getItem('birthMonth') !== null ? localStorage.getItem('birthMonth') : '';
    const birthDate = localStorage.getItem('birthDate') !== null ? localStorage.getItem('birthDate') : '';
    const birthYear = localStorage.getItem('birthYear') !== null ? localStorage.getItem('birthYear') : '';
    const currentAddress = localStorage.getItem('currentAddress') !== null ? localStorage.getItem('currentAddress') : '';
    const currentUnit = localStorage.getItem('currentUnit') !== null ? localStorage.getItem('currentUnit') : '';
    const currentCity = localStorage.getItem('currentCity') !== null ? localStorage.getItem('currentCity') : '';
    const currentState = localStorage.getItem('currentState') !== null ? localStorage.getItem('currentState') : '';
    const currentZipcode = localStorage.getItem('currentZipcode') !== null ? localStorage.getItem('currentZipcode') : '';
    const currentRent = localStorage.getItem('currentRent') !== null ? localStorage.getItem('currentRent') : '';
    const currentLength = localStorage.getItem('currentLength') !== null ? localStorage.getItem('currentLength') : '';
    const currentReason = localStorage.getItem('currentReason') !== null ? localStorage.getItem('currentReason') : '';
    const prevAddress = localStorage.getItem('prevAddress') !== null ? localStorage.getItem('prevAddress') : '';
    const prevUnit = localStorage.getItem('prevUnit') !== null ? localStorage.getItem('prevUnit') : '';
    const prevCity = localStorage.getItem('prevCity') !== null ? localStorage.getItem('prevCity') : '';
    const prevState = localStorage.getItem('prevState') !== null ? localStorage.getItem('prevState') : '';
    const prevZipcode = localStorage.getItem('prevZipcode') !== null ? localStorage.getItem('prevZipcode') : '';
    const prevRent = localStorage.getItem('prevRent') !== null ? localStorage.getItem('prevRent') : '';
    const prevLength = localStorage.getItem('prevLength') !== null ? localStorage.getItem('prevLength') : '';
    const prevReason = localStorage.getItem('prevReason') !== null ? localStorage.getItem('prevReason') : '';

    const moveMonth = localStorage.getItem('moveMonth') !== null ? localStorage.getItem('moveMonth') : '';
    const moveDate = localStorage.getItem('moveDate') !== null ? localStorage.getItem('moveDate') : '';
    const moveYear = localStorage.getItem('moveYear') !== null ? localStorage.getItem('moveYear') : '';
    const petYes = localStorage.getItem('petYes') === 'true';
    const petNo = localStorage.getItem('petNo') === 'true';
    const petInfo = localStorage.getItem('petInfo') !== null ? localStorage.getItem('petInfo') : '';
    const esaYes = localStorage.getItem('esaYes') === 'true';
    const esaNo = localStorage.getItem('esaNo') === 'true';
    const smokerYes = localStorage.getItem('smokerYes') === 'true';
    const smokerNo = localStorage.getItem('smokerNo') === 'true';
    const evictionYes = localStorage.getItem('evictionYes') === 'true';
    const evictionNo = localStorage.getItem('evictionNo') === 'true';
    const evictionInfo = localStorage.getItem('evictionInfo') !== null ? localStorage.getItem('evictionInfo') : '';
    const judgeYes = localStorage.getItem('judgeYes') === 'true';
    const judgeNo = localStorage.getItem('judgeNo') === 'true';
    const judgeInfo = localStorage.getItem('judgeInfo') !== null ? localStorage.getItem('judgeInfo') : '';
    const bankruptcyYes = localStorage.getItem('bankruptcyYes') === 'true';
    const bankruptcyNo = localStorage.getItem('bankruptcyNo') === 'true';
    const bankruptcyMonth = localStorage.getItem('bankruptcyMonth') !== null ? localStorage.getItem('bankruptcyMonth') : '';
    const bankruptcyDate = localStorage.getItem('bankruptcyDate') !== null ? localStorage.getItem('bankruptcyDate') : '';
    const bankruptcyYear = localStorage.getItem('bankruptcyYear') !== null ? localStorage.getItem('bankruptcyYear') : '';

    const employerOccupation = localStorage.getItem('employerOccupation') !== null ? localStorage.getItem('employerOccupation') : '';
    const employerName = localStorage.getItem('employerName') !== null ? localStorage.getItem('employerName') : '';
    const employerLength = localStorage.getItem('employerLength') !== null ? localStorage.getItem('employerLength') : '';
    const employerAddress = localStorage.getItem('employerAddress') !== null ? localStorage.getItem('employerAddress') : '';
    const employerCity = localStorage.getItem('employerCity') !== null ? localStorage.getItem('employerCity') : '';
    const employerState = localStorage.getItem('employerState') !== null ? localStorage.getItem('employerState') : '';
    const employerZipcode = localStorage.getItem('employerZipcode') !== null ? localStorage.getItem('employerZipcode') : '';
    const myIncome = localStorage.getItem('myIncome') !== null ? localStorage.getItem('myIncome') : '';
    const guarantorIncome = localStorage.getItem('guarantorIncome') !== null ? localStorage.getItem('guarantorIncome') : '';
    const roommateIncome = localStorage.getItem('roommateIncome') !== null ? localStorage.getItem('roommateIncome') : '';

    const roommateNum = localStorage.getItem('roommateNum') !== null ? localStorage.getItem('roommateNum') : '';
    const bedroomNum = localStorage.getItem('bedroomNum') !== null ? localStorage.getItem('bedroomNum') : '';
    const bathroomNum = localStorage.getItem('bathroomNum') !== null ? localStorage.getItem('bathroomNum') : '';

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

    const budgetMin = localStorage.getItem('budgetMin') !== null ? localStorage.getItem('budgetMin') : '';
    const budgetMax = localStorage.getItem('budgetMax') !== null ? localStorage.getItem('budgetMax') : '';
    const lengthMin = localStorage.getItem('lengthMin') !== null ? localStorage.getItem('lengthMin') : '';
    const lengthMax = localStorage.getItem('lengthMax') !== null ? localStorage.getItem('lengthMax') : '';

    const useGuarantor = localStorage.getItem('useGuarantor') === 'true';
    const myCredit = localStorage.getItem('myCredit') !== null ? localStorage.getItem('myCredit') : '';
    const roommateCredit = localStorage.getItem('roommateCredit') !== null ? localStorage.getItem('roommateCredit') : '';
    const guarantorCredit = localStorage.getItem('guarantorCredit') !== null ? localStorage.getItem('guarantorCredit') : '';

    this.setState({
      firstName, middleName, lastName, birthMonth, birthDate, birthYear,
      currentAddress, currentUnit, currentCity, currentState, currentZipcode, currentRent, currentLength, currentReason,
      prevAddress, prevUnit, prevCity, prevState, prevZipcode, prevRent, prevLength, prevReason,

      moveMonth, moveDate, moveYear, petYes, petNo, petInfo, esaYes, esaNo,
      smokerYes, smokerNo, evictionYes, evictionNo, evictionInfo, judgeYes, judgeNo, judgeInfo,
      bankruptcyYes, bankruptcyNo, bankruptcyMonth, bankruptcyDate, bankruptcyYear,

      employerOccupation, employerName, employerLength, employerAddress, employerCity,
      employerState, employerZipcode, myIncome, guarantorIncome, roommateIncome,

      roommateNum, bedroomNum, bathroomNum,

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

      budgetMin, budgetMax, lengthMin, lengthMax,

      useGuarantor, myCredit, roommateCredit, guarantorCredit,
    });
  }

  render() {
    const {
      property,

      firstName, middleName, lastName, birthMonth, birthDate, birthYear,
      currentAddress, currentUnit, currentCity, currentState, currentZipcode, currentRent, currentLength, currentReason,
      prevAddress, prevUnit, prevCity, prevState, prevZipcode, prevRent, prevLength, prevReason,

      moveMonth, moveDate, moveYear, petYes, petNo, petInfo, esaYes, esaNo,
      smokerYes, smokerNo, evictionYes, evictionNo, evictionInfo, judgeYes, judgeNo, judgeInfo,
      bankruptcyYes, bankruptcyNo, bankruptcyMonth, bankruptcyDate, bankruptcyYear,

      employerOccupation, employerName, employerLength, employerAddress, employerCity,
      employerState, employerZipcode, myIncome, guarantorIncome, roommateIncome,

      roommateNum, bedroomNum, bathroomNum,

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

      budgetMin, budgetMax, lengthMin, lengthMax,

      useGuarantor, myCredit, roommateCredit, guarantorCredit,
    } = this.state;

    return (
      <div>
        <Head>
          <title>Properties</title>
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
                  <span className={styles.sidebar_text}>Tenant Search</span>
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
                    <Link href="">
                      <a className="">
                        <MyButton width="144px" height="36px" color="#126660" backgroundColor="#fff">+INVITE MEMBER</MyButton>
                      </a>
                    </Link>
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
                    <img className={styles.unit_img} src="/landlord/property/unit.jpg" alt="unit" />
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

                      <Link href="/lead">
                        <a>
                          <FontAwesomeIcon icon={faChevronRight} className={styles.chevron_right} />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.unit_card}>
                  <div className={styles.unit_overview}>
                    <img className={styles.unit_img} src="/landlord/property/unit.jpg" alt="unit" />
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

                      <Link href="/lead">
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
