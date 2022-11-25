import { Row,Col,Container } from 'react-bootstrap';
import '../css/Triptypes.css';
import intracity from '../images/intracity.jpg';
import rental from '../images/rental.jpg';
import outstation from '../images/outstation.jpg';
function Triptypes()
{
    return (<>
    <Container >
        <div className='triptype-zone'>
            <h2>Trip Types</h2>
        </div>
        <Row >
            <Col  md={4}>
                <img alt="..." src={intracity} width="100"/>
                <h5>Intra City</h5>
                <p className='triptype-p'>RIDO provides you with a comfortable
                   intra-city rides through sedans, mini and
                   micro vehicles starting from Rs. 10/_ per km.
                   You can also schedule your booking during
                  rush days/festival days without any
                    additional charges. Make your payments
                  cashless through RidoPay or UPI,
                  while booking with mobile APP.</p>
            </Col>
            
            <Col md={4}>
                
            <img alt="..." src={outstation} width="100"/>
                <h5>Outstation</h5>
                <p className='triptype-p'>RIDO operates 3 seaters, 4 seater,
7seater & 14 seater vehicles for your
economical and luxurious outstation rides
with your family, friends and relatives. Red
Taxi Provides a wide range of cab models &
sizes to choose as per your convenient.</p>
            </Col>
            
            <Col md={4}>
                
            <img alt="..." src={rental} width="100"/>
                <h5>Rental</h5>
                <p className='triptype-p'>RIDO convenience you
hourly basis so that you are
about the number of stops a
you can hire from one hour 
per your convenient.
</p>
            </Col>
        </Row>

    </Container>
          </>);
}
export default Triptypes;