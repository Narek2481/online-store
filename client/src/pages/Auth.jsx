import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)

            } else {
                data = await registration(email, password)

            }
            user.setUser(data);
            user.setAuth(true);
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
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
                        <Button
                            className='col-3'
                            variant='outline-success'
                            onClick={click}
                        >Submit</Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
}
);

export default Auth;