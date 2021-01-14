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

export default function Featrue() {
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
              <Button className={styles.single_btn} block>In-unit washer and dryer</Button>
              <Button className={styles.single_btn} block>Washer & dryer connections</Button>

              <div className={styles.btn_group}>
                <Button className={styles.option_btn} block>On-site laundry</Button>
                <ButtonGroup className={styles.twin_btn}>
                  <Button className={styles.left_btn}>Must have</Button>
                  <Button className={styles.right_btn}>Nice to have</Button>
                </ButtonGroup>
              </div>

              <ButtonGroup className={styles.double_btn} block>
                <Button className={styles.wide_btn}>Dishwasher</Button>
                <Button className={styles.narrow_btn}>
                  Nice to have
                  <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                </Button>
              </ButtonGroup>

              <Button className={styles.single_btn} block>Balcony/Patio</Button>

              <ButtonGroup className={styles.double_btn} block>
                <Button className={styles.wide_btn}>Parking</Button>
                <Button className={styles.narrow_btn}>
                  Must have
                  <FontAwesomeIcon icon={faCheck} className={styles.check_icon} />
                </Button>
              </ButtonGroup>

              <Button className={styles.single_btn} block>Garage/covered parking</Button>
              <Button className={styles.single_btn} block>Fitness center</Button>
              <Button className={styles.single_btn} block>Enclosed yard</Button>
              <Button className={styles.single_btn} block>Pets allowed</Button>
              <Button className={styles.single_btn} block>Swimming pool</Button>
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