import support from "../images/support.jpg";
import { Container } from "react-bootstrap";
import "../css/Support.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { db } from "../../fire";
import { useState } from "react";
function Support() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Thanks for your valuable comment");
      })
      .catch((error) => {
        alert(error.message);
      });
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <>
      <main>
        <Container>
          <div className="supp">
            <img src={support} width="50%" alt="..."></img>
          </div>
          <br />
          <br /> <h2>Support</h2>
          <br />
          <form
            className="mb-3"
            controlId="formBasicEmail"
            onSubmit={handleSubmit}
          >
            <Row>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></Form.Control>
                <br />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Form.Control>
                <br />
              </Col>
            </Row>
            <Form.Select>
              <option value="1">Complients</option>
              <option value="2">Feedback</option>
              <option value="3" selected>
                Suggestions
              </option>
              <option value="4">Enquiry</option>
              <option value="5">others</option>
            </Form.Select>
            <br />
            <Form.Control
              as="textarea"
              placeholder="Your Message"
              rows={3}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></Form.Control>
            <br />
            <div className="center">
              <Button variant="secondary" type="submit" size="lg">
                Submit
              </Button>
            </div>
          </form>
        </Container>
      </main>
    </>
  );
}
export default Support;
