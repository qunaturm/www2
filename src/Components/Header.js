import React, { Component } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import logo from "./logo192.png";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import PersonalArea from '../Pages/PersonalArea';
import CreateOrder from '../Components/Order/CreateOrder'
import Order from "./Order/Order";

export function Header() {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              heigh="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            /> Pizza UNN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" />
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
          <Nav.Link href="/personalArea">Personal Area</Nav.Link>
        </Container>
      </Navbar>
      <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ AboutUs } />
            <Route exact path="/personalArea" component={ PersonalArea } />
            <Route exact path="/createOrder/:pizzaId" component={ CreateOrder } />
            <Route exact path="/order/:orderId" component={ Order } />
          </Switch>
      </Router>
    </>
  );
}

export default Header;
