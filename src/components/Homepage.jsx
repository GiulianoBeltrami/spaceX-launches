import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import millify from 'millify';

const { Link } = Nav;

const Homepage = () => {
    return (
        <Container fluid>
            <Row className="pt-3">
                <Col>
                    <h2>SpaceX project</h2>
                    <p>
                        This is an unofficial project, designed to show lauches from spaceX company along with some other company informations and news.
                        All the informations come from a public api.
                        <br />Source: <a className="text-dark" href="https://github.com/r-spacex/SpaceX-API">Api</a>
                        <br />Created by: Giuliano Vigna Beltrami <br />
                        <a className="text-dark" href="https://github.com/GiulianoBeltrami">Github profile</a>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Company informations</h2>
                </Col>
            </Row>
            <Row>
                <h2>Location</h2>
            </Row>
            <Row>
                <h2>Summary</h2>
            </Row>
            <Row>
                <h2>Links</h2>
            </Row>
            <Row>
                <h2>News</h2>
            </Row>
        </Container>
    )
}

export default Homepage
