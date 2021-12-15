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
            {/* col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3*/}
            <Row className={renderRowClass()}>
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

            <Row className={renderRowClass()}>
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

            <Row className={renderRowClass()}>
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

                <Row className="justify-content-center">
                    <Col className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8"> 
                        <div className="ratio ratio-16x9">
                            <iframe src="https://maps.google.com/maps?q=33.920996821351046,%20-118.3279143676075&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
                        </div>
                    </Col>
                </Row>
            </Row>

            <Row className={renderRowClass()}>
                <Col>
                    <h3 className="d-inline">Summary</h3>
                    <NoteIcon className="home-icons-size pb-1" />
                </Col>
            </Row>

            <Row className={renderRowClass()}>
                <Col>
                    <h3 className="d-inline">Links</h3>
                    <LinkIcon className="home-icons-size pb-1" />
                </Col>
            </Row>

            <Row className={renderRowClass()}>
                <Col>
                    <h3 className="d-inline">News</h3>
                    <NewspaperIcon className="home-icons-size pb-1" />
                </Col>
            </Row>
        </>
    )
}

const renderRowClass = () => {
    return "align-middle pt-3 px-sm-5 mx-sm-5 px-md-5 mx-md-5 px-lg-6 mx-lg-6";
}

const renderCompanyInformations = (companyInfos) => {
    const renderColClass = () => "col-xs-6 col-sm-3 col-md-6 col-lg-4 col-xl-2";

    return (
        <>
            {/* col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3*/}
            <Col className={renderColClass()}>
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
            <Col className={renderColClass()}>
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
