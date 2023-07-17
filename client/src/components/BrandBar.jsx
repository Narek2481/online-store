import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row className='d-flex'>
            {device.brands.map(brand => {
                return (
                    <Card
                        key={brand.id}
                        style={{ width: '8rem', cursor: "pointer" }}
                        className='p-3 text-center'
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    >
                        {brand.name}
                    </Card>
                )
            })}
        </Row>
    );
});

export default BrandBar;