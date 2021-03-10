import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import styles from './Navbar.module.css'

export default class Navmenu extends React.Component {
  state = {
    logged: false,
    name: '',
  }

  componentDidMount() {
    const logged = localStorage.getItem('logged') === 'true';
    const name = logged ? localStorage.getItem('fullName').split(' ')[0] + ' ' + localStorage.getItem('fullName').split(' ')[1][0] + '.' : '';
    this.setState({ logged, name });
  }

  render() {
    const { logged, name } = this.state;

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
                  <img className="d-none d-md-inline" src="/navbar/avatar.png" alt="avatar" />
                  <NavDropdown alignRight className={styles.link} title={name}>
                    <NavDropdown.Item className={styles.dropdown_item} href="#">Offers(2)</NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdown_item} href="/message">Inbox(3)</NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdown_item} href="#">Sign out</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                  <Nav>
                    <Nav.Link className={styles.link} href="/login">
                      <img className="d-none d-md-inline mr-2" src="/navbar/user-icon.png" alt="user" />
                        SIGN IN
                      </Nav.Link>
                  </Nav>
                )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}