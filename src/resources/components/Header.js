import '../css/header.css';
import logo from '../images/newlogo5.png';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar,Container } from 'react-bootstrap';

import {useNavigate} from 'react-router-dom';
function Header(props)
{
      const navigate = useNavigate();
   return(
      <>
      {
            console.log(props.user.uid)
      }
      <Navbar className="color-nav" collapseOnSelect fixed="top" expand='md'>
            <Container>
                  <Navbar.Brand>
                              <div className="logo-wrapper">
                              < img src={logo} alt="logo"/>
                              </div>
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                  <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                              <Nav.Link className='nav-link' to='/' onClick={()=>{navigate('/')}}>Home</Nav.Link>

                              {/* <NavDropdown  title="Services"  id="navbarScrollingDropdown">
                                    <NavDropdown.Item className='nav-drop-down'>Booking</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-drop-down' >Hire Drivers</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-drop-down'>Road Side Assistance</NavDropdown.Item>
                              </NavDropdown> */}
                              {  props.user?(   <Nav.Link className='nav-link' to='/bookings' onClick={()=>{navigate('/bookings')}}>Booking</Nav.Link>
                           ):( <Nav.Link className='nav-link' to='/login' onClick={()=>{navigate('/login')}}>Booking</Nav.Link>
                           )
                              
                        } 
                            { props.user?(   <Nav.Link className='nav-link' to='/yourrides' onClick={()=>{navigate('/yourrides')}}>Your Rides</Nav.Link>
                           ):( <Nav.Link className='nav-link' to='/login' onClick={()=>{navigate('/login')}}>Your rides</Nav.Link>
                           ) 
                        }  
                              <Nav.Link className='nav-link' to='/about' onClick={()=>{navigate('/about')}} >About us</Nav.Link>
                              <Nav.Link className='nav-link' to="/support" onClick={()=>{navigate('/support')}}>Support</Nav.Link>
                              { props.user?(<Nav.Link className='nav-linkop' onClick={props.handleLogout}>Log Out</Nav.Link>):(<Nav.Link className='nav-linkop' onClick={()=>{navigate('/login')}} >Log In</Nav.Link>)
                              
                                 }                              
                        </Nav>
                  </Navbar.Collapse>
            </Container>
      </Navbar>
    
</>
    );
}
export default Header;