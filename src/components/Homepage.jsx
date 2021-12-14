import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import millify from 'millify';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NoteIcon from '@mui/icons-material/Note';
import LinkIcon from '@mui/icons-material/Link';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useGetSpacexInfosQuery } from '../services/spacexAPI';
import Loader from './Loader';

const { Link } = Nav;

const Homepage = () => {
    const {data,isFetching} = useGetSpacexInfosQuery();
    
    if(isFetching) {
        return <Loader />
    }
    console.log(data);

    return (
        <Container fluid>
            <Row className="pt-3">
                <Col>
                    <h2>SpaceX project</h2>
                    <p className="lead">
                        This is an unofficial project, designed to show lauches from spaceX company along with some other company informations and news.
                        All the informations come from a public api.
                        <br />Source: <a className="text-dark" href="https://github.com/r-spacex/SpaceX-API">Api</a>
                        <br />Created by: Giuliano Vigna Beltrami <br />
                        <a className="text-dark" href="https://github.com/GiulianoBeltrami">Github profile</a>
                    </p>
                </Col>
            </Row>

            <Row className="align-middle ">
                <Col>
                    <h2 className="d-inline">Company informations</h2>
                    <RocketLaunchIcon className="home-icons-size pb-1" />
                </Col>
                <div class="w-100"></div>
                <Col>
                    <h5 className="text-capitalize d-inline">Name: </h5>
                    <p className="lead d-inline">{data?.name}</p>
                </Col>
            </Row>

            <Row className="align-middle">
                <Col>
                    <h2 className="d-inline">Location</h2>
                    <LocationOnIcon className="home-icons-size pb-1" />
                </Col>
            </Row>

            <Row className="align-middle">
                <Col>
                    <h2 className="d-inline">Summary</h2>
                    <NoteIcon className="home-icons-size pb-1" />
                </Col>
            </Row>

            <Row className="align-middle">
                <Col>
                    <h2 className="d-inline">Links</h2>
                    <LinkIcon className="home-icons-size pb-1" />
                </Col>
            </Row>

            <Row className="align-middle">
                <Col>
                    <h2 className="d-inline">News</h2>
                    <NewspaperIcon className="home-icons-size pb-1" />
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage
