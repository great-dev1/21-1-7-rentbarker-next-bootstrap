import Head from 'next/head'
import { Container, Form } from 'react-bootstrap'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      {/* <img src="/testback-7.png" alt="" style={{ position: "absolute", "z-index": "99", top: "0", width: "100%", opacity: "0.5" }} /> */}

      <Head>
        <title>Log in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Container className={utils.container}>
          <h1 className={styles.primary_title}>Log In</h1>

          <Form className={styles.form}>
            <Form.Control className={styles.input_box} type="text" placeholder="Full Name" />
            <Form.Control className={styles.input_box} type="email" placeholder="Email" />
            <MyButton green={true} width="100%" height="45px" margin="0">LOG IN</MyButton>
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