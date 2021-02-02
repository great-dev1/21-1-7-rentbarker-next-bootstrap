import Link from 'next/link'
import { Container } from 'react-bootstrap'

import Footer from '../../components/Footer'
import MyButton from '../../components/MyButton'
import utils from '../../styles/utils.module.css'
import styles from './Accept.module.css'

export default function Welcome({ children }) {
  return (
    <div>
      {/* <img src="/testback-8.png" style={{ position: "absolute", "zIndex": "99", top: "-250px", width: "100%", opacity: "0.5" }} /> */}

      <Container className={utils.container}>
        <main className={styles.main}>
          <p className={styles.detail}>
            You may only accept one offer. Upon accecpting, all other offers will be voided and the
            landlord will contact you with all of the necessary documents to move forward with the
            leasing process. Do you agress to release your contact information, such as your name,
            phone number, and email to this landlord?
          </p>

          <div className={styles.btn_group}>
            <Link href="/offer/review">
              <MyButton blue width="285px" height="45px" margin="10px">AGREE & ACCEPT OFFER</MyButton>
            </Link>

            <Link href="/offer">
              <MyButton width="285px" height="45px" margin="10px">BACK TO OFFER</MyButton>
            </Link>
          </div>
        </main>
      </Container>

      <Footer />
    </div>
  )
}