import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Pizza from "../Pizza/Pizza";

function AddtionalsAndSostav({
  availableAdditions,
  additions,
  setSelectedAdditions,
}) {
  const [additionals, setAdditions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/additionals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((result) => setAdditions(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <Container>
      <Row>
        {additionals.map(function (additionals) {
          return (
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={additionals.name}
              />
            </Form>
          );
        })}
      </Row>
    </Container>
  );
}
/*<Container>
      <Row>
        {additionals.map(function (additionals) {
          return (
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={additionals.name}
              />
            </Form>
          );
        })}
      </Row>
    </Container>*/

export default AddtionalsAndSostav;
