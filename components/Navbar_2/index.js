// This is a navbar for landing pages

import { Navbar, Nav } from 'react-bootstrap'

import styles from './Navbar_2.module.css'

export default function Navbar_2() {
  return (
    <div className={styles.container}>
      <Navbar className={styles.navbar} collapseOnSelect expand="lg" variant="light">
        <Navbar.Toggle className={styles.toggle} aria-controls="responsive-navbar-nav">
          <img src="/navbar/menu.png" alt="menu" />
        </Navbar.Toggle>

        <Navbar.Brand className={styles.brand} href="/">
          <img src="/navbar/logo.png" alt="logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className={styles.nav_links}>
            <Nav.Link className={styles.nav_link} href="/landlord">Landlords</Nav.Link>
            <Nav.Link className={styles.nav_link} href="/faq">FAQs</Nav.Link>
            <Nav.Link className={styles.nav_link} href="/contact">Contact Us</Nav.Link>
          </Nav>

          <Nav className={styles.sign_links}>
            <Nav.Link className={styles.signin_link} href="/login">Sign In</Nav.Link>
            <Nav.Link className={styles.signup_btn} href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}