import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneDevice(id)
            .then(data => setDevice(data))
    }, [])
    return (
        <Container >
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL+device.img} />
                </Col>
                <Col md={4}>
                    <h2>{device.name}</h2>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: "5px solid lightgrey" }}
                    >
                        <h3>from: {device.price}.</h3>
                        <Button variant='outline-dark'>Add to Basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Specifications</h1>
                {
                    device.info.map((info, index) => {
                        return (
                            <Row
                                key={info.id}
                                style={{ background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10 }}>
                                {info.title}: {info.description}
                            </Row>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default DevicePage;