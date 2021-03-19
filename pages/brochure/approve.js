import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import { faChevronLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CreditScoreBar from '../../components/CreditScoreBar'
import styles from './Brochure.module.css'

export default class Approve extends React.Component {
  state = {
    approve: false,

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

  handleCheck = (e) => {
    const value = e.target.checked;
    this.setState({ approve: value });
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
      approve,

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
          <title>Approve Brochure</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.navbar}>
          <Navbar />
        </div>

        <header className={styles.header}>
          <Link href="/brochure/review">
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
        </header>

        <main className={styles.approve_main}>
          <div className={styles.approve_header}>
            <img className={styles.check_icon} src="/brochure/check-orange.png" alt="approve" />
            <h2 className={styles.approve_primary_title}>Your Barker Brochure</h2>
            <p className={styles.approve_primary_detail}>
              Now it’s time for the fun stuff! The page below is how your Barker Brochure<br className="d-none d-sm-block" />
              will be shown to property professionals and landlords.
            </p>
            <label className={styles.check_label}>
              <input
                className={styles.check_box}
                name="approve"
                checked={approve}
                onChange={this.handleCheck}
                type="checkbox"
                inline
              />
              I approve My Barker Brochure
            </label>
            <Link href={approve ? "/offer" : ""}>
              <a className={approve ? styles.approve_link_active : styles.approve_link_inactive}>
                TAKE ME TO MY OFFERS
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrow_right} />
              </a>
            </Link>
          </div>

          <div className={styles.approve_content}>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img className="mb-2 mb-md-0" src="/brochure/user-icon.png" alt="user" />
                <span className={styles.approve_username}>{firstName} {middleName} {lastName}</span>
              </div>

              <Link href="/brochure">
                <a className="mt-2 mb-md-0">
                  <div className="d-flex align-items-center">
                    <img src="/brochure/pencil-icon.png" alt="pencil" />
                    <span className={styles.edit_link}>EDIT</span>
                  </div>
                </a>
              </Link>
            </div>

            <Row className={styles.approve_summary}>
              <Col xs={6} md={4} className={styles.approve_summary_item}>
                <div className="d-flex flex-column flex-md-row align-items-start">
                  <img className={styles.approve_icon} src="/brochure/dollar-icon.png" alt="dollar" />
                  <div className="mt-2 mt-md-0">
                    <p className={styles.approve_title}>Rent</p>
                    <p className={styles.approve_detail}>${currentRent} Monthly</p>
                  </div>
                </div>
              </Col>

              <Col xs={6} md={4} className={styles.approve_summary_item}>
                <div className="d-flex flex-column flex-md-row align-items-start">
                  <img className={styles.approve_icon} src="/brochure/room-icon.png" alt="room" />
                  <div className="mt-2 mt-md-0">
                    <p className={styles.approve_title}>Flat Details</p>
                    <p className={styles.approve_detail}>Unit 303 | 1 bed, 1 bath</p>
                  </div>
                </div>
              </Col>

              <Col xs={6} md={4} className={styles.approve_summary_item}>
                <div className="d-flex flex-column flex-md-row align-items-start">
                  <img className={styles.approve_icon} src="/brochure/map-icon.png" alt="map" />
                  <div className="mt-2 mt-md-0">
                    <p className={styles.approve_title}>Address</p>
                    <p className={styles.approve_detail}>{currentAddress} {currentUnit} {currentCity}, {currentState}</p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />

            <h4 className={styles.approve_section_title}>RATING</h4>
            <Row className={styles.approve_rating}>
              <Col md={6} className={styles.approve_item}>
                <div className="d-flex justify-content-between justify-content-md-start align-items-center">
                  <div>
                    <p className={styles.approve_title}>Match</p>
                    <p className={styles.approve_rating_detail}>88%</p>
                  </div>
                  <div className={styles.approve_stars}>
                    <img className={styles.approve_star} src="/brochure/star.png" alt="star" />
                    <img className={styles.approve_star} src="/brochure/star.png" alt="star" />
                    <img className={styles.approve_star} src="/brochure/star.png" alt="star" />
                    <img className={styles.approve_star} src="/brochure/star.png" alt="star" />
                    <img className={styles.approve_star} src="/brochure/star.png" alt="star" />
                  </div>
                </div>
              </Col>

              <Col md={6} className={styles.approve_item}>
                <div className="d-flex justify-content-between justify-content-md-start align-items-center">
                  <div>
                    <p className={styles.approve_title}>Credit Score</p>
                    <p className={styles.approve_rating_detail}>{myCredit}</p>
                  </div>
                  <div className={styles.approve_score}>
                    <CreditScoreBar credit={myCredit} />
                  </div>
                </div>
              </Col>
            </Row>

            <h4 className={styles.approve_section_title}>BASIC INFORMATION</h4>
            <Row className={styles.approve_basic}>
              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Total Monthly Income</p>
                <p className={styles.approve_info_detail}>${myIncome}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Desired Move-In Date</p>
                <p className={styles.approve_info_detail}>{moveMonth}/{moveDate}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Desired Lease Length</p>
                <p className={styles.approve_info_detail}>{lengthMin}-{lengthMax} months</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Monthly Rent Budget</p>
                <p className={styles.approve_info_detail}>${budgetMin} - ${budgetMax}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Smoker/Non-Smoker</p>
                <p className={styles.approve_info_detail}>{smokerYes ? "Smoker" : "Non-Smoker"}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Bed/Bath Rooms Prefer</p>
                <p className={styles.approve_info_detail}>{bedroomNum} bed | {bathroomNum} bath</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Number of Pets</p>
                <p className={styles.approve_info_detail}>{petYes ? `${petInfo}` : "0"}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Features</p>
                <p className={styles.approve_info_detail}>
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

            <h4 className={styles.approve_section_title}>ADDITIONAL INFORMATION</h4>
            <Row className={styles.approve_additional}>
              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Evictions</p>
                <p className={styles.approve_info_detail}>{evictionYes ? `Yes, ${evictionInfo}` : "No"}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Bankruptcy</p>
                <p className={styles.approve_info_detail}>{bankruptcyYes ? `Yes, ${bankruptcyMonth}/${bankruptcyDate}/${bankruptcyYear}` : "No"}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Judgments/Liens</p>
                <p className={styles.approve_info_detail}>{judgeYes ? `Yes, ${judgeInfo}` : "No"}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Current Occupation</p>
                <p className={styles.approve_info_detail}>{employerOccupation}</p>
              </Col>

              <Col xs={6} md={4} className={styles.approve_item}>
                <p className={styles.approve_title}>Length of Time</p>
                <p className={styles.approve_info_detail}>{employerLength}</p>
              </Col>
            </Row>

            {useGuarantor &&
              <div>
                <h4 className={styles.approve_section_title}>ROOMMATE (GUARANTOR)</h4>
                <Row className={styles.approve_roommate}>
                  <Col xs={6} md={4} className={styles.approve_item}>
                    <p className={styles.approve_title}>Number of Roommates</p>
                    <p className={styles.approve_info_detail}>{roommateNum}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.approve_item}>
                    <p className={styles.approve_title}>Roommate Monthly Income</p>
                    <p className={styles.approve_info_detail}>${roommateIncome}</p>
                  </Col>

                  <Col xs={6} md={4} className={styles.approve_item}>
                    <p className={styles.approve_title}>Roommate Credit Score</p>
                    <p className={styles.approve_info_detail}>{roommateCredit}</p>
                  </Col>
                </Row>
              </div>
            }

            <h4 className={styles.approve_section_title}>COMPETITORS</h4>
            <Row className={styles.approve_roommate}>
              <Col md={6} className={styles.approve_item}>
                <div className={styles.flat_card}>
                  <img src="/brochure/flat-1.jpg" alt="flat" />
                  <div className="ml-2">
                    <p className={styles.flat_address}>Street Name #1</p>
                    <p className={styles.flat_price}>$1800 monthly</p>
                    <p className={styles.flat_match}>85% match</p>
                  </div>
                </div>
              </Col>

              <Col md={6} className={styles.approve_item}>
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

            <Row className={styles.approve_residence}>
              <Col md={6}>
                <h4 className={styles.approve_section_title}>CURRENT RESIDENCE</h4>
                <div className={styles.approve_item}>
                  <p className={styles.approve_title}>Address</p>
                  <p className={styles.approve_info_detail}>
                    {currentAddress} {currentUnit} {currentCity}, {currentState}
                  </p>
                </div>

                <div className={styles.approve_item}>
                  <p className={styles.approve_title}>Monthly Rent</p>
                  <p className={styles.approve_info_detail}>{currentRent}</p>
                </div>

                <div className={styles.approve_item}>
                  <p className={styles.approve_title}>Duration of Stay</p>
                  <p className={styles.approve_info_detail}>{currentLength}</p>
                </div>

                <div className={styles.approve_item}>
                  <p className={styles.approve_title}>Reason for leaving</p>
                  <p className={styles.approve_info_detail}>{currentReason}</p>
                </div>
              </Col>

              <Col md={6}>
                <h4 className={styles.approve_section_title}>PREVIOUS RESIDENCE</h4>
                <div className={styles.approve_item}>
                  <p className={styles.approve_title}>Address</p>
                  <p className={styles.approve_info_detail}>
                    {prevAddress} {prevUnit} {prevCity}, {prevState}
                  </p>
                </div>

                <div className={styles.approve_item}>
                  <p className={styles.approve_title}>Monthly Rent</p>
                  <p className={styles.approve_info_detail}>{prevRent}</p>
                </div>

                <div className={styles.approve_item}>
                  <p className={styles.approve_title}>Duration of Stay</p>
                  <p className={styles.approve_info_detail}>{prevLength}</p>
                </div>

                <div className={styles.approve_item}>
                  <p className={styles.approve_title}>Reason for leaving</p>
                  <p className={styles.approve_info_detail}>{prevReason}</p>
                </div>
              </Col>
            </Row>
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}