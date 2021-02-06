import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Button } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Bed.module.css'

export default class Bed extends React.Component {
  state = {
    roommateNum: '',
    bedroomNum: '',
    bathroomNum: '',
  }

  handleChange = (variable, value) => () => {
    this.setState({
      [variable]: value
    });
  }

  handleSubmit = () => {
    const { roommateNum, bedroomNum, bathroomNum } = this.state;

    localStorage.setItem('roommateNum', roommateNum);
    localStorage.setItem('bedroomNum', bedroomNum);
    localStorage.setItem('bathroomNum', bathroomNum);
  }

  componentDidMount() {
    const roommateNum = localStorage.getItem('roommateNum') !== null ? localStorage.getItem('roommateNum') : '';
    const bedroomNum = localStorage.getItem('bedroomNum') !== null ? localStorage.getItem('bedroomNum') : '';
    const bathroomNum = localStorage.getItem('bathroomNum') !== null ? localStorage.getItem('bathroomNum') : '';

    this.setState({ roommateNum, bedroomNum, bathroomNum });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { roommateNum, bedroomNum, bathroomNum } = this.state;

    return (
      <div>
        {/* <img src="/testback-3.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

        <Head>
          <title>Roommates, Beds and Baths</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
          <Navbar />
        </header>

        <main className={styles.main}>
          <Container className={utils.container}>
            <h1 className={styles.primary_title}>Roommates, Beds, and Baths</h1>

            <Form>
              <h2 className={styles.secondary_title}>Roomates</h2>
              <div className={styles.box_group}>
                <div className="d-flex justify-content-between justify-content-md-center flex-wrap">
                  <Button className={roommateNum === '0' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('roommateNum', '0')}>0</Button>
                  <Button className={roommateNum === '1' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('roommateNum', '1')}>1</Button>
                  <Button className={roommateNum === '2' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('roommateNum', '2')}>2</Button>
                </div>
              </div>

              <h2 className={styles.secondary_title}>Bedrooms</h2>
              <div className={styles.box_group}>
                <div className="d-flex justify-content-between justify-content-md-center flex-wrap">
                  <Button className={bedroomNum === 'studio' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('bedroomNum', 'studio')}>Studio</Button>
                  <Button className={bedroomNum === '1' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('bedroomNum', '1')}>1</Button>
                  <Button className={bedroomNum === '2' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('bedroomNum', '2')}>2</Button>
                  <Button className={bedroomNum === '3+' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('bedroomNum', '3+')}>3+</Button>
                </div>
              </div>

              <h2 className={styles.secondary_title}>Bathrooms</h2>
              <div className={styles.box_group}>
                <div className="d-flex justify-content-between justify-content-md-center flex-wrap">
                  <Button className={bathroomNum === '1' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('bathroomNum', '1')}>1</Button>
                  <Button className={bathroomNum === '2' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('bathroomNum', '2')}>2</Button>
                  <Button className={bathroomNum === '3+' ? styles.box_active : styles.box_inactive} onClick={this.handleChange('bathroomNum', '3+')}>3+</Button>
                </div>
              </div>

              <div className={styles.btn_group}>
                <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                  <Link href="/property">
                    <a><MyButton width="150px" height="50px" margin="12px">BACK</MyButton></a>
                  </Link>

                  <Link href="/feature">
                    <a onClick={this.handleSubmit}><MyButton blue width="150px" height="50px" margin="12px">NEXT</MyButton></a>
                  </Link>
                </div>
              </div>
            </Form>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}