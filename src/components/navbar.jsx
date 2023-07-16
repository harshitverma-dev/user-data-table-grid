import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar className="bg-body-tertiary shadow-sm py-3">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://react-bootstrap.netlify.app/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar
