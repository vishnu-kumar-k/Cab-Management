import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import React from 'react';
import bus from '../images/cardriver.jpg';
import lorry from '../images/truck.png';
function Services()
{
   return(<div className='ride'>
   <br /><br />
   <Container>
     
     <h1>Our Driver Services</h1>
       <Row>
         <Col md={6}>
           <img className="img-fluid" src={bus} width="100%"></img>
       </Col>
       
       <Col md={6}>
         <h2>Car drivers</h2>
         <p>The most affordable services of driver are available at your beck and call with complete transparency in pricing and prompt delivery of service.
           If you need driver for Chauffeur, city driving, office drops and pick-up for regular service, outstation trips, driver service at night to pick up clients from a late night party or
           late evening and drop them at their home safely. The driver service can also be availed for valet parking in commercial So next time a driver is required without hesitation you just make the booking and avail trained services of driver at your place.
           </p>
         </Col>
     </Row>
     <br />
     <br />
     <Row>
       <Col md={6}><h2>Heavy Vehicle drivers</h2>
       <p>Here We Provied all Heavy vehicle drivers with all safely</p>
       </Col>
       
       <Col md={6}>
         <img className="img-fluid" src={lorry} width="100%" alt=""></img>
</Col>
     </Row>
       <br />
   </Container></div>);
}
export default Services;