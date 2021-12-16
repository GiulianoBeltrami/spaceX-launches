import React, { useState, useEffect } from 'react'

import { Card, Button, Col, Row } from 'react-bootstrap';

import Avatar from '@mui/material/Avatar';

import { useGetSpacexNewsQuery } from '../services/spacexNewsAPI';
import Loader from './Loader';

const { Img, Body, Title, Text } = Card;

const News = ({ simplified }) => {
    const count = simplified ? 10 : 20;
    const { data: spacexNews, isFetching } = useGetSpacexNewsQuery({ newsCategory: 'spacex', count: count });

    if (isFetching) {
        return <Loader />
    }

    //spacexNewsImages.value[0].thumbnailUrl;
    //news.name

    const newsArray = spacexNews?.value;
    console.log(newsArray);

    return (
        <Row>
            {newsArray.map((news, arrayIndex) => {
                const { name, description, datePublished } = news;
                const { contentUrl: imageUrl } = news?.image?.thumbnail || {};
                const { contentUrl: providerImageUrl } = news?.provider[0]?.image?.thumbnail || {};
                const { name: providerName } = news?.provider[0];
                
                {/* col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3*/ }
                return (
                    <Col className="col-12 col-sm-6 col-xl-4">
                        <Card className="mx-1 my-1 px-0 py-0 ">
                            <Body>
                                <Row>
                                    <Col className="col-7 col-sm-7 col-xl-9">
                                        <Text className="lead" >
                                            {name}
                                        </Text>
                                    </Col>
                                    <Col className="col-5 col-sm-5 col-xl-3">
                                        <Avatar sx={{ width: 120, height: 120 }} src={imageUrl} variant="rounded"></Avatar>
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
                                        HORARIO
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

// {newsArray.map((news, arrayIndex) => {

//     const { name, description, datePublished } = news;
//     const { contentUrl: imageUrl } = news?.image?.thumbnail || {};
//     const { contentUrl: providerImageUrl } = news?.provider[0]?.image?.thumbnail || {};
//     const { name: providerName } = news?.provider[0];
//     {/* col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3*/ }
//     return (
//         <Card className="mx-1 my-1 px-0 py-0 d-inline-block" style={{ width: '30rem' }} key={arrayIndex}>
//             <Body>
//                 <Row>
//                     <Col className="col-8">
//                         <Text className="lead fs-5 text-start">
//                             {name}
//                         </Text>
//                     </Col>
//                     <Col className="col-4">
//                         <Avatar sx={{ width: 120, height: 120 }} src={imageUrl} variant="rounded"></Avatar>
//                     </Col>
//                 </Row>
//                 <Row className="pt-3 pb-3">
//                     <Col className="col-3">
//                         <Avatar sx={{ width: 25, height: 25 }} src={providerImageUrl} />
//                     </Col>
//                     <Col className="col-9 text-end">
//                         <Text>{providerName}</Text>
//                     </Col>
//                 </Row>
//                 <Row className="text-start">
//                     <Col>
//                         HORARIO
//                     </Col>
//                 </Row>
//                 <a className="stretched-link"></a>
//             </Body>
//         </Card>
// )
// })}