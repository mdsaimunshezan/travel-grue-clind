import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    const { user,signOutUser } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link to="/home" activeStyle={{color:"orangered",fontWeight:"bold"}} as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/myorder" activeStyle={{color:"orangered",fontWeight:"bold"}} as={NavLink}>My Order</Nav.Link>
                            <Nav.Link to="/manageorder" activeStyle={{color:"orangered",fontWeight:"bold"}} as={NavLink}>Manage Order</Nav.Link>
                            <Nav.Link to="/addservis" activeStyle={{color:"orangered",fontWeight:"bold"}} as={NavLink}>Add Servies</Nav.Link>
                            {
                                user.email ? <Nav.Link to="/login" activeStyle={{color:"orangered",fontWeight:"bold"}} as={NavLink} onClick={signOutUser}>{user.displayName} logOUt </Nav.Link> :
                                <Nav.Link to="/login" activeStyle={{color:"orangered",fontWeight:"bold"}} as={NavLink}>LogIn</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
