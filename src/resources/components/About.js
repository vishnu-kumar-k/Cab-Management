import { Container, Row,Col } from 'react-bootstrap';
import '../css/About.css';
import abt from '../images/aboutus.jpg'; 
import abt1 from '../images/aboutus1.jpg';
import Header from './Header';
import Footer from './Footer';
function About()
{
    return (<>
   
    <Container>
        <Row>
            <Col>
            <h2 className='txtHead'>About Us</h2><br></br>
            </Col>
        </Row>
        <Row>
            <Col md={3} sm={3}></Col>
            <Col md={6} sm={6}>
            <img src={abt} className="imgsz" alt="..."></img>
            </Col>
            <Col md={3} sm={3}></Col>
        </Row>
        <Row>
            <Container>
                {/* <h3>Rido</h3><br></br> */}
                <br></br>
                <p id="abt">RIDO offers customers the comfortable and easiest option for travelling by a road.Our website saves customers time by searching taxis at very short notice of time period by fetching the best results from the vendors to book an outstation taxi.Our company providing safe and enjoyable service in fare and lowest pricewhich should be reasonable to our customers. This website is very simple to access for everyone, it is really very comfortable and catchy.</p>
                <br></br>
            </Container>
        </Row>
        <Row>
            <Col md={1}></Col>
            <Col md={4}>
               <h3>QUICK DELIVARY OF CAR</h3>
               <p id="abt1">This means that we are providing to our customers very quick and fastest pick and drop facility from their pickup point. Like everyone wants to save their precious time when they travelled from one place to another. Our aim to keeping passenger comfort as top most priority.</p>
            </Col>
            <Col md={1}></Col>
            <Col md = {4}>
                <h3>QUALITY SERVICES</h3><br></br>
                <p id="abt1">RIDO offers highly effective and quality services to our customers. Like good quality running cab with highly trustworthy, honest drivers. We do care for customer satisfaction. We provide 24x7 customer care support to our customers from the beginning to the end of their journey.</p>
                <br></br>
            </Col>
            <Col md={1}></Col>
        </Row>
        <Row>
            <Col md = {3}></Col>
            <Col md = {6}>
                <h3>ALL INDIA PERMIT YOUR TRIPS</h3>
                <p id="abt1">We want to mentioned that your trip by using our online cab booking services yields permit in all over INDIA.This feature will make all of our customers road trip comfortable and joyful. </p>
            </Col>
            <Col md={3}></Col>
        </Row>
    </Container>
   
    </>);
}
export default About;