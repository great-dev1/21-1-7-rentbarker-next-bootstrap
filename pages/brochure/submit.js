import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { ProgressBar, Step } from 'react-step-progress-bar'
import 'react-step-progress-bar/styles.css'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Brochure.module.css'

export default class Submit extends React.Component {
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

    inunitMust: false, inunitNice: false,
    connectionMust: false, connectionNice: false,
    laundryMust: false, laundryNice: false,
    dishwasherMust: false, dishwasherNice: false,
    balconyMust: false, balconyNice: false,
    parkingMust: false, parkingNice: false,
    garageMust: false, garageNice: false,
    fitnessMust: false, fitnessNice: false,
    yardMust: false, yardNice: false,
    petMust: false, petNice: false,
    poolMust: false, poolNice: false,

    budget: '', leaseLeng: '',

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

    const inunitMust = localStorage.getItem('inunitMust') === 'true';
    const inunitNice = localStorage.getItem('inunitNice') === 'true';
    const connectionMust = localStorage.getItem('connectionMust') === 'true';
    const connectionNice = localStorage.getItem('connectionNice') === 'true';
    const laundryMust = localStorage.getItem('laundryMust') === 'true';
    const laundryNice = localStorage.getItem('laundryNice') === 'true';
    const dishwasherMust = localStorage.getItem('dishwasherMust') === 'true';
    const dishwasherNice = localStorage.getItem('dishwasherNice') === 'true';
    const balconyMust = localStorage.getItem('balconyMust') === 'true';
    const balconyNice = localStorage.getItem('balconyNice') === 'true';
    const parkingMust = localStorage.getItem('parkingMust') === 'true';
    const parkingNice = localStorage.getItem('parkingNice') === 'true';
    const garageMust = localStorage.getItem('garageMust') === 'true';
    const garageNice = localStorage.getItem('garageNice') === 'true';
    const fitnessMust = localStorage.getItem('fitnessMust') === 'true';
    const fitnessNice = localStorage.getItem('fitnessNice') === 'true';
    const yardMust = localStorage.getItem('yardMust') === 'true';
    const yardNice = localStorage.getItem('yardNice') === 'true';
    const petMust = localStorage.getItem('petMust') === 'true';
    const petNice = localStorage.getItem('petNice') === 'true';
    const poolMust = localStorage.getItem('poolMust') === 'true';
    const poolNice = localStorage.getItem('poolNice') === 'true';

    const budget = localStorage.getItem('budget') !== null ? localStorage.getItem('budget') : '';
    const leaseLeng = localStorage.getItem('leaseLeng') !== null ? localStorage.getItem('leaseLeng') : '';

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

      inunitMust, inunitNice,
      connectionMust, connectionNice,
      laundryMust, laundryNice,
      dishwasherMust, dishwasherNice,
      balconyMust, balconyNice,
      parkingMust, parkingNice,
      garageMust, garageNice,
      fitnessMust, fitnessNice,
      yardMust, yardNice,
      petMust, petNice,
      poolMust, poolNice,

      budget, leaseLeng,

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

      inunitMust, inunitNice,
      connectionMust, connectionNice,
      laundryMust, laundryNice,
      dishwasherMust, dishwasherNice,
      balconyMust, balconyNice,
      parkingMust, parkingNice,
      garageMust, garageNice,
      fitnessMust, fitnessNice,
      yardMust, yardNice,
      petMust, petNice,
      poolMust, poolNice,

      budget, leaseLeng,

      useGuarantor, myCredit, roommateCredit, guarantorCredit,
    } = this.state;

    return (
      <div>
        {/* <img src="/testback-12.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.6" }} /> */}

        <Head>
          <title>Borchure - Review & Submit</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
          <Container className={utils.container}>
            <h1 className={styles.primary_title}>Build Your Barker Brochure</h1>
            <p>
              This free application will be used for all landlords that bid on you.<br />
              No hidden fees and hassel-free! Your personal information will remain anonymous to all landlords.
            </p>

            <div className={styles.progress_bar}>
              <ProgressBar percent={100} filledBackground="#007c77">
                <Step>
                  {({ accomplished, index }) => (
                    <div className={styles.complete}>
                      {index + 1}
                    </div>
                  )}
                </Step>

                <Step>
                  {({ accomplished, index }) => (
                    <div className={styles.complete}>
                      {index + 1}
                    </div>
                  )}
                </Step>

                <Step>
                  {({ accomplished, index }) => (
                    <div className={styles.complete}>
                      {index + 1}
                    </div>
                  )}
                </Step>

                <Step>
                  {({ accomplished, index }) => (
                    <div className={styles.complete}>
                      {index + 1}
                    </div>
                  )}
                </Step>
              </ProgressBar>
            </div>

            <div className={styles.form_container}>
              <h2 className={styles.form_title}>Review & Submit</h2>

              <div className={styles.info_table}>
                <div className="d-flex justify-content-between">
                  <h3 className={styles.table_title}>Personal Information</h3>
                  <Link href="/brochure/personal">
                    <a className={styles.edit_link}>Edit</a>
                  </Link>
                </div>

                <Row className={styles.table_content}>
                  <Col md={6}>
                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Name:</h4>
                      <p className={styles.table_detail}>
                        {firstName} {middleName} {lastName}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Date of birth:</h4>
                      <p className={styles.table_detail}>
                        {birthMonth}/{birthDate}/{birthYear}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Present home address:</h4>
                      <p className={styles.table_detail}>
                        {currentAddress} {currentUnit}<br />
                        {currentCity} {currentState}, {currentZipcode}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Monthly Rent:</h4>
                      <p className={styles.table_detail}>
                        ${currentRent}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Length of time:</h4>
                      <p className={styles.table_detail}>
                        {currentLength}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Reason for moving:</h4>
                      <p className={styles.table_detail}>
                        {currentReason}
                      </p>
                    </div>
                  </Col>

                  <Col md={6} className={styles.right_content}>
                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Previous home address:</h4>
                      <p className={styles.table_detail}>
                        {prevAddress} {prevUnit}<br />
                        {prevCity} {prevState}, {prevZipcode}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Monthly Rent:</h4>
                      <p className={styles.table_detail}>
                        ${prevRent}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Length of time:</h4>
                      <p className={styles.table_detail}>
                        {prevLength}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Reason for moving:</h4>
                      <p className={styles.table_detail}>
                        {prevReason}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className={styles.info_table}>
                <div className="d-flex justify-content-between">
                  <h3 className={styles.table_title}>Additional Information</h3>
                  <Link href="/brochure/additional">
                    <a className={styles.edit_link}>Edit</a>
                  </Link>
                </div>

                <Row className={styles.table_content}>
                  <Col md={6}>
                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Desired Move-In Date:</h4>
                      <p className={styles.table_detail}>
                        {`${moveMonth}/${moveDate}/${moveYear}`}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Pets:</h4>
                      <p className={styles.table_detail}>
                        {petYes ? `Yes, ${petInfo}` : "No"}<br />
                        ESA: {esaYes ? "Yes" : "No"}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Smoker:</h4>
                      <p className={styles.table_detail}>
                        {smokerYes ? "Yes" : "No"}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Evictions:</h4>
                      <p className={styles.table_detail}>
                        {evictionYes ? `Yes, ${evictionInfo}` : "No"}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Judgements or liens:</h4>
                      <p className={styles.table_detail}>
                        {judgeYes ? `Yes, ${judgeInfo}` : "No"}
                      </p>
                    </div>
                  </Col>

                  <Col md={6} className={styles.right_content}>
                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Bankruptcy:</h4>
                      <p className={styles.table_detail}>
                        {bankruptcyYes ? `Yes, ${bankruptcyMonth}/${bankruptcyDate}/${bankruptcyYear}` : "No"}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className={styles.info_table}>
                <div className="d-flex justify-content-between">
                  <h3 className={styles.table_title}>Employment Information</h3>
                  <Link href="/brochure/employment">
                    <a className={styles.edit_link}>Edit</a>
                  </Link>
                </div>

                <Row className={styles.table_content}>
                  <Col md={6}>
                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Present occupation:</h4>
                      <p className={styles.table_detail}>
                        {employerOccupation}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Employer name:</h4>
                      <p className={styles.table_detail}>
                        {employerName}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Time with employer:</h4>
                      <p className={styles.table_detail}>
                        {employerLength}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Employer address:</h4>
                      <p className={styles.table_detail}>
                        {employerAddress}<br />
                        {employerCity} ${employerState}, {employerZipcode}
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Gross Monthly Income:</h4>
                      <p className={styles.table_detail}>
                        {myIncome}
                      </p>
                    </div>
                  </Col>

                  {useGuarantor &&
                    <Col md={6}>
                      <div className={styles.table_item}>
                        <h4 className={styles.table_subtitle}>Guarantor's Monthly Income:</h4>
                        <p className={styles.table_detail}>
                          {guarantorIncome}
                        </p>
                      </div>

                      <div className={styles.table_item}>
                        <h4 className={styles.table_subtitle}>Roommate's Monthly Income:</h4>
                        <p className={styles.table_detail}>
                          ${roommateIncome}
                        </p>
                      </div>
                    </Col>
                  }
                </Row>
              </div>

              <div className={styles.info_table}>
                <div className="d-flex justify-content-between">
                  <h3 className={styles.table_title}>Preferences</h3>
                  <Link href="/bed">
                    <a className={styles.edit_link}>Edit</a>
                  </Link>
                </div>

                <Row className={styles.table_content}>
                  <Col md={6}>
                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Roommates, Beds, and Baths:</h4>
                      <p className={styles.table_detail}>
                        {roommateNum} Roommate<br />
                        {bedroomNum} Bed<br />
                        {bathroomNum} Bath<br />
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Unique Features:</h4>
                      <p className={styles.table_detail}>
                        {(inunitMust || inunitNice) && <div>In-unit washer/dryer</div>}
                        {(connectionMust || connectionNice) && <div>Washer & dryer connection</div>}
                        {(laundryMust || laundryNice) && <div>On-site laundry</div>}
                        {(dishwasherMust || dishwasherNice) && <div>Dishwasher</div>}
                        {(balconyMust || balconyNice) && <div>Balcony/Patio</div>}
                        {(parkingMust || parkingNice) && <div>Parking</div>}
                        {(garageMust || garageNice) && <div>Garage/Covered parking</div>}
                        {(fitnessMust || fitnessNice) && <div>Fitness center</div>}
                        {(yardMust || yardNice) && <div>Enclosed yard</div>}
                        {(petMust || petNice) && <div>Pets allowed</div>}
                        {(poolMust || poolNice) && <div>Swimming pool</div>}
                      </p>
                    </div>

                  </Col>

                  <Col md={6} className={styles.right_content}>
                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Budget & Lease Length:</h4>
                      <p className={styles.table_detail}>
                        ${budget}/month, {leaseLeng} months
                      </p>
                    </div>

                    <div className={styles.table_item}>
                      <h4 className={styles.table_subtitle}>Credit Score:</h4>
                      <p className={styles.table_detail}>
                        Self: {myCredit}<br />
                        {useGuarantor ? `Roommate: ${roommateCredit}` : ''}<br />
                        {useGuarantor ? `Guarantor: ${guarantorCredit}` : ''}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="text-center text-md-right">
                <Link href="/brochure">
                  <a><MyButton blue width="205px" height="45px" margin="10px">SUBMIT</MyButton></a>
                </Link>
              </div>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}