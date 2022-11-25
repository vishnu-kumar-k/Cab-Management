import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import ca from "../images/vcar.gif";
function Community() {
  return (
    <div className="second">
      <Container>
        <br />
        <h1>Join with our Community</h1>
        <Row>
          <Col md={6}>
            <marquee direction="right">
              <img
                className="img-fluid"
                src={ca}
                alt="image"
                width="100%"
              ></img>
            </marquee>
          </Col>
          <Col md={5}>
            <p>
              Join our Community and work together and reach customers fast and
              qucikly.
            </p>
            <button className="btn btn-primary btn-lg " z>
              Join
            </button>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
export default Community;
