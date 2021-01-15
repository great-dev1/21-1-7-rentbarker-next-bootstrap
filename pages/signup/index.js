import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Button } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Signup.module.css'

export default class Signup extends React.Component {
  state = {
    fullName: '',
  }

  handleChange = () => {
    this.setState({ fullName: e.target.value });
  }

  handleSubmit = () => {
    const { fullName } = this.state;
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('logged', true);
  }

  componentDidMount() {
    const fullName = localStorage.getItem('fullName') !== null ? localStorage.getItem('fullName') : 'Amanda Norman';
    this.setState({ fullName });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Sign up</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
          <Container className={utils.container}>
            <h1 className={styles.primary_title}>Create Account</h1>

            <Form className={styles.form}>
              <Form.Control
                className={styles.input_box}
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange}
                type="text"
                placeholder="Full Name"
              />
              <Form.Control className={styles.input_box} type="email" placeholder="Email" />
              <Form.Control className={styles.input_box} type="password" placeholder="Password" />

              <div className={styles.check_block}>
                <h3 className={styles.check_title}>I'm a landlord or property professional</h3>
                <Form.Check className={styles.check_item} type="checkbox" inline />Owner<br />
                <Form.Check className={styles.check_item} type="checkbox" inline />Property Manager<br />
                <Form.Check className={styles.check_item} type="checkbox" inline />Agent<br />
                <hr className={styles.split_line} />
                <Form.Check className={styles.check_item} type="checkbox" inline />I agree to{' '}
                <Link href="#">
                  <a><u>Terms & Conditions</u></a>
                </Link>
              </div>

              <Link href="/welcome">
                <Button className={utils.submit_btn} onClick={this.handleSubmit}>CREATE ACCOUNT</Button>
              </Link>
              <p className={styles.mid_text}>Or log in with:</p>
              <MyButton width="100%" height="45px" margin="0">GOOGLE</MyButton>
              <div className={styles.split_space}></div>
              <MyButton width="100%" height="45px" margin="0">FACEBOOK</MyButton>
            </Form>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}