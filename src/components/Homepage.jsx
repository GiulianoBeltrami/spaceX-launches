import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import millify from 'millify';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NoteIcon from '@mui/icons-material/Note';
import LinkIcon from '@mui/icons-material/Link';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const { Link } = Nav;

const Homepage = () => {
    return (
        // Adicionar icones ao lado(esquerdo) de spacex, company ..
        <Container fluid>
            <Row className="pt-3">
                <Col>
                    <h2>SpaceX project</h2>
                    <p class="lead">
                        This is an unofficial project, designed to show lauches from spaceX company along with some other company informations and news.
                        All the informations come from a public api.
                        <br />Source: <a className="text-dark" href="https://github.com/r-spacex/SpaceX-API">Api</a>
                        <br />Created by: Giuliano Vigna Beltrami <br />
                        <a className="text-dark" href="https://github.com/GiulianoBeltrami">Github profile</a>
                    </p>
                </Col>
            </Row>

            <Row className="align-middle">
                <Col>
                    <h2 className="d-inline">Company informations</h2>
                    <RocketLaunchIcon className="home-icons-size pb-1" />
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
