import Head from 'next/head'
import { Container, Form, Button } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Bed.module.css'

export default function Bed() {
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
                <Button className={styles.box}>0</Button>
                <Button className={styles.box}>1</Button>
                <Button className={styles.box}>2</Button>
              </div>
            </div>

            <h2 className={styles.secondary_title}>Bedrooms</h2>
            <div className={styles.box_group}>
              <div className="d-flex justify-content-between justify-content-md-center flex-wrap">
                <Button className={styles.box}>Studio</Button>
                <Button className={styles.box}>1</Button>
                <Button className={styles.box}>2</Button>
                <Button className={styles.box}>3+</Button>
              </div>
            </div>

            <h2 className={styles.secondary_title}>Bathrooms</h2>
            <div className={styles.box_group}>
              <div className="d-flex justify-content-between justify-content-md-center flex-wrap">
                <Button className={styles.box}>1</Button>
                <Button className={styles.box}>2</Button>
                <Button className={styles.box}>3+</Button>
              </div>
            </div>

            <div className={styles.btn_group}>
              <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                <MyButton width="150px" height="50px" margin="12px">BACK</MyButton>
                <MyButton blue width="150px" height="50px" margin="12px">NEXT</MyButton>
              </div>
            </div>
          </Form>
        </Container>
      </main>

      <Footer />
    </div>
  )
}