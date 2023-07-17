import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const DevicePage = () => {
    const device = { id: 1, name: "12 pro max ", price: 250000, img: "http://www.w3.org/2000/svg" };
    const description = [
        { id: 1, title: "RAM", description: "5GB" },
        { id: 2, title: "Camera", description: "12 mp" },
        { id: 3, title: "Procesor", description: "Pentyum 3" },
        { id: 4, title: "Number of nuclei", description: "4" },
        { id: 5, title: "Battery", description: "4000" },
    ]
    return (
        <Container >
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
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
                {
                    description.map(info =>{
                        return ( 
                            <Row key={info.id}>
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