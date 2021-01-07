import { Navbar, Nav } from 'react-bootstrap'

import styles from './Navbar.module.css'

export default function Navmenu() {
  return (
    <div>
      <Navbar className={styles.navbar} collapseOnSelect expand="md" variant="light">
        <Navbar.Toggle className={styles.toggle} aria-controls="responsive-navbar-nav">
          <img src="/navbar/navbar-toggler.png" alt="navbar toggler" />
        </Navbar.Toggle>

        <Navbar.Brand className={styles.brand} href="/">RentBarker</Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className={styles.link} href="/login">Login</Nav.Link>
            <Nav.Link className={styles.link} href="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}