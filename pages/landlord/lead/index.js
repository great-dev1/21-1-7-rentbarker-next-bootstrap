import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Form, InputGroup, FormControl, Row, Col } from 'react-bootstrap'

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import MyButton from '../../../components/MyButton'
import styles from './Lead.module.css'

export default class Lead extends React.Component {
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
          <title>Leads</title>
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
                <a className={styles.sidebar_menu_active}>
                  <img src="/sidebar/user-green.png" alt="user" />
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
              <div className={styles.lead_section}>
                <div className={styles.lead_header}>
                  <h2 className={styles.primary_title}>Leads</h2>
                  <p className={styles.primary_detail}>Sunday, 13 December 2020</p>

                  <div className={styles.lead_search}>
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

                  <div className={styles.status_btns}>
                    <a href="#" className={styles.status_btn_active}>ALL</a>
                    <a href="#" className={styles.status_btn}>ACTIVE</a>
                    <a href="#" className={styles.status_btn}>PENDING</a>
                    <a href="#" className={styles.status_btn}>APPROVED</a>
                    <a href="#" className={styles.status_btn}>DECLINE</a>
                  </div>

                  <h3 className={styles.lead_title}>All Leads</h3>
                </div>

                <div className={styles.lead_group}>
                  <h4 className={styles.property_name}>PROPERTY NAME | ADDRESS</h4>

                  <div
                    className={property === 1 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(1)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #1</p>
                        <p className={styles.lead_date}>2 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>92% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 2 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(2)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #2</p>
                        <p className={styles.lead_date}>3 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>88% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 3 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(3)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #3</p>
                        <p className={styles.lead_date}>3 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>87% Match</p>
                    </div>
                  </div>
                </div>

                <div className={styles.lead_group}>
                  <h4 className={styles.property_name}>PROPERTY NAME | ADDRESS</h4>

                  <div
                    className={property === 4 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(4)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #4</p>
                        <p className={styles.lead_date}>4 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>85% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 5 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(5)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #5</p>
                        <p className={styles.lead_date}>4 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>76% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 6 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(6)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #6</p>
                        <p className={styles.lead_date}>5 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>71% Match</p>
                    </div>
                  </div>
                </div>

                <div className={styles.lead_group}>
                  <h4 className={styles.property_name}>PROPERTY NAME | ADDRESS</h4>

                  <div
                    className={property === 7 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(7)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #7</p>
                        <p className={styles.lead_date}>5 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>64% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 8 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(8)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #8</p>
                        <p className={styles.lead_date}>5 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>63% Match</p>
                    </div>
                  </div>

                  <div
                    className={property === 9 ? styles.lead_item_active : styles.lead_item_inactive}
                    onClick={this.handleChange(9)}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/message/user.png" alt="user" />
                      <div className={styles.lead_text}>
                        <p className={styles.lead_name}>Lead #9</p>
                        <p className={styles.lead_date}>5 Days Ago</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={styles.stars}>
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                        <img src="/message/star.png" alt="star" />
                      </div>
                      <p className={styles.match_text}>63% Match</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.preview_section}>
                <div className={styles.preview_header}>
                  <div className="d-flex justify-content-center justify-content-sm-between align-items-center">
                    <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-left">
                      <img src="/message/user-1.png" alt="user" />

                      <div className="m-0 ml-sm-3 mr-2">
                        <p className={styles.lead_name}>Lead #2</p>
                        <p className={styles.lead_date_1}>2 Days Ago</p>
                      </div>
                    </div>

                    <div className="d-flex">
                      <Link href="">
                        <a className="d-none d-sm-block">
                          <MyButton width="132px" height="44px">SEND OFFER</MyButton>
                        </a>
                      </Link>
                      <Link href="">
                        <a className="d-none d-sm-block ml-3">
                          <MyButton width="132px" height="44px" color="#126660" backgroundColor="#fff">DECLINE</MyButton>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <Row className={styles.preview_summary}>
                    <Col xs={6} md={4} className={styles.preview_summary_item}>
                      <div className="d-flex flex-column flex-md-row align-items-start">
                        <img className={styles.preview_icon} src="/brochure/dollar-icon.png" alt="dollar" />
                        <div className="mt-2 mt-md-0">
                          <p className={styles.preview_title}>Rent</p>
                          <p className={styles.preview_detail}>${currentRent} Monthly</p>
                        </div>
                      </div>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_summary_item}>
                      <div className="d-flex flex-column flex-md-row align-items-start">
                        <img className={styles.preview_icon} src="/brochure/room-icon.png" alt="room" />
                        <div className="mt-2 mt-md-0">
                          <p className={styles.preview_title}>Flat Details</p>
                          <p className={styles.preview_detail}>Unit 303 | 1 bed, 1 bath</p>
                        </div>
                      </div>
                    </Col>

                    <Col xs={6} md={4} className={styles.preview_summary_item}>
                      <div className="d-flex flex-column flex-md-row align-items-start">
                        <img className={styles.preview_icon} src="/brochure/map-icon.png" alt="map" />
                        <div className="mt-2 mt-md-0">
                          <p className={styles.preview_title}>Address</p>
                          <p className={styles.preview_detail}>{currentAddress} {currentUnit} {currentCity}, {currentState}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Link href="">
                    <a className="d-block d-sm-none mt-4">
                      <MyButton width="132px" height="44px">SEND OFFER</MyButton>
                    </a>
                  </Link>
                  <Link href="">
                    <a className="d-block d-sm-none mt-3">
                      <MyButton width="160px" height="44px" color="#126660" backgroundColor="#fff">DECLINE</MyButton>
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
                        <p className={styles.preview_rating_detail}>{myCredit}</p>
                      </div>
                      <img className={styles.preview_score} src="/brochure/score-bar.png" alt="score" />
                    </div>
                  </Col>
                </Row>

                <h4 className={styles.preview_section_title}>BASIC INFORMATION</h4>
                <Row className={styles.preview_basic}>
                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Total Monthly Income</p>
                    <p className={styles.preview_info_detail}>${myIncome}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Desired Move-In Date</p>
                    <p className={styles.preview_info_detail}>{moveMonth}/{moveDate}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Desired Lease Length</p>
                    <p className={styles.preview_info_detail}>{lengthMin}-{lengthMax} months</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Monthly Rent Budget</p>
                    <p className={styles.preview_info_detail}>${budgetMin} - ${budgetMax}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Smoker/Non-Smoker</p>
                    <p className={styles.preview_info_detail}>{smokerYes ? "Smoker" : "Non-Smoker"}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Bed/Bath Rooms Prefer</p>
                    <p className={styles.preview_info_detail}>{bedroomNum} bed | {bathroomNum} bath</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Number of Pets</p>
                    <p className={styles.preview_info_detail}>{petYes ? `${petInfo}` : "0"}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Features</p>
                    <p className={styles.preview_info_detail}>
                      {inunitToggle && <div>In-unit washer/dryer</div>}
                      {connectionToggle && <div>Washer & dryer connection</div>}
                      {laundryToggle && <div>On-site laundry</div>}
                      {dishwasherToggle && <div>Dishwasher</div>}
                      {balconyToggle && <div>Balcony/Patio</div>}
                      {parkingToggle && <div>Parking</div>}
                      {garageToggle && <div>Garage/Covered parking</div>}
                      {fitnessToggle && <div>Fitness center</div>}
                      {yardToggle && <div>Enclosed yard</div>}
                      {petToggle && <div>Pets allowed</div>}
                      {poolToggle && <div>Swimming pool</div>}
                    </p>
                  </Col>
                </Row>

                <h4 className={styles.preview_section_title}>ADDITIONAL INFORMATION</h4>
                <Row className={styles.preview_additional}>
                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Evictions</p>
                    <p className={styles.preview_info_detail}>{evictionYes ? `Yes, ${evictionInfo}` : "No"}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Bankruptcy</p>
                    <p className={styles.preview_info_detail}>{bankruptcyYes ? `Yes, ${bankruptcyMonth}/${bankruptcyDate}/${bankruptcyYear}` : "No"}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Judgments/Liens</p>
                    <p className={styles.preview_info_detail}>{judgeYes ? `Yes, ${judgeInfo}` : "No"}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Current Occupation</p>
                    <p className={styles.preview_info_detail}>{employerOccupation}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.preview_item}>
                    <p className={styles.preview_title}>Length of Time</p>
                    <p className={styles.preview_info_detail}>{employerLength}</p>
                  </Col>
                </Row>

                {useGuarantor &&
                  <div>
                    <h4 className={styles.preview_section_title}>ROOMMATE (GUARANTOR)</h4>
                    <Row className={styles.preview_roommate}>
                      <Col xs={6} md={4} className={styles.preview_item}>
                        <p className={styles.preview_title}>Number of Roommates</p>
                        <p className={styles.preview_info_detail}>{roommateNum}</p>
                      </Col>

                      <Col xs={6} md={4} className={styles.preview_item}>
                        <p className={styles.preview_title}>Roommate Monthly Income</p>
                        <p className={styles.preview_info_detail}>${roommateIncome}</p>
                      </Col>

                      <Col xs={6} md={4} className={styles.preview_item}>
                        <p className={styles.preview_title}>Roommate Credit Score</p>
                        <p className={styles.preview_info_detail}>{roommateCredit}</p>
                      </Col>
                    </Row>
                  </div>
                }

                <h4 className={styles.preview_section_title}>COMPETITORS</h4>
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
                        {currentAddress} {currentUnit} {currentCity}, {currentState}
                      </p>
                    </div>

                    <div className={styles.preview_item}>
                      <p className={styles.preview_title}>Monthly Rent</p>
                      <p className={styles.preview_info_detail}>{currentRent}</p>
                    </div>

                    <div className={styles.preview_item}>
                      <p className={styles.preview_title}>Duration of Stay</p>
                      <p className={styles.preview_info_detail}>{currentLength}</p>
                    </div>

                    <div className={styles.preview_item}>
                      <p className={styles.preview_title}>Reason for leaving</p>
                      <p className={styles.preview_info_detail}>{currentReason}</p>
                    </div>
                  </Col>

                  <Col md={6}>
                    <h4 className={styles.preview_section_title}>PREVIOUS RESIDENCE</h4>
                    <div className={styles.preview_item}>
                      <p className={styles.preview_title}>Address</p>
                      <p className={styles.preview_info_detail}>
                        {prevAddress} {prevUnit} {prevCity}, {prevState}
                      </p>
                    </div>

                    <div className={styles.preview_item}>
                      <p className={styles.preview_title}>Monthly Rent</p>
                      <p className={styles.preview_info_detail}>{prevRent}</p>
                    </div>

                    <div className={styles.preview_item}>
                      <p className={styles.preview_title}>Duration of Stay</p>
                      <p className={styles.preview_info_detail}>{prevLength}</p>
                    </div>

                    <div className={styles.preview_item}>
                      <p className={styles.preview_title}>Reason for leaving</p>
                      <p className={styles.preview_info_detail}>{prevReason}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    )
  }
}
