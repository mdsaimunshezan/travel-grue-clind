import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imag from "../../images/about.jpg"
import "./About.css"

const About = () => {
    return (
        <div className="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className="about__title">About Us</h1>
                        <p className="about__text">
                            Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars.
           </p>
                        <p className="about__text">
                            Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes
           </p>
                        <div className="about__list">
                            <Row>
                                <Col md={6}>
                                    <h6 className="about__item">Safety Travel System</h6>
                                    <h6 className="about__item">Expert Trip Planning</h6>
                                    <h6 className="about__item">Right Solution & Guide</h6>
                                </Col>
                                <Col md={6}>
                                    <h6 className="about__item">Budget-Friendly Tour</h6>
                                    <h6 className="about__item">Fast Communication</h6>
                                    <h6 className="about__item">
                                        24/7 Customer Support</h6>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={imag} alt="" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
