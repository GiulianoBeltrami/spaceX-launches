import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NoteIcon from '@mui/icons-material/Note';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import millify from 'millify';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import helper from '../helpers/HomepageHelper';
import { useGetSpacexInfosQuery } from '../services/spacexAPI';
import Loader from './Loader';

const { Title, Paragraph } = helper;

const Homepage = () => {
    const { data, isFetching } = useGetSpacexInfosQuery();

    if (isFetching) {
        return <Loader />
    }
    return (
        <>
            <Row className="pt-3 ">
                <Col>
                    <h3>SpaceX project</h3>
                    <p className="lead">
                        This is an unofficial project, designed to show lauches from spaceX company along with some other company informations and news.
                        All the informations come from a public api.
                        <br />Source: <a className="text-dark" href="https://github.com/r-spacex/SpaceX-API">Api</a>
                        <br />Created by: Giuliano Vigna Beltrami <br />
                        <a className="text-dark" href="https://github.com/GiulianoBeltrami">Github profile</a>
                    </p>
                </Col>
            </Row>

            <Row className="align-middle pt-3 ">
                <Row>
                    <Col>
                        <h3 className="d-inline">Company informations</h3>
                        <RocketLaunchIcon className="home-icons-size pb-1" />
                    </Col>
                </Row>
                <Row>
                    {renderCompanyInformations(data)}
                </Row>
            </Row>

            <Row className="align-middle pt-3">
                <Row>
                    <Col>
                        <h3 className="d-inline">Location</h3>
                        <LocationOnIcon className="home-icons-size pb-1" />
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        {Paragraph().render(data?.headquarters?.address + ',' + data?.headquarters?.city + ',' + data?.headquarters?.state)}
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <iframe src="https://maps.google.com/maps?q=33.920996821351046,%20-118.3279143676075&t=&z=13&ie=UTF8&iwloc=&output=embed" width="550" height="250" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </Col>
                </Row>
            </Row>

            <Row className="align-middle pt-3 ">
                <Col>
                    <h3 className="d-inline">Summary</h3>
                    <NoteIcon className="home-icons-size pb-1" />
                </Col>
            </Row>

            <Row className="align-middle pt-3 ">
                <Col>
                    <h3 className="d-inline">Links</h3>
                    <LinkIcon className="home-icons-size pb-1" />
                </Col>
            </Row>

            <Row className="align-middle pt-3 ">
                <Col>
                    <h3 className="d-inline">News</h3>
                    <NewspaperIcon className="home-icons-size pb-1" />
                </Col>
            </Row>
        </>
    )
}

const renderCompanyInformations = (companyInfos) => {
    return (
        <>
            <Col className="col-4">
                {Title().render("Name")}
                {Paragraph().render(companyInfos?.name)}
                <br />
                {Title().render("Founder")}
                {Paragraph().renderhWithAnchorToWikipedia(companyInfos?.founder)}
                <br />
                {Title().render("Founded")}
                {Paragraph().render(companyInfos?.founded)}
                <br />
                {Title().render("CEO")}
                {Paragraph().renderhWithAnchorToWikipedia(companyInfos?.ceo)}
            </Col>
            <Col className="col-4">
                {Title().render("CTO")}
                {Paragraph().renderhWithAnchorToWikipedia(companyInfos?.cto)}
                <br />
                {Title().render("COO")}
                {Paragraph().renderhWithAnchorToWikipedia(companyInfos?.coo)}
                <br />
                {Title().render("Employees")}
                {Paragraph().render(millify(companyInfos?.employees))}
                <br />
                {Title().render("Valuation")}
                {Paragraph().render(millify(companyInfos?.valuation))}
            </Col>
        </>
    );
}

export default Homepage;
