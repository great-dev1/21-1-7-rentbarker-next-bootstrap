import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Form, Button } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Credit.module.css'

export default class Credit extends React.Component {
  state = {
    useGuarantor: false,
    myCredit: '',
    roommateCredit: '',
    guarantorCredit: '',
  }

  handleCheck = (e) => {
    const value = e.target.checked;
    this.setState({ useGuarantor: value });
  }

  handleChange = (variable, value) => () => {
    this.setState({
      [variable]: value
    });
  }

  handleSubmit = () => {
    const { useGuarantor, myCredit, roommateCredit, guarantorCredit } = this.state;

    localStorage.setItem('useGuarantor', useGuarantor);
    localStorage.setItem('myCredit', myCredit);
    localStorage.setItem('roommateCredit', roommateCredit);
    localStorage.setItem('guarantorCredit', guarantorCredit);
  }

  componentDidMount() {
    const useGuarantor = localStorage.getItem('useGuarantor') === 'true';
    const myCredit = localStorage.getItem('myCredit') !== null ? localStorage.getItem('myCredit') : '';
    const roommateCredit = localStorage.getItem('roommateCredit') !== null ? localStorage.getItem('roommateCredit') : '';
    const guarantorCredit = localStorage.getItem('guarantorCredit') !== null ? localStorage.getItem('guarantorCredit') : '';

    this.setState({ useGuarantor, myCredit, roommateCredit, guarantorCredit });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { useGuarantor, myCredit, roommateCredit, guarantorCredit } = this.state;

    return (
      <div>
        {/* <img src="/testback-6.png" style={{ position: "absolute", "zIndex": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

        <Head>
          <title>Credit Score</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
          <Navbar />
        </header>

        <main className={styles.main}>
          <Container className={utils.container}>
            <h1 className={utils.primary_title}>Credit Score</h1>
            <h2 className={utils.secondary_title}>
              Please estimate your current credti score. This credit score will be verified.
            </h2>

            <Form>
              <label>
                <Form.Check
                  className="mr-1"
                  name="useGuarantor"
                  checked={useGuarantor}
                  onChange={this.handleCheck}
                  type="checkbox"
                  inline
                />
                I am using a guarantor, and estimating their credit score.
              </label>

              <div className={styles.circle_group}>
                <div className="d-flex justify-content-center flex-wrap">
                  <Button
                    className={myCredit === 'Excellent 720+' ? styles.circle_active : styles.circle_inactive}
                    onClick={this.handleChange('myCredit', 'Excellent 720+')}
                  >
                    Excellent<br />
                    720+
                  </Button>

                  <Button
                    className={myCredit === 'Good 680-719' ? styles.circle_active : styles.circle_inactive}
                    onClick={this.handleChange('myCredit', 'Good 680-719')}
                  >
                    Good<br />
                    680-719
                  </Button>

                  <Button
                    className={myCredit === 'Fair 640-679' ? styles.circle_active : styles.circle_inactive}
                    onClick={this.handleChange('myCredit', 'Fair 640-679')}
                  >
                    Fair<br />
                    640-679
                  </Button>

                  <Button
                    className={myCredit === 'Poor 639-' ? styles.circle_active : styles.circle_inactive}
                    onClick={this.handleChange('myCredit', 'Poor 639-')}
                  >
                    Poor<br />
                    639-
                  </Button>
                </div>
              </div>

              {useGuarantor && (
                <div>
                  <div className={styles.circle_group}>
                    <h2 className={styles.credit_title}>
                      Please estimate your roommate's credit score.
                    </h2>

                    <div className="d-flex justify-content-center flex-wrap">
                      <Button
                        className={roommateCredit === 'Excellent 720+' ? styles.circle_active : styles.circle_inactive}
                        onClick={this.handleChange('roommateCredit', 'Excellent 720+')}
                      >
                        Excellent<br />
                        720+
                      </Button>

                      <Button
                        className={roommateCredit === 'Good 680-719' ? styles.circle_active : styles.circle_inactive}
                        onClick={this.handleChange('roommateCredit', 'Good 680-719')}
                      >
                        Good<br />
                        680-719
                      </Button>

                      <Button
                        className={roommateCredit === 'Fair 640-679' ? styles.circle_active : styles.circle_inactive}
                        onClick={this.handleChange('roommateCredit', 'Fair 640-679')}
                      >
                        Fair<br />
                        640-679
                      </Button>

                      <Button
                        className={roommateCredit === 'Poor 639-' ? styles.circle_active : styles.circle_inactive}
                        onClick={this.handleChange('roommateCredit', 'Poor 639-')}
                      >
                        Poor<br />
                        639-
                      </Button>
                    </div>
                  </div>

                  <div className={styles.circle_group}>
                    <h2 className={styles.credit_title}>
                      Please estimate your roommate's credit score.
                    </h2>

                    <div className="d-flex justify-content-center flex-wrap">
                      <Button
                        className={guarantorCredit === 'Excellent 720+' ? styles.circle_active : styles.circle_inactive}
                        onClick={this.handleChange('guarantorCredit', 'Excellent 720+')}
                      >
                        Excellent<br />
                        720+
                      </Button>

                      <Button
                        className={guarantorCredit === 'Good 680-719' ? styles.circle_active : styles.circle_inactive}
                        onClick={this.handleChange('guarantorCredit', 'Good 680-719')}
                      >
                        Good<br />
                        680-719
                      </Button>

                      <Button
                        className={guarantorCredit === 'Fair 640-679' ? styles.circle_active : styles.circle_inactive}
                        onClick={this.handleChange('guarantorCredit', 'Fair 640-679')}
                      >
                        Fair<br />
                        640-679
                      </Button>

                      <Button
                        className={guarantorCredit === 'Poor 639-' ? styles.circle_active : styles.circle_inactive}
                        onClick={this.handleChange('guarantorCredit', 'Poor 639-')}
                      >
                        Poor<br />
                        639-
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                <Link href="/budget">
                  <div className={styles.back_btn}>
                    <MyButton width="100%" height="50px" margin="0">BACK</MyButton>
                  </div>
                </Link>

                <Link href="/signup">
                  <div className={styles.save_btn} onClick={this.handleSubmit}>
                    <Button className={utils.submit_btn} onClick={this.handleSubmit}>SAVE & CREATE ACCOUNT</Button>
                  </div>
                </Link>
              </div>
            </Form>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}