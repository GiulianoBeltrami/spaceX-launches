import React, { useState, useEffect } from 'react'

import { Card, Button, Col, CardGroup } from 'react-bootstrap';

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
        <>
            {newsArray.map((news, arrayIndex) => {
                const {name, description,datePublished } = news;
                const {contentUrl:imageUrl} = news.image.thumbnail;

                return (
                    <Card className="mx-1 my-1 py-2" style={{ width: '15rem' }} key={arrayIndex}>
                        <Body>
                            <Title>Card Title</Title>
                            <Img className="img-thumbnail" variant="top" src={imageUrl} />
                            <Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Body>
                    </Card>
                )
            })}
        </>
    )
}

export default News

