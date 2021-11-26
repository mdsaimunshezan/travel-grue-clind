import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

const MyOrder = () => {
    const [userDetalse,setUserDetalse] = useState([]);

    useEffect(()=>{
        fetch("https://still-brushlands-57197.herokuapp.com/detalse")
        .then(res => res.json())
        .then(data =>{
            setUserDetalse(data)

        })
    },[])

    const deleteUser = (id)=>{
       const sure = window.confirm("are you sure? you delete this");
       if(sure){
        const url = `https://still-brushlands-57197.herokuapp.com/detalse/${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount === 1){
                const filterUser = userDetalse.filter(user => user._id !== id);
                setUserDetalse(filterUser)
                alert("delete successfull");
            }
        })
       }
    }
    return (
        <div>
            <Container>
               
                    {
                        userDetalse.map(show =>{
                            return <Row className="gy-3 d-flex align-items-center" key={show._id}>
                                <Col md={4}>
                                    <img src={show.image} alt="" className="img-fluid mb-4" style={{height:"150px"}}/>
                                
                                </Col>
                                <Col md={3}>
                                    <h2>{show.name}</h2>
                                </Col>
                                <Col md={3}>
                                    <h2>{show.price}</h2>
                                </Col>
                                <Col md={2}>
                                    <Button variant="danger" onClick={()=>deleteUser(show._id)}>DELETE</Button>
                                </Col>
                            </Row>
                        })
                    }
               
            </Container>
        </div>
    )
}

export default MyOrder
