import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { BsClock, BsCalendarDate, BsFillPersonFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import "../css/Frame.css";
function Frame(props) {
  return (
    <>
      <Card>
        <div className="cards">
          <Card.Body>
            <Row>
              <Col md={2} xs={12}>
                <Card.Title>
                  <l>
                    <BsFillPersonFill />
                  </l>
                  {"  "}
                  {"  "}
                  {props.name}
                </Card.Title>
              </Col>
              <Col md={8} xs={12}>
                <Card.Text>
                  <Row>
                    <Col xs={4}>
                      <l>
                        <BsClock />
                      </l>
                      {"  "}
                      {"  "}
                      {props.time}
                    </Col>
                    <Col xs={4}>
                      <l>
                        <BsCalendarDate />
                      </l>
                      {"  "} {"  "}
                      {props.date}
                    </Col>
                    <Col xs={4}>
                      <l>
                        <GrLocation />
                      </l>
                      {"  "}
                      {"  "}
                      {props.pickuploc}
                    </Col>
                  </Row>
                </Card.Text>
              </Col>
              <Col md={2} xs={12}>
                <Button variant="primary">{props.status}</Button>
              </Col>
            </Row>
          </Card.Body>
        </div>
      </Card>
      <br />
    </>
  );
}

export default Frame;
