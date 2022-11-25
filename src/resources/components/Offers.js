import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../css/Offers.css";
import offers from "../images/offers.webp";
function Offers() {
  return (
    <>
      <Container>
        <div className="offer-zone">
          <h2>Offers For You...</h2>
        </div>
        <Row className="offer-cards">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={offers} />
              <Card.Body>
                <Card.Title>For 1 day full trip.</Card.Title>
                <Card.Text>
                  Make a trip for full day in the lowest price ever.
                </Card.Text>
                <Card.Text>Drop Rs.1599/- only</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card classname="offer-cards">
              <Card.Img variant="top" src={offers} />
              <Card.Body>
                <Card.Title>Book tourist package </Card.Title>
                <Card.Text>To visit all places in the cities.</Card.Text>
                <Card.Text>Drop Rs.2099/- only</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card classname="offer-cards">
              <Card.Img variant="top" src={offers} />
              <Card.Body>
                <Card.Title>city to nearby city</Card.Title>
                <Card.Text>
                  Make a trip from Coimbatore to Erode or from Erode to
                  Coimbatore at an affordable rate.
                </Card.Text>
                <Card.Text>Drop Rs.1599/- only</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Offers;
