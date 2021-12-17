import React from 'react';

import { Spinner, Row, Col } from 'react-bootstrap';

const Loader = () => {
    return (
        <Row style={{height:'100vh'}}>
            <Col  className="text-center align-self-center">
                <Spinner className="text-primary" animation="border" role="status" style={{width: '3rem', height: '3rem'}}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Col>
        </Row>
    )
}

export default Loader
