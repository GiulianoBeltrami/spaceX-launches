import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';

const { Brand, Toggle, Collapse } = Navbar;
const { Link ,Item} = Nav;

const NavigationBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3" style={{ fontSize: "1.2rem" }} >
                <Container fluid>
                    <Brand href="/">
                        <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{'   '}
                        SpaceX launches
                    </Brand>

                    <Toggle aria-controls="responsive-navbar-nav" />
                    <Collapse id="responsive-navbar-nav" className="justify-content-end" >
                        <Nav id="navbar-elements" >
                            <Item>
                                <Link href="/">Home</Link>
                            </Item>
                            <Item>
                                <Link href="/launches">Launches</Link>
                            </Item>
                            <Item>
                                <Link href="/news">News</Link>
                            </Item>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
