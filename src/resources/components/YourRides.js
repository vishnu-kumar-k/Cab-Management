import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { db } from "../../fire";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Frame from "./Frame";
function noda() {
  return <p>Please Login</p>;
}
export const YourRides = (props) => {
  const [info, setInfo] = useState([]);
  const [flag, setFlag] = useState(1);
  // Start the fetch operation as soon as
  // the page loads

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    // doc(props.user.uid).collection(props.user.email).
    setFlag(0);
    db.collection("users")
      .doc(props.user.uid)
      .collection(props.user.email)
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          console.log("value" + data.name);
          setInfo((arr) => [...arr, data]);
        });
      });
  };
  return (
    <>
      <main>
        <Container>
          {props.user && flag ? Fetchdata() : props.user ? () => {} : noda()}
          {info.map((data) => (
            <Frame
              name={data.name}
              time={data.pickuptime}
              date={data.pickupdate}
              pickuploc={data.pickuploc}
              status={data.status}
              triptype={data.triptype}
            />
          ))}
        </Container>
      </main>
    </>
  );
};
