import axios from 'axios'
import { Navbar, Nav } from 'react-bootstrap';
const NavbarComponent = () => {
  if (localStorage.getItem("authToken") === null) {
    return (
        <Navbar collapseOnSelect expand="lg" className="d-flex justify-content-around">
          <div>
            <Navbar.Brand href="/">App Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          </div>
        
          <div>
            <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav  className="ms-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
            </Navbar.Collapse> 
          </div>
        </Navbar>
    )
  }
  else {
    return (
      <Navbar collapseOnSelect expand="lg" className="d-flex justify-content-around">
        <div>
          <Navbar.Brand href="/">App Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        </div>
      
        <div>
          <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav  className="ms-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/certificates">Certificates</Nav.Link>
          <Nav.Link href="/logout" onClick={logout} >Logout</Nav.Link>
          </Nav>
          </Navbar.Collapse> 
        </div>
      </Navbar>
  )
    }
  }
 
export default NavbarComponent;

//log out 
const authAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
   Authorization:`Bearer ${localStorage.getItem('authToken')}`
  }
 })

async function logout(e) {
  e.preventDefault()
 await authAxios.post(`${process.env.REACT_APP_API_URL}/logout`).then(() => {
 
    localStorage.removeItem("authToken");
  }).catch(error => {
    console.log("ERROR:: ",error.response.data);       
});
window.location.replace("http://localhost:3000/");
}
