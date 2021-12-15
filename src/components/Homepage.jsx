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

const { Title, Paragraph, Anchor } = helper;

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
                    {Title().renderH3("SpaceX project")}
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
                        {Title().renderH3("Company informations")}
                        <RocketLaunchIcon color={iconColor()}  className="home-icons-size pb-1" />
                    </Col>
                </Row>
                <Row>
                    {renderCompanyInformations(data)}
                </Row>
            </Row>

            <Row className={renderRowClass()}>
                <Row>
                    <Col>
                        {Title().renderH3("Location")}
                        <LocationOnIcon color={iconColor()} className="home-icons-size pb-1" />
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
                <Row>
                    <Col>
                        {Title().renderH3("Summary")}
                        <NoteIcon color={iconColor()} className="home-icons-size pb-1" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {Paragraph().render(data?.summary)}
                    </Col>
                </Row>
            </Row>

            <Row className={renderRowClass()}>
                <Row>
                    <Col>
                        {Title().renderH3("Links")}
                        <LinkIcon color={iconColor()} className="home-icons-size pb-1" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {Title().renderH6('SpaceX website: ')} {Anchor().renderToCustomAnchor(data?.links?.website, data?.links?.website)}
                        <br />
                        {Title().renderH6('Flickr: ')} {Anchor().renderToCustomAnchor(data?.links?.flickr, data?.links?.flickr)}
                        <br />
                        {Title().renderH6('Twitter: ')} {Anchor().renderToCustomAnchor(data?.links?.twitter, data?.links?.twitter)}
                        <br />
                        {Title().renderH6('Elon twitter: ')} {Anchor().renderToCustomAnchor(data?.links?.elon_twitter, data?.links?.elon_twitter)}
                        <br />
                    </Col>
                </Row>
            </Row>

            <Row className={renderRowClass()}>
                <Col>
                    {Title().renderH3("News")}
                    <NewspaperIcon color={iconColor()} className="home-icons-size pb-1" />
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
                {Title().renderH6("Name: ")}
                {Paragraph().render(companyInfos?.name)}
                <br />
                {Title().renderH6("Founder: ")}
                {Paragraph().renderhWithAnchorToWikipedia(companyInfos?.founder)}
                <br />
                {Title().renderH6("Founded: ")}
                {Paragraph().render(companyInfos?.founded)}
                <br />
                {Title().renderH6("CEO: ")}
                {Paragraph().renderhWithAnchorToWikipedia(companyInfos?.ceo)}
            </Col>
            <Col className={renderColClass()}>
                {Title().renderH6("CTO: ")}
                {Paragraph().renderhWithAnchorToWikipedia(companyInfos?.cto)}
                <br />
                {Title().renderH6("COO: ")}
                {Paragraph().renderhWithAnchorToWikipedia(companyInfos?.coo)}
                <br />
                {Title().renderH6("Employees: ")}
                {Paragraph().render(millify(companyInfos?.employees))}
                <br />
                {Title().renderH6("Valuation: ")}
                {Paragraph().render(`US$ ${millify(companyInfos?.valuation)}`)}
            </Col>
        </>
    );
}

const iconColor = () => {
    return 'primary'
}
export default Homepage;
