import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const NavBar = () => {

  const {logOutUser} = useContext(AuthContext)

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  return (
      
      <Navbar expand="lg" variant="light" bg="light" fixed="top" >

       {
       getToken() ? 

        <>
      <Container>
          <Navbar.Brand href="/">FOODIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto container-fluid">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/recipes">Recipes</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
              <NavbarCollapse className="right-aligned">
              <Nav.Item className="ml-auto">
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOutUser}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              </Nav.Item>
              </NavbarCollapse>
            </Nav>
          </Navbar.Collapse>
          </Container>

          </>
            :
            <>
          <Container>
          <Navbar.Brand href="/">FOODIE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto container-fluid">
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          </Container>
          </>

        }

          </Navbar>
    


    );
}
  


export default NavBar




// <nav>
// <Link to='/'>Home</Link>

//  {
//    getToken() ? 

//     <>
//   <Link to='/profile'>Profile</Link>
//    <Link to='/posts'>Posts</Link>
//   <button onClick={logOutUser}>Logout</button>

//    </>
//    :
//   <>

//   <Link to='/signup'>Signup</Link>
//  <Link to='/login'>Login</Link>
//    </>
//  }
//   </nav>
