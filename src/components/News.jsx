import React, { useState, useEffect } from 'react'

import { Card, Button, Col, Row } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';

import { useGetSpacexNewsQuery } from '../services/spacexNewsAPI';
import Loader from './Loader';

const { Img, Body, Title, Text } = Card;

const News = ({ simplified }) => {
    const count = simplified ? 12 : 24;
    const { data: spacexNews, isFetching } = useGetSpacexNewsQuery({ newsCategory: 'spacex', count: count });

    if (isFetching) {
        return <Loader />
    }

    const newsArray = spacexNews?.value;

    return (
        <Row className="px-0 mx-0">
            {newsArray.map((news, arrayIndex) => {
                const { name, datePublished } = news;
                const { contentUrl: imageUrl } = news?.image?.thumbnail || {};
                const { contentUrl: providerImageUrl } = news?.provider[0]?.image?.thumbnail || {};
                const { name: providerName } = news?.provider[0];

                return (
                    <Col className="col-12 col-sm-6 col-lg-6 col-xl-4 col-xxl-4">
                        <Card className="mx-0 my-1 px-0 py-0 " key={arrayIndex}>
                            <Body>
                                <Row>
                                    <Col className="col-8 col-sm-8 col-xl-9">
                                        <Text className="lead fs-6" >
                                            {name}
                                        </Text>
                                    </Col>
                                    <Col className="col-4 col-sm-4 col-xl-3">
                                        <Img style={{ maxWidth: '200px', maxHeight: '100px' }} src={imageUrl}></Img>
                                    </Col>
                                </Row>
                                <Row className="pt-3 pb-3">
                                    <Col>
                                        <Avatar sx={{ width: 25, height: 25 }} src={providerImageUrl} />
                                    </Col>
                                    <Col className="text-end">
                                        <Text className="fw-bolder">{providerName}</Text>
                                    </Col>
                                </Row>
                                <Row className="text-start">
                                    <Col>
                                        {moment(datePublished).startOf('ss').fromNow()}
                                    </Col>
                                </Row>
                                <a className="stretched-link"></a>
                            </Body>
                        </Card>
                    </Col>
                )
            }
            )}
        </Row>
    )
}

export default News
