
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Serves = () => {
    const [servis, setServis] = useState([]);

    useEffect(() => {
        fetch("https://still-brushlands-57197.herokuapp.com/user")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServis(data)
            })
    }, [])
    return (
        <div style={{ marginTop: "100px" }}>
            <Container>
                <h1 style={{ fontSize: "50px", borderBottom: "2px solid red", display: "inline-block", marginBottom: "40px" }}>Our Servis</h1>
                <Row className="gy-5">
                    {
                        servis.map(item => {
                            return <Col md={4} key={item._id}>
                                <Card>
                                    <img src={item.image} alt="" className="img-fluid" />
                                    <Card.Body className="d-flex justify-content-between text-secondary">
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Title>{item.price}$</Card.Title>

                                    </Card.Body>
                                    <Link to={`/detalse/${item._id}`}>
                                        <Button variant="dark" className="w-100">Bay Now</Button>
                                    </Link>

                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Serves
