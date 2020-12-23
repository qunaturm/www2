import React from "react";
import {
  Col,
  Form,
} from "react-bootstrap";

function UserForm() {
  return (
    <Form>
      <Form.Row>
        <Col>
        <Form.Label>Имя</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <Form.Label>Фамилия</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Электронная почта</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Адрес доставки</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Город</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default UserForm;
