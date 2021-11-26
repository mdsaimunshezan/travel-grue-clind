import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaClipboardList, FaChild,FaCcAmazonPay} from "react-icons/fa";
import "./Fetures.css"

const Fetures = () => {
    return (
        <div className="features">
            <Container>
                <h1 className="features__title">Top Features</h1>
                <p className="features__text">
                    Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
            </p>
                <Row>
                    <Col md={4}>

                        <div className="features__card">
                            <div className="features__icon">
                                <FaClipboardList />
                            </div>

                            <h1 className="features__card-title">Reservation</h1>
                            <p className="features__text">
                                As compared with earlier times where a reservation personnel has to update its inventory every time.
                        </p>
                            <button className="features__btn">Read More</button>
                        </div>
                    </Col>

                    <Col md={4}>

                        <div className="features__card">
                            <div className="features__icon">
                                <FaChild />
                            </div>

                            <h1 className="features__card-title">Tour Pack</h1>
                            <p className="features__text">
                            You can dream, create, design, and build the most wonder ful place in the world. But it requires people.
</p>
                            <button className="features__btn">Read More</button>
                        </div>
                    </Col>

                    <Col md={4}>

                        <div className="features__card">
                            <div className="features__icon">
                                <FaCcAmazonPay />
                            </div>

                            <h1 className="features__card-title">Payment</h1>
                            <p className="features__text">
                            As compared with earlier times where a reservation personnel has to update its inventory every time.
</p>
                            <button className="features__btn">Read More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Fetures
