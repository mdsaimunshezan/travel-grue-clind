import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../images/brugkalifa.jpg"
import img2 from "../../images/coratea.jpg"
import img3 from "../../images/france.jpg"
import img4 from "../../images/greece.jpg"
import img5 from "../../images/thiland.jpg"
import img6 from "../../images/usa.jpg"
import "./Footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h3>Conteck Us</h3>
                        <h6 className="footer__text">+017989898</h6>
                        <h6 className="footer__text">hello@jaunt.com</h6>
                        <h6 className="footer__text">Mon-Fri: 8 AM – 7 PM</h6>
                        
                    </Col>
                    <Col md={4}>
                        <h3>Latest News</h3>
                        <h6 className="footer__text">Surrounded by the peaceful waters of Lake Victoria.</h6>
                        <small>October 05, 2021</small>
                        <h6 className="footer__text">Morning came very early today. The alarm went off at 4 am</h6>
                        <small>October 05, 2021</small>
                        
                    </Col>
                   
                    <Col md={4}>
                    <h3>Instagram Post</h3>
                    <Row>
                        <Col md={4}>
                        <img src={img1} alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4}>
                        <img src={img2} alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4}>
                        <img src={img3} alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4}>
                        <img src={img4} alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4}>
                        <img src={img5} alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4}>
                        <img src={img6} alt="" className="img-fluid"/>
                        </Col>
                    </Row>
                        
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
