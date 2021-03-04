import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

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
            <img src="/navbar/menu.png" alt="menu" />
          </Navbar.Toggle>

          <Navbar.Brand className={styles.brand} href="/">
            <img src="/navbar/logo.png" alt="logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              {logged ? (
                <Nav>
                  <NavDropdown className={styles.link} title={`Hello, ${firstName}`}>
                    <NavDropdown.Item className={styles.nav_item} href="#">Offers(2)</NavDropdown.Item>
                    <NavDropdown.Item className={styles.nav_item} href="/message">Inbox(3)</NavDropdown.Item>
                    <NavDropdown.Item className={styles.nav_item} href="#">Sign out</NavDropdown.Item>
                  </NavDropdown>
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