import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column" >
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter email'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter password'
                    />
                    <Row className='d-flex justify-content-between align-items-center mt-3 pl-3 pe-3'>
                        {isLogin ?
                            <div className='col-9'>
                                You want to
                                <Link
                                    className="text-primary ms-1"
                                    style={{ textDecoration: "none" }}
                                    to={REGISTRATION_ROUTE}
                                >
                                    register
                                </Link>
                            </div>
                            :
                            <div className='col-9'>
                                Have an account
                                <Link
                                    className="text-primary ms-1"
                                    style={{ textDecoration: "none" }}
                                    to={LOGIN_ROUTE}
                                >
                                    Login
                                </Link>
                            </div>
                        }
                        <Button className='col-3' variant='outline-success'>Submit</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;