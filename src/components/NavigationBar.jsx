import React from 'react'
import { Container, Navbar, NavDropdown, Nav, Row, Col } from 'react-bootstrap'
import logo from '../images/logo.png'
const { Brand, Toggle, Collapse } = Navbar;
const { Link } = Nav;

const NavigationBar = () => {
    return (
        <>
            <Navbar style={{height:"4rem"}} collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container fluid>
                    <Brand href="/">
                        <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{'   '}
                        SpaceX launches
                    </Brand>

                    <Toggle aria-controls="responsive-navbar-nav" />
                    <Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto justify-content-end">
                            <Link href="/">Home</Link>
                            <Link href="/launches">Launches</Link>
                            <Link href="/news">News</Link>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar

// <Navbar bg="dark" variant="dark">
// <Container fluid>
//     <Brand href="/">
//         <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>{'   '}
//         SpaceX launches
//     </Brand>

//     <Toggle aria-controls="responsive-navbar-nav" />

//     <Collapse  id="responsive-navbar-nav">
//     <Nav className="me-auto">
//         <Link href="/">Home</Link>
//         <Link href="/launches">Launches</Link>
//         <Link href="/news">News</Link>
//     </Nav>
//     </Collapse>
// </Container>
// </Navbar>