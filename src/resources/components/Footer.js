import '../css/Footer.css';
import { Row,Col,Container } from 'react-bootstrap';
import logofoot from '../images/newlogo2.png';
import { SocialIcon } from 'react-social-icons';
import {useNavigate} from 'react-router-dom';
function Footer()
{
    
    const navigate = useNavigate();
    return(<>
    <Container className='footer-top'>
        <span className='footer-top-item'><img src={logofoot} alt="..."/></span>
    </Container>
    <Container fluid className='footer-main'>
        <Row className='foot-row'>
            <Col sm={3} xs={6}><ul type="none" className='foot-li'>
                <li onClick={()=>{navigate('/about')}}>About Rido</li>
                <li onClick={()=>{navigate('/')}}>Home</li>
                <li onClick={()=>{navigate('/support')}}>Contact Us</li>
                <li>Offers</li>
                <li  onClick={()=>{navigate('/support')}}>Support</li>
                <li>Careers</li>
                <li>Blog</li>
                </ul></Col>
            <Col sm={3} xs={6}>
                <ul type="none" className='foot-li'>
                    <li>Info</li>
                    <li>Fares</li>
                    <li>Business Partner</li>
                    <li onClick={()=>{navigate('/becomemember')}}>Become a Driver</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    {/* &#38; */}
                </ul>
            </Col>
            <Col sm={6}>
            <ul type="none" className='foot-li'>
                <li>Availability</li>
                <li>We are in</li>
                <br></br>
                <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="facebook" style={{marginRight:"20px"}}/>
                
                <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="instagram" style={{marginRight:"20px"}}/>
                <SocialIcon url="https://jaketrent.com" bgColor="#4267B2" fgColor="#FEFEFE" network="twitter" style={{marginRight:"20px"}}/>
                </ul>
                </Col>
        </Row>
    </Container>
    <Container fluid className='footer-end'>
        <p className='footer-end-txt'>© 2022 Team Alpha. All rights reserved.</p>
    </Container>
    </>);
}
export default Footer;