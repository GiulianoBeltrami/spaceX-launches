import React from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

const { Link, Item } = Nav;

const Footer = () => {
    return (
        <>
            <Container fluid className="bg-dark footer-text">
                <Row className="text-center" style={{ fontSize: "0.8rem" }}>
                    <Col>
                        SpaceX launches <br />
                        All rights reserved.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav className="justify-content-center">
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer

{/* <Nav id="footer-elements"  >
<Item>
    <Link href="/">Home</Link>
</Item>
<Item>
    <Link href="/launches">Launches</Link>
</Item>
<Item>
    <Link href="/news">News</Link>
</Item>
</Nav> */}