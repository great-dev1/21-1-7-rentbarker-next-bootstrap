import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import styles from './Navbar.module.css'

export default class Navmenu extends React.Component {
  state = {
    logged: false,
    firstName: '',
  }

  componentDidMount() {
    const logged = localStorage.getItem('logged') === 'true';
    const firstName = logged ? localStorage.getItem('fullName').split(' ')[0] : '';
    this.setState({ logged, firstName });
  }

  render() {
    const { logged, firstName } = this.state;

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
              {logged ? (
                <Nav>
                  <Nav.Link className={styles.link} href="#">Hello, {firstName}</Nav.Link>
                </Nav>
              ) : (
                  <Nav>
                    <Nav.Link className={styles.link} href="/login">Login</Nav.Link>
                    <Nav.Link className={styles.link} href="/signup">Signup</Nav.Link>
                  </Nav>
                )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}