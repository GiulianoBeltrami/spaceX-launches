import React from 'react'

import { Card, Button, Col, CardGroup } from 'react-bootstrap';

import { useGetSpacexNewsQuery } from '../services/spacexNewsAPI'
import Loader from './Loader';

const { Img, Body, Title, Text } = Card;

const News = ({ simplified }) => {
    const count = simplified ? 6 : 12;
    const { data: spacexNews, isFetching } = useGetSpacexNewsQuery({ newsCategory: 'spacex', count: count });

    if (isFetching) {
        return <Loader />
    }

    const newsArray = spacexNews?.value;

    console.log(newsArray)

    return (
        <>
            {newsArray.map((news, arrayIndex) => (
                    <Card className="mx-1 my-1 py-2" style={{ width: '15rem' }}>
                        <Img className="img-thumbnail" variant="top" src='https://i0.wp.com/australiannewsreview.com/wp-content/uploads/2021/12/Freedomroo-Former-Interns-Say-SpaceX-Ignored-Sexual-Harassment.jpg?fit=1024%2C536&ssl=1' />
                        <Body>
                            <Title>Card Title</Title>
                            <Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Body>
                    </Card>
            ))}
        </>
    )
}

export default News

