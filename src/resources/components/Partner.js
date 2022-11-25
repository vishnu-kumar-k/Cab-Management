import React from "react";
import { Container } from "react-bootstrap";
import partner from "../images/Partner.png";
import "../css/Partner.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { db } from "../../fire";

import { useState } from "react";

const Partner = () => {


    const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [mobile, setMobile] = useState("");

const [count, setCount] = useState("");


const [zone, setZone] = useState("Erode");


const handleSubmit = (e) => {
  
    e.preventDefault();
    
    db.collection('application')
      .add({
        name: name,
        email: email,
        mobile: mobile,
        count:count,
        zone:zone,

      })
      .then(() => {
        alert("Applied Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
    setEmail("");
    setMobile("");
    setName("");
    setCount("");
    setZone("");
  };
  return (

    
    <div>
      <Container>
        <div className="part">
          <img src={partner} width="50%" alt="..."></img>
        </div>
        <br />
        <div className="main">
          <h1>Join Us</h1>
          <p>
            Being a part of our esteemed concern, we expect our business
            partners to follow the standards of the company in order to satisfy
            our customers. We expect you to give a professional driving
            experience also by maintaining your cabs in excellent condition. It
            is mandatory to follow the rules and regulations of the concern in
            terms of customer hospitality, behaviour, dressing and grooming
            culture as per standards.
          </p>
          <br />
          <form className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
            <Row>
              <Col xs={4} sm={4} md={2}>
                <Form.Label>Name</Form.Label>
                <br />
                <br />
                <Form.Label>Email</Form.Label>
                <br />
                <br />
                <Form.Label>Phone Number</Form.Label>
                <br />
                <br />
                <Form.Label>City</Form.Label>
                <br />
                <br />
                <Form.Label>No of Cabs</Form.Label>
              </Col>

              <Col xs={8} sm={8} md={8}>
                <Form.Control
                  type="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Form.Control>
                <br />
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></Form.Control>
                <br />
                <Form.Control
                  type="number"
                  placeholder="Your Mobile Number"
                  required
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                ></Form.Control>
                <br />
                <Form.Select required  defaultValue={zone}
                  onChange={(e) => {
                    setZone(e.target.value);
                  }}>
                  <option value="Erode" selected>
                    Erode
                  </option>
                  <option value="Chennai">Chennai</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Tirupur">Tirupur</option>
                  <option value="Madurai">Madurai</option>
                </Form.Select>
                <br />
                <Form.Control
                  type="number"
                  placeholder="Number of cabs"
                  required
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                ></Form.Control>
                <br />{" "}
                <div className="center">
                  <Button variant="outline-info" type="submit" size="lg">
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Partner;