import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import utils from '../../styles/utils.module.css'
import styles from './Brochure.module.css'

export default class Review extends React.Component {
  state = {
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
          <title>Review & Submit</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.navbar}>
          <Navbar />
        </div>

        <header className={styles.header}>
          <Link href="/brochure/employment">
            <a>
              <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron_left} />
            </a>
          </Link>

          <div className="d-flex justify-content-center">
            <Link href="/">
              <a className={styles.brand}>
                <img src="/brochure/brand.png" alt="brand" />
              </a>
            </Link>
          </div>

          <div className={styles.header_step}>
            <img src="/brochure/info-icon.png" alt="info" />
            <div className={styles.progress_step_text}>
              <p className={styles.progress_step_title_orange}>STEP 04 <span className={styles.progress_step_title_grey}> / 04</span></p>
              <p className={styles.progress_step_detail_white}>Review & Submit</p>
            </div>
          </div>

          <div className={styles.progress_bar}>
            <div className={styles.progress_step_four}></div>
          </div>
        </header>

        <main>
          <div className={styles.main_content}>
            <div className={styles.left_content}>
              <div className={styles.progress_header}>
                <img src="/brochure/info-icon.png" alt="info" />
                <p className={styles.progress_header_text}>
                  COMPLETE<br />
                  ALL STEPS:
                </p>
              </div>

              <div className={styles.progress_step}>
                <img src="/brochure/check-icon.png" alt="check" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_grey}>STEP 01</p>
                  <p className={styles.progress_step_detail_white}>Basic Details</p>
                </div>
              </div>

              <div className={styles.progress_divider_white}></div>

              <div className={styles.progress_step}>
                <img src="/brochure/check-icon.png" alt="check" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_grey}>STEP 02</p>
                  <p className={styles.progress_step_detail_white}>Additional Info</p>
                </div>
              </div>

              <div className={styles.progress_divider_white}></div>

              <div className={styles.progress_step}>
                <img src="/brochure/check-icon.png" alt="check" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_grey}>STEP 03</p>
                  <p className={styles.progress_step_detail_white}>Employment</p>
                </div>
              </div>

              <div className={styles.progress_divider_white}></div>

              <div className={styles.progress_step}>
                <img src="/brochure/step-4-orange.png" alt="step 4" />
                <div className={styles.progress_step_text}>
                  <p className={styles.progress_step_title_orange}>STEP 04</p>
                  <p className={styles.progress_step_detail_white}>Review</p>
                </div>
              </div>
            </div>

            <div className={styles.right_content}>
              <div className="d-none d-md-block">
                <h2 className={styles.primary_title}>Your Barker Brochure</h2>
                <p className={styles.primary_detail}>
                  This free application will be used for all landlords that bid on you.No hidden fees and hassle-free!<br />
                  Your personal information will remain anonymous to all landlords.
                </p>
              </div>

              <div className="d-none d-md-block">
                <h2 className={styles.primary_title}>Review & Submit</h2>
                <hr />
              </div>

              {/* Personal Information */}
              <div className={styles.info_container}>
                <div className="d-flex justify-content-between">
                  <h4 className={styles.secondary_title}>Personal Information</h4>

                  <Link href="/brochure">
                    <a className={styles.edit_link}>
                      <img src="/brochure/pencil-icon.png" alt="pencil" />
                      <span className="ml-2">EDIT</span>
                    </a>
                  </Link>
                </div>

                <Row className={styles.info_content}>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Name</p>
                    <p className={styles.info_detail}>{firstName} {middleName} {lastName}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Date of Birth</p>
                    <p className={styles.info_detail}>{birthMonth}/{birthDate}/{birthYear}</p>
                  </Col>
                </Row>

                <Row className={styles.info_content}>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Monthly Rent</p>
                    <p className={styles.info_detail}>${currentRent}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Length of Time</p>
                    <p className={styles.info_detail}>{currentLength}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Current Address</p>
                    <p className={styles.info_detail}>
                      {currentAddress} {currentUnit}<br />
                      {currentCity} {currentState}, {currentZipcode}
                    </p>
                  </Col>
                  <Col xs={6} md={12}>
                    <p className={styles.info_title}>Reason for Moving</p>
                    <p className={styles.info_detail}>{currentReason}</p>
                  </Col>
                </Row>

                <Row className={styles.info_content}>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Monthly Rent</p>
                    <p className={styles.info_detail}>${prevRent}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Length of Time</p>
                    <p className={styles.info_detail}>{prevLength}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Current Address</p>
                    <p className={styles.info_detail}>
                      {prevAddress} {prevUnit}<br />
                      {prevCity} {prevState}, {prevZipcode}
                    </p>
                  </Col>
                  <Col xs={6} md={12}>
                    <p className={styles.info_title}>Reason for Moving</p>
                    <p className={styles.info_detail}>{prevReason}</p>
                  </Col>
                </Row>
              </div>
              <hr />

              {/* Addtional Information */}
              <div className={styles.info_container}>
                <div className="d-flex justify-content-between">
                  <h4 className={styles.secondary_title}>Additional Information</h4>

                  <Link href="/brochure/additional">
                    <a className={styles.edit_link}>
                      <img src="/brochure/pencil-icon.png" alt="pencil" />
                      <span className="ml-2">EDIT</span>
                    </a>
                  </Link>
                </div>

                <Row className={styles.info_content}>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Desired Move-In Date</p>
                    <p className={styles.info_detail}>{moveMonth}/{moveDate}/{moveYear}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Smoker</p>
                    <p className={styles.info_detail}>{smokerYes ? "Yes" : "No"}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Judgements/Liens</p>
                    <p className={styles.info_detail}>{judgeYes ? `Yes, ${judgeInfo}` : "No"}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Evictions</p>
                    <p className={styles.info_detail}>{evictionYes ? `Yes, ${evictionInfo}` : "No"}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Bankruptcy</p>
                    <p className={styles.info_detail}>{bankruptcyYes ? `Yes, ${bankruptcyMonth}/${bankruptcyDate}/${bankruptcyYear}` : "No"}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Pets</p>
                    <p className={styles.info_detail}>
                      {petYes ? `Yes, ${petInfo}. ESA: ${esaYes ? "Yes" : "No"}` : "No"}
                    </p>
                  </Col>
                </Row>
              </div>
              <hr />

              {/* Employment Information */}
              <div className={styles.info_container}>
                <div className="d-flex justify-content-between">
                  <h4 className={styles.secondary_title}>Employment Information</h4>

                  <Link href="/brochure/employment">
                    <a className={styles.edit_link}>
                      <img src="/brochure/pencil-icon.png" alt="pencil" />
                      <span className="ml-2">EDIT</span>
                    </a>
                  </Link>
                </div>

                <Row className={styles.info_content}>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Employer Name</p>
                    <p className={styles.info_detail}>{employerName}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Length of Time</p>
                    <p className={styles.info_detail}>{employerLength}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Gross Monthly Icome</p>
                    <p className={styles.info_detail}>{myIncome}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Current Occupation</p>
                    <p className={styles.info_detail}>{employerOccupation}</p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Employer Address</p>
                    <p className={styles.info_detail}>
                      {employerAddress}<br />
                      {employerCity} {employerState}, {employerZipcode}
                    </p>
                  </Col>
                  {useGuarantor &&
                    <Col xs={6} md={4}>
                      <p className={styles.info_title}>Roommate Monthly Income</p>
                      <p className={styles.info_detail}>${roommateIncome}</p>
                    </Col>
                  }
                </Row>
              </div>
              <hr />

              {/* Preferences */}
              <div className={styles.info_container}>
                <div className="d-flex justify-content-between">
                  <h4 className={styles.secondary_title}>Preferences</h4>

                  <Link href="/bed">
                    <a className={styles.edit_link}>
                      <img src="/brochure/pencil-icon.png" alt="pencil" />
                      <span className="ml-2">EDIT</span>
                    </a>
                  </Link>
                </div>

                <Row className={styles.info_content}>
                  <Col md={4}>
                    <p className={styles.info_title}>Roommates, Beds and Baths</p>
                    <p className={styles.info_detail}>
                      {roommateNum} Roommate<br />
                      {bedroomNum} Bed<br />
                      {bathroomNum} Bath<br />
                    </p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Unique Features</p>
                    <p className={styles.info_detail}>
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
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Budget & Lease Length</p>
                    <p className={styles.info_detail}>
                      ${budgetMin} - ${budgetMax} /month<br />
                      {lengthMin}-{lengthMax} months
                    </p>
                  </Col>
                  <Col xs={6} md={4}>
                    <p className={styles.info_title}>Credit Score</p>
                    <p className={styles.info_detail}>{myCredit}</p>
                  </Col>
                  {useGuarantor &&
                    <Col xs={6} md={4}>
                      <p className={styles.info_title}>Roommate Credit Score</p>
                      <p className={styles.info_detail}>{roommateCredit}</p>
                    </Col>
                  }
                </Row>
              </div>
              <hr />

              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                <Link href="/brochure/employment">
                  <a className={utils.prev_link}>PREVIOUS PAGE</a>
                </Link>

                <Link href="/brochure/approve">
                  <a className={utils.continue_btn}>SUBMIT</a>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}