import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} onClick={()=> navigate(DEVICE_ROUTE+"/"+device.id)}>
            <Card style={{width:150,cursor:"pointer"}} border='light' className='mt-3 text-center'>
                <Image 
                width={150}
                height={150}
                src={device.img}
                />
                <div className="text-black-50 me-1 d-flex justify-content-center align-items-center">
                    <div className="">sumsung...</div>
                </div>
                <div className='text-center mt-1'>{device.name}</div>

            </Card>
        </Col>
    );
};

export default DeviceItem;