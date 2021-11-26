
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router'

const ShowDetalse = () => {
    const [detalse, setDetalse] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://still-brushlands-57197.herokuapp.com/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetalse(data)
            })
    }, [])

    const addDetalse = (id)=>{
     const name = detalse.name;
     const image = detalse.image;
     const price = detalse.price;
     const manageUser = {
         name:name,
         image:image,
         price:price


     }
     const url = "https://still-brushlands-57197.herokuapp.com/detalse";
     fetch(url,{
         method:"POST",
         headers:{
             "content-type":"application/json"
         },
         body:JSON.stringify(manageUser)
     })
     .then(res => res.json())
     .then(data =>{
         if(data.insertedId){
             alert("item add successfully")
         }
     })
    
    }

    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <img src={detalse.image} alt="" className="img-fluid" />
                            </Col>
                            <Col md={6}>
                                <div className="d-flex justify-content-between">
                                    <Card.Title className="text-secondary" style={{fontSize:"40px"}}>{detalse.name}</Card.Title>
                                    <Card.Title className="text-secondary" style={{fontSize:"30px"}}>{detalse.price}$</Card.Title>
                                </div>
                                <Card.Text>{detalse.dec}</Card.Text>
                                <Button variant="dark" className="px-5 py-2" onClick={()=>addDetalse(detalse._id)}>Bay Now</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default ShowDetalse
