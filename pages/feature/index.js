import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Button, ButtonGroup } from 'react-bootstrap'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Feature.module.css'

export default class Featrue extends React.Component {
  state = {
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
  }

  // In-unit washer and dryer
  handleInunitToggle = () => {
    let temp = this.state.inunitToggle;
    this.setState({ inunitToggle: !temp });
  }
  handleInunitMust = () => {
    this.setState({ inunitToggle: false, inunitMust: true, inunitNice: false });
  }
  handleInunitNice = () => {
    this.setState({ inunitToggle: false, inunitMust: false, inunitNice: true });
  }
  handleInunitInitial = () => {
    this.setState({ inunitToggle: false, inunitMust: false, inunitNice: false });
  }

  // Washer & dryer connections
  handleConnectionToggle = () => {
    let temp = this.state.connectionToggle;
    this.setState({ connectionToggle: !temp });
  }
  handleConnectionMust = () => {
    this.setState({ connectionToggle: false, connectionMust: true, connectionNice: false });
  }
  handleConnectionNice = () => {
    this.setState({ connectionToggle: false, connectionMust: false, connectionNice: true });
  }
  handleConnectionInitial = () => {
    this.setState({ connectionToggle: false, connectionMust: false, connectionNice: false });
  }

  // On-site lanundry
  handleLaundryToggle = () => {
    let temp = this.state.laundryToggle;
    this.setState({ laundryToggle: !temp });
  }
  handleLaundryMust = () => {
    this.setState({ laundryToggle: false, laundryMust: true, laundryNice: false });
  }
  handleLaundryNice = () => {
    this.setState({ laundryToggle: false, laundryMust: false, laundryNice: true });
  }
  handleLaundryInitial = () => {
    this.setState({ laundryToggle: false, laundryMust: false, laundryNice: false });
  }

  // Dishwasher
  handleDishwasherToggle = () => {
    let temp = this.state.dishwasherToggle;
    this.setState({ dishwasherToggle: !temp });
  }
  handleDishwasherMust = () => {
    this.setState({ dishwasherToggle: false, dishwasherMust: true, dishwasherNice: false });
  }
  handleDishwasherNice = () => {
    this.setState({ dishwasherToggle: false, dishwasherMust: false, dishwasherNice: true });
  }
  handleDishwasherInitial = () => {
    this.setState({ dishwasherToggle: false, dishwasherMust: false, dishwasherNice: false });
  }

  // Balcony/Patio
  handleBalconyToggle = () => {
    let temp = this.state.balconyToggle;
    this.setState({ balconyToggle: !temp });
  }
  handleBalconyMust = () => {
    this.setState({ balconyToggle: false, balconyMust: true, balconyNice: false });
  }
  handleBalconyNice = () => {
    this.setState({ balconyToggle: false, balconyMust: false, balconyNice: true });
  }
  handleBalconyInitial = () => {
    this.setState({ balconyToggle: false, balconyMust: false, balconyNice: false });
  }

  // Parking
  handleParkingToggle = () => {
    let temp = this.state.balconyToggle;
    this.setState({ parkingToggle: !temp });
  }
  handleParkingMust = () => {
    this.setState({ parkingToggle: false, parkingMust: true, parkingNice: false });
  }
  handleParkingNice = () => {
    this.setState({ parkingToggle: false, parkingMust: false, parkingNice: true });
  }
  handleParkingInitial = () => {
    this.setState({ parkingToggle: false, parkingMust: false, parkingNice: false });
  }

  // Garage
  handleGarageToggle = () => {
    let temp = this.state.garageToggle;
    this.setState({ garageToggle: !temp });
  }
  handleGarageMust = () => {
    this.setState({ garageToggle: false, garageMust: true, garageNice: false });
  }
  handleGarageNice = () => {
    this.setState({ garageToggle: false, garageMust: false, garageNice: true });
  }
  handleGarageInitial = () => {
    this.setState({ garageToggle: false, garageMust: false, garageNice: false });
  }

  // Fitness center
  handleFitnessToggle = () => {
    let temp = this.state.fitnessToggle;
    this.setState({ fitnessToggle: !temp });
  }
  handleFitnessMust = () => {
    this.setState({ fitnessToggle: false, fitnessMust: true, fitnessNice: false });
  }
  handleFitnessNice = () => {
    this.setState({ fitnessToggle: false, fitnessMust: false, fitnessNice: true });
  }
  handleFitnessInitial = () => {
    this.setState({ fitnessToggle: false, fitnessMust: false, fitnessNice: false });
  }

  // Enclosed yard
  handleYardToggle = () => {
    let temp = this.state.yardToggle;
    this.setState({ yardToggle: !temp });
  }
  handleYardMust = () => {
    this.setState({ yardToggle: false, yardMust: true, yardNice: false });
  }
  handleYardNice = () => {
    this.setState({ yardToggle: false, yardMust: false, yardNice: true });
  }
  handleYardInitial = () => {
    this.setState({ yardToggle: false, yardMust: false, yardNice: false });
  }

  // Pets allowed
  handlePetToggle = () => {
    let temp = this.state.petToggle;
    this.setState({ petToggle: !temp });
  }
  handlePetMust = () => {
    this.setState({ petToggle: false, petMust: true, petNice: false });
  }
  handlePetNice = () => {
    this.setState({ petToggle: false, petMust: false, petNice: true });
  }
  handlePetInitial = () => {
    this.setState({ petToggle: false, petMust: false, petNice: false });
  }

  // Swimming pool
  handlePoolToggle = () => {
    let temp = this.state.poolToggle;
    this.setState({ poolToggle: !temp });
  }
  handlePoolMust = () => {
    this.setState({ poolToggle: false, poolMust: true, poolNice: false });
  }
  handlePoolNice = () => {
    this.setState({ poolToggle: false, poolMust: false, poolNice: true });
  }
  handlePoolInitial = () => {
    this.setState({ poolToggle: false, poolMust: false, poolNice: false });
  }

  render() {
    const {
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
    } = this.state;
    return (
      <div>
        {/* <img src="/testback-4.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

        <Head>
          <title>Unique Features</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
          <Navbar />
        </header>

        <main className={styles.main}>
          <Container className={utils.container}>
            <h1 className={utils.primary_title}>Unique Features</h1>
            <h2 className={utils.secondary_title}>
              Select the apartment features you want in and indicate the importance.
            </h2>

            <Form className={styles.form}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                {/* In-unit washer and dryer */}
                <div className={styles.btn_group}>
                  {!(inunitMust || inunitNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleInunitToggle}>In-unit washer and dryer</Button>
                  }

                  {(inunitMust || inunitNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>In-unit washer and dryer</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleInunitInitial}>
                        {inunitMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {inunitToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleInunitMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleInunitNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Washer & dryer connections */}
                <div className={styles.btn_group}>
                  {!(connectionMust || connectionNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleConnectionToggle}>Washer & dryer connections</Button>
                  }

                  {(connectionMust || connectionNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Washer & dryer connections</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleConnectionInitial}>
                        {connectionMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {connectionToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleConnectionMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleConnectionNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* On-site laundry */}
                <div className={styles.btn_group}>
                  {!(laundryMust || laundryNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleLaundryToggle}>On-site laundry</Button>
                  }

                  {(laundryMust || laundryNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>On-site laundry</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleLaundryInitial}>
                        {laundryMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {laundryToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleLaundryMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleLaundryNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Dishwasher */}
                <div className={styles.btn_group}>
                  {!(dishwasherMust || dishwasherNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleDishwasherToggle}>Dishwasher</Button>
                  }

                  {(dishwasherMust || dishwasherNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Dishwasher</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleDishwasherInitial}>
                        {dishwasherMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {dishwasherToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleDishwasherMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleDishwasherNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Balcony/Patio */}
                <div className={styles.btn_group}>
                  {!(balconyMust || balconyNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleBalconyToggle}>Balcony/Patio</Button>
                  }

                  {(balconyMust || balconyNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Balcony/Patio</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleBalconyInitial}>
                        {balconyMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {balconyToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleBalconyMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleBalconyNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Parking */}
                <div className={styles.btn_group}>
                  {!(parkingMust || parkingNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleParkingToggle}>Parking</Button>
                  }

                  {(parkingMust || parkingNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Parking</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleParkingInitial}>
                        {parkingMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {parkingToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleParkingMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleParkingNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Garage/Covered parking */}
                <div className={styles.btn_group}>
                  {!(garageMust || garageNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleGarageToggle}>Garage/Covered parking</Button>
                  }

                  {(garageMust || garageNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Garage/Covered parking</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleGarageInitial}>
                        {garageMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {garageToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleGarageMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleGarageNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Fitness center */}
                <div className={styles.btn_group}>
                  {!(fitnessMust || fitnessNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleFitnessToggle}>Fitness center</Button>
                  }

                  {(fitnessMust || fitnessNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Fitness center</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleFitnessInitial}>
                        {fitnessMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {fitnessToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleFitnessMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleFitnessNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Enclosed yard */}
                <div className={styles.btn_group}>
                  {!(yardMust || yardNice) &&
                    <Button className={styles.single_btn} block onClick={this.handleYardToggle}>Enclosed yard</Button>
                  }

                  {(yardMust || yardNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Enclosed yard</Button>
                      <Button className={styles.narrow_btn} onClick={this.handleYardInitial}>
                        {yardMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {yardToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handleYardMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handleYardNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Pets allowed */}
                <div className={styles.btn_group}>
                  {!(petMust || petNice) &&
                    <Button className={styles.single_btn} block onClick={this.handlePetToggle}>Pets allowed</Button>
                  }

                  {(petMust || petNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Pets allowed</Button>
                      <Button className={styles.narrow_btn} onClick={this.handlePetInitial}>
                        {petMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {petToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handlePetMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handlePetNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>

                {/* Swimming pool */}
                <div className={styles.btn_group}>
                  {!(poolMust || poolNice) &&
                    <Button className={styles.single_btn} block onClick={this.handlePoolToggle}>Swimming pool</Button>
                  }

                  {(poolMust || poolNice) &&
                    <ButtonGroup className={styles.double_btn} block>
                      <Button className={styles.wide_btn}>Swimming pool</Button>
                      <Button className={styles.narrow_btn} onClick={this.handlePoolInitial}>
                        {poolMust ? "Must to have" : "Nice to have"}
                        <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                      </Button>
                    </ButtonGroup>
                  }

                  {poolToggle &&
                    <ButtonGroup className={styles.twin_btn}>
                      <Button className={styles.left_btn} onClick={this.handlePoolMust}>Must have</Button>
                      <Button className={styles.right_btn} onClick={this.handlePoolNice}>Nice to have</Button>
                    </ButtonGroup>
                  }
                </div>
              </div>
            </Form>

            <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
              <Link href="#">
                <div className={styles.skip_btn}>
                  <MyButton width="100%" height="50px" margin="0">SKIP THIS STEP</MyButton>
                </div>
              </Link>

              <Link href="/budget">
                <div className={styles.next_btn}>
                  <MyButton blue width="100%" height="50px" margin="0">NEXT</MyButton>
                </div>
              </Link>
            </div>

          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}