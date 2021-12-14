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
    const { data, isFetching } = useGetSpacexInfosQuery();

    if (isFetching) {
        return <Loader />
    }

    const renderParagraphWithWikipediaAnchorTo = (elementName) => {
        return (
            <p className="lead d-inline">
                <a target="_blank" className="text-dark" href={`https://pt.wikipedia.org/wiki/${elementName}`}>
                    {elementName}
                </a>
            </p>
        )
    }

    const renderTitle = (titleName) => {
        return (
            <h5 className="text-capitalize d-inline">{titleName}: </h5>
        );
    }

    const renderParagraph = (paragraphContent) => {
        return (
            <p className="lead d-inline">{paragraphContent}</p>
        );
    }

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
                <Row>
                    <Col>
                        <h2 className="d-inline">Company informations</h2>
                        <RocketLaunchIcon className="home-icons-size pb-1" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderTitle('Name')}
                        {renderParagraph(data?.name)}
                        <br />
                        {renderTitle('Founder')}
                        {renderParagraphWithWikipediaAnchorTo(data?.founder)}
                        <br />
                        <h5 className="text-capitalize d-inline">Founded: </h5>
                        <p className="lead d-inline">{data?.founded}</p>
                        <br />
                        <h5 className="text-capitalize d-inline">CEO: </h5>
                        {renderParagraphWithWikipediaAnchorTo(data?.ceo)}
                    </Col>
                    <Col>
                        <h5 className="text-capitalize d-inline">CTO: </h5>
                        {renderParagraphWithWikipediaAnchorTo(data?.cto)}
                        <br />
                        <h5 className="text-capitalize d-inline">COO: </h5>
                        {renderParagraphWithWikipediaAnchorTo(data?.coo)}
                        <br />
                        <h5 className="text-capitalize d-inline">Employees: </h5>
                        <p className="lead d-inline">{millify(data?.employees)}</p>
                        <br />
                        <h5 className="text-capitalize d-inline">Valuation: </h5>
                        <p className="lead d-inline">{millify(data?.valuation)}</p>
                    </Col>
                </Row>

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
